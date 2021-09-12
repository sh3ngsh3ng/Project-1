
let currentCoords = 0

function flyToCurrentLocation() {
    geo = navigator.geolocation
    geo.getCurrentPosition(function(position) {
        
        // get user's current coords
        let currentLat = position.coords.latitude
        let currentLng = position.coords.longitude
        currentCoords = [currentLat, currentLng]


        // set marker based on current coords and move map over to marker
        let currentLocationMarker = L.marker(currentCoords)
        currentLocationMarker.addTo(map)
        map.flyTo(currentCoords, 16)
    })
}

document.querySelector("#btn").addEventListener("click", function() {
    geo = navigator.geolocation
    geo.getCurrentPosition(function(position) {
        
        // get user's current coords
        let currentLat = position.coords.latitude
        let currentLng = position.coords.longitude
        currentCoords = [currentLat, currentLng]


        // set marker based on current coords and move map over to marker
        let currentLocationMarker = L.marker(currentCoords)
        currentLocationMarker.addTo(map)
        map.flyTo(currentCoords, 16)
    })
})




