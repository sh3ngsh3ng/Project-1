function searchResultMarkers() {
    let lat = currentCoords[0]
    let lng = currentCoords[1]
    let radius = getRadius()
    let eachVenue = await (searchFood(lat, lng, radius, userInput))

    // add markers based on food search results
    for (let i of eachVenue) {
        let venueName = i.name
        let venueLat = i.location.lat
        let venueLng = i.location.lng
        let marker = L.marker([venueLat, venueLng])
        marker.bindPopup(`${venueName}`)
        marker.addTo(foodSearchLayer)
}}


function foodRecoMarkers() {
    let lat = currentCoords[0]
    let lng = currentCoords[1]
    let radius = getRadius()
    let recommendedFood = await recoFood(lat,lng,radius)
    for (let i = 0; i < recommendedFood.length; i++) {
        let eachVenue = recommendedFood[i].venue
        let venueLat = eachVenue.location.labeledLatLngs[0].lat
        let venueLng = eachVenue.location.labeledLatLngs[0].lng
        let venueCoords = [venueLat, venueLng]

        // add markers based on recommendation results
        let marker = L.marker(venueCoords)
        marker.addTo(foodSearchLayer)
    }
}