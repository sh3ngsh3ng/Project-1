// default view
window.addEventListener('DOMContentLoaded', function() {
    flyToCurrentLocation()
})

// fly to current location event
document.querySelector("#btn").addEventListener("click", function() {
    currentLocationLayer.clearLayers()
    foodSearchLayer.clearLayers()
    routingLayer.clearLayers()
    flyToCurrentLocation()
})

// user's food search event
let searchBtn = document.querySelector("#search-food-btn")
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
let recoBtn = document.querySelector("#recommend-btn")
recoBtn.addEventListener('click', async function() {
    foodSearchLayer.clearLayers()
    document.querySelector('#search-food-input').value = ""
    foodRecoMarkers()
})


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

// place marker when clicked on the map

map.on('click', function(e){
    currentLocationLayer.clearLayers()
    foodSearchLayer.clearLayers()
    routingLayer.clearLayers()
    let lat = e.latlng.lat
    let lng = e.latlng.lng
    currentCoords = [lat, lng]
    let marker = L.marker(currentCoords).addTo(currentLocationLayer)
    map.flyTo(currentCoords, 16)
});
