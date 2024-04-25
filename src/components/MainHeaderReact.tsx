import React, { useEffect, useMemo, useState } from 'react'
import type { LanguagesContent } from '../types/content';
import { ContentPage, socialMedias } from '../data';
import SwitchTheme from './SwitchTheme';
import ButtonComplete from './basic/ButtonComplete';

interface Props {
  language: LanguagesContent,
  currentPath: string
}

const MainHeaderReact = ({ language, currentPath }: Props) => {
  const [stateMenuResponsive, setStateMenuResponsive] = useState(false);

  const menuItems = useMemo(() => ContentPage[language].itemsHeader, [language]);

  const languageOptions = useMemo(() => ContentPage[language].languages, [language]);

  const contentPath = useMemo(() => {
    const newContentPath = currentPath.replace(`/${language}`, '');
    return newContentPath;
  }, [currentPath, language]);

  const currentMenuItems = useMemo(() => {
    if (contentPath === '' || contentPath === '/') {
      return menuItems;
    } else {
      return [menuItems[0]];
    }
  }, [contentPath, menuItems]);

  return (
    <header>
      <nav>
        <div className="flex justify-between items-center px-1 h-16 bg-white shadow-md fixed w-full z-20">
          <div className="flex justify-center items-center">
            <a href={`/${language}`}>
              <span className="iconportafoliojp-iconjp text-primary-700 text-4xl flex justify-center items-center"></span>
            </a>
          </div>
          <button
            className="iconportafoliojp-bars text-primary-700 text-2xl flex items-center justify-center p-1"
            onClick={() => { setStateMenuResponsive(true); }}
          ></button>
        </div>

        <div className={`${stateMenuResponsive ? 'left-0' : 'left-full'} transition-[left] duration-600 flex flex-col fixed top-0 bg-white dark:bg-primary-700 w-screen h-full z-50 shadow-lg`}>
          <div className="flex justify-between items-center px-1 h-16 shrink-0 shadow-sm dark:shadow-none dark:border-b-2 dark:border-white">
            <button
              onClick={() => { setStateMenuResponsive(false); }}
              className='iconportafoliojp-close flex justify-center items-center text-3xl text-primary-700 dark:text-white'></button>
            <SwitchTheme />
          </div>
          <div className='overflow-y-auto flex-grow flex flex-col'>
            <div className="flex justify-center pt-10 pb-6">
              <div
                className="iconportafoliojp-iconjp text-5xl pt-2 text-primary-700 dark:text-white h-20 w-20 rounded-full bg-white dark:bg-primary-700 border-primary-700 dark:border-white border-4 flex justify-center items-center"
              >
              </div>
            </div>
            <ul className="flex flex-col px-10 py-2">
              {
                currentMenuItems.map((menuitem) => {
                  return (
                    <li className="py-4 px-2 border-primary-700 dark:border-white border-b" key={menuitem.title}>
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          const elementAnchor = e.target as HTMLAnchorElement;
                          setStateMenuResponsive(false);
                          setTimeout(() => { window.location.href = elementAnchor.href; }, 200);
                        }}
                        href={`/${language}/${menuitem.url}`}
                        className='text-primary-700 dark:text-white flex items-center gap-6 text-xl text'>
                        <span className={`${menuitem.iconClass || ''} h-8 w-8 text-2xl flex items-center justify-center`}></span>
                        {menuitem.title}
                      </a>
                    </li>
                  );
                })
              }
            </ul>
            <div className='flex flex-col items-center gap-4 py-4 text-2xl text-primary-700 dark:text-white'>
              {languageOptions.title}
              <div className='flex gap-8'>
                <ButtonComplete
                  href={`/es${contentPath}`}
                  typeElement={language === 'es' ? 'button' : 'a'}
                  text={languageOptions.items.es}
                  size='xl'
                  rounded='full'
                  variant={language === 'es' ? 'contained' : 'outlined'}
                  className='w-32'
                />
                <ButtonComplete
                  href={`/en${contentPath}`}
                  typeElement={language === 'en' ? 'button' : 'a'}
                  text={languageOptions.items.en}
                  size='xl'
                  rounded='full'
                  variant={language === 'en' ? 'contained' : 'outlined'}
                  className='w-32'
                />
              </div>
            </div>
            <div className="pb-6 pt-16 grow flex justify-center items-end text-5xl text-primary-700 dark:text-white gap-8">
              {
                Object.keys(socialMedias).map((key) => {
                  const keySocialMedias = key as keyof (typeof socialMedias);
                  const socialMedia = socialMedias[keySocialMedias];
                  return (
                    <a key={keySocialMedias} href={socialMedia.url} title={socialMedia.name} target='_blank'>
                      <span className={socialMedia.icon}></span>
                    </a>);
                })
              }
            </div>
          </div>
        </div>
      </nav>
    </header >
  )
}

export default MainHeaderReact
