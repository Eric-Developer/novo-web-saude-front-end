"use client";
import { useRef, useState } from "react";
import Button from "../UI/Button";
interface GalleryProps {
  images: string[];
}

export default function Gallery({ images }: GalleryProps) {
  const currentIndexRef = useRef(0);
  const [displayedImages, setDisplayedImages] = useState(images.slice(0, 2)); // Mostrar as primeiras duas imagens

  const handleNext = () => {
    currentIndexRef.current = (currentIndexRef.current + 1) % images.length;
    setDisplayedImages(images.slice(currentIndexRef.current, currentIndexRef.current + 2)); // Atualiza para mostrar as próximas duas imagens
    updateImage();
  };

  const handlePrevious = () => {
    currentIndexRef.current =
      (currentIndexRef.current - 1 + images.length) % images.length;
    setDisplayedImages(images.slice(currentIndexRef.current, currentIndexRef.current + 2)); // Atualiza para mostrar as duas imagens anteriores
    updateImage();
  };

  const updateImage = () => {
    const imageElements = document.querySelectorAll(".gallery-image");
    imageElements.forEach((imageElement, index) => {
      if (imageElement instanceof HTMLImageElement) {
        imageElement.src = displayedImages[index];
      }
    });

    const indicators = document.querySelectorAll(".gallery-indicator");
    indicators.forEach((indicator, index) => {
      if (index === currentIndexRef.current) {
        indicator.classList.add("active");
      } else {
        indicator.classList.remove("active");
      }
    });
  };

  return (
    <div className="gallery">
      <div className="gallery-header">
        <h2 className="gallery-title">Galeria</h2>
        <div className="gallery-buttons">
          <Button onClick={handlePrevious} className="gallery-button">
            Anterior
          </Button>
          <Button onClick={handleNext} className="gallery-button">
            Próximo
          </Button>
        </div>
      </div>
      <div className="gallery-wrapper">
        <div className="gallery-images-wrapper">
          {displayedImages.map((image, index) => (
            <div key={index} className="gallery-image-wrapper">
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="gallery-image"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="gallery-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`gallery-indicator ${index === currentIndexRef.current ? "active" : ""}`}
            onClick={() => {
              currentIndexRef.current = index;
              setDisplayedImages(images.slice(index, index + 2));
              updateImage();
            }}
          />
        ))}
      </div>
    </div>
  );
}
