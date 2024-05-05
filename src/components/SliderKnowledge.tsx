import { useEffect } from "react";
import { technologies } from "../data";

const technologiesList = Object.keys(technologies).map((key) => {
  const keyTechnologi = key as keyof typeof technologies;
  return technologies[keyTechnologi];
});


const SliderKnowledge = () => {

  const generateSlider = async () => {
    const { Splide } = await import("@splidejs/splide");
    const { AutoScroll } = await import("@splidejs/splide-extension-auto-scroll");
    new Splide(".splide", {
      arrows: false,
      pagination: false,
      type: "loop",
      mediaQuery: "min",
      breakpoints: {
        768: {
          perPage: 4,
        },
        1024: {
          perPage: 5,
        },
      },
      perPage: 3,
    }).mount({ AutoScroll });
  };

  useEffect(() => {
    generateSlider();
  }, []);

  return (
    <section className="splide" aria-label="technologies">
      <div className="splide__track">
        <ul className="splide__list">
          {
            technologiesList.map(({ name, url }) => {
              return (
                <div key={name} className="splide__slide flex justify-center">
                  <div className="dark:bg-white dark:rounded-3xl dark:border-4 dark:border-primary-200/25 p-4">
                    <img src={url} title={name} alt={name} className="w-20" />
                  </div>
                </div>
              );
            })
          }
        </ul>
      </div>
    </section>
  )
}

export default SliderKnowledge

