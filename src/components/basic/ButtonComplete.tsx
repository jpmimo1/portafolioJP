import classNames from 'classnames';
import React, { useCallback, useMemo } from 'react';
import Spinner, { type Colors as ColorsSpinner } from './Spinner';

type sizesButton = 'xs' | 's' | 'm' | 'l' | 'xl';
type variants = 'text' | 'outlined' | 'contained';
type bgColors = 'primary' | 'secondary' | 'white';
type textColors = 'primary' | 'secondary' | 'white';
type roundeds = 'normal' | 'full';

interface ButtonAnchor extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  typeElement: 'a',
  text?: string,
  icon1?: string,
  icon2?: string,
  size?: sizesButton,
  variant?: variants,
  bgColor?: bgColors,
  textColor?: textColors,
  rounded?: roundeds,
  isLoading?: boolean,
  loadingColor?: ColorsSpinner
}
interface ButtonNormal extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  typeElement: 'button',
  text?: string,
  icon1?: string,
  icon2?: string,
  size?: sizesButton,
  variant?: variants,
  bgColor?: bgColors,
  textColor?: textColors,
  rounded?: roundeds,
  isLoading?: boolean,
  loadingColor?: ColorsSpinner
}

type Props = ButtonAnchor | ButtonNormal;

const baseStyles = 'flex flex-nowrap items-center justify-center transition-colors disabled:opacity-50'
const baseStylesIcon = 'flex justify-center items-center'

const sizeStyles: { [key in sizesButton]: string } = {
  xs: 'gap-1 text-xs px-3 py-2',
  s: 'gap-1 text-sm px-3 py-2',
  m: 'gap-2 text-base px-4 py-2',
  l: 'gap-2 text-lg px-4 py-2',
  xl: 'gap-2 text-xl px-5 py-2'
}

const sizeIconStyles: { [key in sizesButton]: string } = {
  xs: 'w-4 h-4 text-base',
  s: 'w-5 h-5 text-lg',
  m: 'w-6 h-6 text-xl',
  l: 'w-7 h-7 text-2xl',
  xl: 'w-7 h-7 text-3xl'
};

const roundedStyles: { [key in roundeds]: string } = {
  normal: 'rounded-md',
  full: 'rounded-full'
};

type IVariantsColorStyles = { [key in variants]: { bg: { [key in bgColors]: string }, text: { [key in textColors]: string } } }

const variantsColorStyles: IVariantsColorStyles = {
  contained: {
    bg: {
      primary: 'bg-primary-700 hover:bg-primary-800 active:bg-primary-900 disabled:hover:bg-primary-700 disabled:active:bg-primary-700',
      secondary: 'bg-secondary-700 hover:bg-secondary-800 active:bg-secondary-900 disabled:hover:bg-secondary-700 disabled:active:bg-secondary-700',
      white: 'bg-white hover:bg-slate-100 active:bg-slate-200 disabled:hover:bg-white disabled:active:bg-white'
    },
    text: {
      primary: 'text-primary-700',
      secondary: 'text-secondary-700',
      white: 'text-white'
    },
  },
  text: {
    bg: {
      primary: 'text-primary-700/70 hover:text-primary-600 active:text-primary-700',
      secondary: 'text-secondary-500 hover:text-secondary-600 active:text-secondary-700',
      white: 'text-slate-200 hover:text-slate-50 active:text-white'
    },
    text: {
      primary: '',
      secondary: '',
      white: ''
    },
  },
  outlined: {
    bg: {
      primary: 'bg-transparent hover:bg-primary-700 text-primary-700 hover:text-white border-primary-700 border-2',
      secondary: 'bg-transparent hover:bg-secondary-700 text-secondary-700 hover:text-white border-secondary-700 border-2',
      white: 'bg-transparent hover:bg-white text-white border-white-700 border-2'
    },
    text: {
      primary: 'hover:text-primary-700',
      secondary: 'hover:text-secondary-700',
      white: ''
    },
  }
};

const variantStyles = (bgColor: bgColors, textColor: textColors): { [key in variants]: string } => {
  return {
    contained: classNames(variantsColorStyles.contained.bg[bgColor], variantsColorStyles.contained.text[textColor]),
    outlined: classNames(variantsColorStyles.outlined.bg[bgColor], variantsColorStyles.outlined.text[textColor]),
    text: classNames(variantsColorStyles.text.bg[bgColor], variantsColorStyles.text.text[textColor])
  }
};


const ButtonComplete = (props: Props) => {
  const {
    typeElement,
    text,
    icon1,
    icon2,
    size = 'm',
    variant = 'contained',
    bgColor = 'primary',
    textColor = 'white',
    rounded = 'normal',
    isLoading = false,
    loadingColor,
    className,
    ...buttonProps
  } = props;


  const classNameStyles = classNames(
    className,
    baseStyles,
    sizeStyles[size],
    variantStyles(bgColor, textColor)[variant],
    roundedStyles[rounded],
  );
  const iconStyles = classNames(baseStylesIcon, sizeIconStyles[size]);

  const contentInnerButton = useMemo(() => {
    return (<>
      {icon1 ? <div className={classNames(icon1, iconStyles)} /> : null}
      {text || null}
      {icon2 ? <div className={classNames(icon2, iconStyles)} /> : null}
      {isLoading ? <div className='ml-2'><Spinner size={size} colors={loadingColor} /></div> : null}
    </>);
  }, [text, icon1, icon2, isLoading]);


  switch (typeElement) {
    case 'a': {
      const anchorProps = buttonProps as React.AnchorHTMLAttributes<HTMLAnchorElement>
      return (
        <a className={classNameStyles} {...anchorProps}>
          {contentInnerButton}
        </a>
      );
    }
    case "button": {
      const buttonTProps = buttonProps as React.ButtonHTMLAttributes<HTMLButtonElement>
      return (
        <button className={classNameStyles} {...buttonTProps}>
          {contentInnerButton}
        </button>
      )
    }
  }
};

export default ButtonComplete;

