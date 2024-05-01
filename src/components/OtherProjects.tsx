import React, { useMemo } from 'react'
import type { LanguagesContent } from '../types/content';
import { ContentPage, projects } from '../data';
import CardProject from './CardProject';
import ButtonComplete from './basic/ButtonComplete';
import { useThemeAfterRender } from '../hooks/themeAfterRender';

const labelOtherProjects: { [key in LanguagesContent]: string } = {
  en: "Other projects",
  es: "Otros proyectos",
};

interface Props {
  language: LanguagesContent
  keyProject: number
}

const OtherProjects = ({ language, keyProject }: Props) => {
  const theme = useThemeAfterRender();

  const projectsToShow = useMemo(() => {
    return projects
      .filter((_, i) => i !== keyProject)
      .filter((_, i) => i < 3);
  }, [keyProject]);

  const {
    seeMoreIcon,
    seeMoreText,
    seeProjectIcon,
    seeProjectText
  } = useMemo(() => { return ContentPage[language].projectContent; },
    [language]);




  return (
    <section className="bg-slate-100 py-12 lg:py-24 dark:bg-primary-800">
      <div className="px-4 max-w-screen-xl mx-auto lg:px-8">
        <h2 className="text-primary-700 dark:text-primary-200 text-3xl lg:text-4xl mb-6 md:mb-8 lg:mb-12">
          {labelOtherProjects[language]}
        </h2>
        <div
          className="grid grid-cols-1 gap-5 mb-6 lg:mb-11 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 [&>*:nth-child(n+3)]:hidden lg:[&>*:nth-child(n+3)]:block"
        >
          {
            projectsToShow.map((project) => {
              return (
                <CardProject
                  project={project[language]}
                  language={language}
                  seeProjectIcon={seeProjectIcon}
                  seeProjectText={seeProjectText}
                />
              );
            })
          }
        </div>
        <div className='lg:flex lg:justify-end'>
          <ButtonComplete
            text={seeMoreText}
            icon1={seeMoreIcon}
            typeElement="a"
            size="xl"
            href={`/${language}/projects`}
            variant={theme === 'light' ? 'contained' : 'outlined'}
            bgColor={theme === 'light' ? 'primary' : 'white'}
            textColor={theme === 'light' ? 'white' : 'primary'}
          />
        </div>
      </div>
    </section>
  )
}

export default OtherProjects
