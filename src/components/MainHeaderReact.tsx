import React, { useState } from 'react'
import type { LanguagesContent } from '../types/content';
import { ContentPage } from '../data';
import Button from './basic/Button';

interface Props {
  language: LanguagesContent
}

const MainHeaderReact = ({ language }: Props) => {
  const [stateMenuResponsive, setStateMenuResponsive] = useState(false);

  const menuItems = ContentPage[language].itemsHeader;

  const languageOptions = ContentPage[language].languages;

  return (
    <header>
      <nav>
        <div className="flex justify-between items-center px-1 h-16 shadow-md">
          <div className="flex justify-center items-center">
            <span className="iconportafoliojp-iconjp text-primary text-4xl flex justify-center items-center"></span>
          </div>
          <button
            className="iconportafoliojp-bars text-primary text-2xl flex items-center justify-center p-1"
            onClick={() => { setStateMenuResponsive(true); }}
          ></button>
        </div>

        <div className={`${stateMenuResponsive ? 'left-0' : 'left-full'} transition-[left] duration-500 flex flex-col fixed top-0 bg-white w-screen h-full z-50 shadow-lg`}>
          <div className="flex justify-between items-center px-1 h-16 shrink-0 shadow-sm">
            <button
              onClick={() => { setStateMenuResponsive(false); }}
              className='iconportafoliojp-close flex justify-center items-center text-3xl text-secondary'></button>
            <div className="h-6 w-9 bg-secondary"></div>
          </div>
          <div className='overflow-y-auto flex-grow flex flex-col'>
            <div className="flex justify-center pt-10 pb-6">
              <div
                className="iconportafoliojp-iconjp text-5xl pt-2 text-secondary h-20 w-20 rounded-full bg-white border-secondary border-4 flex justify-center items-center"
              >
              </div>
            </div>
            <ul className="flex flex-col px-10 py-2">
              {
                menuItems.map((menuitem) => {
                  return (
                    <li className="py-4 px-2 border-secondary border-b">
                      <a href={menuitem.url} className='text-secondary flex items-center gap-6 text-xl text'>
                        <span className={`${menuitem.iconClass || ''} h-8 w-8 text-2xl flex items-center justify-center`}></span>
                        {menuitem.title}
                      </a>
                    </li>
                  );
                })
              }
            </ul>
            <div className='flex flex-col items-center gap-4 py-4 text-2xl text-secondary'>
              {languageOptions.title}
              <div className='flex gap-8'>
                <Button text={languageOptions.items.es} />
                <Button text={languageOptions.items.en} />
              </div>
            </div>
            <div className="pb-6 pt-16 grow flex justify-center items-end text-5xl text-secondary gap-8">
              <a><span className='iconportafoliojp-github'></span></a>
              <a><span className='iconportafoliojp-linkedin'></span></a>
            </div>
          </div>
        </div>
      </nav>
    </header >
  )
}

export default MainHeaderReact
