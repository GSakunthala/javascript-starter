
class HttpRequest {
    async getApi(url) {
    const response = await fetch(url);
    console.log("apiClass");
    const responseJson = response.json();
    return responseJson;
}


}