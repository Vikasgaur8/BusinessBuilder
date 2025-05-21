var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 2500);
}

function toggleNav() {
  var navMenu = document.getElementById("navMenu");
  navMenu.classList.toggle("show"); // Toggle the "show" class
}

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    { threshold: 0.5 } // Adjust this threshold as needed
  );

  const serviceBoxes = document.querySelectorAll(".service-box");
  serviceBoxes.forEach((box) => observer.observe(box));
});

document.addEventListener("DOMContentLoaded", () => {
  const logos = document.querySelectorAll(".logo-item");
  logos.forEach((logo, index) => {
    logo.style.animationDelay = `${index * 0.3}s`; // Adjust delay time for staggered effect
  });
});

// Sample properties data for dynamic cards
const residential = [
  // {
  //   image: "images/images/m3mfullimg.jpg",
  //   image2: "images/images/m3m.png",
  //   name: "TEStt",
  //   type: "Commercial",
  //   location:
  //     "M3M International Financial Center, Sector-66, Golf Course Road (Extn.), Gurugram-122101, Haryana, India",
  //   // price: "On Request",
  //   link: "/knowMorePage/knowMore.html",
  // },
  {
    // image: "https://via.placeholder.com/400x180", // Replace with actual image URLs
    image: "images/images/Signature Global.jpg", // Replace with actual image URLs
    image2: "images/images/sglogo.svg", // Replace with actual image URLs
    name: "SIGNATURE GLOBAL",
    type: "Commercial",
    // location: "Sector 113 , On Main Dwarka Expressway",
    location:
      "Unit No.101, Ground Floor, Tower-A, Signature Tower South City-1, Gurugram, Haryana",
    // price: "₹ 2.94 Cr*",
    link: "/knowMorePage/signatureglobal.html",
  },
  {
    image: "images/images/The edition fullimg.jpg",
    image2: "images/images/The edition.jpg",
    name: "SMART WORLD THE EDITION",
    type: "Commercial",
    location: "Badshahpur, Sector 66, Gurugram, Haryana",
    // price: "₹ 1.52 Cr*",
    link: "/knowMorePage/smartWorldTheEdition.html",
  },
  {
    image: "images/images/Eldeco fullimg.jpg",
    image2: "images/images/Eldeco.jpg",
    name: "ELDECO",
    type: "Commercial",
    location: "Eldeco, Sector 80, Gurugram, Haryana",
    // price: "₹ 1.45 Cr*",
    link: "/knowMorePage/eldeco.html",
  },
  {
    image: "images/images/m3mfullimg.jpg",
    image2: "images/images/m3m.png",
    name: "M3M India Pvt. Ltd.",
    type: "Commercial",
    location:
      "M3M International Financial Center, Sector-66, Golf Course Road (Extn.), Gurugram-122101, Haryana, India",
    // price: "On Request",
    link: "/knowMorePage/m3mIndia.html",
  },
  {
    image: "images/images/tulipfullimg.avif",
    image2: "images/images/Tulip2.jpg",
    name: "TULIP CRIMSON",
    type: "Commercial",
    location: "Tulip Crimson, Sector 70 Gurugram, Haryana",
    // price: "On Request",
    link: "/knowMorePage/tulipCrimson.html",
  },
  {
    image: "images/images/paras_fullimg.jpg",
    image2: "images/images/PARAS.svg",
    name: "PARAS BUILDTECH",
    type: "Commercial",
    location:
      "11th Floor, TOWER-B, Paras Twin Towers, Golf Course Rd, Suncity, Sector 54, Gurugram, Haryana",
    // price: "On Request",
    link: "/knowMorePage/parasBuildtech.html",
  },
  {
    image: "images/images/godrej_fullimg.jpg",
    image2: "images/images/godrej.jpg",
    name: "GODREJ PROPERTIES",
    type: "Commercial",
    location: "Sector 43, Golf Course Road, Gurugram",
    // price: "On Request",
    link: "/knowMorePage/godrejProperties.html",
  },
  {
    image: "images/images/twin_tower_fullimg.png",
    image2: "images/images/twin_tower.png",
    name: "SIGNATURE GLOBAL TWIN TOWER DXP",
    type: "Commercial",
    location: "Sector 84, Gurugram",
    // price: "On Request",
    link: "/knowMorePage/signatureGlobalTwinTower.html",
  },
];

const properties = [
  // {
  //   image: "images/images/m3mfullimg.jpg",
  //   image2: "images/images/m3m.png",
  //   name: "TEStt",
  //   type: "Residential",
  //   location:
  //     "M3M International Financial Center, Sector-66, Golf Course Road (Extn.), Gurugram-122101, Haryana, India",
  //   // price: "On Request",
  //   link: "/knowMorePage/knowMore.html",
  // },
  {
    // image: "https://via.placeholder.com/400x180", // Replace with actual image URLs
    image: "images/images/Signature Global.jpg", // Replace with actual image URLs
    image2: "images/images/sglogo.svg", // Replace with actual image URLs
    name: "SIGNATURE GLOBAL",
    type: "Residential",
    // location: "Sector 113 , On Main Dwarka Expressway",
    location:
      "Unit No.101, Ground Floor, Tower-A, Signature Tower South City-1, Gurugram, Haryana",
    // price: "₹ 2.94 Cr*",
    link: "/knowMorePage/signatureglobal.html",
  },
  {
    image: "images/images/The edition fullimg.jpg",
    image2: "images/images/The edition.jpg",
    name: "SMART WORLD THE EDITION",
    type: "Residential",
    location: "Badshahpur, Sector 66, Gurugram, Haryana",
    // price: "₹ 1.52 Cr*",
    link: "/knowMorePage/smartWorldTheEdition.html",
  },
  {
    image: "images/images/Eldeco fullimg.jpg",
    image2: "images/images/Eldeco.jpg",
    name: "ELDECO",
    type: "Residential",
    location: "Eldeco, Sector 80, Gurugram, Haryana",
    // price: "₹ 1.45 Cr*",
    link: "/knowMorePage/eldeco.html",
  },
  {
    image: "images/images/m3mfullimg.jpg",
    image2: "images/images/m3m.png",
    name: "M3M India Pvt. Ltd.",
    type: "Residential",
    location:
      "M3M International Financial Center, Sector-66, Golf Course Road (Extn.), Gurugram-122101, Haryana, India",
    // price: "On Request",
    link: "/knowMorePage/m3mIndia.html",
  },
  {
    image: "images/images/tulipfullimg.avif",
    image2: "images/images/Tulip2.jpg",
    name: "TULIP CRIMSON",
    type: "Residential",
    location: "Tulip Crimson, Sector 70 Gurugram, Haryana",
    // price: "On Request",
    link: "/knowMorePage/tulipCrimson.html",
  },
  {
    image: "images/images/paras_fullimg.jpg",
    image2: "images/images/PARAS.svg",
    name: "PARAS BUILDTECH",
    type: "Residential",
    location:
      "11th Floor, TOWER-B, Paras Twin Towers, Golf Course Rd, Suncity, Sector 54, Gurugram, Haryana",
    // price: "On Request",
    link: "/knowMorePage/parasBuildtech.html",
  },
  {
    image: "images/images/godrej_fullimg.jpg",
    image2: "images/images/godrej.jpg",
    name: "GODREJ PROPERTIES",
    type: "Residential",
    location: "Sector 43, Golf Course Road, Gurugram",
    // price: "On Request",
    link: "/knowMorePage/godrejProperties.html",
  },
  {
    image: "images/images/twin_tower_fullimg.png",
    image2: "images/images/twin_tower.png",
    name: "SIGNATURE GLOBAL TWIN TOWER DXP",
    type: "Residential",
    location: "Sector 84, Gurugram",
    // price: "On Request",
    link: "/knowMorePage/signatureGlobalTwinTower.html",
  },
];

// Function to create a card
function createCard(property) {
  const card = document.createElement("div");
  card.classList.add("card");

  const picFrame = document.createElement("div");
  picFrame.classList.add("picframe");

  const spanOverlay = document.createElement("span");
  spanOverlay.classList.add("overlay");

  const pfText = document.createElement("span");
  pfText.classList.add("pfText");

  const projectName = document.createElement("span");
  projectName.classList.add("projectName");
  projectName.textContent = property.name;
  pfText.appendChild(projectName);
  spanOverlay.appendChild(pfText);
  picFrame.appendChild(spanOverlay);

  const image = document.createElement("img");
  image.classList.add("image-container");
  image.src = property.image;
  image.alt = property.name;
  picFrame.appendChild(image);

  card.appendChild(picFrame);

  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content");

  // const imageCenter = document.createElement("img");
  // imageCenter.src = property.image2;
  // imageCenter.alt = property.name;
  // cardContent.appendChild(imageCenter);

  const titleRow = document.createElement("div");
  titleRow.classList.add("card-titleRow");

  const title = document.createElement("h3");
  title.textContent = property.name;
  titleRow.appendChild(title);

  const price = document.createElement("h4");
  price.textContent = property.price;
  price.classList.add("price");
  titleRow.appendChild(price);

  cardContent.appendChild(titleRow);

  const type = document.createElement("h5");
  type.textContent = property.type;
  cardContent.appendChild(type);

  const locationRow = document.createElement("div");
  titleRow.classList.add("card-locationRow");

  const location = document.createElement("p");
  location.classList.add("location");
  const locationIcon = document.createElement("i");
  locationIcon.classList.add("fa", "fa-map-marker"); // location icon css
  location.appendChild(locationIcon);

  const locationText = document.createTextNode(` ${property.location}`);
  location.appendChild(locationText);
  // cardContent.appendChild(location);
  locationRow.appendChild(location);

  const button = document.createElement("span");
  button.classList.add("knowMore");
  const a = document.createElement("a");
  //   button.classList.add("a");
  //a.href = "/Property-main/knowMorePage/knowMore.html";
  a.href = property.link;
  a.target = "_black";
  a.textContent = "Know More";

  button.appendChild(a);
  locationRow.appendChild(button);
  cardContent.appendChild(locationRow);

  card.appendChild(cardContent);

  return card;
}

// Populate the cards in the card container
const cardContainer = document.getElementById("cardContainer");
residential.forEach((property) => {
  const card = createCard(property);
  cardContainer.appendChild(card);
});

// *******************************-------------Customer slider----------*****************************************

// const slider = document.getElementById("Cslider");
// const cards = document.querySelectorAll(".Ccard");
// const totalCards = cards.length;
// const visibleCards = 3; // Number of cards visible at a time
// const cardWidth = 100 / visibleCards; // Each card width as a percentage
// let currentIndex = 0;

// // Duplicate the cards to create an infinite sliding effect
// for (let i = 0; i < visibleCards; i++) {
//   const clone = cards[i].cloneNode(true);
//   slider.appendChild(clone);
// }

// const slideCards = () => {
//   currentIndex++;

//   // Smoothly slide the cards
//   slider.style.transform = `translateX(-${currentIndex * cardWidth}%)`;
//   slider.style.transition = "transform 0.5s ease-in-out";

//   // Reset to the start seamlessly when reaching the cloned cards
//   if (currentIndex === totalCards) {
//     setTimeout(() => {
//       slider.style.transition = "none";
//       slider.style.transform = `translateX(0)`;
//       currentIndex = 0;
//     }, 500); // Wait for the animation to complete
//   }
// };

// // Auto-slide every 3 seconds
// setInterval(slideCards, 4000);


        const slider = document.querySelector('.slider');
        const cards = document.querySelectorAll(".Scard");
        const prevBtn = document.querySelector('.prev');
        const nextBtn = document.querySelector('.next');
        const dotsContainer = document.querySelector('.dots');

        let isDragging = false;
        let startPosition = 0;
        let currentTranslate = 0;
        let previousTranslate = 0;
        let animationID = null;
        let currentIndex = 0;
        let autoPlayInterval;
        let isTransitioning = false;
        let cardsPerView = window.innerWidth >= 768 ? 3 : 1;

        // Initialize slider
        function initializeSlider() {
            cardsPerView = window.innerWidth >= 768 ? 3 : 1;
            updateDots();
            updateActiveStates();
            setSliderPosition();
        }

        // Create dots based on sliding pattern
        function updateDots() {
            dotsContainer.innerHTML = '';
            const numDots = cards.length - (cardsPerView - 1);
            
            for (let i = 0; i < numDots; i++) {
                const dot = document.createElement('div');
                dot.classList.add('dot');
                dot.addEventListener('click', () => {
                    if (!isTransitioning) {
                        goToSlide(i);
                    }
                });
                dotsContainer.appendChild(dot);
            }
        }

        function updateActiveStates() {
            // Update cards
            cards.forEach((card, index) => {
                if (cardsPerView === 3) {
                    // For desktop/tablet: activate current and next two cards
                    card.classList.toggle('active', 
                        index >= currentIndex && 
                        index < currentIndex + cardsPerView);
                } else {
                    // For mobile: activate only current card
                    card.classList.toggle('active', index === currentIndex);
                }
            });

            // Update dots
            document.querySelectorAll('.dot').forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        function startAutoPlay() {
            clearInterval(autoPlayInterval);
            autoPlayInterval = setInterval(() => {
                if (!isTransitioning) {
                    moveSlider('next');
                }
            }, 2000);
        }

        function stopAutoPlay() {
            clearInterval(autoPlayInterval);
        }

        // Event listeners
        window.addEventListener('resize', () => {
            initializeSlider();
        });

        slider.addEventListener('touchstart', touchStart);
        slider.addEventListener('touchmove', touchMove);
        slider.addEventListener('touchend', touchEnd);
        slider.addEventListener('mousedown', touchStart);
        slider.addEventListener('mousemove', touchMove);
        slider.addEventListener('mouseup', touchEnd);
        slider.addEventListener('mouseleave', touchEnd);

        cards.forEach(card => {
            card.addEventListener('mouseenter', stopAutoPlay);
            card.addEventListener('mouseleave', startAutoPlay);
        });

        prevBtn.addEventListener('click', () => {
            if (!isTransitioning) moveSlider('prev');
        });
        nextBtn.addEventListener('click', () => {
            if (!isTransitioning) moveSlider('next');
        });

        function touchStart(event) {
            if (isTransitioning) return;
            stopAutoPlay();
            isDragging = true;
            startPosition = getPositionX(event);
            slider.classList.add('dragging');
            animationID = requestAnimationFrame(animation);
        }

        function touchMove(event) {
            if (!isDragging) return;
            const currentPosition = getPositionX(event);
            currentTranslate = previousTranslate + currentPosition - startPosition;
        }

        function touchEnd() {
            if (!isDragging) return;
            isDragging = false;
            slider.classList.remove('dragging');
            cancelAnimationFrame(animationID);
            
            const movedBy = currentTranslate - previousTranslate;
            if (Math.abs(movedBy) > 100) {
                if (movedBy < 0) {
                    moveSlider('next');
                } else {
                    moveSlider('prev');
                }
            } else {
                setSliderPosition();
            }
            startAutoPlay();
        }

        function getPositionX(event) {
            return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
        }

        function animation() {
            setSliderPosition();
            if (isDragging) requestAnimationFrame(animation);
        }

        function setSliderPosition() {
            const cardWidth = cards[0].offsetWidth + 20; // Including margin
            currentTranslate = -currentIndex * cardWidth;
            previousTranslate = currentTranslate;
            slider.style.transform = `translateX(${currentTranslate}px)`;
        }

        function goToSlide(index) {
            if (isTransitioning) return;
            isTransitioning = true;
            currentIndex = index;
            setSliderPosition();
            updateActiveStates();
            setTimeout(() => {
                isTransitioning = false;
            }, 500);
        }

        function moveSlider(direction) {
            if (isTransitioning) return;
            isTransitioning = true;
            
            if (direction === 'next') {
                currentIndex = (currentIndex + 1) % (cards.length - (cardsPerView - 1));
            } else {
                currentIndex = (currentIndex - 1 + (cards.length - (cardsPerView - 1))) % (cards.length - (cardsPerView - 1));
            }
            
            setSliderPosition();
            updateActiveStates();

            setTimeout(() => {
                isTransitioning = false;
            }, 500);
        }

        // Initialize slider on load
        initializeSlider();
        startAutoPlay();
    

// *******************************-------------Dynamic buttons show cards----------*******************************

function populateCards(propertyArray) {
  const cardContainer = document.getElementById("cardContainer");

  // Clear existing cards
  cardContainer.innerHTML = "";

  // Create and append new cards
  propertyArray.forEach((property) => {
    const card = createCard(property);
    cardContainer.appendChild(card);
  });
}

document.getElementById("commercial").addEventListener("click", () => {
  populateCards(properties);

  // Update button active states
  document.getElementById("commercial").classList.add("active");
  document.getElementById("residential").classList.remove("active");
});

document.getElementById("residential").addEventListener("click", () => {
  populateCards(residential);

  // Update button active states
  document.getElementById("residential").classList.add("active");
  document.getElementById("commercial").classList.remove("active");
});

// Initial population with commercial properties
populateCards(properties);
document.getElementById("commercial").classList.add("active");

// Navigate to Contact HTML
function navigateToPage() {
  window.location.href = "/knowMorePage/contact.html"; // Replace with the URL of your page
}
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
});



const picframeElements = document.querySelectorAll('.picframe');  
const overlayElements = document.querySelectorAll('.overlay'); 

function updateOverlayWidth() {
  picframeElements.forEach((picframeElement, index) => {
    const overlayElement = overlayElements[index];
    const picframeWidth = picframeElement.offsetWidth;
    overlayElement.style.width = `${picframeWidth}px`;
    console.log(`Updated width of overlay at index ${index}: ${picframeWidth}px`);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  updateOverlayWidth();
});
window.addEventListener('resize', updateOverlayWidth);
overlayElements.forEach(overlayElement => {
  overlayElement.addEventListener('mouseover', function() {
    overlayElement.style.opacity = 0.9;
  });

  overlayElement.addEventListener('mouseout', function() {
    overlayElement.style.opacity = 0;
  });
});
