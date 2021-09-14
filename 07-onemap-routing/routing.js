let oneMap_API_BASE_URL = "https://developers.onemap.sg"

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
    let newToken = response.access_token
    return newToken //returns a promise
}



async function getRouting() {
    let newToken = getToken()
    let response = await axios.get(oneMap_API_BASE_URL + "/privateapi/routingsvc/route", {
        params: {
            'start': "1.3328572,103.74355220000007",
            'end':  "1.32283828324684,103.936051543997",
            'routeType': "walk",
            'token': 'newToeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjc5M…BlIn0.BhaTlFrA5vRDhcepdrXTkd9cB9gJpNOzxiDKUYeXWNwken',
        }
    })
    console.log("response")
    return response.data
}

