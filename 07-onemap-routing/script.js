// default view
window.addEventListener('DOMContentLoaded', function() {
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


//test button for routing
// document.querySelector('#route-btn').addEventListener('click', async function(){
//     getRouting(currentCoords, '1.30993,103.883878')
// })


// not working at all
// document.querySelector(`.${venueCoords}`).addEventListener('click', function() {
//     getRouting(currentCoords, venueCoords)
// })