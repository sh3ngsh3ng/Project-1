// setting up foursquare API
const fourSq_API_BASE_URL = "https://api.foursquare.com/v2/"

// user's food search
let searchBtn = document.querySelector("#search-food-btn")
searchBtn.addEventListener('click', async function () {
    foodSearchLayer.clearLayers()
    let userInput = document.querySelector("#search-food-input").value
    let lat = currentCoords[0]
    let lng = currentCoords[1]
    let eachVenue = await (searchFood(lat, lng, userInput))

    // add markers based on food search results
    for (let i of eachVenue) {
        let venueName = i.name
        let venueLat = i.location.lat
        let venueLng = i.location.lng
        let marker = L.marker([venueLat, venueLng])
        marker.bindPopup(`${venueName}`)
        marker.addTo(foodSearchLayer)
    }
})


// search food function (returns venues)
async function searchFood(lat, lng, query) {
    let ll = lat + "," + lng
    let response = await axios.get(fourSq_API_BASE_URL + "venues/search", {
        params: {
            'll': ll,
            'client_id': 'NUBBEVNCBV5IKER4ZEHEEH3XLVNCK3JTYSOBEPUTQOLAYCEZ',
            'client_secret': 'HTWZDJEZBZYK2CE1BBTFPGU3JWSIBJNNTDEPNDADXAS4ROKL',
            'v': '20210912',
            'query': query
        }
    })
    return response.data.response.venues
}