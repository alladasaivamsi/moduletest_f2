const container = document.querySelector('#container');
const container1 = document.querySelector('#container1');
let isClicked = true;

//image1 - registration form code
let register = function () 
{
    if(isClicked) 
    {
        container1.style.display = "block";
        container2.style.display = "none";
        container3.style.display = "none";
        container4.style.display = "none";
        popup.style.display = "none";
        submitBtn.style.display = "none";
        isClicked = false;
    }

    else 
    {
        container1.style.display = "none";
        isClicked = true;
    }
}

function addUser(event){
    event.preventDefault();

    var fname = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    
    localStorage.setItem('Name', fname);
    localStorage.setItem('Email', email);
    localStorage.setItem('Username', username);
}

//image2 - displayData code
const container2 = document.querySelector('#container2');

let display = function () 
{
    if(isClicked) 
    {
        container2.style.display = "block";
        container1.style.display = "none";
        container3.style.display = "none";
        container4.style.display = "none";
        popup.style.display = "none";
        submitBtn.style.display = "none";
        isClicked = false;
        namevalue.innerHTML = localStorage.getItem("Name");
        emailvalue.innerHTML = localStorage.getItem("Email");
        usernamevalue.innerHTML = localStorage.getItem("Username");
    }

    else 
    {
        container2.style.display = "none";  
        isClicked = true;
    }
}

//iamge3 - dice code
const container3 = document.querySelector('#container3');

let dice = function() {
    if(isClicked) 
    {
        container1.style.display = "none";
        container2.style.display = "none";
        container3.style.display = "block";
        container4.style.display = "none";
        popup.style.display = "none";
        submitBtn.style.display = "none";
        isClicked = false;
        totalAttempts ++;  
        attemptNumber.innerHTML = totalAttempts;
        totalAttempts = totalAttempts; 
    }

    else 
    {
        container3.style.display = "none";
        isClicked = true;
    }
}

let totalPlayerScore = 0;
let totalChances = 0;
let totalAttempts = 0;

const playerScore = document.getElementById('playerScore');
const chanceNumber = document.getElementById('chanceNumber');
const attemptNumber = document.getElementById('attemptNumber');


let dicegame = function() {
    //image 3
    //Generate a random number in a dice from 1 to 6
    const randomNum = Math.floor(Math.random() * 6) + 1;

    const diceImage = "dice" + randomNum + ".png";

    document.querySelectorAll('img')[0].setAttribute("src" , diceImage);

    totalPlayerScore += randomNum;
    playerScore.textContent = totalPlayerScore;

    
    totalChances ++;  
    chanceNumber.textContent = totalChances;

    if(chanceNumber.textContent >= 3 && playerScore.textContent <= 10) {
        alert("Try again after scoring more than 10.");
        alert("You have only one chance!")
        container3.style.display = "none";
    }

    else if(chanceNumber.textContent >= 3 && playerScore.textContent > 10) {
        alert("Congralations!You score is more than 10 and you are able to click the fourth image.");
        container3.style.display = "none";
    }

    image3.addEventListener('click' , () => {
        attemptNumber.textContent = '1';
        chanceNumber.textContent = '0';
        playerScore.textContent = '0';
    })
}

//coupon code
const container4 = document.querySelector('#container4');
const cpnCode = document.getElementById('cpnCode');
const cpnBtn = document.querySelector('#cpnBtn');

let coupon = function() {
    if(isClicked) 
    {
        container1.style.display = "none";
        container2.style.display = "none";
        container3.style.display = "none";
        container4.style.display = "block";
        submitBtn.style.display = "block";
        popup.style.display = "none";
        isClicked = false;
        cpnCode.innerHTML = localStorage.getItem("couponName");
    }

    else 
    {
        container4.style.display = "none";
        submitBtn.style.display = "none";
        isClicked = true;
    }
}

cpnCode.textContent = createRandomCoupon(12);    

function createRandomCoupon(stringLength) {
    var randomCoupon = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz';
    for(var i, i = 0; i < stringLength; i++)
    {
        randomCoupon += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    console.log(randomCoupon);
    localStorage.setItem('couponName', randomCoupon);
    
    navigator.clipboard.writeText(cpnCode.innerHTML);
}

//popup code
const popup = document.querySelector('#pop-up');
const submitBtn = document.getElementById('submitBtn');

let openPopup = function() {
    if(isClicked) 
    {
        container.style.display = "none";
        container1.style.display = "none";
        container2.style.display = "none";
        container3.style.display = "none";
        container4.style.display = "none";
        submitBtn.style.display = "none";
        popup.style.display = "block";
        isClicked = false;
    }

    else 
    {
        popup.style.display = "none";
        isClicked = true;
    }
}

let closePopup = function() {
    if(isClicked) 
    {
        container.style.display = "block";
        container1.style.display = "none";
        container2.style.display = "none";
        container3.style.display = "none";
        container4.style.display = "none";
        submitBtn.style.display = "none";
        popup.style.display = "none";
        isClicked = false;
    }

    else 
    {
        container.style.display = "none";
        isClicked = true;
    }
}