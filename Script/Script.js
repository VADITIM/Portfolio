document.addEventListener("DOMContentLoaded", () => 
{
    Cursor();
    Scroll();
    // Parallax();
});

function Parallax() {
    document.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const triggerPoint = -300;
    
        document.querySelectorAll('.text').forEach((el, index) => {
        const offset = (scrollY - el.parentElement.offsetTop + triggerPoint) * 0.2;
        const rotation = offset *.3;
        
        el.style.transform = `rotateX(${rotation}deg)`;
        });
    });
}

function Cursor() {
    const cursorDot = document.querySelector("[dataCursorDot]");
    const cursorOutline = document.querySelector("[dataCursorOutline]");
    const snappables = document.querySelectorAll("[dataSnappable]");

    const snapThreshold = 30; // The distance within which the cursor starts snapping
    const snapForce = 0.2;    // The force with which the cursor moves towards the center

    let lastX = 0, lastY = 0, lastTime = 0;
    let snapping = false;

    window.addEventListener("mousedown", function () {
        cursorDot.classList.add("clickedDot");
        cursorOutline.classList.add("clickedOutline");
    });

    window.addEventListener("mouseup", function () {
        cursorDot.classList.remove("clickedDot");
        cursorOutline.classList.remove("clickedOutline");
    });

    window.addEventListener("mousemove", function (e) {
        const posX = e.clientX;
        const posY = e.clientY;

        let targetX = posX;
        let targetY = posY;

        snappables.forEach(snappable => {
            const rect = snappable.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const deltaX = centerX - posX;
            const deltaY = centerY - posY;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            const snappingRange = distance < snapThreshold;

            if (snappingRange) {
                snapping = true;
                targetX = centerX;  
                targetY = centerY;  
                cursorDot.style.transition = "top 1s ease, left 1s ease";
            }
        });

        if (!snapping) {
            cursorDot.classList.remove("snapped"); 
            cursorDot.style.transition =  "width 1s ease, height 1s ease, background-color 1s ease, left .1s ease, top .1s ease";
        }

        cursorDot.style.left = `${targetX}px`;
        cursorDot.style.top = `${targetY}px`;

        cursorOutline.animate({
            left: `${targetX}px`,
            top: `${targetY}px`
        }, { duration: 500, fill: "forwards" });

        lastX = targetX;
        lastY = targetY;
        lastTime = performance.now();
        snapping = false;
    });
}

function Scroll() {
    
    function Name() {
        const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1, };
      
        const observerID = document.getElementById("observerName");
        const elements = document.querySelectorAll(".name");
      
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              elements.forEach((el) => el.classList.add("nameShow"));
            } 
            else {
              elements.forEach((el) => el.classList.remove("nameShow"));
            }
          });
        }, observerOptions);
      
        observer.observe(observerID);
    }
      
    function MainInfoBG() {
        const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1, };
      
        const observerID = document.getElementById("observerInfo");
        const elements = document.querySelectorAll(".info_clipBG");
      
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              elements.forEach((el) => el.classList.add("infoShow"));
            } 
            else {
              elements.forEach((el) => el.classList.remove("infoShow"));
            }
          });
        }, observerOptions);
      
        observer.observe(observerID);
    }
      
    function ScrollCS() {
        const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1, };
      
        const observerID = document.getElementById("observerCS");
        const elements = document.querySelectorAll(".info_CS");
      
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              elements.forEach((el) => el.classList.add("CSShow"));
            } 
            else {
              elements.forEach((el) => el.classList.remove("CSShow"));
            }
          });
        }, observerOptions);
      
        observer.observe(observerID);
    }
      
    function ScrollFrontend() {
        const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1, };
      
        const observerID = document.getElementById("observerFrontend");
      
        if (!observerID) {
          console.error("Element with ID 'observerFrontend' not found.");
          return;
        }
      
        const elements = document.querySelectorAll(".info_frontend");
      
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              elements.forEach((el) => el.classList.add("frontendShow"));
            } 
            else {
              elements.forEach((el) => el.classList.remove("frontendShow"));
            }
          });
        }, observerOptions);
      
        observer.observe(observerID);
    }
      
    function ScrollDesigner() {
        const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };
      
        const observerID = document.getElementById("observerDesigner");
        const elements = document.querySelectorAll(".info_game_designer");
      
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              elements.forEach((el) => el.classList.add("designerShow"));
            } 
            else {
              elements.forEach((el) => el.classList.remove("designerShow"));
            }
          });
        }, observerOptions);
      
        observer.observe(observerID);
    }
      

    function AboutMe() {
        const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1, };

        const observerID = document.getElementById('observerAbout');
        const Hover = document.querySelectorAll('.aboutBG');
        const about = document.querySelectorAll('.about');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    about.forEach((el) =>  el.classList.add('aboutHidden'));
                    Hover.forEach((el) => el.classList.add("aboutBGShow"));
                } 
                else {
                    about.forEach((el) => el.classList.remove("aboutHidden"));
                    Hover.forEach((el) => el.classList.remove("aboutBGShow"));
                }
            });
        }, observerOptions);

        observer.observe(observerID);
    }

    function AboutMeBG() {
        const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };
      
        const observerID = document.getElementById("observerAboutBG");
        const elements = document.querySelectorAll(".aboutBG2");
      
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              elements.forEach((el) => el.classList.add("aboutBG2Show"));
            } 
            else {
              elements.forEach((el) => el.classList.remove("aboutBG2Show"));
            }
          });
        }, observerOptions);
      
        observer.observe(observerID);
      }
          
    function Logo() {
        const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };
      
        const observerID = document.getElementById("observerNameLogo");
        const elements = document.querySelectorAll(".logo");
      
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              elements.forEach((el) => el.classList.add("logoHide"));
            }
             else {
              elements.forEach((el) => el.classList.remove("logoHide"));
            }
          });
        }, observerOptions);
      
        observer.observe(observerID);
      }
      
      function LogoOut() {
        const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };
      
        const observerID = document.getElementById("observerNameLogoOut");
        const elements = document.querySelectorAll(".logo");
      
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
                elements.forEach((el) => {el.classList.add("logoOut");});
            } 
            else {
                elements.forEach((el) => { el.classList.remove("logoOut");});
            }
          });
        }, observerOptions);
      
        observer.observe(observerID);
      }
      

    function MainInfoAnker() {
        const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };
      
        const observerID = document.getElementById("observerInfoLine");
        const elements = document.querySelectorAll(".info_line");
      
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              elements.forEach((el) => el.classList.add("infoLineShow"));
            } 
            else {
              elements.forEach((el) => el.classList.remove("infoLineShow"));
            }
          });
        }, observerOptions);
      
        observer.observe(observerID);
    }
      

    function ProfileBox() {

        function BoxFront() {
        const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };
      
        const observerID = document.getElementById("observerProfile");
      
        const TopLeft = document.querySelectorAll(".profile1");
        const TopRight = document.querySelectorAll(".profile2");
        const BottomLeft = document.querySelectorAll(".profile3");
        const BottomRight = document.querySelectorAll(".profile4");
        const profile1Hover = document.querySelectorAll(".profile1Hover");
        const profile2Hover = document.querySelectorAll(".profile2Hover");
        const profile3Hover = document.querySelectorAll(".profile3Hover");
        const profile4Hover = document.querySelectorAll(".profile4Hover");
      
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              TopLeft.forEach((el) => el.classList.add("profile1Hidden"));
              TopRight.forEach((el) => el.classList.add("profile2Hidden"));
              BottomLeft.forEach((el) => el.classList.add("profile3Hidden"));
              BottomRight.forEach((el) => el.classList.add("profile4Hidden"));
      
              profile1Hover.forEach((el) => el.classList.add("profile1HoverHidden"));
              profile2Hover.forEach((el) => el.classList.add("profile2HoverHidden"));
              profile3Hover.forEach((el) => el.classList.add("profile3HoverHidden"));
              profile4Hover.forEach((el) => el.classList.add("profile4HoverHidden"));
            } 
            else {
              TopLeft.forEach((el) => el.classList.remove("profile1Hidden"));
              TopRight.forEach((el) => el.classList.remove("profile2Hidden"));
              BottomLeft.forEach((el) => el.classList.remove("profile3Hidden"));
              BottomRight.forEach((el) => el.classList.remove("profile4Hidden"));
      
              profile1Hover.forEach((el) => el.classList.remove("profile1HoverHidden"));
              profile2Hover.forEach((el) => el.classList.remove("profile2HoverHidden"));
              profile3Hover.forEach((el) => el.classList.remove("profile3HoverHidden"));
              profile4Hover.forEach((el) => el.classList.remove("profile4HoverHidden"));
            }
          });
        }, observerOptions);
      
        observer.observe(observerID);
        }

        function BoxBack() {
        const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };
      
        const observerID = document.getElementById("observerProfile");
      
        const TopLeft = document.querySelectorAll(".box_top_left");
        const TopRight = document.querySelectorAll(".box_top_right");
        const BottomLeft = document.querySelectorAll(".box_bottom_left");
        const BottomRight = document.querySelectorAll(".box_bottom_right");
      
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              TopLeft.forEach((el) => el.classList.add("boxTopLeftHidden"));
              TopRight.forEach((el) => el.classList.add("boxTopRightHidden"));
              BottomLeft.forEach((el) => el.classList.add("boxBottomLeftHidden"));
              BottomRight.forEach((el) => el.classList.add("boxBottomRightHidden"));
            } 
            else {
              TopLeft.forEach((el) => el.classList.remove("boxTopLeftHidden"));
              TopRight.forEach((el) => el.classList.remove("boxTopRightHidden"));
              BottomLeft.forEach((el) => el.classList.remove("boxBottomLeftHidden"));
              BottomRight.forEach((el) => el.classList.remove("boxBottomRightHidden"));
            }
          });
        }, observerOptions);
      
        observer.observe(observerID);
        }

        BoxFront();
        BoxBack();
    }

    function ScrollKeynotes() {
        const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };

        const observerID = document.getElementById("observerKeynotes");
        const elements = document.querySelectorAll(".keynotes");
      
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              elements.forEach((el) => el.classList.add("keynotesHidden"));
            }
            else {
              elements.forEach((el) => el.classList.remove("keynotesHidden"));
            }
          });
        }, observerOptions);
      
        observer.observe(observerID);
    }
          
    LogoOut();
    ScrollKeynotes();
    Logo();
    AboutMe();
    AboutMeBG();
    ScrollCS();
    ScrollFrontend();
    ScrollDesigner();
    Name();
    MainInfoBG();
    MainInfoAnker()
    ProfileBox();

// TEMPLATE---------------------------------------------------------------
}

    function WWW() {
        const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1, };

        const observerID = document.getElementById(     "observer"      );
        const Element = document.querySelectorAll(      ".class"    );

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => 
                {
                    if (entry.isIntersecting) 
                        {
                            Element.forEach((Element) => 
                            {
                                Element.classList.add(      "classHidden"   );
                            });
                        } 
                        else 
                        {
                            Element.forEach((Element) => 
                            {
                                Element.classList.remove(       "classHidden"   );
                            });
                        }
                    });
        }, observerOptions);
        observer.observe(observerID);
    }
// TEMPLATE---------------------------------------------------------------
