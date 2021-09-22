var mockServer = require('mockserver-client'),
    mockServerClient = mockServer.mockServerClient // MockServer and proxy client


    mockServerClient("localhost", 1080)
    .mockSimpleResponse('/somePath', { name: 'return value' }, 203)
    .then(
        function(result) {
            console.log(result)
            // do something next
        }, 
        function(error) {
            console.log("뭐지?")
            // handle error
        }
    );

    mockServerClient("localhost", 1080)
    .mockSimpleResponse('/asd', { name: 'return asad' }, 203)
    .then(
        function(result) {
            console.log(result)
            // do something next
        }, 
        function(error) {
            console.log("뭐지?")
            // handle error
        }
    );


    // mockServerClient("localhost", 1080).mockAnyResponse({
    //     "httpRequest": {
    //         "body": {
    //             "type": "JSON",
    //             "json": {
    //                 "id": 1,
    //                 "name": "A green door",
    //                 "price": 12.50,
    //                 "tags": ["home", "green"]
    //             },
    //             "matchType": "STRICT"
    //         }
    //     },
    //     "httpResponse": {
    //         "statusCode": 202,
    //         "body": "some_response_body"
    //     }
    // }).then(
    //     function () {
    //         console.log("expectation created");
    //     },
    //     function (error) {
    //         console.log(error);
    //     }
    // );
    