let oneMap_API_BASE_URL = "https://developers.onemap.sg"

// function to clean encoded string (removes backslash)
function cleanStr(x) {
    a = x.split('\\')
    b = a.join('\\\\')
    return b
}

// function to get token API
async function getToken() {
    var settings = {
        "url"  : oneMap_API_BASE_URL + "/privateapi/auth/post/getToken", 
        "data" : 
                {
                  "email": "leeweixg2001@yahoo.com", 
                  "password": "Scatyim777"
                }, 
        "async" : "true"
    }

    let response = await $.post(settings)
    return response.access_token
}

// function to get plot route (walk)
// startpoint and endpoint have to be coordinates and string
async function getRouting(startpoint, endpoint) {
    routingLayer.clearLayers()
    let response = await axios.get(oneMap_API_BASE_URL + "/privateapi/routingsvc/route", {
        params: {
            'start': startpoint.toString(),   // '1.307812,103.8810721',
            'end': endpoint.toString(),     // '1.32283,103.936051',
            'routeType': "walk",
            'token': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjc5MzQsInVzZXJfaWQiOjc5MzQsImVtYWlsIjoibGVld2VpeGcyMDAxQHlhaG9vLmNvbSIsImZvcmV2ZXIiOmZhbHNlLCJpc3MiOiJodHRwOlwvXC9vbTIuZGZlLm9uZW1hcC5zZ1wvYXBpXC92MlwvdXNlclwvc2Vzc2lvbiIsImlhdCI6MTYzMTYyMDc3NywiZXhwIjoxNjMyMDUyNzc3LCJuYmYiOjE2MzE2MjA3NzcsImp0aSI6ImU3YTFjMTMzNmJiNDZlYmI3MjYwZDMyNGE5ZTk2ZTBlIn0.BhaTlFrA5vRDhcepdrXTkd9cB9gJpNOzxiDKUYeXWNw",
        }
    })
    let routeGeometry = response.data.route_geometry
    let encodedLine = cleanStr(routeGeometry)
    let arrayLatLngs = L.PolylineUtil.decode(encodedLine)
    let polyline = L.polyline(arrayLatLngs, {color:'green'}).addTo(routingLayer)
} 




