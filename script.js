// const axios = require("axios");

const options = {
    method: 'GET',
    // url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
    // params: {city: 'Seattle'},
    headers: {
      'X-RapidAPI-Key': '0d447c57cemsh5ecf9d049e7d35ep133014jsncdb4174deb2a',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };


  const getWeather = (city) => {

    cityName.innerHTML = city
  
  // axios.request(options).then(function (response) {
  //     console.log(response.data);
  // }).catch(function (error) {
  //     console.error(error);
  // });

  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {

      console.log(response)

      // cloud_pct.innerHTML = response.cloud_pct
      // actual_temp.innerHTML = response.temp
      temp2.innerHTML = response.temp
      feels_like.innerHTML = response.feels_like
      hum.innerHTML = response.humidity
      // humidity2.innerHTML = response.humidity
      min_temp.innerHTML = response.min_temp
      max_temp.innerHTML = response.max_temp
      wind.innerHTML = response.wind_speed
      // wind_speed2.innerHTML = response.wind_speed
      // wind_degrees.innerHTML = response.wind_degrees
      // sunrise.innerHTML = response.sunrise
      // sunset.innerHTML = response.sunset


    })
    .catch(err => console.error(err));
  }

  submit.addEventListener("click", (e)=>{
    e.preventDefault();
    getWeather(city.value)
  })

  getWeather("Delhi")



  // var famousCity = ["Shanghai", "Boston", "Lucknow", "Kolkata"];

  // for(var i = 0; i < famousCity.length, i++){
  //   getWeather2(famousCity[i]);
  // }



  myWeather = (myCity, x) => {


  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + myCity, options)
    .then(response => response.json())
    .then((response) => {

      console.log(response)

      document.getElementsByClassName("cloud")[x].innerHTML = response.cloud_pct
      document.getElementsByClassName("temp")[x].innerHTML = response.temp
      document.getElementsByClassName("feels")[x].innerHTML = response.feels_like
      document.getElementsByClassName("humidity")[x].innerHTML = response.humidity
      document.getElementsByClassName("min")[x].innerHTML = response.min_temp
      document.getElementsByClassName("max")[x].innerHTML = response.max_temp
      document.getElementsByClassName("wind_speed")[x].innerHTML = response.wind_speed
      // document.getElementsByClassName("wind_degree")[x].innerHTML = response.wind_degree
      document.getElementsByClassName("sunrise")[x].innerHTML = response.sunrise
      document.getElementsByClassName("sunset")[x].innerHTML = response.sunset
      

    })
    .catch(err => console.error(err));
  }

  // submit.addEventListener("click", (e)=>{
  //   e.preventDefault()
  //   getWeather(newCity.value)
  // })

  // getWeather("Delhi")

  var cities = ["Bangalore", "Ahmedabad", "Lucknow", "Kolkata", "Assam"];
  for(var x = 0; x < cities.length; x++){
      if(cities[x] === "Bangalore"){
        myWeather(cities[x],x)
      }
      if(cities[x] === "Ahmedabad"){
        myWeather(cities[x],x)
      }
      if(cities[x] === "Lucknow"){
        myWeather(cities[x],x)
      }
      if(cities[x] === "Kolkata"){
        myWeather(cities[x],x)
      }
      if(cities[x] === "Assam"){
        myWeather(cities[x],x)
      }
  }

