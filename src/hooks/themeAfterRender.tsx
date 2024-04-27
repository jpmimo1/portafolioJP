import { useStore } from "@nanostores/react";
import { useEffect, useRef, useState } from "react";
import { $currentTheme } from "../stores/themeStore";

export const useThemeAfterRender = () => {
  const $currentThemeWeb = useStore($currentTheme);

  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isRender, setIsRender] = useState(false);


  useEffect(() => {
    setIsRender(true);
  }, []);

  const newTheme = useRef<'light' | 'dark'>('light');

  useEffect(() => {
    if (!isRender) {
      newTheme.current = $currentThemeWeb;
    } else {
      setTheme($currentThemeWeb);
    }
  }, [$currentThemeWeb]);

  useEffect(() => {
    if (isRender) {
      setTheme(newTheme.current);
    }
  }, [isRender]);

  return theme;
}
