let random = document.querySelector("#random");

const url = "https://game-of-thrones-quotes.herokuapp.com/v1/random/5";
async function getData(){
   let response = await fetch(url);
   let data = await response.json();

   let randomWord = Math.floor(Math.random() * data.length);

   random.innerHTML = data[randomWord].sentence;

}

getData();


function skip(){
    getData();

}

let typedWord = document.getElementById("typedWord");
let displayScore = document.querySelector("#score");
let score = 0;
let storedPoints ;
let showTime = document.querySelector("#time");

typedWord.addEventListener("keyup", () => {
    if(typedWord.value.trim() === random.innerText){
        score++;
        displayScore.innerHTML = score;
        getData();
        typedWord.value = "";
        let extraTime = [3,5,8,10,12,15]
        let randomNumber = Math.floor(Math.random() * extraTime.length);
        let randomTime = extraTime[randomNumber];
        time+= randomTime;

        localStorage.setItem("storedScore", score);
        storedPoints = localStorage.getItem("storedScore");
        
        localStorage.setItem("storedTime", time);
        showTime.innerHTML = time + "s";


        // let date = new Date();
        let day = date.getDate();
        let month = date.getMonth(); //0, 1, 2, 
        let year = date.getFullYear();
        let monthName = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        let lastPlayDate = `${day}, ${monthName[month]} , ${year}`;
        localStorage.setItem("lastDate", lastPlayDate);
    } 
})

   





let time = 25;

function displayTime(){
    time--;
    var storedSeconds = localStorage.getItem("storedTime");
    showTime.innerHTML = time + "s";
    if(!storedSeconds){
        localStorage.setItem("storedTime", time);
    }
    if(time == 0){
        clearInterval(counter);
        localStorage.setItem("storedTime", 0);
        showTime.innerHTML = storedSeconds + "s";
        gameOver();
    }

getStored();
if (storedPoints >= 5){
    showTime.innerHTML = storedSeconds + "s";
    gameWin();
}
}

storedPoints = localStorage.getItem("storedScore");
// storedSeconds = localStorage.getItem("storedTime");
let gameStatus = document.getElementById("gameStatus");


function getStored(){
    if(storedPoints){
        displayScore.innerHTML = storedPoints;
    }else{
        displayScore.innerHTML = 0;
    }
    }

let counter = setInterval(displayTime, 1000);
let skipButton = document.querySelector("#skip");
let playAgain = document.querySelector("#playAgain");


function gameOver(){
    random.style.display = "none";
    gameStatus.style.display = "block";
    gameStatus.innerHTML = "You ran out of time! You Lose !!"
    typedWord.style.display = "none"; 
    skipButton.style.display = "none";
    playAgain.style.display = "inline-block";
    clearInterval(counter);
}

function gameWin(){
    if(score >= 7){
        random.style.display = "none";
        gameStatus.style.display = "block";
        let lastPlay = localStorage.getItem("lastDate");

    gameStatus.innerHTML = `You Won!! <br><br> 
                            Last Play Date : ${lastPlay}`; 
    typedWord.style.display = "none"; 
    skipButton.style.display = "none";
    playAgain.style.display = "inline-block";
    clearInterval(counter);
    // getStored();
}
}



playAgain.addEventListener("click", () => {
    window.location.reload();
    playAgain.style.display = "none";
    localStorage.removeItem("storedScore");
    localStorage.removeItem("storedTime");
});



// JS Date 
let date = new Date();
let hours = date.getHours();
let timeInterval = document.getElementById("timeInterval");


if (hours >= 1 && hours <=5){
    timeInterval.innerHTML = "Hello, Early Morning 🥱";
}else if(hours >= 6 && hours <12){
    timeInterval.innerHTML = "Hello, Good Morning 🌞";
}else if(hours >= 12 && hours <=14){
    timeInterval.innerHTML = "Hello, Good Afternoon ☀️";
}else if(hours >= 15 && hours <=18){
    timeInterval.innerHTML = "Hello, Good Evening 🌤️";
}else if(hours >= 19 && hours <=24 || hours == 0){
    timeInterval.innerHTML =  "Hello, Good Night 🌜";
}else{
    timeInterval.innerHTML =  "Hello, Warmly welcome to";
}

let showUser = document.querySelector("#show");
function popUp(){
    let username = prompt("What is your name?");
    localStorage.setItem("storedUser", username)
    showUser.innerHTML = username;
}
 
let storedUser = localStorage.getItem("storedUser");
if(storedUser){
    showUser.innerHTML = storedUser;
}else{
showUser.innerHTML = "User";
}




