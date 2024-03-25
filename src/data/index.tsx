import type { IContentLanguages } from "../types/content";

export const ContentPage: IContentLanguages = {
  es: {
    title: 'Jean Paul - Developer',
    itemsHeader: [
      { title: 'Inicio', url: '/es', iconClass: 'iconportafoliojp-home' },
      { title: 'Sobre mi', url: '/es#about-me', iconClass: 'iconportafoliojp-person' },
      { title: 'Mis conocimientos', url: '/es#about-me', iconClass: 'iconportafoliojp-menu-book' },
      { title: 'Mi experiencia', url: '/es#about-me', iconClass: 'iconportafoliojp-work' },
      { title: 'Mis proyectos', url: '/es#about-me', iconClass: 'iconportafoliojp-public' },
      { title: 'Contáctame', url: '/es#about-me', iconClass: 'iconportafoliojp-mail' }
    ],
    languages: { title: 'Idiomas', items: { en: 'Ingles', es: 'Español' } }
  },
  en: {
    title: 'Jean Paul - Developer',
    itemsHeader: [
      { title: 'Home', url: '/en' },
      { title: 'About me', url: '/es#about-me' }
    ],
    languages: { title: 'Languages', items: { en: 'English', es: 'Spanish' } }
  },
};
