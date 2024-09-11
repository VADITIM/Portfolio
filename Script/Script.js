document.addEventListener("DOMContentLoaded", () => 
{
    Cursor();
    Scroll();
    // Parallax();
    ProjectsContainerFunction();
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
      const Hover = document.querySelectorAll('.about-front-BG');
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
      const elements = document.querySelectorAll(".about-front-BG");
      const about = document.querySelector("about");
    
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
        const elements = document.querySelectorAll(".about-back-BG");
      
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
        const elements = document.querySelectorAll(".about-back-BG");
      
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
      const elements = document.querySelectorAll(".about-back-BG");
    
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

    function ProfileBoxOut() {

      function BoxFrontOut() {
      const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };
    
      const observerID = document.getElementById("observerProfileOut");
    
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
            TopLeft.forEach((el) => el.classList.add("profile1Out"));
            TopRight.forEach((el) => el.classList.add("profile2Out"));
            BottomLeft.forEach((el) => el.classList.add("profile3Out"));
            BottomRight.forEach((el) => el.classList.add("profile4Out"));
    
            profile1Hover.forEach((el) => el.classList.add("profile1HoverOut"));
            profile2Hover.forEach((el) => el.classList.add("profile2HoverOut"));
            profile3Hover.forEach((el) => el.classList.add("profile3HoverOut"));
            profile4Hover.forEach((el) => el.classList.add("profile4HoverOut"));
          } 
          else {
            TopLeft.forEach((el) => el.classList.remove("profile1Out"));
            TopRight.forEach((el) => el.classList.remove("profile2Out"));
            BottomLeft.forEach((el) => el.classList.remove("profile3Out"));
            BottomRight.forEach((el) => el.classList.remove("profile4Out"));
    
            profile1Hover.forEach((el) => el.classList.remove("profile1HoverOut"));
            profile2Hover.forEach((el) => el.classList.remove("profile2HoverOut"));
            profile3Hover.forEach((el) => el.classList.remove("profile3HoverOut"));
            profile4Hover.forEach((el) => el.classList.remove("profile4HoverOut"));
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
    
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            TopLeft.forEach((el) => el.classList.add("boxTopLeftOut"));
            TopRight.forEach((el) => el.classList.add("boxTopRightOut"));
            BottomLeft.forEach((el) => el.classList.add("boxBottomLeftOut"));
            BottomRight.forEach((el) => el.classList.add("boxBottomRightOut"));
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

    const display = document.querySelectorAll(".projectDisplay");

    const projectHeadingBG = document.querySelectorAll(".project-1-heading-BG");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
        { 
            project1.forEach((el) => el.classList.add("project-1-containerShow")); 
            project2.forEach((el) => el.classList.add("project-2-containerShow")); 
            project3.forEach((el) => el.classList.add("project-3-containerShow")); 

            projectHeadingBG.forEach((e) => e.classList.remove("project1HeadingShow"));
          }
        else 
        { 
          project1.forEach((el) => el.classList.remove("project-1-containerShow")); 
          project2.forEach((el) => el.classList.remove("project-2-containerShow")); 
          project3.forEach((el) => el.classList.remove("project-3-containerShow")); 

          display.forEach((e) => e.classList.remove("projectDisplayShow"));

          projectHeadingBG.forEach((e) => e.classList.remove("project1HeadingShow"));
        }
      });
    }, observerOptions);

    observer.observe(observerID);
  }      
    
  function ProjectShowcaseOnClick() {
    const project1 = document.querySelector(".project-1");
    const project1Heading = document.querySelector(".project-1-heading-BG");
    
    const project2 = document.querySelector(".project-2");
    const project2Heading = document.querySelector(".project-2-heading-BG");

    const project3 = document.querySelector(".project-3");
    const project3Heading = document.querySelector(".project-3-heading-BG");
  
    project1.addEventListener("click", function() 
    {
      if (!project1.classList.contains("projectDisplayShow")) 
      {
        project1.classList.add("projectDisplayShow");
        project1Heading.classList.add("project1HeadingShow");
      } else {
        project1.classList.remove("projectDisplayShow");
        project1Heading.classList.remove("project1HeadingShow");
      }
    });
  
    project2.addEventListener("click", function() {
      if (!project2.classList.contains("projectDisplayShow")) 
        {
        project2.classList.add("projectDisplayShow");
        project2Heading.classList.add("project2HeadingShow");
      } 
      else 
      {
        project2.classList.remove("projectDisplayShow");
        project2Heading.classList.remove("project2HeadingShow");
      }
    });
  
    project3.addEventListener("click", function() {
      if (!project3.classList.contains("projectDisplayShow")) 
        {
        project3.classList.add("projectDisplayShow");
        project3Heading.classList.add("project3HeadingShow");
      } 
      else 
      {
        project3.classList.remove("projectDisplayShow");
        project3Heading.classList.remove("project3HeadingShow");
      }
    });
  }

  function ProjectBackground() {
      const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };

      const observerID = document.getElementById("observerProjects");
      const elements = document.querySelectorAll(".projectBG");
    
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            elements.forEach((el) => el.classList.add("projectBGShow"));
          }
          else {
            elements.forEach((el) => el.classList.remove("projectBGShow"));
          }
        });
      }, observerOptions);
    
      observer.observe(observerID);
  }

  function ProjectBackground2() {
    const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };

    const observerID = document.getElementById("observerProjects");
    const elements = document.querySelectorAll(".projectBG2");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          elements.forEach((el) => el.classList.add("projectBG2Show"));
        }
        else {
          elements.forEach((el) => el.classList.remove("projectBG2Show"));
        }
      });
    }, observerOptions);
  
    observer.observe(observerID);
  }
}


