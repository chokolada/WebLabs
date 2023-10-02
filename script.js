const openClassName = "open";

const navLinks = document.getElementsByClassName("navItem");
const contactButton = document.getElementById("contactButton");

function toggleMenu() {
  for (const link of navLinks) {
    if (link.style.display === "none") {
      link.style.display = "block"; 
      setTimeout(()=>{
        link.style.opacity = 1;
      },1)
    } else {
      link.style.opacity = 0;
      setTimeout(()=>{
        link.style.display = "none";
      },1000)
    }
  }
}

// function visivleMenu() {
//   for (const link of navLinks) {
//     link.style.display = "block";
//     link.style.opacity = 0;
//     setTimeout(()=>{
//       link.style.opacity = 1
//     },1000)
//   }
// }
