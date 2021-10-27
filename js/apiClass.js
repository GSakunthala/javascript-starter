
class HttpRequest {
    async getApi(url) {
        const response = await fetch(url);
        console.log("apiClass");
        const responseJson = response.json();
        return responseJson;
    }
    async postApi(url, params) {
        console.log("Posting to" +  url + "--" +  params);
        const response = await fetch(url, {
            method : 'POST',
            body : JSON.stringify(params),
            headers : {
                'Content-type' : 'application/json'
            }
        });
        const responseJson = response.json();
        return responseJson;
    }

}