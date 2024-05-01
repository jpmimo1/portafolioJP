
export type LanguagesContent = 'es' | 'en';

interface IItemHeader {
  title: string,
  url: string,
  iconClass?: string
}

interface ILenguageContent {
  title: string,
  items: {
    es: string,
    en: string
  }
}

interface IButtonProps {
  text: string,
  iconClass?: string,
  url: string
}
interface IHomeContent {
  title: string | JSX.Element,
  subTitle: string,
  button1: IButtonProps,
  button2: IButtonProps,
}

interface IAboutMeContent {
  title1: string,
  paragraph1: string,
  title2: string,
  paragraph2: string,
  finalMessage: string,
}

interface IMyKnoledge {
  title: string,
  paragraph: string,
}

export interface IJob {
  title: string,
  time: string,
  tasks: string[]
}
interface IMyExperience {
  title: string,
  jobs: IJob[]
}

export interface ITechnology {
  name: string,
  url: string,
}

export interface ISocialMedia {
  name: string,
  url: string,
  icon: string,
}
export interface IProject {
  title: string,
  type: string,
  gitHubUrl?: string,
  viewUrl?: string,
  imageUrl: string,
  description: string,
  technologiesTitle: string,
  technologiesUsed: ITechnology[],
}
interface IMyProjects {
  title: string,
  paragraph: string,
  seeProjectText: string,
  seeProjectIcon: string,
  seeMoreText: string,
  seeMoreIcon: string,
}

interface IInputData {
  label: string,
  placeholder: string,
}
interface IContact {
  title: string,
  paragraph: string,
  nameInput: IInputData,
  emailInput: IInputData,
  messageInput: IInputData,
  sendText: string
}

interface IFooter {
  text: string,
}

interface IContent {
  title: string,
  itemsHeader: Array<IItemHeader>,
  languages: ILenguageContent,
  homeContent: IHomeContent,
  aboutMeContent: IAboutMeContent,
  knoledgeContent: IMyKnoledge,
  experienceContent: IMyExperience,
  projectContent: IMyProjects,
  contactContent: IContact,
  footer: IFooter
}

export type IContentLanguages = {
  [key in LanguagesContent]: IContent
}

interface IProjectPage {
  title: string,
  paragraph: string
}

export type IProjectPageLanguages = {
  [key in LanguagesContent]: IProjectPage
}

