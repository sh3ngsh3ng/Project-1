let oneMap_API_BASE_URL = "https://developers.onemap.sg"


// let settings = {
//     "url"  : oneMap_API_BASE_URL + "/privateapi/auth/post/getToken", 
//     "data" : 
//             {
//                 "email": "leeweixg2001@yahoo.com", 
//                 "password": "Scatyim777"
//             }, 
//     "async" : "true"
// }

// $.post(settings).done(function(response) {
//     console.log(response)
// })



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

let x = getToken()


async function getRouting() {
    let response = await axios.get(oneMap_API_BASE_URL + "/privateapi/routingsvc/route", {
        params: {
            'start': "1.3328572,103.74355220000007",
            'end':  "1.32283828324684,103.936051543997",
            'routeType': "walk",
            'token': x,
        }
    })
    console.log(response)
    return "done"
}

getRouting()