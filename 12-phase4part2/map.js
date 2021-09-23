// setting up map
let singapore = [1.29,103.85]
let map = L.map('map')
map.setView(singapore, 13)

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
}).addTo(map);

// search results layers
let foodSearchLayer = L.layerGroup()
foodSearchLayer.addTo(map)

// location layer
let currentLocationLayer = L.layerGroup()
currentLocationLayer.addTo(map)

// routing layer
let routingLayer = L.layerGroup()
routingLayer.addTo(map)

// location icon
let locationMarkerIcon = L.icon({
    iconUrl: 'images/location2.png',
    iconSize: [70, 70],
    iconAnchor: [35, 70],
})

// food icon
let foodMarkerIcon = L.icon({
    iconUrl: 'images/food.png',
    iconSize: [50,50],
})

// cafe icon
let cafeMarkerIcon = L.icon({
    iconUrl: 'images/cafe.png',
    iconSize: [40,40]
})

// restaurant icon
let restaurantMarkerIcon = L.icon({
    iconUrl: 'images/restaurant.png',
    iconSize: [40,40]
})

// bar icon
let barMarkerIcon = L.icon({
    iconUrl: 'images/bar.png',
    iconSize: [40,40]
})

// coffee icon
let coffeeshopMarkerIcon = L.icon({
    iconUrl: 'images/coffeeshop.png',
    iconSize: [40,40]
})

// dessert icon
let dessertMarkerIcon = L.icon({
    iconUrl: 'images/dessert.png',
    iconSize: [50, 50]
})

// object of recommendation icons
let recommendationIcons = {
    'food': foodMarkerIcon,
    'cafe': cafeMarkerIcon,
    'restaurant': restaurantMarkerIcon,
    'bar': barMarkerIcon,
    'coffeeshop': coffeeshopMarkerIcon,
    'dessert': dessertMarkerIcon,
}
