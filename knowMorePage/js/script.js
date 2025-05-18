// function toggleNav() {
//     console.log("HIHIHIHIHIIHIHIHIHI")
//   var navMenu = document.getElementById("navMenu");
//   navMenu.classList.toggle("show"); // Toggle the "show" class
// }

// function toggleNav() {
//   console.log("HIHIHIHIHIIHIHIHIHI");
//   var navMenu = document.getElementById("navMenu");
//   navMenu.classList.toggle("show"); // Toggle the "show" class
// }


var toggle=0;
function toggleNav() {
  var menuBtn = document.getElementById("menu-btn");
  var navMenuHeader = document.getElementById("menu-header-btn");
  var mainMenu = document.getElementById("mainmenu");
  menuBtn.classList.toggle("clicked"); // Toggle the "show" class
  navMenuHeader.classList.toggle("height-auto"); // Toggle the "show" class
  mainMenu.classList.toggle("menu-show");
  //   document.getElementById("mainmenu").style.display = "block";
  //   mainMenu.classList.toggle("visible");
  if (toggle == 0) {
      document.getElementById("mainmenu").style.display = "block";
      toggle = 1;
  } else {
      document.getElementById("mainmenu").style.display = "none";
       toggle = 0;
  }
}

 function updateMenuVisibility() {
   var menuBtn = document.getElementById("menu-btn");
   var navMenuHeader = document.getElementById("menu-header-btn");
   var mainMenu = document.getElementById("mainmenu");

   if (window.innerWidth < 995) {
     // Remove visibility:hidden style when the width is less than 769px
  menuBtn.classList.toggle("/*clicked*/"); // Toggle the "show" class
  navMenuHeader.classList.toggle("/*height-auto*/"); // Toggle the "show" class
  mainMenu.classList.toggle("/*menu-show*/");
  document.getElementById("mainmenu").style.display = "none";
     menuBtn.style.visibility = "visible";
   } else {
     // Optionally, you can restore it to hidden if the width is larger than 768px
     menuBtn.style.visibility = "hidden";
   }
 }

 // Run the function initially
 updateMenuVisibility();

 // Add an event listener to handle window resizing
 window.addEventListener("resize", updateMenuVisibility);


// ------------------------SEND EMAIL----------------------------------------

//  document
//    .getElementById("ContactQuery")
//    .addEventListener("submit", async (event) => {
//      event.preventDefault();

//      const formData = {
//        name: document.getElementById("query_name").value,
//        email: document.getElementById("query_email").value,
//        phone: document.getElementById("query_phone").value,
//        message: document.getElementById("query_msg").value,
//      };

//      try {
//        const response = await fetch("http://localhost:3000/send-email", {
//          method: "POST",
//          headers: { "Content-Type": "application/json" },
//          body: JSON.stringify(formData),
//        });

//        if (response.ok) {
//          alert("Your message has been sent!");
//        } else {
//          alert("Failed to send your message. Try again.");
//        }
//      } catch (error) {
//        console.error("Error:", error);
//        alert("An error occurred. Please try again.");
//      }
//    });

     const serviceID = "service_yqerga7";
    const templateID = "template_gca1afq";

  (function() {
      emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
    })();

    document.getElementById("contactForm").addEventListener("submit", function(event) {
        console.log("chal bhai chla")
      event.preventDefault();

      const templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
      };

      emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
        .then(function(response) {
          alert("Your message has been sent!");
        }, function(error) {
          alert("Failed to send your message. Please try again.");
        });
    });





    function submit(){
        const btn = document.getElementById("ContactQuery");
        document
          .getElementById("formSubmit")
          .addEventListener("submit", function (event) {
            console.log("chal bhai chla");
            event.preventDefault();
    
            btn.value = "Sending...";
    
            const serviceID = "service_yqerga7";
            const templateID = "template_gca1afq";
    
            emailjs.sendForm(serviceID, templateID, this).then(
              () => {
                btn.value = "Send Email";
                alert("Sent!");
              },
              (err) => {
                btn.value = "Send Email";
                alert(JSON.stringify(err));
              }
            );
          });
    }
