// Add your code here
const mainURL = "http://localhost:3000/users"

const dataBody = {
    name: "Steve",
    email: "steve@steve.com"
}


const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(dataBody)
};


function submitData() {
    return fetch(mainURL, configurationObject)
    .then(function (response) {
        return response.json();
      })
      .then(function(object){
          document.body.innerHTML = object.id
      })
      .catch(function (error) {
       document.body.innerHTML = error.message
      });

    }


