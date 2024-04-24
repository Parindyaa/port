import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Senuri</h1>
        <p className={styles.description}>
          I'm a Computer Science Undergraduate
        </p>
        <a href="https://drive.google.com/drive/folders/1ONIPW1w7QBpOYuSyB-l2assDD4jE3zIP" className={styles.contactBtn}>
          Download CV
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
