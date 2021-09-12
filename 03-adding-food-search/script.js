// setting up foursquare API
const fourSq_API_BASE_URL = "https://api.foursquare.com/v2/"

async function searchFood(lat, lng, query) {
    let ll = lat + "," + lng
    let response = await axios.get(fourSq_API_BASE_URL + "venues/search", {
        params: {
            'll': ll,
            'client.id': 'NUBBEVNCBV5IKER4ZEHEEH3XLVNCK3JTYSOBEPUTQOLAYCEZ',
            'client_secret': 'TAKJDH0RPFB4S20MNRQHJGAK3OOEPGGD1AUV3NUIJNDGBGOT',
            'v': '20210912',
            'query': query
        }
    })
}