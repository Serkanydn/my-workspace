import React, { useEffect, useRef } from "react";
import "./style.css";

function ImageSlider1() {
  useEffect(() => {
    const sliderContainer = document.querySelector("#image-slider-1");
    const slideButtons = sliderContainer.querySelectorAll(
      ".slider-wrapper .slide-button"
    );
    const imageList = sliderContainer.querySelector(
      ".slider-wrapper .image-list"
    );
    const sliderScrollbar = sliderContainer.querySelector(".slider-scrollbar");
    const scrollbarThumb = sliderContainer.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;


      const handleMouseDown = (event) => {
        const startX = event.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;

        const handleMouseMove = (event) => {
          const deltaX = event.clientX - startX;
          const newThumbPosition = thumbPosition + deltaX;
          const maxThumbPosition =
            sliderScrollbar.getBoundingClientRect().width -
            scrollbarThumb.offsetWidth;
          const boundedPosition = Math.max(
            0,
            Math.min(maxThumbPosition, newThumbPosition)
          );

          const scrollPosition =
            (boundedPosition / maxThumbPosition) * maxScrollLeft;

          scrollbarThumb.style.left = `${boundedPosition}px`;
          imageList.scrollLeft = scrollPosition;
        };

        const handleMouseUp = () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
      };

      scrollbarThumb.addEventListener("mousedown", handleMouseDown);

      const handleButtonClick = (event) => {
        const direction = event.target.id === "prev-button" ? -1 : 1;
        const scrollAmount = imageList.clientWidth * direction;
        imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      };

      slideButtons.forEach((button) => {
        button.addEventListener("click", handleButtonClick);
      });

      const handleSlideButton = () => {
        const [prevButton, nextButton] = slideButtons;
        prevButton.style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        nextButton.style.display =
          Math.ceil(imageList.scrollLeft) >= maxScrollLeft ? "none" : "block";
      };

      const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition =
          (scrollPosition / maxScrollLeft) *
          (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
      };

      const handleScroll = () => {
        handleSlideButton();
        updateScrollThumbPosition();
      };

      imageList.addEventListener("scroll", handleScroll);
      new ResizeObserver(()=>{imageList.scrollLeft=0}).observe(imageList)


  }, []);

  return (
    <div id="image-slider-1">
      <div className="slider-wrapper">
        <button id="prev-button" className="slide-button">
          {"<"}
        </button>
        <div className="image-list">
        <div className="image-item">1</div>
        <div className="image-item">2</div>
        <div className="image-item">3</div>
        <div className="image-item">4</div>
        <div className="image-item">5</div>
        <div className="image-item">6</div>
        <div className="image-item">7</div>
        <div className="image-item">8</div>
        <div className="image-item">9</div>
        <div className="image-item">10</div>
        <div className="image-item">11</div>
        <div className="image-item">12</div>
        <div className="image-item">13</div>
        <div className="image-item">14</div>
        <div className="image-item">15</div>
        <div className="image-item">16</div>
        <div className="image-item">17</div>
        <div className="image-item">18</div>
        <div className="image-item">19</div>
        <div className="image-item">20</div>
        </div>
        <button id="next-button" className="slide-button">
          {">"}
        </button>
      </div>

      <div className="slider-scrollbar">
        <div className="scrollbar-track">
          <div className="scrollbar-thumb"></div>
        </div>
      </div>
    </div>
  );
}

export default ImageSlider1;
