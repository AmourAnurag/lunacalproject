"use client"
import { useState, useEffect } from "react";
import style from "./below.module.css";
import styles from "./upper.module.css";
import Image from "next/image";

const Below = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isArrowClicked, setIsArrowClicked] = useState("");

  useEffect(() => {
    const storedImages = JSON.parse(localStorage.getItem("images")) || [];
    setImages(storedImages);
  }, []);

  useEffect(() => {
    localStorage.setItem("images", JSON.stringify(images));
  }, [images]);

  const addImage = () => {
    const newImage = "image.png"; // Replace this with the actual image file name you want to add
    setImages([...images, newImage]);
  };

  const handleNext = () => {
    if (currentIndex < images.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
    setIsArrowClicked("next");
    setTimeout(() => setIsArrowClicked(""), 300); // Reset the background after 300ms
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
    setIsArrowClicked("prev");
    setTimeout(() => setIsArrowClicked(""), 300); // Reset the background after 300ms
  };

  return (
    <div className={style.below}>
      <div className={styles.sidebar} style={{ marginTop: "20px" }}>
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
        <div className={style.header}>
          <div className={`${style.btn} ${style.gallery}`}>Gallery</div>
          <div className={style.btn}>
            <div className={style.addImage} onClick={addImage}>+ADDIMAGE</div>
            <div className={style.leftAndright}>
              <div
                className={`${style.arrowContainer} ${isArrowClicked === "prev" ? style.clicked : ""}`}
                onClick={handlePrev}
              >
                <Image
                  src="/images/leftArrow.png"
                  alt="Previous"
                  width={22}
                  height={22}
                />
              </div>
              <div
                className={`${style.arrowContainer} ${isArrowClicked === "next" ? style.clicked : ""}`}
                onClick={handleNext}
              >
                <Image
                  src="/images/rightArrow.png"
                  alt="Next"
                  width={22}
                  height={22}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={style.imageContainer}>
          <div className={style.imageWrapper} style={{ transform: `translateX(-${currentIndex * 160}px)` }}>
            {images.map((image, index) => (
              <Image
                key={index}
                src={`/images/${image}`}
                alt={`Image ${index + 1}`}
                width={160}
                height={155}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Below;
