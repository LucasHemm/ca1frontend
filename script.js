let table_;
fetch("http://localhost:8080/rest_start/api/person")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        table_ = data.map(el => `<tr> <td>${el.id}</td> <td>${el.firstName}</td> <td>${el.lastName}</td> <td>${el.phone}</td>
                                        <td><a href="#" class="btndelete" id="${el.id}">delete</a> / <button  id="${el.id}" type="button" class="btnedit btn btn-link" data-toggle="modal" data-target="#editModal">Edit
</button></td>
                                </tr>`)
        console.log(table_)
    })
    .catch(err => console.log(err))
    .finally(() =>
        document.querySelector("#table").innerHTML += table_
    )

const button = document.querySelector("#refresh")

button.addEventListener("submit", e => {
    location.reload()
})

const addButton = document.querySelector("#createUser")

addButton.addEventListener("click", e => {
    let options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName: document.querySelector("#firstName").value,
            lastName: document.querySelector("#lastName").value,
            phone: document.querySelector("#phone").value
        })
    }
    fetch("http://localhost:8080/rest_start/api/person", options)
    location.reload()
})

const table = document.querySelector("#table");

table.addEventListener("click", e => {
    console.log(e.target.className);
    let id = e.target.id;

    if (e.target.className === "btndelete") {


        let options = {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        console.log(e.target.id)
        fetch(`http://localhost:8080/rest_start/api/person/${e.target.id}`, options);
        location.reload()
    }

    if (e.target.className === "btnedit btn btn-link") {

        // console.log("here")
        // let options = {
        //     method: "PUT",
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         firstName: document.querySelector("#newFirstName").value,
        //         lastName: document.querySelector("#newLastName").value,
        //         phone: document.querySelector("#newPhone").value
        //     })
        // }
        // console.log(e.target.id)
        // fetch(`http://localhost:8080/rest_start/api/person/${e.target.id}`, options);
        // location.reload()
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
                    phone: document.querySelector("#newPhone").value
                })
            }
            console.log(e.target.id)
            fetch(`http://localhost:8080/rest_start/api/person/${id}`, options);
            location.reload()
        })

    }

})

// const editButton = document.querySelector("#editUser")
//
// editButton.addEventListener("click", e => {
//     console.log("here")
//     let options = {
//         method: "PUT",
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             firstName: document.querySelector("#newFirstName").value,
//             lastName: document.querySelector("#newLastName").value,
//             phone: document.querySelector("#newPhone").value
//         })
//     }
//     console.log(e.target.id)
//     fetch(`http://localhost:8080/rest_start/api/person/${e.target.id}`, options);
//     location.reload()
// })
