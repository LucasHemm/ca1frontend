setPeopleHeaders();
fetch("http://localhost:8080/ca1backend/api/person/home", {
    // mode: "no-cors"
})
    .then(response => response.json())
    .then(data => {
        let persons = data.map(el => `<tr> <td>${el.id}</td> <td>${el.firstName}</td> <td>${el.lastName}</td> <td>${el.email}</td> <td>${el.addressDTO.street}, ${el.addressDTO.zipCode}, ${el.addressDTO.city}</td> 
<td><ul>
${el.phoneDTOS.map(e => `<li>${e.number}</li>`).join("\n")}
</ul></td>
<td>
<ul>
${el.hobbyDTOS.map(e => `<li>${e.name}</li>`).join("\n")}
</ul>
</td>
                                        <td><button  id="${el.id}" type="button" class="btnedit btn btn-link" data-toggle="modal" data-target="#editModal">Edit
</button></td>
                                </tr>`)
        const personString = persons.join(" ")
        console.log(personString)
        document.querySelector("#tbody").innerHTML = personString
    })
    .catch(err => console.log(err))


const numberButton = document.querySelector("#numberButton")

numberButton.addEventListener("click", e => {
        setPeopleHeaders();
        e.preventDefault();
        deleteInnerHtml();
        let number = document.querySelector("#number").value;

        fetch(`http://localhost:8080/ca1backend/api/person/${number}`, {})
            .then(response => response.json())
            .then(data => {
                let persons = `<tr> <td>${data.id}</td> <td>${data.firstName}</td> <td>${data.lastName}</td> <td>${data.email}</td> <td>${data.addressDTO.street}, ${data.addressDTO.zipCode}, ${data.addressDTO.city}</td> 
<td><ul>
${data.phoneDTOS.map(e => `<li>${e.number}</li>`).join("\n")}
</ul></td>
<td>
<ul>
${data.hobbyDTOS.map(e => `<li>${e.name}</li>`).join("\n")}
</ul>
</td>
                                        <td><button  id="${data.id}" type="button" class="btnedit btn btn-link" data-toggle="modal" data-target="#editModal">Edit
</button></td>
                                </tr>`
                console.log(persons)
                document.querySelector("#tbody").innerHTML = persons;
            })
            .catch(err => console.log(err))

    }
)

const hobbyButton = document.querySelector("#hobbyButton")

hobbyButton.addEventListener("click", e => {
        setPeopleHeaders();
        e.preventDefault();
        deleteInnerHtml();
        let hobby = document.querySelector("#hobby").value;

        fetch(`http://localhost:8080/ca1backend/api/person/hobby/${hobby}`, {})
            .then(response => response.json())
            .then(data => {
                let persons = data.map(el => `<tr> <td>${el.id}</td> <td>${el.firstName}</td> <td>${el.lastName}</td> <td>${el.email}</td> <td>${el.addressDTO.street}, ${el.addressDTO.zipCode}, ${el.addressDTO.city}</td> 
<td><ul>
${el.phoneDTOS.map(e => `<li>${e.number}</li>`).join("\n")}
</ul></td>
<td>
<ul>
${el.hobbyDTOS.map(e => `<li>${e.name}</li>`).join("\n")}
</ul>
</td>
                                        <td><button  id="${el.id}" type="button" class="btnedit btn btn-link" data-toggle="modal" data-target="#editModal">Edit
</button></td>
                                </tr>`)
                const personString = persons.join(" ")
                console.log(personString)
                document.querySelector("#tbody").innerHTML = personString
            })
            .catch(err => console.log(err))

        fetch(`http://localhost:8080/ca1backend/api/person/count/${hobby}`, {})
            .then(response => response.json())
            .then(data => {
                document.querySelector("#count").innerHTML = "People with " + hobby + " as a hobby: " + data.count;
            })
            .catch(err => console.log(err))
    }
)

const zipCodeButton = document.querySelector("#zipButton")

zipCodeButton.addEventListener("click", e => {
        setPeopleHeaders();
        e.preventDefault();
        deleteInnerHtml();
        let zipCode = document.querySelector("#zipCode").value;

        fetch(`http://localhost:8080/ca1backend/api/person/zip/${zipCode}`, {})
            .then(response => response.json())
            .then(data => {
                let persons = data.map(el => `<tr> <td>${el.id}</td> <td>${el.firstName}</td> <td>${el.lastName}</td> <td>${el.email}</td> <td>${el.addressDTO.street}, ${el.addressDTO.zipCode}, ${el.addressDTO.city}</td> 
<td><ul>
${el.phoneDTOS.map(e => `<li>${e.number}</li>`).join("\n")}
</ul></td>
<td>
<ul>
${el.hobbyDTOS.map(e => `<li>${e.name}</li>`).join("\n")}
</ul>
</td>
                                        <td><button  id="${el.id}" type="button" class="btnedit btn btn-link" data-toggle="modal" data-target="#editModal">Edit
</button></td>
                                </tr>`)
                const personString = persons.join(" ")
                console.log(personString)
                document.querySelector("#tbody").innerHTML = personString
            })
            .catch(err => console.log(err))
    }
)


function deleteInnerHtml() {
    document.querySelector("#tbody").innerHTML = "";
}

function setPeopleHeaders() {
    let stringHeader = " <tr> <th>ID</th> <th>First name</th> <th>Last name</th> <th>Email</th> <th>Address</th> <th>Phones</th> <th>Hobby</th><th>Options</th> </tr>";
    document.querySelector("#headers").innerHTML = stringHeader;
}

function setPostalHeaders() {
    let stringHeader = " <tr>  <th>City</th> <th>Zip code</th> </tr>"
    document.querySelector("#headers").innerHTML = stringHeader;
}

const postalButton = document.querySelector("#allZip")
postalButton.addEventListener("click", e => {
    e.preventDefault();
    setPostalHeaders();
    fetch(`http://localhost:8080/ca1backend/api/postalcode`, {})
        .then(response => response.json())
        .then(data => {
            let zipCodes = data.map(el => `<tr> <td>${el.city}</td> <td>${el.zipCode}</td> </tr>`)
            const zipCodeString = zipCodes.join(" ")
            console.log(zipCodeString)
            document.querySelector("#tbody").innerHTML = zipCodeString
        })

        .catch(err => console.log(err));
})

const homeButton = document.querySelector("#home")
homeButton.addEventListener("click", e => {
    setPeopleHeaders();
    fetch("http://localhost:8080/ca1backend/api/person/home", {
        // mode: "no-cors"
    })
        .then(response => response.json())
        .then(data => {
            let persons = data.map(el => `<tr> <td>${el.id}</td> <td>${el.firstName}</td> <td>${el.lastName}</td> <td>${el.email}</td> <td>${el.addressDTO.street}, ${el.addressDTO.zipCode}, ${el.addressDTO.city}</td> 
<td><ul>
${el.phoneDTOS.map(e => `<li>${e.number}</li>`).join("\n")}
</ul></td>
<td>
<ul>
${el.hobbyDTOS.map(e => `<li>${e.name}</li>`).join("\n")}
</ul>
</td>
                                        <td><button  id="${el.id}" type="button" class="btnedit btn btn-link" data-toggle="modal" data-target="#editModal">Edit
</button></td>
                                </tr>`)
            const personString = persons.join(" ")
            console.log(personString)
            document.querySelector("#tbody").innerHTML = personString
        })
        .catch(err => console.log(err))

})


const modal = document.querySelector("#modal")

modal.addEventListener("click", e => {
    fetch("http://localhost:8080/ca1backend/api/person/hobby/all", {})
        .then(response => response.json())
        .then(data => {
            let hobbies = data.map(el => `<li> <label> <input id=${el.id} type="checkbox" value="${el.name}" name="hobby" />${el.name}</label></li>`)

            const personString = hobbies.join(" ")
            console.log(personString)
            document.querySelector("#hobbyDrop").innerHTML = personString
        })
        .catch(err => console.log(err))
    $(".checkbox-dropdown").click(function () {
        $(this).toggleClass("is-active");
    });

    $(".checkbox-dropdown ul").click(function (e) {
        e.stopPropagation();
    });
})

const createUser = document.querySelector("#createUser")

createUser.addEventListener("click", e => {
    let dataArray = [];

    getHobbyByName()
        .then(data => {
            dataArray.push(...data);
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            let options = {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName: document.querySelector("#createFirstName").value,
                    lastName: document.querySelector("#createLastName").value,
                    email: document.querySelector("#createEmail").value,
                    addressDTO: {
                        street: document.querySelector("#createStreet").value,
                        additionalInfo: document.querySelector("#createAdditionalInfo").value,
                        zipCode: document.querySelector("#createZip").value
                    },
                    phoneDTOS: [{
                        number: document.querySelector("#createPhone").value,
                        description: document.querySelector("#createPhoneDescription").value
                    }],
                    hobbyDTOS: dataArray
                })
            };

            console.log(options.body);
            fetch("http://localhost:8080/ca1backend/api/person", options)
                .then(response => {
                    console.log("User created successfully.");
                    location.reload();
                })
                .catch(error => console.error(error));
        });
});

const table = document.querySelector("#table");

table.addEventListener("click", e => {
    console.log(e.target.className);
    let id = e.target.id;
    if (e.target.className === "btnedit btn btn-link") {

        const editButton = document.querySelector("#editUser")

        editButton.addEventListener("click", e => {
            console.log("here")
            let options = {
                method: "PUT",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName: document.querySelector("#newFirstName").value,
                    lastName: document.querySelector("#newLastName").value,
                    email: document.querySelector("#newEmail").value
                })
            }
            fetch(`http://localhost:8080/ca1backend/api/person/edit/${id}`, options);
            location.reload()
        })

    }

})


// document.getElementById('submit').addEventListener('click', getData); //add a click event to the save button



function getData() { // this function will get called when the save button is clicked
    let result = [];
    let itemForm = document.querySelector("#createUserDiv"); // getting the parent container of all the checkbox inputs
    let checkBoxes = itemForm.querySelectorAll('input[type="checkbox"]'); // get all the checkbox
    result = [];
    checkBoxes.forEach(item => { // loop all the checkbox item
        if (item.checked) {  //if the checkbox is checked
            let data = item.value

            result.push(data); //stored the objects to result array
        }
    })
    return result; // display result
}


function getHobbyByName() {
    let hobbies = getData();
    let promises = hobbies.map(hobby => {
        return fetch(`http://localhost:8080/ca1backend/api/person/hobby/name/${hobby}`)
            .then(response => response.json())
    });
    return Promise.all(promises);
}

