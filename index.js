$(document).ready(function(){
  
  //Get location
navigator.geolocation.getCurrentPosition(success,error);
  
  function success(position){
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    weather(lat, long);
  }
  function error(){
    console.log("error");
  }
  
  function weather(lat, long){
   var URL=`https://api.openweathermap.org/data/2.5/forecast/?APPID=5581de02066e270ca2ee03ee485ed927&units=metric&cnt=2&lat=${lat}&lon=${long}`
    $.getJSON(URL, function(data){
      console.log(data);
      updateDOM(data);
    });
  }
  
  function updateDOM(data){
    var city = data.city.name;
    var temp = Math.round(data.list[1].main.temp);
    var desc = data.list[1].weather[0].description;
    var humi = data.list[1].main.humidity;
    var wind = Math.round(data.list[1].wind.speed);
    $("#city").html(city);
    $("#temp").html(temp);
    $("#desc").html(desc);
    $("#humidity").html(humi);
    $("#wind").html(wind);
  }
   
})