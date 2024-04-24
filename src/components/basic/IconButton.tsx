import classNames from 'classnames';
import React, { useMemo } from 'react'

type bgColors = 'primary' | 'secondary' | 'white';

interface ButtonAnchor extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  typeElement: 'a',
  icon: string,
  bgColor?: bgColors,
}
interface ButtonNormal extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  typeElement: 'button',
  icon?: string,
  bgColor?: bgColors,
}

type Props = ButtonAnchor | ButtonNormal;

const colorStyles: { [key in bgColors]: string } = {
  primary: 'text-primary-700/70 hover:text-primary-700/90 active:text-primary-700',
  secondary: 'text-secondary-700/70 hover:text-secondary-700/90 active:text-secondary-700',
  white: 'text-white-700/70 hover:text-white-700/90 active:text-white-700',
}

const baseStyles = 'w-9 h-9 flex justify-center items-center rounded-full transition-colors';

const baseIconStyles = 'w-9 h-9 flex justify-center items-center text-[36px]';

const IconButton = (props: Props) => {
  const {
    typeElement,
    icon = "iconportafoliojp-home",
    bgColor = 'primary',
    ...buttonProps
  } = props;

  const classNameStyles = classNames(baseStyles, colorStyles[bgColor]);
  const iconStyles = classNames(icon, baseIconStyles);


  const contentInnerButton = useMemo(() => {
    return (<>
      {icon ? <div className={iconStyles} /> : null}
    </>);
  }, [icon]);


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
}

export default IconButton
