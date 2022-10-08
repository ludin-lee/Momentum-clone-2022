const  API_KEY = "d08c828969b9d65e07e714aeba88f0d0";
const City = document.querySelector(".work_form__left-weather h2");
const weather = document.querySelector(".work_form__left-weather h3");

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; 
    
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      City.innerText = `${data.name}`;
      weather.innerText =`${data.weather[0].main} / ${data.main.temp}°C`
    });
}
function onGeoErorr (){
   alert("위치를 찾을 수 없습니다.")
}

