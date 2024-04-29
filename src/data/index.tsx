import type { IContentLanguages, IProject, IProjectPageLanguages, ISocialMedia, ITechnology, LanguagesContent } from "../types/content";

type keysTechnologies = "HTML" | "CSS3" | "JavaScript" | "TypeScript" | "ReactJS" | "NextJS" | "Tailwind" | "Redux" | "NodeJS" | "Git" | "Selenium" | "Jest";
type keysSocialMedias = 'GitHub' | 'LinkedIn';


export const languages = ['es', 'en'];

export const technologies: { [key in keysTechnologies]: ITechnology } = {
  HTML: { name: "HTML", url: "/assets/images/technologies/html5.svg" },
  CSS3: { name: "CSS3", url: "/assets/images/technologies/css3.svg" },
  JavaScript: { name: "JavaScript", url: "/assets/images/technologies/js.svg" },
  TypeScript: { name: "TypeScript", url: "/assets/images/technologies/typescript.svg" },
  ReactJS: { name: "ReactJS", url: "/assets/images/technologies/react.svg" },
  NextJS: { name: "NextJS", url: "/assets/images/technologies/next.svg" },
  Tailwind: { name: "Tailwind", url: "/assets/images/technologies/tailwind.svg" },
  Redux: { name: "Redux", url: "/assets/images/technologies/redux.svg" },
  NodeJS: { name: "NodeJS", url: "/assets/images/technologies/nodejs.svg" },
  Git: { name: "Git", url: "/assets/images/technologies/git.svg" },
  Selenium: { name: "Selenium", url: "/assets/images/technologies/selenium.svg" },
  Jest: { name: "Jest", url: "/assets/images/technologies/jest.svg" },
};

export const socialMedias: { [key in keysSocialMedias]: ISocialMedia } = {
  GitHub: { name: 'GitHub', url: 'https://github.com/jpmimo1', icon: 'iconportafoliojp-github' },
  LinkedIn: { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jean-paul-flores-auquimayta/', icon: 'iconportafoliojp-linkedin' }
};

export const ContentPage: IContentLanguages = {
  es: {
    title: 'Jean Paul - Developer',
    itemsHeader: [
      { title: 'Inicio', url: '#home-section', iconClass: 'iconportafoliojp-home' },
      { title: 'Sobre mi', url: '#about-section', iconClass: 'iconportafoliojp-person' },
      { title: 'Mis conocimientos', url: '#knowledge-section', iconClass: 'iconportafoliojp-menu-book' },
      { title: 'Mi experiencia', url: '#experience-section', iconClass: 'iconportafoliojp-work' },
      { title: 'Mis proyectos', url: '#projects-section', iconClass: 'iconportafoliojp-public' },
      { title: 'Contáctame', url: '#contact-section', iconClass: 'iconportafoliojp-mail' }
    ],
    languages: { title: 'Idiomas', items: { en: 'Ingles', es: 'Español' } },
    homeContent: {
      title: <>Hola, soy <div className="text-primary-700 dark:text-primary-300">Jean Paul</div></>,
      subTitle: 'Desarrollador Front-end',
      button1: {
        text: 'Contáctame',
        url: '',
        iconClass: 'iconportafoliojp-mail',
      },
      button2: {
        text: 'Descargar CV',
        url: '',
        iconClass: 'iconportafoliojp-pdf'
      }
    },
    aboutMeContent: {
      title1: 'Sobre mi',
      paragraph1: '¡Hola a todos! Soy Jean Paul, un apasionado desarrollador web Frontend e Ingeniero de Sistemas. Mi objetivo principal es ofrecer la mejor experiencia de usuario posible a través de proyectos intuitivos, fáciles de usar y con un diseño agradable.',
      title2: '¡Hablemos!',
      paragraph2: 'Si estás interesado en trabajar juntos o simplemente quieres conectarte, ¡no dudes en contactarme! Estoy siempre abierto a nuevas oportunidades y colaboraciones emocionantes.',
      finalMessage: '¡Gracias por visitar mi portafolio!'
    },
    knoledgeContent: {
      title: 'Mis conocimientos',
      paragraph: 'Como desarrollador web Frontend poseo un sólido conjunto de habilidades técnicas que me permiten crear experiencias digitales excepcionales.'
    },
    experienceContent: {
      title: 'Mi experiencia',
      jobs: [{
        title: 'IDX Boost - Desarrollador Front-end',
        time: 'Enero 2023 - Marzo 2023',
        tasks: [
          'Desarrollo de nuevas características, como Selectable Item y Modal Editor para el producto IDX Boost, haciendo uso de ReactJS y Redux.',
          'Mantenimiento y optimización de las nuevas características desarrolladas.'
        ]
      }, {
        title: 'Valtec Consultores - Desarrollador Full Stack',
        time: 'Enero 2022 - Septiembre 2023',
        tasks: [
          'Desarrollo de aplicaciones web con React js.',
          'Consumo de API REST.',
          'Diseño y desarrollo de proyectos Web.',
          'Desarrollo de API REST con .NET y SQL Server.',
          'Publicación de proyectos web en la nube.',
          'Desarrollo de una Aplicación Web conectada a un sensor mediante IoT haciendo uso de los servicios de la nube de Google (Pub/Sub, Cloud Functions, Firestore, Cloud Run).'
        ]
      }, {
        title: 'Killa House Hotel - Desarrollador Front-end',
        time: 'Julio 2016 - Julio 2017',
        tasks: [
          'Mantenimiento y mejora del sitio Web del Hotel.',
          'Diseño y producción de contenidos para la página web.',
          'Rediseño del sitio web, para mejorar la interacción con los usuario y mayor atractivo visual.'
        ]
      }, {
        title: 'Llika Inversiones  - Desarrollador Front-end',
        time: 'Junio 2015 - Junio 2016',
        tasks: [
          'Diseño y desarrollo de proyectos web.',
          'Desarrollo de plugins y temas personalizados para el CMS Drupal.',
          'Maquetación y desarrollo web front-end',
          'Mantenimiento y mejora se sitios y aplicaciones web.'
        ]
      }]
    },
    projectContent: {
      title: 'Mis proyectos',
      paragraph: 'Estos son algunos de mis proyectos.',
      projects: [{
        title: 'Proyecto 1 Delivery a Cusco',
        type: 'Frontend',
        description: 'Velit Lorem mollit tempor aliqua tempor culpa reprehenderit et est. Ex nostrud laborum minim ipsum est id aliqua Lorem cillum commodo ea. Non do excepteur minim Lorem magna sit commodo enim fugiat quis ex dolor et. Exercitation mollit enim cupidatat ullamco do eiusmod elit ad est sit irure sunt aliquip excepteur.',
        imageUrl: `https://picsum.photos/500/300?random=${Math.floor(Math.random() * 1000)}`,
        technologiesTitle: 'Tecnologías usadas:',
        technologiesUsed: [
          technologies.HTML,
          technologies.CSS3,
          technologies.JavaScript,
        ]
      }, {
        title: 'Proyecto 2 Delivery a Cusco',
        type: 'Frontend',
        description: 'Velit Lorem mollit tempor aliqua tempor culpa reprehenderit et est. Ex nostrud laborum minim ipsum est id aliqua Lorem cillum commodo ea. Non do excepteur minim Lorem magna sit commodo enim fugiat quis ex dolor et. Exercitation mollit enim cupidatat ullamco do eiusmod elit ad est sit irure sunt aliquip excepteur.',
        imageUrl: `https://picsum.photos/500/300?random=${Math.floor(Math.random() * 1000)}`,
        technologiesTitle: 'Tecnologías usadas:',
        technologiesUsed: [
          technologies.HTML,
          technologies.CSS3,
          technologies.JavaScript,
          technologies.ReactJS,
          technologies.Redux,
          technologies.Tailwind,
          technologies.TypeScript
        ]
      }, {
        title: 'Proyecto 3 Delivery a Cusco',
        type: 'Frontend',
        description: 'Velit Lorem mollit tempor aliqua tempor culpa reprehenderit et est. Ex nostrud laborum minim ipsum est id aliqua Lorem cillum commodo ea. Non do excepteur minim Lorem magna sit commodo enim fugiat quis ex dolor et. Exercitation mollit enim cupidatat ullamco do eiusmod elit ad est sit irure sunt aliquip excepteur.',
        imageUrl: `https://picsum.photos/500/300?random=${Math.floor(Math.random() * 1000)}`,
        technologiesTitle: 'Tecnologías usadas:',
        technologiesUsed: [
          technologies.HTML,
          technologies.CSS3,
          technologies.JavaScript,
          technologies.ReactJS,
          technologies.Redux,
          technologies.Tailwind,
          technologies.TypeScript
        ]
      }, {
        title: 'Proyecto 4 Delivery a Cusco',
        type: 'Frontend',
        description: 'Velit Lorem mollit tempor aliqua tempor culpa reprehenderit et est. Ex nostrud laborum minim ipsum est id aliqua Lorem cillum commodo ea. Non do excepteur minim Lorem magna sit commodo enim fugiat quis ex dolor et. Exercitation mollit enim cupidatat ullamco do eiusmod elit ad est sit irure sunt aliquip excepteur.',
        imageUrl: `https://picsum.photos/500/300?random=${Math.floor(Math.random() * 1000)}`,
        technologiesTitle: 'Tecnologías usadas:',
        technologiesUsed: [
          technologies.HTML,
          technologies.CSS3,
          technologies.JavaScript,
          technologies.ReactJS,
          technologies.Redux,
          technologies.Tailwind,
          technologies.TypeScript
        ]
      }, {
        title: 'Proyecto 5 Delivery a Cusco',
        type: 'Frontend',
        description: 'Velit Lorem mollit tempor aliqua tempor culpa reprehenderit et est. Ex nostrud laborum minim ipsum est id aliqua Lorem cillum commodo ea. Non do excepteur minim Lorem magna sit commodo enim fugiat quis ex dolor et. Exercitation mollit enim cupidatat ullamco do eiusmod elit ad est sit irure sunt aliquip excepteur.',
        imageUrl: `https://picsum.photos/500/300?random=${Math.floor(Math.random() * 1000)}`,
        technologiesTitle: 'Tecnologías usadas:',
        technologiesUsed: [
          technologies.HTML,
          technologies.CSS3,
          technologies.JavaScript,
          technologies.ReactJS,
          technologies.Redux,
          technologies.Tailwind,
          technologies.TypeScript
        ]
      }, {
        title: 'Proyecto 6 Delivery a Cusco',
        type: 'Frontend',
        description: 'Velit Lorem mollit tempor aliqua tempor culpa reprehenderit et est. Ex nostrud laborum minim ipsum est id aliqua Lorem cillum commodo ea. Non do excepteur minim Lorem magna sit commodo enim fugiat quis ex dolor et. Exercitation mollit enim cupidatat ullamco do eiusmod elit ad est sit irure sunt aliquip excepteur.',
        imageUrl: `https://picsum.photos/500/300?random=${Math.floor(Math.random() * 1000)}`,
        technologiesTitle: 'Tecnologías usadas:',
        technologiesUsed: [
          technologies.HTML,
          technologies.CSS3,
          technologies.JavaScript,
          technologies.ReactJS,
          technologies.Redux,
          technologies.Tailwind,
          technologies.TypeScript
        ]
      }, {
        title: 'Proyecto 7 Delivery a Cusco',
        type: 'Frontend',
        description: 'Velit Lorem mollit tempor aliqua tempor culpa reprehenderit et est. Ex nostrud laborum minim ipsum est id aliqua Lorem cillum commodo ea. Non do excepteur minim Lorem magna sit commodo enim fugiat quis ex dolor et. Exercitation mollit enim cupidatat ullamco do eiusmod elit ad est sit irure sunt aliquip excepteur.',
        imageUrl: `https://picsum.photos/500/300?random=${Math.floor(Math.random() * 1000)}`,
        technologiesTitle: 'Tecnologías usadas:',
        technologiesUsed: [
          technologies.HTML,
          technologies.CSS3,
          technologies.JavaScript,
          technologies.ReactJS,
          technologies.Redux,
          technologies.Tailwind,
          technologies.TypeScript
        ]
      }, {
        title: 'Proyecto 8 Delivery a Cusco',
        type: 'Frontend',
        description: 'Velit Lorem mollit tempor aliqua tempor culpa reprehenderit et est. Ex nostrud laborum minim ipsum est id aliqua Lorem cillum commodo ea. Non do excepteur minim Lorem magna sit commodo enim fugiat quis ex dolor et. Exercitation mollit enim cupidatat ullamco do eiusmod elit ad est sit irure sunt aliquip excepteur.',
        imageUrl: `https://picsum.photos/500/300?random=${Math.floor(Math.random() * 1000)}`,
        technologiesTitle: 'Tecnologías usadas:',
        technologiesUsed: [
          technologies.HTML,
          technologies.CSS3,
          technologies.JavaScript,
          technologies.ReactJS,
          technologies.Redux,
          technologies.Tailwind,
          technologies.TypeScript
        ]
      }, {
        title: 'Proyecto 9 Delivery a Cusco',
        type: 'Frontend',
        description: 'Velit Lorem mollit tempor aliqua tempor culpa reprehenderit et est. Ex nostrud laborum minim ipsum est id aliqua Lorem cillum commodo ea. Non do excepteur minim Lorem magna sit commodo enim fugiat quis ex dolor et. Exercitation mollit enim cupidatat ullamco do eiusmod elit ad est sit irure sunt aliquip excepteur.',
        imageUrl: `https://picsum.photos/500/300?random=${Math.floor(Math.random() * 1000)}`,
        technologiesTitle: 'Tecnologías usadas:',
        technologiesUsed: [
          technologies.HTML,
          technologies.CSS3,
          technologies.JavaScript,
          technologies.ReactJS,
          technologies.Redux,
          technologies.Tailwind,
          technologies.TypeScript
        ]
      }, {
        title: 'Proyecto 10 Delivery a Cusco',
        type: 'Frontend',
        description: 'Velit Lorem mollit tempor aliqua tempor culpa reprehenderit et est. Ex nostrud laborum minim ipsum est id aliqua Lorem cillum commodo ea. Non do excepteur minim Lorem magna sit commodo enim fugiat quis ex dolor et. Exercitation mollit enim cupidatat ullamco do eiusmod elit ad est sit irure sunt aliquip excepteur.',
        imageUrl: `https://picsum.photos/500/300?random=${Math.floor(Math.random() * 1000)}`,
        technologiesTitle: 'Tecnologías usadas:',
        technologiesUsed: [
          technologies.HTML,
          technologies.CSS3,
          technologies.JavaScript,
          technologies.ReactJS,
          technologies.Redux,
          technologies.Tailwind,
          technologies.TypeScript
        ]
      }],
      seeProjectText: 'Ver proyecto',
      seeProjectIcon: 'iconportafoliojp-visibility',
      seeMoreText: 'Ver más...',
      seeMoreIcon: 'iconportafoliojp-visibility',
    },
    contactContent: {
      title: 'Contacto',
      paragraph: '¿Tienes alguna pregunta, comentario o proyecto en mente en el que podamos colaborar juntos? ¡No dudes en ponerte en contacto conmigo!',
      nameInput: {
        label: 'Nombres',
        placeholder: 'Nombre completo'
      },
      emailInput: {
        label: 'Email',
        placeholder: 'mail@mail.com'
      },
      messageInput: {
        label: 'Mensaje',
        placeholder: 'Escribe tu mensaje aquí...'
      },
      sendText: 'Enviar'
    },
    footer: {
      text: '© Copyrigth 2024 - hecho por Jean Paul F.'
    }
  },
  en: {
    title: 'Jean Paul - Developer',
    itemsHeader: [
      { title: 'Home', url: '#home-section', iconClass: 'iconportafoliojp-home' },
      { title: 'About me', url: '#about-section', iconClass: 'iconportafoliojp-person' },
      { title: 'My knowledge', url: '#knowledge-section', iconClass: 'iconportafoliojp-menu-book' },
      { title: 'My experience', url: '#experience-section', iconClass: 'iconportafoliojp-work' },
      { title: 'My projects', url: '#projects-section', iconClass: 'iconportafoliojp-public' },
      { title: 'Contact me', url: '#contact-section', iconClass: 'iconportafoliojp-mail' }
    ],
    languages: { title: 'Languages', items: { en: 'English', es: 'Spanish' } },
    homeContent: {
      title: <>Hello, I'm <div className="text-primary-700 dark:text-primary-300">Jean Paul</div></>,
      subTitle: 'Front-end developer',
      button1: {
        text: 'Contact me',
        url: '',
        iconClass: 'iconportafoliojp-mail',
      },
      button2: {
        text: 'Resume',
        url: '',
        iconClass: 'iconportafoliojp-mail'
      }
    },
    aboutMeContent: {
      title1: 'About me',
      paragraph1: 'Hello everyone! I am Jean Paul, a passionate Frontend web developer and Systems Engineer. My main goal is to offer the best possible user experience through intuitive, easy-to-use projects with a pleasant design.',
      title2: "Let's talk!",
      paragraph2: 'If you are interested in working together or just want to connect, feel free to contact me! I am always open to new opportunities and exciting collaborations.',
      finalMessage: 'Thanks for visiting my portfolio!'
    },
    knoledgeContent: {
      title: 'My knowledge',
      paragraph: 'As a Frontend web developer I have a strong set of technical skills that allow me to create exceptional digital experiences.'
    },
    experienceContent: {
      title: 'My experience',
      jobs: [{
        title: 'IDX Boost - Front-end Developer',
        time: 'January 2023 - March 2023',
        tasks: [
          'Development of new features, such as Selectable Item and Modal Editor for the IDX Boost product, using ReactJS and Redux.',
          'Maintenance and optimization of new features developed.'
        ]
      }, {
        title: 'Valtec Consultores - Full Stack Developer',
        time: 'January 2022 - September 2023',
        tasks: [
          'Web application development with React js.',
          'REST API consumption.',
          'Design and development of Web projects.',
          'REST API development with .NET and SQL Server.',
          'Publishing web projects in the cloud.',
          'Development of a Web Application connected to a sensor through IoT using Google cloud services (Pub/Sub, Cloud Functions, Firestore, Cloud Run).'
        ]
      }, {
        title: 'Killa House Hotel - Front-end Developer',
        time: 'July 2016 - July 2017',
        tasks: [
          "Maintenance and improvement of the Hotel's website.",
          "Design and production of content for the website.",
          "Redesign of the website, to improve interaction with users and greater visual appeal.",
        ]
      }, {
        title: 'Llika Inversiones - Front-end Developer',
        time: 'June 2015 - June 2016',
        tasks: [
          'Design and development of web projects.',
          'Development of custom plugins and themes for the Drupal CMS.',
          'Front-end web layout and development',
          'Maintenance and improvement of web sites and applications.',
        ]
      }]
    },
    projectContent: {
      title: 'My proyects',
      paragraph: 'These are some of my projects.',
      projects: [],
      seeProjectText: 'See project',
      seeProjectIcon: 'iconportafoliojp-visibility',
      seeMoreText: 'See more...',
      seeMoreIcon: 'iconportafoliojp-visibility',
    },
    contactContent: {
      title: 'Contact',
      paragraph: 'Do you have any questions, comments or projects in mind that we can collaborate on together? Do not doubt to keep in touch with me!',
      nameInput: {
        label: 'Full name',
        placeholder: 'Full name'
      },
      emailInput: {
        label: 'E-mail',
        placeholder: 'mail@mail.com'
      },
      messageInput: {
        label: 'Message',
        placeholder: 'Write your message here...'
      },
      sendText: 'Send'
    },
    footer: {
      text: '© Copyrigth 2024 - made by Jean Paul F.'
    }
  }
};

export const ContentProjectPage: IProjectPageLanguages = {
  es: {
    title: 'Mis Proyectos',
    paragraph: "Estos son algunos de los proyectos en los que he estado trabajando. Si tienes alguna pregunta o estás interesado en colaborar, no dudes en ponerte en contacto conmigo."
  },
  en: {
    title: 'My projects',
    paragraph: "These are some of the projects I have been working on. If you have any questions or are interested in collaborating, please do not hesitate to contact me."
  }
}

export const projects: Array<{ [key in LanguagesContent]: IProject }> = [
  {
    es: {
      title: 'Proyecto 1 Delivery a Cusco',
      type: 'Frontend',
      description: 'Velit Lorem mollit tempor aliqua tempor culpa reprehenderit et est. Ex nostrud laborum minim ipsum est id aliqua Lorem cillum commodo ea. Non do excepteur minim Lorem magna sit commodo enim fugiat quis ex dolor et. Exercitation mollit enim cupidatat ullamco do eiusmod elit ad est sit irure sunt aliquip excepteur.',
      imageUrl: `https://picsum.photos/500/300?random=${Math.floor(Math.random() * 1000)}`,
      technologiesTitle: 'Tecnologías usadas:',
      technologiesUsed: [
        technologies.HTML,
        technologies.CSS3,
        technologies.JavaScript,
      ]
    },
    en: {
      title: 'Project 1 Delivery to Cusco',
      type: 'Frontend',
      description: 'Velit Lorem mollit tempor aliqua tempor culpa reprehenderit et est. Ex nostrud laborum minim ipsum est id aliqua Lorem cillum commodo ea. Non do excepteur minim Lorem magna sit commodo enim fugiat quis ex dolor et. Exercitation mollit enim cupidatat ullamco do eiusmod elit ad est sit irure sunt aliquip excepteur.',
      imageUrl: `https://picsum.photos/500/300?random=${Math.floor(Math.random() * 1000)}`,
      technologiesTitle: 'Tecnologías usadas:',
      technologiesUsed: [
        technologies.HTML,
        technologies.CSS3,
        technologies.JavaScript,
      ]
    }
  },
  {
    es: {
      title: 'Proyecto 2 Delivery a Cusco',
      type: 'Frontend',
      description: 'Velit Lorem mollit tempor aliqua tempor culpa reprehenderit et est. Ex nostrud laborum minim ipsum est id aliqua Lorem cillum commodo ea. Non do excepteur minim Lorem magna sit commodo enim fugiat quis ex dolor et. Exercitation mollit enim cupidatat ullamco do eiusmod elit ad est sit irure sunt aliquip excepteur.',
      imageUrl: `https://picsum.photos/500/300?random=${Math.floor(Math.random() * 1000)}`,
      technologiesTitle: 'Tecnologías usadas:',
      technologiesUsed: [
        technologies.HTML,
        technologies.CSS3,
        technologies.JavaScript,
        technologies.ReactJS,
        technologies.Redux,
        technologies.Tailwind,
        technologies.TypeScript
      ]
    }, en: {
      title: 'Project 2 Delivery to Cusco',
      type: 'Frontend',
      description: 'Velit Lorem mollit tempor aliqua tempor culpa reprehenderit et est. Ex nostrud laborum minim ipsum est id aliqua Lorem cillum commodo ea. Non do excepteur minim Lorem magna sit commodo enim fugiat quis ex dolor et. Exercitation mollit enim cupidatat ullamco do eiusmod elit ad est sit irure sunt aliquip excepteur.',
      imageUrl: `https://picsum.photos/500/300?random=${Math.floor(Math.random() * 1000)}`,
      technologiesTitle: 'Tecnologías usadas:',
      technologiesUsed: [
        technologies.HTML,
        technologies.CSS3,
        technologies.JavaScript,
        technologies.ReactJS,
        technologies.Redux,
        technologies.Tailwind,
        technologies.TypeScript
      ]
    }
  }, {
    es: {
      title: 'Proyecto 3 Delivery a Cusco',
      type: 'Frontend',
      description: 'Velit Lorem mollit tempor aliqua tempor culpa reprehenderit et est. Ex nostrud laborum minim ipsum est id aliqua Lorem cillum commodo ea. Non do excepteur minim Lorem magna sit commodo enim fugiat quis ex dolor et. Exercitation mollit enim cupidatat ullamco do eiusmod elit ad est sit irure sunt aliquip excepteur.',
      imageUrl: `https://picsum.photos/500/300?random=${Math.floor(Math.random() * 1000)}`,
      technologiesTitle: 'Tecnologías usadas:',
      technologiesUsed: [
        technologies.HTML,
        technologies.CSS3,
        technologies.JavaScript,
        technologies.ReactJS,
        technologies.Redux,
        technologies.Tailwind,
        technologies.TypeScript
      ]
    }, en: {
      title: 'Project 3 Delivery to Cusco',
      type: 'Frontend',
      description: 'Velit Lorem mollit tempor aliqua tempor culpa reprehenderit et est. Ex nostrud laborum minim ipsum est id aliqua Lorem cillum commodo ea. Non do excepteur minim Lorem magna sit commodo enim fugiat quis ex dolor et. Exercitation mollit enim cupidatat ullamco do eiusmod elit ad est sit irure sunt aliquip excepteur.',
      imageUrl: `https://picsum.photos/500/300?random=${Math.floor(Math.random() * 1000)}`,
      technologiesTitle: 'Tecnologías usadas:',
      technologiesUsed: [
        technologies.HTML,
        technologies.CSS3,
        technologies.JavaScript,
        technologies.ReactJS,
        technologies.Redux,
        technologies.Tailwind,
        technologies.TypeScript
      ]
    }
  }, {
    es: {
      title: 'Proyecto 4 Delivery a Cusco',
      type: 'Frontend',
      description: 'Velit Lorem mollit tempor aliqua tempor culpa reprehenderit et est. Ex nostrud laborum minim ipsum est id aliqua Lorem cillum commodo ea. Non do excepteur minim Lorem magna sit commodo enim fugiat quis ex dolor et. Exercitation mollit enim cupidatat ullamco do eiusmod elit ad est sit irure sunt aliquip excepteur.',
      imageUrl: `https://picsum.photos/500/300?random=${Math.floor(Math.random() * 1000)}`,
      technologiesTitle: 'Tecnologías usadas:',
      technologiesUsed: [
        technologies.HTML,
        technologies.CSS3,
        technologies.JavaScript,
        technologies.ReactJS,
        technologies.Redux,
        technologies.Tailwind,
        technologies.TypeScript
      ]
    }, en: {
      title: 'Project 4 Delivery to Cusco',
      type: 'Frontend',
      description: 'Velit Lorem mollit tempor aliqua tempor culpa reprehenderit et est. Ex nostrud laborum minim ipsum est id aliqua Lorem cillum commodo ea. Non do excepteur minim Lorem magna sit commodo enim fugiat quis ex dolor et. Exercitation mollit enim cupidatat ullamco do eiusmod elit ad est sit irure sunt aliquip excepteur.',
      imageUrl: `https://picsum.photos/500/300?random=${Math.floor(Math.random() * 1000)}`,
      technologiesTitle: 'Tecnologías usadas:',
      technologiesUsed: [
        technologies.HTML,
        technologies.CSS3,
        technologies.JavaScript,
        technologies.ReactJS,
        technologies.Redux,
        technologies.Tailwind,
        technologies.TypeScript
      ]
    }
  }, {
    es: {
      title: 'Proyecto 5 Delivery a Cusco',
      type: 'Frontend',
      description: 'Velit Lorem mollit tempor aliqua tempor culpa reprehenderit et est. Ex nostrud laborum minim ipsum est id aliqua Lorem cillum commodo ea. Non do excepteur minim Lorem magna sit commodo enim fugiat quis ex dolor et. Exercitation mollit enim cupidatat ullamco do eiusmod elit ad est sit irure sunt aliquip excepteur.',
      imageUrl: `https://picsum.photos/500/300?random=${Math.floor(Math.random() * 1000)}`,
      technologiesTitle: 'Tecnologías usadas:',
      technologiesUsed: [
        technologies.HTML,
        technologies.CSS3,
        technologies.JavaScript,
        technologies.ReactJS,
        technologies.Redux,
        technologies.Tailwind,
        technologies.TypeScript
      ]
    }, en: {
      title: 'Project 5 Delivery to Cusco',
      type: 'Frontend',
      description: 'Velit Lorem mollit tempor aliqua tempor culpa reprehenderit et est. Ex nostrud laborum minim ipsum est id aliqua Lorem cillum commodo ea. Non do excepteur minim Lorem magna sit commodo enim fugiat quis ex dolor et. Exercitation mollit enim cupidatat ullamco do eiusmod elit ad est sit irure sunt aliquip excepteur.',
      imageUrl: `https://picsum.photos/500/300?random=${Math.floor(Math.random() * 1000)}`,
      technologiesTitle: 'Tecnologías usadas:',
      technologiesUsed: [
        technologies.HTML,
        technologies.CSS3,
        technologies.JavaScript,
        technologies.ReactJS,
        technologies.Redux,
        technologies.Tailwind,
        technologies.TypeScript
      ]
    }
  }, {
    es: {
      title: 'Proyecto 6 Delivery a Cusco',
      type: 'Frontend',
      description: 'Velit Lorem mollit tempor aliqua tempor culpa reprehenderit et est. Ex nostrud laborum minim ipsum est id aliqua Lorem cillum commodo ea. Non do excepteur minim Lorem magna sit commodo enim fugiat quis ex dolor et. Exercitation mollit enim cupidatat ullamco do eiusmod elit ad est sit irure sunt aliquip excepteur.',
      imageUrl: `https://picsum.photos/500/300?random=${Math.floor(Math.random() * 1000)}`,
      technologiesTitle: 'Tecnologías usadas:',
      technologiesUsed: [
        technologies.HTML,
        technologies.CSS3,
        technologies.JavaScript,
        technologies.ReactJS,
        technologies.Redux,
        technologies.Tailwind,
        technologies.TypeScript
      ]
    }, en: {
      title: 'Project 6 Delivery to Cusco',
      type: 'Frontend',
      description: 'Velit Lorem mollit tempor aliqua tempor culpa reprehenderit et est. Ex nostrud laborum minim ipsum est id aliqua Lorem cillum commodo ea. Non do excepteur minim Lorem magna sit commodo enim fugiat quis ex dolor et. Exercitation mollit enim cupidatat ullamco do eiusmod elit ad est sit irure sunt aliquip excepteur.',
      imageUrl: `https://picsum.photos/500/300?random=${Math.floor(Math.random() * 1000)}`,
      technologiesTitle: 'Tecnologías usadas:',
      technologiesUsed: [
        technologies.HTML,
        technologies.CSS3,
        technologies.JavaScript,
        technologies.ReactJS,
        technologies.Redux,
        technologies.Tailwind,
        technologies.TypeScript
      ]
    }
  }, {
    es: {
      title: 'Proyecto 7 Delivery a Cusco',
      type: 'Frontend',
      description: 'Velit Lorem mollit tempor aliqua tempor culpa reprehenderit et est. Ex nostrud laborum minim ipsum est id aliqua Lorem cillum commodo ea. Non do excepteur minim Lorem magna sit commodo enim fugiat quis ex dolor et. Exercitation mollit enim cupidatat ullamco do eiusmod elit ad est sit irure sunt aliquip excepteur.',
      imageUrl: `https://picsum.photos/500/300?random=${Math.floor(Math.random() * 1000)}`,
      technologiesTitle: 'Tecnologías usadas:',
      technologiesUsed: [
        technologies.HTML,
        technologies.CSS3,
        technologies.JavaScript,
        technologies.ReactJS,
        technologies.Redux,
        technologies.Tailwind,
        technologies.TypeScript
      ]
    }, en: {
      title: 'Project 7 Delivery to Cusco',
      type: 'Frontend',
      description: 'Velit Lorem mollit tempor aliqua tempor culpa reprehenderit et est. Ex nostrud laborum minim ipsum est id aliqua Lorem cillum commodo ea. Non do excepteur minim Lorem magna sit commodo enim fugiat quis ex dolor et. Exercitation mollit enim cupidatat ullamco do eiusmod elit ad est sit irure sunt aliquip excepteur.',
      imageUrl: `https://picsum.photos/500/300?random=${Math.floor(Math.random() * 1000)}`,
      technologiesTitle: 'Tecnologías usadas:',
      technologiesUsed: [
        technologies.HTML,
        technologies.CSS3,
        technologies.JavaScript,
        technologies.ReactJS,
        technologies.Redux,
        technologies.Tailwind,
        technologies.TypeScript
      ]
    }
  }, {
    es: {
      title: 'Proyecto 8 Delivery a Cusco',
      type: 'Frontend',
      description: 'Velit Lorem mollit tempor aliqua tempor culpa reprehenderit et est. Ex nostrud laborum minim ipsum est id aliqua Lorem cillum commodo ea. Non do excepteur minim Lorem magna sit commodo enim fugiat quis ex dolor et. Exercitation mollit enim cupidatat ullamco do eiusmod elit ad est sit irure sunt aliquip excepteur.',
      imageUrl: `https://picsum.photos/500/300?random=${Math.floor(Math.random() * 1000)}`,
      technologiesTitle: 'Tecnologías usadas:',
      technologiesUsed: [
        technologies.HTML,
        technologies.CSS3,
        technologies.JavaScript,
        technologies.ReactJS,
        technologies.Redux,
        technologies.Tailwind,
        technologies.TypeScript
      ]
    }, en: {
      title: 'Project 8 Delivery to Cusco',
      type: 'Frontend',
      description: 'Velit Lorem mollit tempor aliqua tempor culpa reprehenderit et est. Ex nostrud laborum minim ipsum est id aliqua Lorem cillum commodo ea. Non do excepteur minim Lorem magna sit commodo enim fugiat quis ex dolor et. Exercitation mollit enim cupidatat ullamco do eiusmod elit ad est sit irure sunt aliquip excepteur.',
      imageUrl: `https://picsum.photos/500/300?random=${Math.floor(Math.random() * 1000)}`,
      technologiesTitle: 'Tecnologías usadas:',
      technologiesUsed: [
        technologies.HTML,
        technologies.CSS3,
        technologies.JavaScript,
        technologies.ReactJS,
        technologies.Redux,
        technologies.Tailwind,
        technologies.TypeScript
      ]
    }
  }, {
    es: {
      title: 'Proyecto 9 Delivery a Cusco',
      type: 'Frontend',
      description: 'Velit Lorem mollit tempor aliqua tempor culpa reprehenderit et est. Ex nostrud laborum minim ipsum est id aliqua Lorem cillum commodo ea. Non do excepteur minim Lorem magna sit commodo enim fugiat quis ex dolor et. Exercitation mollit enim cupidatat ullamco do eiusmod elit ad est sit irure sunt aliquip excepteur.',
      imageUrl: `https://picsum.photos/500/300?random=${Math.floor(Math.random() * 1000)}`,
      technologiesTitle: 'Tecnologías usadas:',
      technologiesUsed: [
        technologies.HTML,
        technologies.CSS3,
        technologies.JavaScript,
        technologies.ReactJS,
        technologies.Redux,
        technologies.Tailwind,
        technologies.TypeScript
      ]
    }, en: {
      title: 'Project 9 Delivery to Cusco',
      type: 'Frontend',
      description: 'Velit Lorem mollit tempor aliqua tempor culpa reprehenderit et est. Ex nostrud laborum minim ipsum est id aliqua Lorem cillum commodo ea. Non do excepteur minim Lorem magna sit commodo enim fugiat quis ex dolor et. Exercitation mollit enim cupidatat ullamco do eiusmod elit ad est sit irure sunt aliquip excepteur.',
      imageUrl: `https://picsum.photos/500/300?random=${Math.floor(Math.random() * 1000)}`,
      technologiesTitle: 'Tecnologías usadas:',
      technologiesUsed: [
        technologies.HTML,
        technologies.CSS3,
        technologies.JavaScript,
        technologies.ReactJS,
        technologies.Redux,
        technologies.Tailwind,
        technologies.TypeScript
      ]
    }
  }, {
    es: {
      title: 'Proyecto 10 Delivery a Cusco',
      type: 'Frontend',
      description: 'Velit Lorem mollit tempor aliqua tempor culpa reprehenderit et est. Ex nostrud laborum minim ipsum est id aliqua Lorem cillum commodo ea. Non do excepteur minim Lorem magna sit commodo enim fugiat quis ex dolor et. Exercitation mollit enim cupidatat ullamco do eiusmod elit ad est sit irure sunt aliquip excepteur.',
      imageUrl: `https://picsum.photos/500/300?random=${Math.floor(Math.random() * 1000)}`,
      technologiesTitle: 'Tecnologías usadas:',
      technologiesUsed: [
        technologies.HTML,
        technologies.CSS3,
        technologies.JavaScript,
        technologies.ReactJS,
        technologies.Redux,
        technologies.Tailwind,
        technologies.TypeScript
      ]
    }, en: {
      title: 'Project 10 Delivery to Cusco',
      type: 'Frontend',
      description: 'Velit Lorem mollit tempor aliqua tempor culpa reprehenderit et est. Ex nostrud laborum minim ipsum est id aliqua Lorem cillum commodo ea. Non do excepteur minim Lorem magna sit commodo enim fugiat quis ex dolor et. Exercitation mollit enim cupidatat ullamco do eiusmod elit ad est sit irure sunt aliquip excepteur.',
      imageUrl: `https://picsum.photos/500/300?random=${Math.floor(Math.random() * 1000)}`,
      technologiesTitle: 'Tecnologías usadas:',
      technologiesUsed: [
        technologies.HTML,
        technologies.CSS3,
        technologies.JavaScript,
        technologies.ReactJS,
        technologies.Redux,
        technologies.Tailwind,
        technologies.TypeScript
      ]
    }
  }
]
