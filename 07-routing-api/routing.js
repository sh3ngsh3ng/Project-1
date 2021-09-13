const tripGo_BASE_URL = "https://api.tripgo.com/v1/routing.json"

async function routingAPI () {
    let response = await axios.get(tripGo_BASE_URL, {
        params: {
            'headers': {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-TripGo-Key': 'df353f84c1750a433260eecd0fb527a4',                
            },
            // 'user_key': 'df353f84c1750a433260eecd0fb527a4',
            'v': 11,
            'query': {
                'from': '(1.2966, 103.7764)',
                'to': '(1.3644, 103.9915)',
            },
            'mode': 'wa_'
        }
    })
    return response.data
}
