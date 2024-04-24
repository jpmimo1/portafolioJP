import React, { useEffect, useState } from 'react'
import type { LanguagesContent } from '../types/content';
import classNames from 'classnames';

interface Props {
  language: LanguagesContent
}

const email = 'paul.fa.ac@gmail.com';
const textCopied = {
  es: 'Email copiado',
  en: 'Copied email',
}

const EmailCopy = ({ language }: Props) => {
  const [emailCopied, setEmailCopied] = useState<boolean>(false);

  useEffect(() => {
    if (emailCopied) {
      setTimeout(() => {
        setEmailCopied(false);
      }, 1000);
    }

  }, [emailCopied]);

  return (
    <div
      className="flex gap-2 cursor-pointer relative"
      onClick={() => {
        navigator.clipboard.writeText(email);
        setEmailCopied(true);
      }}
    >
      {emailCopied ? <div
        className="whitespace-nowrap absolute bottom-[calc(100%_+_10px)] left-1/2 -translate-x-1/2 border border-primary-800 bg-auxiliar1-100 px-3 py-1 rounded-full text-primary-800 flex items-center gap-2 leading-3 text-sm"
      >
        <span className={classNames("iconportafoliojp-check")}></span>
        {textCopied[language]}
      </div> : null}
      <span
        className={classNames("iconportafoliojp-mail", "text-2xl text-primary-600")}
      ></span>
      <div>{email}</div>
    </div>
  )
};

export default EmailCopy;
