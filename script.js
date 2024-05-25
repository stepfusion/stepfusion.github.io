// --------------------------------------------------Sidebar------------------------------------------
function openNav() {
    const sidePanel = document.getElementById("mysidepanel");
    if (sidePanel) {
      sidePanel.style.left = "0";
    } else {
      console.error("sidepanel not found");
    }
  }
  function closeNav() {
    const sidePanel = document.getElementById("mysidepanel");
    if (sidePanel) {
      sidePanel.style.left = "-320px";
    }
  }
  
  // --------------------------------------------------slider------------------------------------------
  
  // var slideIndex = 1;
  // showDivs(slideIndex);
  
  // function plusDivs(n) {
  //   showDivs((slideIndex += n));
  // }
  
  // function showDivs(n) {
  //   var i;
  //   var x = document.getElementsByClassName("menu-image-visa");
  //   if (n > x.length) {
  //     slideIndex = 1;
  //   }
  //   if (n < 1) {
  //     slideIndex = x.length;
  //   }
  //   for (i = 0; i < x.length; i++) {
  //     x[i].style.display = "none";
  //   }
  //   x[slideIndex - 1].style.display = "block";
  // }
  
  // --------------------------------------------------Contact------------------------------------------
  
  // ---------------------------------------backend----------------------------------
  // Get a reference to the database
  const database = firebase.database();
  const form = document.querySelector("#newsletter");
  
  // Add submit event listener
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
  
    // Get input field value
    const email = document.querySelector("#email").value;
  
    // Save data to Firebase
    database.ref("newsletter").push({
      email,
    });
    alert("You are successfully subscribed.");
  });