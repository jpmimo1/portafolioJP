
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

interface IContent {
  title: string,
  itemsHeader: Array<IItemHeader>,
  languages: ILenguageContent
}

export interface IContentLanguages {
  [key: string]: IContent,
}

