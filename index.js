particlesJS("background", {

    particles: {
        nuber: {
            value: 15, //number of particles (ount)
            density: {
                enable: true, 
                value_area: 300, // area where particles will be distributed
            },
        },

        color: {
            value: "#ffffff", //particles color

        },
        shape: {
            type: "triangle", //shape type
        },
        opacity: {
            value: 0.8, //base opacity of particles 
            random: true, 
            anum: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                synce: false,
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
            
            //connecting lines
            line_linked: {
                enable: true,
                disatance: 150, //max distance between linked paricles
                color: "#ffffff",
                opacity: 0.4,
                width: 1,
            },

            //particles movement
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false, 
                straight: false,
                out_mode: "bounce", // behavior when particles move out of canvas
                bounce: false,
            },

            }
    },

        
    })