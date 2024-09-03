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
    
    function ScrollName() {
        const observerOptions = {
            root: null,
            rootMargin: "0% 0% 0% 0%",
            threshold: 0.1, 
        };

        const observerID = document.getElementById('observerName');
        const element = document.querySelectorAll('.name');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    element.forEach((element) => {
                        element.classList.add('nameShow');
                    });
                } else {
                    element.forEach((element) => {
                        element.classList.remove('nameShow');
                    });
                }
            });
        }, observerOptions);

        observer.observe(observerID);
    }

    function ScrollInfo() {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1, 
        };

        const observerID = document.getElementById('observerInfo');
        const element = document.querySelectorAll('.infoHidden');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    element.forEach((element) => {
                        element.classList.add('infoShow');
                    });
                } else {
                    element.forEach((element) => {
                        element.classList.remove('infoShow');
                    });
                }
            });
        }, observerOptions);

        observer.observe(observerID);
    }
 
    function ScrollCS() {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1, 
        };

        const observerID = document.getElementById('observerCS');
        const element = document.querySelectorAll('.info_CS');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    element.forEach((element) => {
                        element.classList.add('CSShow');
                    });
                } else {
                    element.forEach((element) => {
                        element.classList.remove('CSShow');
                    });
                }
            });
        }, observerOptions);

        observer.observe(observerID);
    }

    function ScrollFrontend() {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1, 
        };

        const observerID = document.getElementById('observerFrontend');
        const element = document.querySelectorAll('.info_frontend');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    element.forEach((element) => {
                        element.classList.add('frontendShow');
                    });
                } else {
                    element.forEach((element) => {
                        element.classList.remove('frontendShow');
                    });
                }
            });
        }, observerOptions);

        observer.observe(observerID);
    }

    function ScrollDesigner() {
        const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1, };

        const observerID = document.getElementById('observerDesigner');
        const element = document.querySelectorAll('.info_game_designer');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => 
                {
                    if (entry.isIntersecting) 
                        {
                            element.forEach((element) => 
                            {
                                element.classList.add('designerShow');
                            });
                        } 
                        else 
                        {
                            element.forEach((element) => 
                            {
                                element.classList.remove('designerShow');
                            });
                        }
                    });
        }, observerOptions);
        observer.observe(observerID);
    }


    function ScrollAbout() {
        const observerOptions = {
            root: null,
            rootMargin: "0% 0% 0% 0%",
            threshold: 0.1, 
        };

        const observerID = document.getElementById('observerAbout');
        const BG = document.querySelectorAll('.aboutBG');
        const about = document.querySelectorAll('.about');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    about.forEach((about) => {
                        about.classList.add('aboutHidden');
                    BG.forEach(BG => {
                        BG.classList.add("aboutBGShow")
                    });
                    });
                } else {
                    about.forEach((about) => {
                        about.classList.remove('aboutHidden');
                    BG.forEach(BG => {
                        BG.classList.remove("aboutBGShow")
                    });
                    });
                }
            });
        }, observerOptions);

        observer.observe(observerID);
    }

    function AboutLine() {
        const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1, };

        const observerID = document.getElementById(     "observerAboutBG"      );
        const Element = document.querySelectorAll(      ".aboutBG2"    );

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => 
                {
                    if (entry.isIntersecting) 
                        {
                            Element.forEach((Element) => 
                            {
                                Element.classList.add(      "aboutBG2Show"   );
                            });
                        } 
                        else 
                        {
                            Element.forEach((Element) => 
                            {
                                Element.classList.remove(       "aboutBG2Show"   );
                            });
                        }
                    });
        }, observerOptions);
        observer.observe(observerID);
    }
    

    function ScrollLogo() {
        const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1, };

        const observerID = document.getElementById(     "observerNameLogo"     );
        const Element = document.querySelectorAll(      ".nameLogo"         );

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => 
                {
                    if (entry.isIntersecting) 
                        {
                            Element.forEach((Element) => 
                            {
                                Element.classList.add(    "logoShow"  );
                            });
                        } 
                        else 
                        {
                            Element.forEach((Element) => 
                            {
                                Element.classList.remove(   "logoShow"    );
                            });
                        }
                    });
        }, observerOptions);
        observer.observe(observerID);
    }

    function ScrollInfoLine() {
        const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1, };

        const observerID = document.getElementById("observerInfoLine");
        const Element = document.querySelectorAll(".info_line");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => 
                {
                    if (entry.isIntersecting) 
                        {
                            Element.forEach((Element) => 
                            {
                                Element.classList.add("infoLineShow");
                            });
                        } 
                        else 
                        {
                            Element.forEach((Element) => 
                            {
                                Element.classList.remove("infoLineShow");
                            });
                        }
                    });
        }, observerOptions);
        observer.observe(observerID);
    }


    function ScrollBackground() {
        
        function Accomplishment() {
            const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1, };

            const observerID = document.getElementById(     "observerAccomplishment"      );
            const Element = document.querySelectorAll(      ".accomplishments"    );
            const BG = document.querySelectorAll(      ".accomplishmentsBG"    );

            const observer = new IntersectionObserver((entries) => 
                {
                    entries.forEach((entry) => 
                    {
                        if (entry.isIntersecting) 
                        {
                            Element.forEach((Element) => 
                            {
                                Element.classList.add('accomplishmentsShow');
                            BG.forEach(BG => 
                            {
                                BG.classList.add("accomplishmentsBGShow")
                            });
                            });
                        } 
                        else 
                        {
                            Element.forEach((Element) => 
                            {
                                Element.classList.remove('accomplishmentsShow');
                            BG.forEach(BG => 
                            {
                                BG.classList.remove("accomplishmentsBGShow")
                            });
                            });
                        }
                    });
                }, observerOptions);
            observer.observe(observerID);
        }
        
        function Skills() {
            const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1, };

            const observerID = document.getElementById(     "observerSkills"      );
            const Element = document.querySelectorAll(      ".personal_skills"    );
            const BG = document.querySelectorAll(      ".personal_skillsBG"    );

            const observer = new IntersectionObserver((entries) => 
                {
                    entries.forEach((entry) => 
                    {
                        if (entry.isIntersecting) 
                        {
                            Element.forEach((Element) => 
                            {
                                Element.classList.add('skillsShow');
                            BG.forEach(BG => 
                            {
                                BG.classList.add("skillsBGShow")
                            });
                            });
                        } 
                        else 
                        {
                            Element.forEach((Element) => 
                            {
                                Element.classList.remove('skillsShow');
                            BG.forEach(BG => 
                            {
                                BG.classList.remove("skillsBGShow")
                            });
                            });
                        }
                    });
                }, observerOptions);
            observer.observe(observerID);
        }
        
        function Expertise() {
            const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1, };

            const observerID = document.getElementById(     "observerExpertise"      );
            const Element = document.querySelectorAll(      ".design_expertise"    );
            const BG = document.querySelectorAll(      ".design_expertiseBG"    );

            const observer = new IntersectionObserver((entries) => 
                {
                    entries.forEach((entry) => 
                    {
                        if (entry.isIntersecting) 
                        {
                            Element.forEach((Element) => 
                            {
                                Element.classList.add('expertiseShow');
                            BG.forEach(BG => 
                            {
                                BG.classList.add("expertiseBGShow")
                            });
                            });
                        } 
                        else 
                        {
                            Element.forEach((Element) => 
                            {
                                Element.classList.remove('expertiseShow');
                            BG.forEach(BG => 
                            {
                                BG.classList.remove("expertiseBGShow")
                            });
                            });
                        }
                    });
                }, observerOptions);
            observer.observe(observerID);
        }
        
        function Developer() {
            const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1, };

            const observerID = document.getElementById(     "observerDeveloper"      );
            const Element = document.querySelectorAll(      ".developer_background"    );
            const BG = document.querySelectorAll(      ".developer_backgroundBG"    );

            const observer = new IntersectionObserver((entries) => 
                {
                    entries.forEach((entry) => 
                    {
                        if (entry.isIntersecting) 
                        {
                            Element.forEach((Element) => 
                            {
                                Element.classList.add('developerShow');
                            BG.forEach(BG => 
                            {
                                BG.classList.add("developerBGShow")
                            });
                            });
                        } 
                        else 
                        {
                            Element.forEach((Element) => 
                            {
                                Element.classList.remove('developerShow');
                            BG.forEach(BG => 
                            {
                                BG.classList.remove("developerBGShow")
                            });
                            });
                        }
                    });
                }, observerOptions);
            observer.observe(observerID);
        }



        Accomplishment();
        Skills();
        Expertise();
        Developer();
    }

    function Lines() {
        function TopLeft() {
            const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1, };

            const observerID = document.getElementById(      "observerllT"      );

            const Top = document.querySelectorAll(      ".leftLineTop"    );
            const Right = document.querySelectorAll(      ".leftLineRight"    );
            const Bottom = document.querySelectorAll(      ".leftLineBottom"    );
            const Left = document.querySelectorAll(      ".leftLineLeft"    );

            const observer = new IntersectionObserver((entries) => 
                {
                    entries.forEach((entry) => 
                    {
                        if (entry.isIntersecting) 
                        {
                            Top.forEach((Top) => 
                            {
                                Top.classList.add('leftLineTopHidden');
                            Right.forEach(Right => 
                            {
                                Right.classList.add("leftLineRightHidden")
                            });
                            Bottom.forEach(Bottom => 
                            {
                                Bottom.classList.add("leftLineBottomHidden")
                            });
                            Left.forEach(Left => 
                            {
                                Left.classList.add("leftLineLeftHidden")
                            });
                            });
                        } 
                        else 
                        {
                            Top.forEach((Top) => 
                            {
                                Top.classList.remove('leftLineTopHidden');
                            Right.forEach(Right => 
                            {
                                Right.classList.remove("leftLineRightHidden")
                            });
                            Bottom.forEach(Bottom => 
                            {
                                Bottom.classList.remove("leftLineBottomHidden")
                            });
                            Left.forEach(Left => 
                            {
                                Left.classList.remove("leftLineLeftHidden")
                            });
                            });
                        }
                    });
                }, observerOptions);
            observer.observe(observerID);
        }
        TopLeft();
    }


    function ScrollKeynotes() {
        const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1, };

        const observerID = document.getElementById(     "observerKeynotes"      );
        const Element = document.querySelectorAll(      ".keynotes"    );

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => 
                {
                    if (entry.isIntersecting) 
                        {
                            Element.forEach((Element) => 
                            {
                                Element.classList.add(      "keynotesHidden"   );
                            });
                        } 
                        else 
                        {
                            Element.forEach((Element) => 
                            {
                                Element.classList.remove(       "keynotesHidden"   );
                            });
                        }
                    });
        }, observerOptions);
        observer.observe(observerID);
    }

    ScrollKeynotes();
    Lines();
    ScrollLogo();
    ScrollAbout();
    AboutLine();
    ScrollCS();
    ScrollFrontend();
    ScrollDesigner();
    ScrollName();
    ScrollInfo();
    ScrollInfoLine()
    ScrollBackground();

// TEMPLATE---------------------------------------------------------------

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
}
