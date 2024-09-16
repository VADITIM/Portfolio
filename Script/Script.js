document.addEventListener("DOMContentLoaded", () => {
  Cursor();
  Scroll();
  ProjectsContainerFunction();
  // ScrollBack(); // Initialize ScrollBack function
});

function ScrollToPoint() {
  console.log('ScrollToPoint function called');
  
  // Check if the window is already at the top to prevent unnecessary scrolls
  if (window.pageYOffset !== 0) {
      window.scrollTo({
          top: 0,
          behavior: 'smooth' // Try smooth scroll first
      });

      // Fallback for browsers that don't support smooth scrolling
      setTimeout(() => {
          if (window.pageYOffset !== 0) {
              window.scrollTo(0, 0); // Scroll instantly if smooth fails
          }
      }, 1000); // 1 second timeout to ensure smooth scroll has been applied
  } else {
      console.log('Already at the top of the page, no scrolling needed');
  }
}

function ScrollBack() {
  const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0.1 // Trigger when 10% of the target is visible
  };

  const observerID = document.getElementById("observerScrollBack");

  if (!observerID) {
      console.error('observerScrollBack element not found');
      return;
  }

  const observerCallback = (entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              console.log('Target is intersecting, calling ScrollToPoint'); // Debugging log
              ScrollToPoint();
          }
      });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(observerID);

  // Manually check if the element is already visible when the page loads
  const rect = observerID.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;

  if (rect.top >= 0 && rect.bottom <= windowHeight) {
      console.log('Element is already visible on page load, calling ScrollToPoint'); // Debugging log
      ScrollToPoint();
  }
}


function Parallax() {
    document.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const triggerPoint = -300;

        document.querySelectorAll('.text').forEach((el, index) => {
            const offset = (scrollY - el.parentElement.offsetTop + triggerPoint) * 0.2;
            const rotation = offset * 0.3;

            el.style.transform = `rotateX(${rotation}deg)`;
        });
    });
}function Cursor() {
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
      const Hover = document.querySelectorAll('.about-backBG');
      const about = document.querySelectorAll('.about');

      const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  Hover.forEach((el) => el.classList.add("about-front-BGShow"));
                  about.forEach((el) => el.classList.add("aboutHidden"));
              } 
              else {
                  about.forEach((el) => el.classList.remove("aboutHidden"));
                  Hover.forEach((el) => el.classList.remove("about-front-BGShow"));
              }
          });
      }, observerOptions);

      observer.observe(observerID);
  }

  function AboutMeOut2() {
    const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1, };

    const observerID = document.getElementById('observerAboutOut');
    const about = document.querySelectorAll('.about');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                about.forEach((el) => el.classList.add("aboutHidden"));
            } 
            else {
                about.forEach((el) => el.classList.remove("aboutHidden"));
            }
        });
    }, observerOptions);

    observer.observe(observerID);
}
AboutMeOut2();

    function AboutMeOut() {
      const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };
    
      const observerID = document.getElementById("observerAboutOut");
      const elements = document.querySelectorAll(".about-backBG");
    
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
              elements.forEach((el) => {el.classList.add("about-back-BGOut");});
          } 
          else {
              elements.forEach((el) => { el.classList.remove("about-back-BGOut");});
          }
        });
      }, observerOptions);
    
      observer.observe(observerID);
    }

    AboutMeOut();

    function AboutMeBG() {
        const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };
      
        const observerID = document.getElementById("observerabout-front-BG");
        const elements = document.querySelectorAll(".about-frontBG");
      
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              elements.forEach((el) => el.classList.add("about-back-BGShow"));
            } 
            else {
              elements.forEach((el) => el.classList.remove("about-back-BGShow"));
            }
          });
        }, observerOptions);
      
        observer.observe(observerID);
      }
          
      function AboutMeBGOut() {
        const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };
      
        const observerID = document.getElementById("observerabout-back-BGOut2");
        const elements = document.querySelectorAll(".about-frontBG");
      
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              elements.forEach((el) => el.classList.add("about-back-BGOut"));
            } 
            else {
              elements.forEach((el) => el.classList.remove("about-back-BGOut"));
            }
          });
        }, observerOptions);
      
        observer.observe(observerID);
      }
      
    AboutMeBGOut();
          
        
    function BlueBackHold() {
      const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };
    
      const observerID = document.getElementById("observerabout-back-BGOut2");
      const elements = document.querySelectorAll(".about-frontBG");
    
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            elements.forEach((el) => el.classList.add("about-back-BGOut"));
          } 
          else {
            elements.forEach((el) => el.classList.remove("about-back-BGOut"));
          }
        });
      }, observerOptions);
    
      observer.observe(observerID);
    }
    
  BlueBackHold();


  function ContactMe() {
    const ObserverOptions = { root: null, rootMargin: "0px", threshold: 0.1, };

    const observerID = document.getElementById("observerContactMe");
    const elements = document.querySelectorAll(".contact-me");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          elements.forEach((el) => el.classList.add("contactMeShow"));
        } 
        else {
          elements.forEach((el) => el.classList.remove("contactMeShow"));
        }
      });
    }, ObserverOptions);
    observer.observe(observerID);
  }
  ContactMe();

  function ContactMeOut() {
    const ObserverOptions = { root: null, rootMargin: "0px", threshold: 0.1, };

    const observerID = document.getElementById("observerContactMeOut");
    const elements = document.querySelectorAll(".contact-me");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          elements.forEach((el) => el.classList.add("contactMeOut"));
        } 
        else {
          elements.forEach((el) => el.classList.remove("contactMeOut"));
        }
      });
    }, ObserverOptions);
    observer.observe(observerID);
  }
  ContactMeOut();

  function GitHubClick() {
    const github = document.querySelector(".github");

    github.addEventListener("click", () => {
      github.classList.add("githubClick");
      setTimeout(() => {
        github.classList.remove("githubClick");
      }, 500);
    });
  }
  GitHubClick();

  function TelegramClick() {
    const telegram = document.querySelector(".telegram");

    telegram.addEventListener("click", () => {
      telegram.classList.add("telegramClick");
      setTimeout(() => {
        telegram.classList.remove("telegramClick");
      }, 1000);
    });
  }
  TelegramClick();


    function Logo() {
        const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };
      
        const observerID = document.getElementById("observerLogo");
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
    
      const observerID = document.getElementById("observerLogoOut");
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

        const TopLeftBack = document.querySelectorAll(".profile1Backside");	
        const TopRightBack = document.querySelectorAll(".profile2Backside");	
        const BottomLeftBack = document.querySelectorAll(".profile3Backside");
        const BottomRightBack = document.querySelectorAll(".profile4Backside");
      
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              TopLeft.forEach((el) => el.classList.add("profile1Hidden"));
              TopRight.forEach((el) => el.classList.add("profile2Hidden"));
              BottomLeft.forEach((el) => el.classList.add("profile3Hidden"));
              BottomRight.forEach((el) => el.classList.add("profile4Hidden"));
              
              TopLeft.forEach((el) => el.classList.remove("profile1Click"));
              TopRight.forEach((el) => el.classList.remove("profile2Click"));
              BottomLeft.forEach((el) => el.classList.remove("profile3Click"));
              BottomRight.forEach((el) => el.classList.remove("profile4Click"));

              TopLeftBack.forEach((el) => el.classList.remove("profile1BacksideClick"));
              TopRightBack.forEach((el) => el.classList.remove("profile2BacksideClick"));
              BottomLeftBack.forEach((el) => el.classList.remove("profile3BacksideClick"));
              BottomRightBack.forEach((el) => el.classList.remove("profile4BacksideClick"));
            } 
            else {
              TopLeft.forEach((el) => el.classList.remove("profile1Hidden"));
              TopRight.forEach((el) => el.classList.remove("profile2Hidden"));
              BottomLeft.forEach((el) => el.classList.remove("profile3Hidden"));
              BottomRight.forEach((el) => el.classList.remove("profile4Hidden"));
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

    function ProfileBoxOut() {

      function BoxFrontOut() {
      const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };
    
      const observerID = document.getElementById("observerProfileOut");
    
      const TopLeft = document.querySelectorAll(".profile1");
      const TopRight = document.querySelectorAll(".profile2");
      const BottomLeft = document.querySelectorAll(".profile3");
      const BottomRight = document.querySelectorAll(".profile4");

      const TopLeftBack = document.querySelectorAll(".profile1Backside");
      const TopRightBack = document.querySelectorAll(".profile2Backside");
      const BottomLeftBack = document.querySelectorAll(".profile3Backside");
      const BottomRightBack = document.querySelectorAll(".profile4Backside");
    
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            TopLeft.forEach((el) => el.classList.add("profile1Out"));
            TopRight.forEach((el) => el.classList.add("profile2Out"));
            BottomLeft.forEach((el) => el.classList.add("profile3Out"));
            BottomRight.forEach((el) => el.classList.add("profile4Out"));

            TopLeft.forEach((el) => el.classList.remove("profile1Click"));
            TopRight.forEach((el) => el.classList.remove("profile2Click"));
            BottomLeft.forEach((el) => el.classList.remove("profile3Click"));
            BottomRight.forEach((el) => el.classList.remove("profile4Click"));

            TopLeftBack.forEach((el) => el.classList.remove("profile1BacksideClick"));
            TopRightBack.forEach((el) => el.classList.remove("profile2BacksideClick"));
            BottomLeftBack.forEach((el) => el.classList.remove("profile3BacksideClick"));
            BottomRightBack.forEach((el) => el.classList.remove("profile4BacksideClick"));

          } 
          else {
            TopLeft.forEach((el) => el.classList.remove("profile1Out"));
            TopRight.forEach((el) => el.classList.remove("profile2Out"));
            BottomLeft.forEach((el) => el.classList.remove("profile3Out"));
            BottomRight.forEach((el) => el.classList.remove("profile4Out"));
          }
        });
      }, observerOptions);
    
      observer.observe(observerID);
      }

      function BoxBackOut() {
      const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };
    
      const observerID = document.getElementById("observerProfileOut");
    
      const TopLeft = document.querySelectorAll(".box_top_left");
      const TopRight = document.querySelectorAll(".box_top_right");
      const BottomLeft = document.querySelectorAll(".box_bottom_left");
      const BottomRight = document.querySelectorAll(".box_bottom_right");

      const TopLeftBack = document.querySelectorAll(".profile1Backside");
      const TopRightBack = document.querySelectorAll(".profile2Backside");
      const BottomLeftBack = document.querySelectorAll(".profile3Backside");
      const BottomRightBack = document.querySelectorAll(".profile4Backside");

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            TopLeft.forEach((el) => el.classList.add("boxTopLeftOut"));
            TopRight.forEach((el) => el.classList.add("boxTopRightOut"));
            BottomLeft.forEach((el) => el.classList.add("boxBottomLeftOut"));
            BottomRight.forEach((el) => el.classList.add("boxBottomRightOut"));
            
            TopLeftBack.forEach((el) => el.classList.remove("profile1BacksideClick"));
            TopRightBack.forEach((el) => el.classList.remove("profile2BacksideClick"));
            BottomLeftBack.forEach((el) => el.classList.remove("profile3BacksideClick"));
            BottomRightBack.forEach((el) => el.classList.remove("profile4BacksideClick"));

          } 
          else {
            TopLeft.forEach((el) => el.classList.remove("boxTopLeftOut"));
            TopRight.forEach((el) => el.classList.remove("boxTopRightOut"));
            BottomLeft.forEach((el) => el.classList.remove("boxBottomLeftOut"));
            BottomRight.forEach((el) => el.classList.remove("boxBottomRightOut"));
          }
        });
      }, observerOptions);
    
      observer.observe(observerID);
      }
      BoxFrontOut();
      BoxBackOut();
  }
  ProfileBoxOut();

  function ProfileClick() {

    const TopLeft = document.querySelector(".profile1");
    const TopRight = document.querySelector(".profile2");
    const BottomLeft = document.querySelector(".profile3");
    const BottomRight = document.querySelector(".profile4");

    const TopLeftBack = document.querySelector(".profile1Backside");
    const TopRightBack = document.querySelector(".profile2Backside");
    const BottomLeftBack = document.querySelector(".profile3Backside");
    const BottomRightBack = document.querySelector(".profile4Backside");

    TopLeft.addEventListener("click", () => {
      TopLeft.classList.toggle("profile1Click");
      TopLeftBack.classList.toggle("profile1BacksideClick");
    });

    TopRight.addEventListener("click", () => {
      TopRight.classList.toggle("profile2Click");
      TopRightBack.classList.toggle("profile2BacksideClick");
    });

    BottomLeft.addEventListener("click", () => {
      BottomLeft.classList.toggle("profile3Click");
      BottomLeftBack.classList.toggle("profile3BacksideClick");
    });

    BottomRight.addEventListener("click", () => {
      BottomRight.classList.toggle("profile4Click");
      BottomRightBack.classList.toggle("profile4BacksideClick");
    });

  }
  ProfileClick();


  function Introduction() {
    const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };

    const observerID = document.getElementById("observerIntroduction");
    const elements = document.querySelectorAll(".introduction");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          elements.forEach((el) => el.classList.add("introductionHidden"));
        }
        else {
          elements.forEach((el) => el.classList.remove("introductionHidden"));
        }
      });
    }, observerOptions);
  
    observer.observe(observerID);
}

  function introductionOut() {
    const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };

    const observerID = document.getElementById("observerIntroductionOut");
    const elements = document.querySelectorAll(".introduction");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          elements.forEach((el) => el.classList.add("introductionOut"));
        }
        else {
          elements.forEach((el) => el.classList.remove("introductionOut"));
        }
      });
    }, observerOptions);

    observer.observe(observerID);
  }
  LogoOut();
    Introduction();
    introductionOut();
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




function ProjectsContainerFunction() {
  MyProjectsText();

  ProjectsContainer();
  ProjectShowcaseOnClick();

  ProjectBackground();
  ProjectBackground2();
  
  function MyProjectsText() {
    const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };

    const observerID = document.getElementById("observerMyProjects");
    const elements = document.querySelectorAll(".myProjects");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          elements.forEach((el) => el.classList.add("myProjectsShow"));
        }
        else {
          elements.forEach((el) => el.classList.remove("myProjectsShow"));
        }
      });
    }, observerOptions);
  
    observer.observe(observerID);
  }
    
    function ProjectsContainer() {
    const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };

    const observerID = document.getElementById("observerAllProjects");
    
    const project1 = document.querySelectorAll(".project-1-container");
    const project2 = document.querySelectorAll(".project-2-container");
    const project3 = document.querySelectorAll(".project-3-container");
    const projectUpcoming1 = document.querySelectorAll(".project-upcoming-1-container");

    const display = document.querySelectorAll(".projectDisplay");

    const project1HeadingBG = document.querySelectorAll(".project-1-heading-BG");
    const project2HeadingBG = document.querySelectorAll(".project-2-heading-BG");
    const project3HeadingBG = document.querySelectorAll(".project-3-heading-BG");
    const projectUpcoming1HeadingBG = document.querySelectorAll(".project-upcoming-1-heading-BG");

    const main3FrontBG = document.querySelector(".main-3-frontBG");
    const main3BackBG = document.querySelector(".main-3-backBG");

    const project1Text = document.querySelectorAll(".project-1-text");
    const project2Text = document.querySelectorAll(".project-2-text");
    const project3Text = document.querySelectorAll(".project-3-text");

    const projectUpcoming1Text = document.querySelectorAll(".project-upcoming-1-text");

    const year24 = document.querySelectorAll(".year24");
    const year25 = document.querySelectorAll(".year25");
    const year26 = document.querySelectorAll(".year26");
    const year27 = document.querySelectorAll(".year27");
    const upcoming = document.querySelectorAll(".upcoming");

    const year24Line = document.querySelectorAll(".year-24-line");
    const year25Line = document.querySelectorAll(".year-25-line");
    const upcomingLine = document.querySelectorAll(".upcoming-line");

    const myProjects = document.querySelectorAll(".myProjects");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
        { 
          project1.forEach((el) => el.classList.add("project-1-containerShow")); 
          project2.forEach((el) => el.classList.add("project-2-containerShow")); 
          project3.forEach((el) => el.classList.add("project-3-containerShow")); 

          projectUpcoming1.forEach((el) => el.classList.add("project-upcoming-1-containerShow")); 

          project1HeadingBG.forEach((e) => e.classList.remove("project1HeadingShow"));
          project2HeadingBG.forEach((e) => e.classList.remove("project2HeadingShow"));
          project3HeadingBG.forEach((e) => e.classList.remove("project3HeadingShow"));
          
          projectUpcoming1HeadingBG.forEach((e) => e.classList.remove("projectUpcoming1HeadingShow"));

          project1Text.forEach((e) => e.classList.remove("project1TextHide"));
          project2Text.forEach((e) => e.classList.remove("project2TextHide"));
          project3Text.forEach((e) => e.classList.remove("project3TextHide"));

          project1Text.forEach((e) => e.classList.add("project-1-text"));
          project2Text.forEach((e) => e.classList.add("project-2-text"));

          projectUpcoming1Text.forEach((e) => e.classList.remove("projectUpcoming1TextHide"));
          projectUpcoming1Text.forEach((e) => e.classList.add("project-upcoming-1-text"));

          year24.forEach((e) => e.classList.add("year24Show"));
          year25.forEach((e) => e.classList.add("year25Show"));
          upcoming.forEach((e) => e.classList.add("upcomingShow"));

          year24Line.forEach((e) => e.classList.add("year24lineShow"));
          year25Line.forEach((e) => e.classList.add("year25lineShow"));
          upcomingLine.forEach((e) => e.classList.add("upcominglineShow"));
          myProjects.forEach((e) => e.classList.add("myProjectsShow"));

        }
        else 
        { 
          project1.forEach((el) => el.classList.remove("project-1-containerShow")); 
          project2.forEach((el) => el.classList.remove("project-2-containerShow")); 
          project3.forEach((el) => el.classList.remove("project-3-containerShow")); 
          
          projectUpcoming1.forEach((el) => el.classList.remove("project-upcoming-1-containerShow")); 

          display.forEach((e) => e.classList.remove("projectDisplayShow"));

          project1HeadingBG.forEach((e) => e.classList.remove("project1HeadingShow"));
          project2HeadingBG.forEach((e) => e.classList.remove("project2HeadingShow"));
          project3HeadingBG.forEach((e) => e.classList.remove("project3HeadingShow"));

          projectUpcoming1HeadingBG.forEach((e) => e.classList.remove("projectUpcoming1HeadingShow"));

          main3FrontBG.classList.remove("main3FrontBGClick");
          main3BackBG.classList.remove("main3BackBGClick");
  
          project1Text.forEach((e) => e.classList.add("project1TextHide"));
          project2Text.forEach((e) => e.classList.add("project2TextHide"));
          project3Text.forEach((e) => e.classList.add("project3TextHide"));
          
          project1Text.forEach((e) => e.classList.remove("project1TextClick"));
          project2Text.forEach((e) => e.classList.remove("project2TextClick"));
          project3Text.forEach((e) => e.classList.remove("project3TextClick"));

          projectUpcoming1Text.forEach((e) => e.classList.add("projectUpcoming1TextHide"));
          projectUpcoming1Text.forEach((e) => e.classList.remove("projectUpcoming1TextClick"));

          year24.forEach((e) => e.classList.remove("year24Show"));
          year25.forEach((e) => e.classList.remove("year25Show"));
          upcoming.forEach((e) => e.classList.remove("upcomingShow"));

          year24Line.forEach((e) => e.classList.remove("year24lineShow"));
          year25Line.forEach((e) => e.classList.remove("year25lineShow"));
          upcomingLine.forEach((e) => e.classList.remove("upcominglineShow"));

        }
      });
    }, observerOptions);

    observer.observe(observerID);
  }      
    
  // CLICK FUNCTION
  function ProjectShowcaseOnClick() {
    const projects = [
      {
        element: document.querySelector(".project-1"),
        heading: document.querySelector(".project-1-heading-BG"),
        text: document.querySelector(".project-1-text"),
        details: document.querySelector(".project1Details"),
        headingClass: "project1HeadingShow",
        textClass: "project1TextClick",
        detailsClass: "project1DetailsClick",        
      },
      {
        element: document.querySelector(".project-2"),
        heading: document.querySelector(".project-2-heading-BG"),
        text: document.querySelector(".project-2-text"),
        details: document.querySelector(".project2Details"),
        headingClass: "project2HeadingShow",
        textClass: "project2TextClick",
        detailsClass: "project2DetailsClick",        
      },
      {
        element: document.querySelector(".project-3"),
        heading: document.querySelector(".project-3-heading-BG"),
        text: document.querySelector(".project-3-text"),
        details: document.querySelector(".project3Details"),
        headingClass: "project3HeadingShow",
        textClass: "project3TextClick",
        detailsClass: "project3DetailsClick",        
      },
      {
        element: document.querySelector(".project-upcoming-1"),
        heading: document.querySelector(".project-upcoming-1-heading-BG"),
        text: document.querySelector(".project-upcoming-1-text"),
        details: document.querySelector(".projectUpcoming1Details"),
        headingClass: "projectUpcoming1HeadingShow",
        textClass: "projectUpcoming1TextClick",
        detailsClass: "projectUpcoming1DetailsClick",        
      },
    ];
  
    const main3FrontBG = document.querySelector(".main-3-frontBG");
    const main3BackBG = document.querySelector(".main-3-backBG");
    const myProjects = document.querySelector(".myProjects");
  
    function toggleProjectDisplay(project) {
      const { element, heading, text, details, headingClass, textClass, detailsClass } = project;
      const isDisplayed = element.classList.contains("projectDisplayShow");
  
      element.classList.toggle("projectDisplayShow", !isDisplayed);
      heading.classList.toggle(headingClass, !isDisplayed);
      text.classList.toggle(textClass, !isDisplayed);
      details.classList.toggle(detailsClass, !isDisplayed);
  
      main3FrontBG.classList.toggle("main3FrontBGClick", !isDisplayed);
      main3BackBG.classList.toggle("main3BackBGClick", !isDisplayed);
      myProjects.classList.toggle("myProjectsShow", isDisplayed);
    }
  
    projects.forEach((project) => {
      project.element.addEventListener("click", () => toggleProjectDisplay(project));
    });
  }
  
  function ProjectBackground() {
      const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };

      const observerID = document.getElementById("observerProjects");
      const elements = document.querySelectorAll(".main-3-frontBG");
    
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            elements.forEach((el) => el.classList.add("main3FrontBGShow"));
          }
          else {
            elements.forEach((el) => el.classList.remove("main3FrontBGShow"));
          }
        });
      }, observerOptions);
    
      observer.observe(observerID);
  }

  function ProjectBackground2() {
    const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };

    const observerID = document.getElementById("observerProjects");
    const elements = document.querySelectorAll(".main-3-backBG");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          elements.forEach((el) => el.classList.add("main3BackBGShow"));
        }
        else {
          elements.forEach((el) => el.classList.remove("main3BackBGShow"));
        }
      });
    }, observerOptions);
  
    observer.observe(observerID);
  }
}


