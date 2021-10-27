
console.log("entering main function!...");

const url =   "https://jsonplaceholder.typicode.com/users";
// getApi(url)
// .then(function(data) { console.log(data)})
// .catch(function(error) { console.log(error)});

let http = new HttpRequest();
http.getApi(url)
.then(function(data) { console.log(data); return data;})
.then((data) => showData(data))
.catch(function(error) { console.log(error)});

// getApi(url)
// .then(function(data) { console.log(data)})
// .catch(function(error) { console.log(error)});
const showData = function(data) {
    console.log("data in table" );
    console.log(data);
    document.getElementsByClassName("employeeHeading")[0].innerHTML = "Employee Summary";
    let employeeHeader = `<thead>
                            <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Website</th>
                        </tr></thead>`;
    let employeeRow = '<tbody>';                    
    for (let employee of data) {
        let address = [];
        // for (let detail in employee.address) {
        //     address =  address + ',' + JSON.stringify(employee.address[detail]);
        // }
        for (let key in employee.address) {
            if (typeof(employee.address[key]) == "object") {
                address.push(JSON.stringify(employee.address[key]));
            } else {
                address.push(employee.address[key]);
            }
        }
        let addressString = address.join(",");
        employeeRow +=`<tr>
                            <td>${employee.id}</td>
                            <td>${employee.name}</td>
                            <td>${employee.username}</td>
                            <td>${employee.email}</td>
                            <td>${employee.phone}</td>
                            <td>${employee.website}</td>
                            <td>${addressString}</td>
                        </tr> 
                        `;
    }
    document.getElementsByClassName("employeeDetails")[0].innerHTML = employeeHeader + employeeRow + '</tbody>';
};

const getEmployeeDetails = function () {
    console.log(document.querySelector('.employeeName').value);
    let name =document.querySelector('.employeeName').value;
    http.postApi(url, {'name' : name, "adress": 'abcd'});
};

const onEmployeeAdd = function () {
    getEmployeeDetails();
}

document.getElementsByClassName('addEmployee')[0]
.addEventListener('click', onEmployeeAdd);
