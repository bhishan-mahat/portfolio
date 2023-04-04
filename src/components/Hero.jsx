import React from "react";
import "./Hero.css";
import mobileImg from "../assets/hero_assets/bhishan-mobile.png";
import tabletImg from "../assets/hero_assets/bhishan-tablet.png";
import desktopImg from "../assets/hero_assets/bhishan-desktop.png";
import { useRef, useEffect } from "react";

import gsap from "gsap";

import { Timeline, Power2 } from "gsap/gsap-core";

const Hero = () => {
  const rootRef = useRef(null);

  const tlLoad = new Timeline();
  const tlScroll = new Timeline();

  useEffect(() => {
    let ctx = gsap.context(() => {
      tlLoad
        .from(".hero__image-wrapper", 1.5, {
          opacity: 0,
          xPercent: 20,
          yPercent: 10,
          ease: Power2.easeOut,
          delay: 1.8,
        })
        .from(".hero__text", {
          opacity: 0,
          xPercent: -10,
          yPercent: 8,
          duration: 1.5,
          ease: Power2.easeOut,
          delay: -0.3,
        })
        .from(".button", {
          opacity: 0,
          duration: 1.5,
          scale: 0.8,
          ease: Power2.easeOut,
        });

    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero section-parallax" ref={rootRef}>
      <div className="wrapper hero__wrapper border-bottom">
        <div className="hero__content">
          <div className="hero__image-wrapper">
            <picture>
              <source media="(min-width: 62.5em)" srcSet={desktopImg} />
              <source media="(min-width:37.5em)" srcSet={tabletImg} />
              <img
                className="hero__image"
                src={mobileImg}
                alt="headshot of bhishan mahat"
                width="174"
                height="383"
              />
            </picture>
          </div>

          <div className="hero__text">
            <h1 className="header-xl hero__headline">
              <span>Hi there! I'm</span>
              <br />
              <span className="hero__name">Bhishan Mahat.</span>
            </h1>
            <p className="hero__description">
              Based in Nepal, I'm a front-end developer passionate about
              building aesthetic and functional websites.
            </p>
            <a href="#contact" className="hero__contact button">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
