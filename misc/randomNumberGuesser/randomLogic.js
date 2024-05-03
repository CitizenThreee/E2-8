function ValidateNumberInput(value){
    value = Math.min(Math.max(value, 1), 10);
    document.getElementById("numberInput").value = value;
    console.log(value);
}

function Guess() {
    let guess = document.getElementById("numberInput").value;
    let randomNum = GetRandomInt(1, 10);

    console.log(randomNum);

    let messageBoxElement = document.getElementById("messageBox");
    let messageElement = document.getElementById("message");

    if(guess == randomNum){
        messageBoxElement.style.backgroundColor = "rgb(54, 179, 61)";
        messageElement.innerHTML = "Correct!!";
    }
    else
    {
        messageBoxElement.style.backgroundColor = "rgb(201, 53, 53)";
        messageElement.innerHTML = "Nope, try again";
    }

    messageBoxElement.style.display = "block";
}

function GetRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}