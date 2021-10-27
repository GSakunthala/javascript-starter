

(function() {
    const url =   "https://jsonplaceholder.typicode.com/users";

    async function getApi(url) {
            const response = await fetch(url);
            console.log("api");
            const responseJson = response.json();
            return responseJson;
        }

getApi(url)
.then(function(data) { console.log(data)})
.catch(function(error) { console.log(error)});
})();