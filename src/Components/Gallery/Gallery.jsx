import { useEffect, useState } from "react";
import {
  GallerySection,
  GalleryTitle,
  GalleryWrapper,
  GalleryCard,
  GalleryImage,
} from "./Gallery.style";

import { GalleryImages } from "../../Api-document/GalleryImages";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const getImages = async () => {
      try {
        const data = await GalleryImages("nature", 1);
        setImages(data.hits);
      } catch (error) {
        console.error("Ошибка загрузки изображений:", error);
      }
    };
    getImages();
  }, []);

  const nextSlide = () => {
    setActiveIndex((current) => {
      if (current === images.length - 1) {
        return 0;
      }
      return current + 1;
    });
  };

  const prevSlide = () => {
    setActiveIndex((current) => {
      if (current === 0) {
        return images.length - 1;
      }
      return current - 1;
    });
  };

  const getPosition = (index) => {
    if (!images.length) return null;
    let position = index - activeIndex;
    if (position > images.length / 2) {
      position -= images.length;
    }
    if (position < -images.length / 2) {
      position += images.length;
    }

    return position;
  };

  return (
    <GallerySection>
      <div className="container">
        <GalleryTitle>Beautiful nature</GalleryTitle>

        <GalleryWrapper>
          {images.map((image, index) => {
            const position = getPosition(index);

            if (position < -2 || position > 2) {
              return null;
            }

            return (
              <GalleryCard
                key={image.id}
                $position={position}
                onClick={() => setActiveIndex(index)}
              >
                <GalleryImage src={image.largeImageURL} alt={image.tags} />
              </GalleryCard>
            );
          })}
        </GalleryWrapper>
      </div>
    </GallerySection>
  );
}
