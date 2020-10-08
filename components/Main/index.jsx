import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import DataFonts from "../Database";
import { Container, Section } from "./styles";

gsap.registerPlugin(ScrollTrigger);

const Main = ({ fontes }) => {
  const splits = useRef(null);

  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width:800px)": () => {
        // textEffect
        const txtImage = gsap.timeline({
          scrollTrigger: {
            trigger: splits.current,
            scrub: true,
            start: "top center",
            end: "-60vh",
          },
        });

        txtImage.fromTo(
          splits.current,
          {
            opacity: 0,
            duration: 2,
            delay: 1,
            y: 100,

            transition: "1s",
            ease: "bounce",
          },
          {
            opacity: 1,
            duration: 2,
            delay: 0,
            y: 0,
            transition: "1s",

            ease: "bounce",
          }
        );
      },

      "(max-width:799px)": () => {
        // textEffect
        const txtImage = gsap.timeline({
          scrollTrigger: {
            trigger: splits.current,
            scrub: true,
            start: "top center",
            end: "-100%",
          },
        });

        txtImage.fromTo(
          splits.current,
          {
            opacity: 0,
            duration: 2,
            y: 100,
            delay: 1,

            transition: "1s",
            ease: "bounce",
          },
          {
            opacity: 1,
            duration: 2,
            delay: 1,
            y: 0,
            transition: "1s",

            ease: "bounce",
          }
        );
      },
    });
  }, []);

  return (
    <Container>
      <Section>
        <div className="animationSplits" ref={splits}>
          {DataFonts.filter((rf) => fontes === "home" || rf.type == fontes).map(
            (element, i) => (
              <div className={`split`} key={element.id}>
                <div className="infos">
                  <p>{element.name}</p>
                  <a href={element.donwload} download={element.name}>
                    Download
                  </a>
                </div>
                <div className="thumbnail">
                  <img src={element.thumbnail} alt={element.name} />
                </div>
              </div>
            )
          )}
        </div>
      </Section>
    </Container>
  );
};

export default Main;
