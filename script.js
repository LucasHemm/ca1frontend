let table_;

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
        e.preventDefault();
        deleteInnerHtml();
        let number = document.querySelector("#number").value;

        fetch(`http://localhost:8080/ca1backend/api/person/${number}`, {})
            .then(response => response.json())
            .then(data =>{
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

function deleteInnerHtml() {
    document.querySelector("#tbody").innerHTML = "";
}


// .finally(() =>
//     // document.querySelector("#table").innerHTML += table_
// )
//
// const button = document.querySelector("#refresh")
//
// button.addEventListener("submit", e => {
//     location.reload()
// })
//
// const addButton = document.querySelector("#createUser")
//
// addButton.addEventListener("click", e => {
//     let options = {
//         method: "POST",
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             firstName: document.querySelector("#firstName").value,
//             lastName: document.querySelector("#lastName").value,
//             phone: document.querySelector("#phone").value
//         })
//     }
//     fetch("http://localhost:8080/rest_start/api/person", options)
//     location.reload()
// })
//
// const table = document.querySelector("#table");
//
// table.addEventListener("click", e => {
//     console.log(e.target.className);
//     let id = e.target.id;
//
//     if (e.target.className === "btndelete") {
//
//
//         let options = {
//             method: "DELETE",
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             }
//         }
//         console.log(e.target.id)
//         fetch(`http://localhost:8080/rest_start/api/person/${e.target.id}`, options);
//         location.reload()
//     }
//
//     if (e.target.className === "btnedit btn btn-link") {
//
//         // console.log("here")
//         // let options = {
//         //     method: "PUT",
//         //     headers: {
//         //         'Accept': 'application/json',
//         //         'Content-Type': 'application/json'
//         //     },
//         //     body: JSON.stringify({
//         //         firstName: document.querySelector("#newFirstName").value,
//         //         lastName: document.querySelector("#newLastName").value,
//         //         phone: document.querySelector("#newPhone").value
//         //     })
//         // }
//         // console.log(e.target.id)
//         // fetch(`http://localhost:8080/rest_start/api/person/${e.target.id}`, options);
//         // location.reload()
//         const editButton = document.querySelector("#editUser")
//
//         editButton.addEventListener("click", e => {
//             console.log("here")
//             let options = {
//                 method: "PUT",
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     firstName: document.querySelector("#newFirstName").value,
//                     lastName: document.querySelector("#newLastName").value,
//                     phone: document.querySelector("#newPhone").value
//                 })
//             }
//             console.log(e.target.id)
//             fetch(`http://localhost:8080/rest_start/api/person/${id}`, options);
//             location.reload()
//         })
//
//     }
//
// })
//
// // const editButton = document.querySelector("#editUser")
// //
// // editButton.addEventListener("click", e => {
// //     console.log("here")
// //     let options = {
// //         method: "PUT",
// //         headers: {
// //             'Accept': 'application/json',
// //             'Content-Type': 'application/json'
// //         },
// //         body: JSON.stringify({
// //             firstName: document.querySelector("#newFirstName").value,
// //             lastName: document.querySelector("#newLastName").value,
// //             phone: document.querySelector("#newPhone").value
// //         })
// //     }
// //     console.log(e.target.id)
// //     fetch(`http://localhost:8080/rest_start/api/person/${e.target.id}`, options);
// //     location.reload()
// // })
