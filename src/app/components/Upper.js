"use client";
import { useState } from "react";
import styles from "../components/upper.module.css";
import Image from "next/image";

const Upper = () => {
  const [activeButton, setActiveButton] = useState("AboutMe");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className={styles.upper}>
      <div className={styles.sidebar}>
        <Image
          src="/images/Vector.png"
          alt="Description of the image"
          width={25}
          height={25}
        />
        <Image
          src="/images/frame.png"
          alt="Description of the image"
          width={25}
          height={28}
        />
      </div>
      <div className={styles.btnAndContentContainer}>
        <div className={styles.header}>
          <button
            className={`${styles.btn} ${
              activeButton === "AboutMe" ? styles.active : ""
            }`}
            onClick={() => handleButtonClick("AboutMe")}
          >
            AboutMe
          </button>
          <button
            className={`${styles.btn} ${
              activeButton === "Experiences" ? styles.active : ""
            }`}
            onClick={() => handleButtonClick("Experiences")}
          >
            Experiences
          </button>
          <button
            className={`${styles.btn} ${
              activeButton === "Recommended" ? styles.active : ""
            }`}
            onClick={() => handleButtonClick("Recommended")}
          >
            Recommended
          </button>
        </div>
        <div className={styles.content}>
          Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
          working at this awesome company for 3 years now.
          <br /> <br />I was born and raised in Albany, NY& have been living in
          Santa Carla for the past 10 years my wife Tiffany and my 4 year old
          twin daughters- Emma and Ella. Both of them are just starting school,
          so my calender is usually blocked between 9-10 AM. This is a...
        </div>
      </div>
      <div className={styles.rightSidebar}></div>
    </div>
  );
};

export default Upper;
