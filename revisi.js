particlesJS("background", {

    particles: {
        number: {
            value:15, //number of particles (count)
            density: {
                enable: true,
                value_area: 300, //area where particles will be distributed
            },
        },
        color: {
            value: "#ffffff" // particles color
        },
        shape: {
            type: "triangle", //shape type
        },
        opacity: {
            value: 0.8, // base opacity of particles
            random: true,
            anum: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 5, // base size of particles
            random: true,
            anim: {
                enable: true,
                speed: 4,
                size_min: 0.3,
                sync: false,
            },
        },

        //connecting lines
        line_linked: {
            enable: true,
            distance: 150, // max distance between  linked particles
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
        },

        // particles movement
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "bounce", // behaviour when particles move out of the canvas
            bounce: false,
        },

    },

    //interactivity settings
    interactivity: {
        direct_on: "canvas",
        events: {
            onhover: {
                enable: true, //enable hover interactivity
                mode: "repulse",
            },
            onclick: {
                enable: true, //enable for click
                mode: "push", //push particles on click
            },
            resize: true, // resize particles animation on window resize
        },
    },

    // detect retina display
    retina_detect: true,

});