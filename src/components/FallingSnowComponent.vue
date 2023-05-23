<template>
     <div>
        <Particles
            id="tsparticles"
            :particlesInit="particlesInit"
            :particlesLoaded="particlesLoaded"
            :options="{
                particles: {
                    number: {
                        value: 100,
                        density: {
                            enable: true,
                            value_area: 400
                        }
                    },
                    color: {
                        value: '#fff',
                    },
                    shape: {
                        type: 'circle',
                        stroke: {
                            width: 0,
                            color: '#000000'
                        },
                        polygon: {
                            nb_sides: 5
                        }
                    },
                    opacity: {
                        value: .75,
                        random: false,
                        anim: {
                            enable: false,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    size: {
                        value: 5,
                        random: true,
                        anim: {
                            enable: false
                        }
                    },
                    line_linked: {
                        enable: false
                    },
                    move: {
                        enable: true,
                        speed: 6,
                        direction: 'bottom',
                        random: false,
                        straight: false,
                        out_mode: 'out',
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'repulse'
                        },
                        onclick: {
                            enable: true,
                            mode: 'repulse'
                        },
                        resize: true
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            line_linked: {
                                opacity: 0.5
                            }
                        },
                        bubble: {
                            distance: 100,
                            size: 4,
                            duration: 0.3,
                            opacity: 1,
                            speed: 3
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4
                        },
                        push: {
                            particles_nb: 4
                        },
                        remove: {
                            particles_nb: 2
                        }
                    }
                },
                retina_detect: true
            }"
        />
    </div>
</template>

<script>
import { loadFull } from "tsparticles";

export default {
    name: 'FallingSnowComponent',
    methods: {
        particlesInit: async engine => {
            await loadFull(engine);
        },
        particlesLoaded: async container => {
            console.log("Particles container loaded", container);
        }
    }
}
</script>

<style scoped>
#tsparticles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
}
</style>