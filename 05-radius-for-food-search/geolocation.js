
let currentCoords = 0 // global variable for access to DOM event

// function to fly to current location
function flyToCurrentLocation() {
    geo = navigator.geolocation
    geo.getCurrentPosition(function(position) {
        
        // get user's current coords
        let currentLat = position.coords.latitude
        let currentLng = position.coords.longitude
        currentCoords = [currentLat, currentLng]


        // set marker based on current coords and move map over to marker
        let currentLocationMarker = L.marker(currentCoords)
        currentLocationMarker.addTo(currentLocationLayer)
        map.flyTo(currentCoords, 16)
    })
}

// to reorientate back to current location
document.querySelector("#btn").addEventListener("click", function() {
    currentLocationLayer.clearLayers()
    flyToCurrentLocation()
})
