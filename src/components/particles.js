import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = (props) => {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        // image: "url('/bg.jpg')", // Set your image path here
        // position: "center center",
        // repeat: "no-repeat",
        // size: "cover",
        color: "#000000"
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push", // Adds 'push' effect on click
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 1.5,
            speed: 0.5,
          },
          push: {
            quantity: 4, // Number of particles added with each click
          },
        },
      },
      particles: {
        color: {
          value: "#fca311", // Updated particle color
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: true,
          speed: 0.4,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 200,
        },
        opacity: {
          value: { min: 0.2, max: 0.8 },
          random: true,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 4, max: 7 },
          random: true,
        },
      },
      detectRetina: true,
    }),
    []
  );

  return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default ParticlesComponent;
