let currentCoords = 0

// start button transition to map
document.querySelector("#start-btn").addEventListener('click', function() {
    document.querySelector("#start-page").classList.add("page-left")
    document.querySelector("#start-page").classList.remove("show")
    document.querySelector("#map-page").classList.add("show")
    document.querySelector("#map-page").classList.remove("page-right")
    document.querySelector("#nav-bar").classList.add("nav-up")

    document.querySelector("#panel-1").classList.add("panel-down")
    flyToCurrentLocation()
})

// fly to current location event
document.querySelector("#location-btn").addEventListener("click", function() {
    currentLocationLayer.clearLayers()
    foodSearchLayer.clearLayers()
    routingLayer.clearLayers()
    flyToCurrentLocation()
})


// category object for holding the api section value
let categoryObj = {
    'food': '4d4b7105d754a06374d81259',
    'cafe': '4bf58dd8d48988d16d941735',
    'restaurant': '4bf58dd8d48988d1c4941735',
    'bar': '4bf58dd8d48988d116941735',
    'coffeeshop': '4bf58dd8d48988d1e0931735',
    'dessert': '4bf58dd8d48988d1d0941735',
}
let categoryKey = categoryObj.food // default category is food

// dropdown category selection event
document.querySelectorAll(".dropdown-item").forEach(item => {
    item.addEventListener('click', function () {
        foodSearchLayer.clearLayers()
        routingLayer.clearLayers()
        // function to capitalize first word of letter
        function capitalizeFirst(string) {
            return string.charAt(0).toUpperCase() + string.slice(1)
        }

        let ddBtn = document.querySelector("#dropdownMenuButton")
        ddBtn.innerHTML = capitalizeFirst(item.id)
        categoryKey = categoryObj[item.id]
    })
})


// user's food search event
let searchBtn = document.querySelector("#submit-btn")
searchBtn.addEventListener('click', async function () {
    foodSearchLayer.clearLayers()
    let userInput = document.querySelector("#search-food-input").value
    if (userInput) {
        searchResultMarkers()
    } else {
        alert("Please let us know what you want to eat!!")
    }
})


// user's recommend food event
// let recoBtn = document.querySelector("#recommend-btn")
// recoBtn.addEventListener('click', async function() {
//     foodSearchLayer.clearLayers()
//     document.querySelector('#search-food-input').value = ""
//     foodRecoMarkers()
// })


// detect change in radius slider event
document.querySelector("#distance").addEventListener('change', async function() {
    foodSearchLayer.clearLayers()
    let userInput = document.querySelector("#search-food-input").value
    if (userInput) {
        searchResultMarkers()
    } else {
        foodRecoMarkers()
    }
})


map.on('click', function(e){
    currentLocationLayer.clearLayers()
    foodSearchLayer.clearLayers()
    routingLayer.clearLayers()
    let lat = e.latlng.lat
    let lng = e.latlng.lng
    currentCoords = [lat, lng]
    let marker = L.marker(currentCoords).addTo(currentLocationLayer)
    map.flyTo(currentCoords, 16)
})



