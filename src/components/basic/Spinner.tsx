import classNames from 'classnames';
import React, { useMemo } from 'react'

type Sizes = 'xs' | 's' | 'm' | 'l' | 'xl';
export type Colors = 'white' | 'primary' | 'secondary' | 'auxiliar';

interface Props {
  size?: Sizes,
  colors?: Colors
}

const sizeStyles: { [key in Sizes]: string } = {
  xs: 'h-2 w-2 border-2',
  s: 'h-4 w-4 border-[3px]',
  m: 'h-6 w-6 border-4',
  l: 'h-8 w-8 border-[5px]',
  xl: 'h-10 w-10 border-[6px]',
};

const colorStyles: { [key in Colors]: string } = {
  primary: 'text-primary-700',
  white: 'text-white',
  secondary: 'text-secondary-600',
  auxiliar: 'text-auxiliar1-200',
};

const Spinner = ({ size = 'm', colors: color = 'primary' }: Props) => {


  const classSpinner = useMemo(() => {
    return classNames(
      "inline-block animate-spin rounded-full border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",
      sizeStyles[size],
      colorStyles[color]
    );
  }, [size, color])

  return (
    <div
      className={classSpinner}
      role="status">
      <span
        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Loading...</span>
    </div>
  );
};

export default Spinner;
