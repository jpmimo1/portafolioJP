import React, { useEffect, useMemo, useRef, useState } from 'react'

import { ContentPage, socialMedias } from "../../data";
import type { LanguagesContent } from "../../types/content";
import EmailCopy from "../EmailCopy";
import ButtonComplete from "../basic/ButtonComplete";
import IconButton from "../basic/IconButton";
import { useThemeAfterRender } from '../../hooks/themeAfterRender';
import axios from 'axios';
import { toast, type Id } from 'react-toastify';


interface InputsValues {
  name: string,
  email: string,
  message: string
}

const inputsInitialValues: InputsValues = {
  name: '',
  email: '',
  message: ''
}

interface Props {
  language: LanguagesContent;
}

const loadingMessage = {
  es: 'Enviando mensaje',
  en: 'Sending message'
}

const successMessage = {
  es: 'Mensaje enviado correctamente',
  en: 'Message sent successfully'
}

const errorMessage = {
  es: 'Hubo un error enviando el mensaje',
  en: 'There was an error sending the message'
}

const Contact = ({ language }: Props) => {
  const theme = useThemeAfterRender();
  const [isLoading, setIsLoading] = useState(false);

  const [inputsValues, setInputsValues] = useState(inputsInitialValues);

  const { title, paragraph, nameInput, emailInput, messageInput, sendText } = useMemo(() => ContentPage[language].contactContent, [language]);

  const toastId = useRef<Id>('');

  const setInputValue = (key: keyof InputsValues, value: string) => {
    setInputsValues((prevValue) => {
      return { ...prevValue, [key]: value }
    });
  };

  const onSubmitForm: React.FormEventHandler<HTMLFormElement> = async (e) => {
    if (isLoading) {
      return;
    }
    try {
      setIsLoading(true);
      toastId.current = toast.loading(loadingMessage[language], { closeButton: false, theme: theme });
      e.preventDefault();

      const name = inputsValues.name;
      const email = inputsValues.email;
      const message = inputsValues.message;

      const bodyEmail = {
        name, email, message
      }

      const response = await axios.post(
        'https://pusavxb1mc.execute-api.us-east-1.amazonaws.com/sendEmail', bodyEmail
      );
      if (response.status !== 200) {
        throw new Error('');
      }
      toast.update(toastId.current, {
        render: successMessage[language],
        type: 'success',
        closeButton: true,
        theme: theme,
        isLoading: false,
        autoClose: 2000
      });
      setInputsValues(inputsInitialValues);
      setIsLoading(false);
    } catch (ex) {
      toast.update(toastId.current, {
        render: errorMessage[language],
        type: 'error',
        closeButton: true,
        theme: theme,
        isLoading: false,
        autoClose: 2000
      });
      setIsLoading(false);
    }
  };

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: keyof InputsValues
  ) => {
    const newValue = e.target.value;

    setInputValue(key, newValue);
  }

  return (
    <section className="bg-white dark:bg-slate-600 py-12 lg:py-24 relative">
      <div id="contact-section" className="absolute bottom-full h-16 lg:h-20"></div>
      <div className="px-4 max-w-screen-xl mx-auto lg:px-8">
        <h3
          className="text-primary-700 dark:text-primary-200 text-4xl lg:text-5xl mb-5 lg:mb-8 max-w-screen-md mx-auto"
        >
          {title}
        </h3>
        <p className="mb-7 lg:mb-12 dark:text-white max-w-screen-md mx-auto">{paragraph}</p>
        <div className="flex justify-between items-center mb-5 max-w-screen-md mx-auto">
          <div className="flex gap-2">
            {
              Object.keys(socialMedias).map((key) => {
                const keySocialMedias = key as keyof typeof socialMedias;
                const socialMedia = socialMedias[keySocialMedias];
                return (
                  <IconButton
                    key={socialMedia.name}
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
          <EmailCopy language={language} />
        </div>
        <form onSubmit={onSubmitForm}>
          <div className="flex flex-col gap-3 md:gap-6 max-w-screen-md mx-auto">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:gap-6">
              <div className="flex flex-col">
                <label htmlFor="full-name-input" className='dark:text-white md:mb-1'>
                  {nameInput.label}
                  <span className="text-red-600">*</span>
                </label>
                <input
                  id="full-name-input"
                  name="full-name-input"
                  className="border-auxiliar1-200 focus-visible:outline-primary-700 border px-2 lg:px-3 py-1 lg:py-2 rounded-md placeholder:text-auxiliar1-200"
                  type="text"
                  placeholder={nameInput.placeholder}
                  required
                  value={inputsValues.name}
                  onChange={(e) => { onChangeInput(e, 'name') }}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email-input" className='dark:text-white md:mb-1'>
                  {emailInput.label}
                  <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email-input"
                  name="email-input"
                  className="border-auxiliar1-200 focus-visible:outline-primary-700 border px-2 py-1 lg:px-3 lg:py-2 rounded-md placeholder:text-auxiliar1-200"
                  placeholder={emailInput.placeholder}
                  required
                  value={inputsValues.email}
                  onChange={(e) => { onChangeInput(e, 'email') }}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="message-input" className='dark:text-white md:mb-1'>
                {messageInput.label}
                <span className="text-red-600">*</span>
              </label>
              <textarea
                id="message-input"
                name="message-input"
                className="border-auxiliar1-200 focus-visible:outline-primary-700 border px-2 py-1 lg:px-3 lg:py-2 rounded-md placeholder:text-auxiliar1-200 h-32"
                placeholder={messageInput.placeholder}
                required
                value={inputsValues.message}
                onChange={(e) => { onChangeInput(e, 'message') }}
              />
            </div>
            <ButtonComplete
              className='lg:self-end'
              typeElement="button"
              type="submit"
              text={sendText}
              icon1="iconportafoliojp-send"
              size="s"
              variant={theme === 'light' ? 'contained' : 'outlined'}
              bgColor={theme === 'light' ? 'primary' : 'white'}
              textColor={theme === 'light' ? 'white' : 'primary'}
              disabled={isLoading}
            />
          </div>
        </form>
      </div>
    </section>
  )
};

export default Contact;
