
import { useMemo } from 'react'
import { ContentPage, socialMedias } from "../../data";
import type { LanguagesContent } from "../../types/content";
import ButtonComplete from "../basic/ButtonComplete";
import IconButton from "../basic/IconButton";
import { useThemeAfterRender } from '../../hooks/themeAfterRender';


interface Props {
  language: LanguagesContent;
}


const HomeContent = ({ language }: Props) => {
  const { title, subTitle, button1, button2 } = useMemo(() => ContentPage[language].homeContent, [language]);

  const theme = useThemeAfterRender();

  return (
    <section
      className="bg-white dark:bg-primary-800 py-12 relative lg:h-[calc(100vh_-_5rem)] lg:flex lg:items-center lg:justify-center" >
      <div id="home-section" className="absolute bottom-full h-16 lg:h-20"></div>
      <div
        className="flex flex-col lg:flex-row lg:justify-center lg:items-start lg:gap-10 items-center px-4 lg:px-8 max-w-screen-xl mx-auto"
      >
        <div
          className="mb-4 w-40 h-40 lg:w-52 lg:h-52 rounded-full border-primary-700 dark:border-white border-4 relative overflow-hidden"
        >
          <img
            className="-top-[18%] absolute"
            src="/assets/images/jp-profile.jpg"
            alt="jp-profile"
          />
        </div>
        <div className="flex flex-col items-center lg:mt-7">
          <h1
            className="mb-2 flex flex-wrap justify-center gap-4 text-4xl whitespace-nowrap dark:text-white"
          >
            {title}
          </h1>
          <h2 className="mb-4 dark:text-white">{subTitle}</h2>
          <div className="flex items-center gap-1 mb-5">
            <ButtonComplete
              typeElement="a"
              href={button1.url}
              icon1={button1.iconClass}
              text={button1.text}
              size="s"
              variant="outlined"
              bgColor={theme === 'light' ? "primary" : 'white'}
              textColor={theme === 'light' ? "white" : 'primary'}
            />
            <ButtonComplete
              typeElement="a"
              href={button2.url}
              icon1={button2.iconClass}
              text={button2.text}
              size="s"
              variant="outlined"
              bgColor={theme === 'light' ? "primary" : 'white'}
              textColor={theme === 'light' ? "white" : 'primary'}
            />
          </div>
          <div className="flex gap-4">
            {
              Object.keys(socialMedias).map((key) => {
                const keySocialMedias = key as keyof typeof socialMedias;
                const socialMedia = socialMedias[keySocialMedias];
                return (
                  <IconButton
                    key={key}
                    typeElement="a"
                    icon={socialMedia.icon}
                    href={socialMedia.url}
                    target="_blank"
                    title={socialMedia.name}
                    bgColor={theme === 'light' ? 'primary' : 'white'}
                  />
                );
              })
            }
          </div>
        </div>
      </div>
    </section >
  );
}

export default HomeContent
