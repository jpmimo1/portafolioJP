import classNames from 'classnames';
import React, { useEffect, useRef } from 'react'

interface Props {
  urlImages: string[],
  title: string
}

const SliderImage = ({ urlImages, title }: Props) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    import('@splidejs/splide').then(({ Splide }) => {
      if (!sliderRef.current) {
        return;
      }
      new Splide(sliderRef.current, {
        arrows: true,
        pagination: false,
        type: "loop",
        perPage: 1,
        autoplay: true,
        interval: 3000
      }).mount();
    });
  }, []);

  return (
    <div ref={sliderRef} className={classNames(["splide", "mb-6"])} role="group">
      <div className="splide__arrows"></div>
      <div className="splide__track">
        <div className="splide__list">
          {
            urlImages.map((urlImage, i) => {
              return (
                <div className="splide__slide flex justify-center" key={urlImage}>
                  <img className="" src={urlImage} title={`${title} ${i}`} alt={`${title}_${i}`} />
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  )
}



export default SliderImage
