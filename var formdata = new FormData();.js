var formdata = new FormData();

var requestOptions = {
  method: 'GET',
  body: formdata,
  redirect: 'follow'
};

fetch("http://api.airvisual.com/v2/countries?key=ea152e0b-9572-4e2a-8ac3-f77e986f371e", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  var formdata = new FormData();

var requestOptions = {
  method: 'GET',
  body: formdata,
  redirect: 'follow'
};

fetch("http://api.airvisual.com/v2/states?country=Malaysia&key=ea152e0b-9572-4e2a-8ac3-f77e986f371e", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  var formdata = new FormData();

var requestOptions = {
  method: 'GET',
  body: formdata,
  redirect: 'follow'
};

fetch("http://api.airvisual.com/v2/cities?state=Melaka&country=Malaysia&key=ea152e0b-9572-4e2a-8ac3-f77e986f371e", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("http://api.airvisual.com/v2/nearest_city?key=ea152e0b-9572-4e2a-8ac3-f77e986f371e", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("http://api.airvisual.com/v2/nearest_city?lat=2.2139&lon=102.3278&key=ea152e0b-9572-4e2a-8ac3-f77e986f371e", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("http://api.airvisual.com/v2/city?city=Melaka&state=Melaka&country=Malaysia&key=ea152e0b-9572-4e2a-8ac3-f77e986f371e", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
