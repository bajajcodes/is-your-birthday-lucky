const dob = document.getElementById("lucky-dob");
const fab_number = document.getElementById("lucky-number");
const checkBtn = document.getElementById("lucky-check");
const checkMessage = document.getElementById("lucky-message");
const luckyNumberLabel = document.getElementById("labLN");

// function toggleLuckyNumber(value){
//     luckyNumberLabel.style.display = value;
//     fab_number.style.display = value;
// }

// function toggleCheckBtn(value){
//     checkBtn.style.display = value;
// }

function message(msg){
    checkMessage.innerText = msg;
}

function checkDateOfBirth(dob){
    message("Enter your date of birth.");
    if(!dob){
        return false;
    }
    // toggleLuckyNumber("block");
    return true;
}

function checkLuckyNumber(luckyNumber){
        if(luckyNumber === 0){
            message("Lucky number cannot be zero.");
            return false;
        }else if(isNaN(luckyNumber)){
            message("Lucky number cannot be words.");
            return false;
        }
        // toggleCheckBtn("block");
        return true;
}


function calculateDOBSum(dob){
        dob = dob.replaceAll("-","");
        let sum = 0;
        for(let xi = 0; xi<dob.length; ++xi){
            // console.log(dob.charAt(xi));
            sum += Number(dob.charAt(xi));
            // console.log(sum);
        }
        return sum;
}


function checkBirthdayLucky(sum,luckyNumber){
    let res = sum % luckyNumber;
    console.log({sum},{luckyNumber});
    if(res !== 0){
        return false;
    }
    console.log("pass2 cleared");
    return true;
}

function isYourBirthdayLucky(){
    message("");

    let birthDate = dob.value;
    let luckyNumber = Number(fab_number.value);

    console.log({birthDate},{luckyNumber});
    
    if(checkDateOfBirth(birthDate) && checkLuckyNumber(luckyNumber)){
            message("");
            console.log("pass1 cleared");

            let sum = calculateDOBSum(birthDate);
            let resp = checkBirthdayLucky(sum,luckyNumber);
            if(resp){
                message("Your Birthday is lucky. 🙇")
            }else{
                message("Your Birthday is not lucky. 🤣")
            }
    }
}

// toggleLuckyNumber("none");
// toggleCheckBtn("none");
checkBtn.addEventListener("click",isYourBirthdayLucky);