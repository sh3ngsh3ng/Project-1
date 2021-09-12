// setting up foursquare API
const fourSq_API_BASE_URL = "https://api.foursquare.com/v2/"

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
    console.log(response.data)
    return response.data
}