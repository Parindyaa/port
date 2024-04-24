import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
           
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
             
            <div className={styles.aboutItemText}>
              <h3>I'm Senuri Parindya</h3>
              <p>
              An aspiring computer science student seeking opportunities to apply and enhance my technical skills,
              problem-solving abilities, and passion for innovative solutions within the field of computer science.
              Committed to academic excellence and eager to contribute to projects and research endeavors that
              advance the frontiers of technology
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            
            <div className={styles.aboutItemText}>
              <h3>I'm Passionate in: </h3>
              <p>
                Web development<br />
                Programming<br />
                Frontend Development
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Tech Stack</h3>
              <p>
              <img className={styles.techIcon} src={getImageUrl("about/jaaaava.png")} alt="UI icon" />
                Java<br />
                <img className={styles.techIcon} src={getImageUrl("about/pyt.png")} alt="UI icon" />
                Python<br /> 
                <img className={styles.techIcon} src={getImageUrl("about/html.png")} alt="UI icon" />
                HTML<br /> 
                <img className={styles.techIcon} src={getImageUrl("about/css.png")} alt="UI icon" />
                CSS<br />
                <img className={styles.techIcon} src={getImageUrl("about/jj.png")} alt="UI icon" />
                JavaScript<br /> 
                <img className={styles.techIcon} src={getImageUrl("about/react.png")} alt="UI icon" />
                React.js<br /> 
                <img className={styles.techIcon} src={getImageUrl("about/figma.png")} alt="UI icon" />
                Figma<br />
                <img className={styles.techIcon} src={getImageUrl("about/php.png")} alt="UI icon" />
                PHP<br />
                <img className={styles.techIcon} src={getImageUrl("about/fls.png")} alt="UI icon" />
                Flask<br />


                
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
