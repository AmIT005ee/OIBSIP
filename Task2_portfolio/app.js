tsParticles.load("tsparticles", {

background: {
color: "#000"
},

particles: {

number: {
value: 120
},

color: {
value: ["#ffffff","#a855f7","#38bdf8"]
},

shape: {
type: "circle"
},

opacity: {
value: 0.6
},

size: {
value: { min: 1, max: 3 }
},

links: {
enable: true,
distance: 150,
color: "#ffffff",
opacity: 0.2,
width: 1
},

move: {
enable: true,
speed: 1,
direction: "none",
outModes: "out"
}
 
},

interactivity: {

events: {
onHover: {
enable: true,
mode: "grab"
},
onClick: {
enable: true,
mode: "push"
}
},

modes: {
grab: {
distance: 150,
links: {
opacity: 0.5
}
},
push: {
quantity: 4
}
}

}

});

let typed = new Typed(".typing", {
  strings: [
    "Web Developer",
    "Frontend Developer",
    "JavaScript Developer",
    "UI Designer"
  ],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1500,
  loop: true
});