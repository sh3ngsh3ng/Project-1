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

    $.post(settings).done(function (response) {
      let accessToken = response
      return accessToken.access_token
    });
}


async function getRouting() {
    let newToken = getToken()
    console.log(newToken)
    let response = await axios.get(oneMap_API_BASE_URL + "/privateapi/routingsvc/route", {
        params: {
            'start': "1.3328572%2C103.74355220000007",
            'end':  "1.32283828324684%2C103.936051543997",
            'routeType': "walk",
            'token': newToken,
        }
    })
    console.log(response)
    return response.data
}

