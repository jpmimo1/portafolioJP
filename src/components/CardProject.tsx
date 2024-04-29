import React, { useEffect, useRef } from 'react'
import classNames from "classnames";

import type { LanguagesContent } from "../types/content";
import type { IProject } from "../types/content";
import ButtonComplete from "./basic/ButtonComplete";
import { generateUrl } from "../utils/generateUrl";
import { useThemeAfterRender } from '../hooks/themeAfterRender';


interface Props {
  project: IProject;
  seeProjectText: string;
  seeProjectIcon: string;
  language: LanguagesContent;
  className?: string
}



const CardProject = ({ project, seeProjectIcon, seeProjectText, language, className }: Props) => {
  const theme = useThemeAfterRender();
  const { title, technologiesUsed, type, technologiesTitle, imageUrl, description } = project;

  const urlProject = `/${language}/project/${generateUrl(title)}`;

  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    import('@splidejs/splide').then(({ Splide }) => {
      if (!sliderRef.current) {
        return;
      }
      new Splide(sliderRef.current, {
        arrows: false,
        pagination: false,
        type: technologiesUsed.length > 5 ? "loop" : "slide",
        mediaQuery: "min",
        perPage: technologiesUsed.length < 5 ? technologiesUsed.length : 5,
      }).mount();
    });
  }, []);

  return (
    <div
      className={classNames(className, "bg-white dark:bg-primary-900 dark:border-white dark:border-2 rounded-md shadow-md dark:shadow-none px-4 py-5")}
      data-technologieslength={technologiesUsed.length}
    >
      <div className="flex justify-between gap-5 text-xl mb-3">
        <h4
          title={title}
          className="text-primary-700 dark:text-primary-200 font-bold whitespace-nowrap overflow-hidden text-ellipsis"
        >
          {title}
        </h4>
        <span className='dark:text-white'>{type}</span>
      </div>
      <div className="rounded-md overflow-hidden aspect-[16/10] mb-4 border">
        <img src={imageUrl} alt={title} className="h-full w-full object-cover" />
      </div>
      <p className="line-clamp-4 mb-6 dark:text-white">{description}</p>
      <h6 className="text-primary-700 dark:text-primary-200 mb-3 font-bold">{technologiesTitle}</h6>
      <div ref={sliderRef} className={classNames(["slider-card-technology", "splide", "mb-6"])} role="group">
        <div className="splide__track">
          <div className="splide__list">
            {
              technologiesUsed.map(({ name, url }) => {
                return (
                  <div className="splide__slide flex justify-center" key={name}>
                    <img className="w-10" src={url} title={name} alt={name} />
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
      <ButtonComplete
        text={seeProjectText}
        icon1={seeProjectIcon}
        typeElement="a"
        href={urlProject}
        variant="outlined"
        bgColor={theme==='light'?'primary':'white'}
        textColor={theme==='light'?'white':'primary'}
      />
    </div>
  );
}

export default CardProject;
