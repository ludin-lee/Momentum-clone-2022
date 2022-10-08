const clock = document.querySelector("#login-form__clock");
const loginFormDate = document.querySelector("#login-form__date")
const headerBarClock =document.querySelector("#header-bar__clock");
function getClock(){
    const clockTime = new Date();
    const dateDetail = clockTime.toDateString();
    const hours = String(clockTime.getHours()).padStart(2,"0");
    const miniutes = String(clockTime.getMinutes()).padStart(2,"0");
    const seconds = String(clockTime.getSeconds()).padStart(2,"0");
    let ampm ="";
        if(clockTime.getHours()< 12){
            ampm="am"        
        }else{
            ampm="pm"
        }
    
    clock.innerText = `${hours}:${miniutes}:${seconds}`;
    loginFormDate.innerText = `${dateDetail}`;
    headerBarClock.innerText= `${hours}:${miniutes} ${ampm}`;
}
getClock();
setInterval(getClock,1000);
