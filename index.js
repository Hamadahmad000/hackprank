


let user = prompt("Enter Your Name")


function hack() {
    setTimeout(() => {
        let mobile1 = document.getElementById("mobile1").innerText = "Innitializing Hack program...."
        
        
        document.getElementById("mobile1").style.boxShadow = "0px 0px 15px"
        
        
    }, 2000);
    setTimeout(() => {
        let mobile1 = document.getElementById("mobile2").innerText = "Hacking Username...."
        document.getElementById("mobile2").style.boxShadow = "0px 0px 15px"
        
    }, 4000);

    
    try{
    setTimeout(() => {
        let mobile1 = document.getElementById("mobile3").innerText = `Username Found : ${user} `
        document.getElementById("mobile3").style.boxShadow = "0px 0px 15px"
        
    }, 6000);
}catch(error){
alert("username is not defined")
}

    setTimeout(() => {
        let mobile1 = document.getElementById("mobile4").innerText = "Connecting To Facebook...."
        document.getElementById("mobile4").style.background = "red"
        document.getElementById("mobile4").style.boxShadow = "0px 0px 25px red"
       
    }, 8000);


    setTimeout(() => {
        document.getElementById("message").classList.remove("display-on")
    }, 10000);
}