// setting up foursquare API
const fourSq_API_BASE_URL = "https://api.foursquare.com/v2/"

// setting up oneMAP API
let oneMap_API_BASE_URL = "https://developers.onemap.sg"

// API: get token from oneMAP
async function getToken() {
    var settings = {
        "url"  : oneMap_API_BASE_URL + "/privateapi/auth/post/getToken", 
        "data" : 
                {
                  "email": "leeweixg2001@yahoo.com", 
                  "password": "Scatyim777"
                }, 
        "async" : "true"
    }

    let response = await $.post(settings)
    return response.access_token
}

// API: search food function (user's input)
async function searchFood(lat, lng, radius, query) {
    let ll = lat + "," + lng
    let response = await axios.get(fourSq_API_BASE_URL + "venues/search", {
        params: {
            'll': ll,
            'client_id': 'NUBBEVNCBV5IKER4ZEHEEH3XLVNCK3JTYSOBEPUTQOLAYCEZ',
            'client_secret': 'HTWZDJEZBZYK2CE1BBTFPGU3JWSIBJNNTDEPNDADXAS4ROKL',
            'v': '20210912',
            'categoryId': '4d4b7105d754a06374d81259',
            'radius': radius,
            'query': query
        }
    })
    return response.data.response.venues // returns array of venues
}


// API: recommend food function (based on radius)
async function recoFood(lat, lng, radius) {
    let ll = lat + "," + lng
    let response = await axios.get(fourSq_API_BASE_URL + "venues/explore", {
        params: {
            'll': ll,
            'client_id': 'NUBBEVNCBV5IKER4ZEHEEH3XLVNCK3JTYSOBEPUTQOLAYCEZ',
            'client_secret': 'HTWZDJEZBZYK2CE1BBTFPGU3JWSIBJNNTDEPNDADXAS4ROKL',
            'v': '20210912',
            'categoryId': '4d4b7105d754a06374d81259',
            'radius': radius
        }
    })
    return response.data.response.groups[0].items // returns array of recommendations
}

// geolocation success function
function success(position) {
    let currentLat = position.coords.latitude
    let currentLng = position.coords.longitude
    currentCoords = [currentLat,currentLng]
  
    let currentLocationMarker = L.marker(currentCoords).addTo(currentLocationLayer)
  
    map.flyTo(currentCoords, 16)
}

// geolocation error function
function error() {
    alert("Please click on the map to start")
    coordsFlag = false // to act as flag
}

// fly to location function
function flyToCurrentLocation() {
    map.flyTo(currentCoords, 16)
}
  

// get radius function (user's input)
function getRadius() {
    let userDistanceInput = parseInt(document.querySelector('#distance').value)
    return userDistanceInput * 50 + 250
}

// plot markers for search results
async function searchResultMarkers() {
    let lat = currentCoords[0]
    let lng = currentCoords[1]
    let radius = getRadius()
    let userInput = document.querySelector("#search-food-input").value
    let eachVenue = await (searchFood(lat, lng, radius, userInput))

    // add markers based on food search results
    for (let i of eachVenue) {
        let venueName = i.name
        let venueLat = i.location.lat
        let venueLng = i.location.lng
        let venueCoords = [venueLat, venueLng]
        let marker = L.marker(venueCoords)
        marker.bindPopup(`
        <div>${venueName}</div> 
        <div>${venueCoords}</div>
        <button onclick="getRouting('${currentCoords}', '${venueCoords}')">Eat Here</button>
        `)
        marker.addTo(foodSearchLayer)
}}

// plot markers for recommendations results
async function foodRecoMarkers() {
    let lat = currentCoords[0]
    let lng = currentCoords[1]
    let radius = getRadius()
    let recommendedFood = await recoFood(lat,lng,radius)
    for (let i = 0; i < recommendedFood.length; i++) {
        let eachVenue = recommendedFood[i].venue
        let venueName = eachVenue.name
        let venueLat = eachVenue.location.labeledLatLngs[0].lat
        let venueLng = eachVenue.location.labeledLatLngs[0].lng
        let venueCoords = [venueLat, venueLng]

        // add markers based on recommendation results
        let marker = L.marker(venueCoords)
        marker.bindPopup(`
        <div>${venueName}</div> 
        <div>${venueCoords}</div>
        <button onclick="getRouting('${currentCoords}', '${venueCoords}')">Eat Here</button>
        `)
        marker.addTo(foodSearchLayer)
    }
}


// function to clean encoded string (removes backslash)
function cleanStr(x) {
    a = x.split('\\')
    b = a.join('\\\\')
    return b
}

// function to plot route (walking) via polyline
// can be split to getRouting and plotRoute?? consider
async function getRouting(startpoint, endpoint) {
    routingLayer.clearLayers()
    let response = await axios.get(oneMap_API_BASE_URL + "/privateapi/routingsvc/route", {
        params: {
            'start': startpoint.toString(),   // start & end coordinates have to be strings
            'end': endpoint.toString(),     
            'routeType': "walk",
            'token': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjc5MzQsInVzZXJfaWQiOjc5MzQsImVtYWlsIjoibGVld2VpeGcyMDAxQHlhaG9vLmNvbSIsImZvcmV2ZXIiOmZhbHNlLCJpc3MiOiJodHRwOlwvXC9vbTIuZGZlLm9uZW1hcC5zZ1wvYXBpXC92MlwvdXNlclwvc2Vzc2lvbiIsImlhdCI6MTYzMTYyMDc3NywiZXhwIjoxNjMyMDUyNzc3LCJuYmYiOjE2MzE2MjA3NzcsImp0aSI6ImU3YTFjMTMzNmJiNDZlYmI3MjYwZDMyNGE5ZTk2ZTBlIn0.BhaTlFrA5vRDhcepdrXTkd9cB9gJpNOzxiDKUYeXWNw",
        }
    })
    let routeGeometry = response.data.route_geometry

    let encodedLine = cleanStr(routeGeometry) // to remove escape sequence
    let arrayLatLngs = L.PolylineUtil.decode(encodedLine) // decode google polyline to get arrays of coordinates
    let polyline = L.polyline(arrayLatLngs, {color:'green'}).addTo(routingLayer)


    // adding popup to polyline
    let timeSec = response.data.route_summary.total_time
    let timeMin = Math.floor(timeSec / 60)
    polyline.bindPopup(`
    <h6>Estimated Time: ${timeMin} minutes</h6>
    `)
} 






