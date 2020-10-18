//FULLPAGEJS

new fullpage("#fullpage", {
  // options here
  anchors: ["section1", "section2", "section3", "section4", "section5"],
  navigation: true,
  onLeave: function (origin, destination, direction) {
    var leavingSection = this;
    if (origin.index == 0 && direction == "down") {
      secondSectionTL.play();
    } else if (origin.index == 1 && direction == "down") {
      thirdSectionTL.play();
    } else if (origin.index == 2 && direction == "down") {
      fourthSectionTL.play();
    }
  },
});
fullpage_api.setAllowScrolling(false);

//PARTICLESJS
particlesJS.load("particles-js", "assets/particles.json");

// GSAP

const firstSectionTL = gsap.timeline();

firstSectionTL
  .from("#ciao", 0.75, {
    x: "-100%",
    ease: "back",
  })
  .from(
    "#giulio",
    0.75,
    {
      x: "100%",
      ease: "back",
    },
    "<0.4"
  )
  .from("#developer", 0.5, { y: "500px", ease: "power4" }, ">0.5")
  .fromTo("#arrow-wrapper", 2, { opacity: "0" }, { opacity: "1" }, ">0.6");

const secondSectionTL = gsap.timeline({ paused: "true" });

secondSectionTL
  .to("#pianist", {
    duration: 1,
    text: { value: "I trained to be a concert pianist" },
    onComplete: () => {
      document.getElementById("pianist").innerHTML =
        "I trained to be a concert pianist<span class='gpred'>.</span>";
    },
  })
  .from(
    "#twenty-twenty",
    1,
    { opacity: "0", x: "10%", ease: "power1" },
    ">0.25"
  )
  .from("#new-skills", 1, { opacity: "0", y: "30%", ease: "power2" }, "<0.55")
  .from("#arrow-wrapper-middle", 1, { opacity: "0" })
  .from(
    ".let-me-show-you",
    1,
    {
      opacity: "0",
    },
    "<"
  );

const thirdSectionTL = gsap.timeline({ paused: "true" });

thirdSectionTL
  .from(".carta", 1, { x: "-100vw", stagger: "0.2" })
  .from("#arrow-wrapper-third", 1, { opacity: "0" });

const fourthSectionTL = gsap.timeline({ paused: "true" });

fourthSectionTL
  .from(".carta1", 1, { x: "100vw", stagger: "0.2" })
  .from("#arrow-wrapper-fourth", 1, { opacity: "0" });
