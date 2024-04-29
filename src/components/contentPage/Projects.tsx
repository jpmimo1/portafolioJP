
import { useMemo } from 'react'
import { ContentPage, projects } from "../../data";
import type { LanguagesContent } from "../../types/content";
import CardProject from "../CardProject";
import ButtonComplete from "../basic/ButtonComplete";
import { useThemeAfterRender } from '../../hooks/themeAfterRender';

interface Props {
  language: LanguagesContent;
}

const Projects = ({ language }: Props) => {
  const theme = useThemeAfterRender();
  const {
    title,
    paragraph,
    seeProjectIcon,
    seeProjectText,
    seeMoreIcon,
    seeMoreText,
  } = useMemo(() => ContentPage[language].projectContent, [language]);


  return (
    <section className="bg-auxiliar1-200 dark:bg-primary-800 py-12 lg:py-24 relative">
      <div id="projects-section" className="absolute bottom-full h-16 lg:h-20"></div>
      <div className="px-4 max-w-screen-xl mx-auto lg:px-8">
        <h3 className="text-primary-700 dark:text-primary-200 text-4xl lg:text-5xl mb-5 lg:mb-8">{title}</h3>
        <p className="mb-7 dark:text-white lg:mb-12">{paragraph}</p>
        <div className="grid grid-cols-1 gap-5 mb-6 lg:mb-11 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {
            projects
              .filter((_, i) => i < 6)
              .map((project) => {
                return (
                  <CardProject
                    key={project[language].title}
                    project={project[language]}
                    language={language}
                    seeProjectIcon={seeProjectIcon}
                    seeProjectText={seeProjectText}
                    className='[&:nth-child(n+4)]:hidden md:[&:nth-child(n+4)]:block md:[&:nth-child(n+5)]:hidden lg:[&:nth-child(n+5)]:block'
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
  );
}

export default Projects;
