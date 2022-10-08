const loginForm = document.querySelector("#login-form");
const loginFormInput = document.querySelector("#login-form__main input");
const loginFormBtn = document.querySelector("#login-form__main button");
const headerBar = document.querySelector(".header-bar");
const workForm = document.querySelector(".work_form");
const nickname = document.querySelector("#header-bar__greetings span");
const logoutBtn = document.querySelector("#header-bar__greetings button");

const USERNAME_KEY = "username";
const savedUsername = localStorage.getItem(USERNAME_KEY);




function sectionTwo(username){
    nickname.innerText = `Hello! ${username}`
    headerBar.style.display ="flex";
    loginForm.style.display = "none";
    workForm.style.display = "flex";
}
function login (event){
    event.preventDefault();
    if(loginFormInput.value === "" ){
        alert("이름을 적어주세요");
    }else{
        const username =loginFormInput.value;
        sectionTwo(username);
        localStorage.setItem(USERNAME_KEY,username);
        navigator.geolocation.getCurrentPosition(onGeoOk,onGeoErorr);
    }
}


function sectionOne(){
    headerBar.style.display ="none";
    loginForm.style.display = "flex";
    workForm.style.display = "none";
}

function logout(event){
    localStorage.removeItem(USERNAME_KEY);
    sectionOne();
    song.pause();
}


if(savedUsername === null){
    loginForm.addEventListener("submit",login);
}else{
    sectionTwo(savedUsername);
}

logoutBtn.addEventListener("click",logout);
