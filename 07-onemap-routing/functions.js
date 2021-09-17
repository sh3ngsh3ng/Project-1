// setting up foursquare API
const fourSq_API_BASE_URL = "https://api.foursquare.com/v2/"

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
