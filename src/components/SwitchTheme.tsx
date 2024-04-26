import { useStore } from '@nanostores/react';
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { currentTheme } from '../stores/themeStore';

const SwitchTheme = () => {
  const $currentTheme = useStore(currentTheme);

  const timeOutSetState = useRef(0);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      console.log('entró');
      currentTheme.set("dark");
    } else {
      currentTheme.set("light");
    }
  }, [])

  useEffect(() => {
    if ($currentTheme === 'light') {
      localStorage.theme = 'light'
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.theme = 'dark'
      document.documentElement.classList.add("dark");
    }
  }, [$currentTheme]);

  const switchState = useMemo(() => {
    return $currentTheme === 'light';
  }, [$currentTheme]);

  const iconClass = useMemo(() => {
    return switchState ? 'iconportafoliojp-sunny' : 'iconportafoliojp-bedtime';
  }, [switchState]);

  return (
    <div>
      <label htmlFor='chkSwitchTheme' className='border border-primary-700 dark:border-white w-12 flex items-center rounded-full p-0.5'>
        <div className={'text-white dark:text-primary-700 bg-primary-700 dark:bg-white flex justify-center items-center w-6 h-6 rounded-full text-xs transition-all duration-75 translate-x-0 dark:translate-x-[18px] ' + iconClass}></div>
      </label>
      <input
        type='checkbox'
        id='chkSwitchTheme'
        className='hidden'
        checked={switchState}
        onChange={(e) => {
          const newChecked = e.target.checked;
          if (timeOutSetState.current) {
            clearTimeout(timeOutSetState.current);
          }
          timeOutSetState.current = setTimeout(() => {
            currentTheme.set(newChecked ? 'light' : 'dark');
          }, 100);
        }}
      />
    </div>
  )
};

export default SwitchTheme;
