import React from "react";
import "./Projects.css";
import projectOneLarge from "../assets/projects__assets/thumbnail-project-1-large.webp";
import projectOneSmall from "../assets/projects__assets/thumbnail-project-1-small.webp";
import projectTwoLarge from "../assets/projects__assets/thumbnail-project-2-large.webp";
import projectTwoSmall from "../assets/projects__assets/thumbnail-project-2-small.webp";

const Projects = () => {
  return (
    <section className="projects section-parallax">
      <div className="wrapper projects__wrapper border-bottom">
        <h2 className="headline header-xl">Projects</h2>
        <div className="projects__grid">
          <div className="projects__item">
            <picture className="projects__picture">
              <source media="(min-width: 62.5em)" srcSet={projectOneLarge} />
              <img
                className="projects__image"
                src={projectOneSmall}
                alt="screenshot of desing portfolio website"
                width="343"
                height="253"
              />
            </picture>
            <div className="projects__info">
              <h3 className="projects__name">Design Portfolio</h3>
              <p className="projects__tags">
                <span>HTML</span>
                <span>CSS</span>
              </p>
            </div>
            <div className="projects__links">
              <a href="" className="projects__link">
                View Project
              </a>
              <a href="" className="projects__link">
                View Code
              </a>
            </div>
          </div>

          <div className="projects__item">
            <picture className="projects__picture">
              <source media="(min-width: 62.5em)" srcSet={projectOneLarge} />
              <img
                className="projects__image"
                src={projectOneSmall}
                alt="screenshot of desing portfolio website"
                width="343"
                height="253"
              />
            </picture>
            <div className="projects__info">
              <h3 className="projects__name">Design Portfolio</h3>
              <p className="projects__tags">
                <span>HTML</span>
                <span>CSS</span>
              </p>
            </div>
            <div className="projects__links">
              <a href="" className="projects__link">
                View Project
              </a>
              <a href="" className="projects__link">
                View Code
              </a>
            </div>
          </div>

          <div className="projects__item">
            <picture className="projects__picture">
              <source media="(min-width: 62.5em)" srcSet={projectOneLarge} />
              <img
                className="projects__image"
                src={projectOneSmall}
                alt="screenshot of desing portfolio website"
                width="343"
                height="253"
              />
            </picture>
            <div className="projects__info">
              <h3 className="projects__name">Design Portfolio</h3>
              <p className="projects__tags">
                <span>HTML</span>
                <span>CSS</span>
              </p>
            </div>
            <div className="projects__links">
                <a href="" className="projects__link">
                  View Project
                </a>
                <a href="" className="projects__link">
                  View Code
                </a>
              </div>
          </div>

          <div className="projects__item">
            <picture className="projects__picture">
              <source media="(min-width: 62.5em)" srcSet={projectOneLarge} />
              <img
                className="projects__image"
                src={projectOneSmall}
                alt="screenshot of desing portfolio website"
                width="343"
                height="253"
              />
            </picture>
            <div className="projects__info">
              <h3 className="projects__name">Design Portfolio</h3>
              <p className="projects__tags">
                <span>HTML</span>
                <span>CSS</span>
              </p>
            </div>
            <div className="projects__links">
                <a href="" className="projects__link">
                  View Project
                </a>
                <a href="" className="projects__link">
                  View Code
                </a>
              </div>
          </div>

          <div className="projects__item">
            <picture className="projects__picture">
              <source media="(min-width: 62.5em)" srcSet={projectOneLarge} />
              <img
                className="projects__image"
                src={projectOneSmall}
                alt="screenshot of desing portfolio website"
                width="343"
                height="253"
              />
            </picture>
            <div className="projects__info">
              <h3 className="projects__name">Design Portfolio</h3>
              <p className="projects__tags">
                <span>HTML</span>
                <span>CSS</span>
              </p>
            </div>
            <div className="projects__links">
                <a href="" className="projects__link">
                  View Project
                </a>
                <a href="" className="projects__link">
                  View Code
                </a>
              </div>
          </div>

          <div className="projects__item">
            <picture className="projects__picture">
              <source media="(min-width: 62.5em)" srcSet={projectOneLarge} />
              <img
                className="projects__image"
                src={projectOneSmall}
                alt="screenshot of desing portfolio website"
                width="343"
                height="253"
              />
            </picture>
            <div className="projects__info">
              <h3 className="projects__name">Design Portfolio</h3>
              <p className="projects__tags">
                <span>HTML</span>
                <span>CSS</span>
              </p>
            </div>
            <div className="projects__links">
                <a href="" className="projects__link">
                  View Project
                </a>
                <a href="" className="projects__link">
                  View Code
                </a>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
