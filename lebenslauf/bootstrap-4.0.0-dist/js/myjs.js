"use strict"


const element = document.getElementById('currentTime');

setInterval(function () {
    const currentDate = new Date();
    element.innerText = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
}, 1000);

window.alert("Hallo Welt!");

/*
{
const header = document.getElementById("kreativ");
const body = document.getElementById("body");

dark.addEventListener("click", (eo) => {
    body.classList.toggle("header");

});
}


{
    Changecolor.addEventListener("mausemove",(eo) => {
        header.style.display ="block";
    });
}

{header.addEventListener("mauseout", (eo) => {
    header.style.display = "none";
});}

  const header = document.querySelector(".myheader");
  
  
 header.addEventListener("click", (eo) => {
      header.style.backgroundColor = "hsl(170,20%, 55%)";   	
      const random = Math.random(Math.random() * 360);
      header.style.backgroundColor = "hsl(${random},20%, 55%)";   	

  })

*/

















  