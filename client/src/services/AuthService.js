const BASE_URL = `http://localhost:5000`;


// used inside login - throws an error or returns response in jason
function handleError(res) {
    if(!res.ok) throw new Error(res.statusMessage);
    console.log(res);
    return res.json();
  }

function checkToken() {
  return new Promise((resolve, reject) => {
    const token = localStorage.getItem('jwt');
    if (token) {
      const user = token;
      resolve(user);
    }
    reject();
  })
}

  function destroyToken() {
  window.localStorage.removeItem("jwt");
  }


function login(input) {
    const url = `${BASE_URL}/login`;
    const body = {"username": input.username, "password": input.password}
    const options = { 
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            mode: 'cors',
            body:JSON.stringify(body),
            }
    fetch(url, options)
    .then(handleError)
    .then(res => {
     localStorage.setItem("jwt", res.access_token)
     console.log(res.access_token)
     return res.message
     })
    .catch(err => console.log(err))
}

function register(input) {
  const url = `${BASE_URL}/registration`;
  const body = {"username": input.username, "password": input.password}
  const options = { 
    method: 'POST',
    headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
    mode: 'cors',
    body: JSON.stringify(body),
  }
  fetch(url, options)
  .then(handleError)
  .then(res => {
    localStorage.setItem("jwt", res.access_token)
    console.log(res.access_token)
    console.log(res.message)
    })
   .catch(err => console.log(err))
}

export default {
  login,
  register,
  checkToken,
  destroyToken
}