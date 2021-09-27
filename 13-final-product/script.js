let currentCoords = 0
let geoFlag = false // flag


// start button transition to map
document.querySelector("#start-btn").addEventListener('click', function() {
    document.querySelector("#start-page").classList.add("page-up")
    document.querySelector("#map-page").classList.remove("page-left")
    document.querySelector("#map-page").classList.add("page-show")
    document.querySelector("#nav-bar-div").classList.add("nav-up") 
    flyToCurrentLocation()
})



// back button to transition to start page
document.querySelector("#back-btn").addEventListener('click', function() {
    foodSearchLayer.clearLayers()
    routingLayer.clearLayers()
    document.querySelector("#start-page").classList.remove("page-up")
    document.querySelector("#start-page").classList.add("page-show")
    document.querySelector("#map-page").classList.add("page-left")
    document.querySelector("#nav-bar-div").classList.remove("nav-up")
    document.querySelector("#nav-bar-div").classList.add("page-show")
})

// fly to current location event
document.querySelector("#location-btn").addEventListener("click", function() {
    currentLocationLayer.clearLayers()
    foodSearchLayer.clearLayers()
    routingLayer.clearLayers()
    radiusLayer.clearLayers()
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
let categoryValue = categoryObj.food // default category is food

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
        categoryValue = categoryObj[item.id]
    })
})


// user's food search event
let searchBtn = document.querySelector("#submit-btn")
searchBtn.addEventListener('click', async function () {
    foodSearchLayer.clearLayers()
    routingLayer.clearLayers()
    let userInput = document.querySelector("#search-food-input").value
    if (userInput) {
        searchResultMarkers()
    } else {
        alert("Please let us know what you want to eat!!")
    }
    radiusMarker()
})


// user's recommend food event
let recoBtn = document.querySelector("#recommend-btn")
recoBtn.addEventListener('click', async function() {
    foodSearchLayer.clearLayers()
    routingLayer.clearLayers()
    document.querySelector('#search-food-input').value = ""
    foodRecoMarkers()
    radiusMarker()
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
    radiusMarker()
})


// click placement marker
// markers can only be placed when geoFlag = true
map.on('click', function(e){
    if (geoFlag) {
        currentLocationLayer.clearLayers()
        foodSearchLayer.clearLayers()
        routingLayer.clearLayers()
        let lat = e.latlng.lat
        let lng = e.latlng.lng
        currentCoords = [lat, lng]
        let marker = L.marker(currentCoords, {icon: locationMarkerIcon}).addTo(currentLocationLayer)
        map.flyTo(currentCoords, 16)
    }
    radiusMarker()
})

// settings: manual marker placement event option
document.querySelector("#checkbox2").addEventListener('click', function() {
    if (this.checked) {
        geoFlag = true

    } 
    if (!this.checked) {
        geoFlag = false
        currentLocationLayer.clearLayers()
        radiusLayer.clearLayers()
        foodSearchLayer.clearLayers()
        flyToCurrentLocation()
    }
})

// settings: remove circle marker option
document.querySelector("#checkbox1").addEventListener('click', function() {
    radiusMarker()
})

// mode switch event
document.querySelector("#mode-switch").addEventListener("click", function() {
    clearAllLayers()
    let mode = this.checked //default = false
    if (!mode) {
        document.querySelector("#search-bar-div").classList.remove("search-bar-up")
        document.querySelector("#search-bar-div").classList.add("search-bar-show")
        document.querySelector("#recommend-btn-div").classList.remove("reco-btn-show")
        document.querySelector("#recommend-btn-div").classList.add("reco-btn-left")
        $("#filter-btn").hide("slow")
        $("#switch-label").animate({'opacity':0}, 500, function(){
            $(this).html('Search').animate({'opacity':1}, 500)
        })
        // alternatively:
        // document.querySelector("#filter-btn").style.display = "none"

    }
    if (mode) {
        document.querySelector("#search-bar-div").classList.add("search-bar-up")
        document.querySelector("#search-bar-div").classList.remove("search-bar-show")
        document.querySelector("#recommend-btn-div").classList.remove("reco-btn-left")
        document.querySelector("#recommend-btn-div").classList.add("reco-btn-show")
        $("#filter-btn").show("slow")
        $("#switch-label").animate({'opacity':0}, 500, function(){
            $(this).html('Recommend').animate({'opacity':1}, 500)
        })
        // alternatively:
        // document.querySelector("#filter-btn").style.display = ""
    }
})

