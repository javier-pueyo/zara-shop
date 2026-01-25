export const CV = {
    info: {
        logoUrl: './assets/img/favicon-180x180.png',
        name: 'Pueyo Mir',
        email: 'hola@pueyomir.com',
        linkedin: 'https://www.linkedin.com/in/pueyojavier/',
        gitlab: 'https://gitlab.com/javier-pueyo'
    },
    navMenu: [
        {
            name: 'About me',
            url: '#aboutMe'
        },
        {
            name: 'Projects',
            url: '#projects'
        },
        {
            name: 'Education',
            url: '#education'
        },
        {
            name: 'Knowledge',
            url: '#knowledge'
        },
        {
            name: 'Experience',
            url: '#experience'
        },
        {
            name: 'Contact',
            url: '#contact'
        },
    ],
    hero: {
        title: 'Creative\nDeveloper',
        name: 'Pueyo Mir'
    },
    aboutUs: {
        description: 'Passionate about web technologies. I love working at the intersection of creativity and user friendly interfaces. I create memorable web experiences.',
        image: {
            url: './assets/img/pueyomir_javier-pueyo.jpg',
            name: 'javier pueyo mir'
        }
    },
    projects: [
        {
            urlProject: 'https://codes-nook.netlify.app/',
            urlRepo: 'https://gitlab.com/javier-pueyo/codes-nook-front',
            title: 'Codes nook',
            description: 'Are you a frontend developer? This website will provide you with resources and challenges',
            skills: ['React', 'Redux', 'Json server', 'SCSS'],
            image: {
                name: 'project react codes nook',
                url: './assets/img/projects/project-codes-nook.jpg',
            }
        },
        {
            urlProject: 'https://pokedex-react-upgrade.netlify.app/',
            urlRepo: 'https://gitlab.com/javier-pueyo/upgrade-pokeproject',
            title: 'Pokedex',
            description: 'Perfect exercise to fetch and manage 151 Pokemons.',
            skills: ['React', 'Redux', 'Axios', 'SCSS'],
            image: {
                name: 'project pokedex react',
                url: './assets/img/projects/project-pokedex.jpg',
            }
        },
        {
            urlProject: 'https://upgrade-journey.netlify.app/',
            urlRepo: 'https://gitlab.com/javier-pueyo/proyecto-final-angular',
            title: 'Upgrade Journey',
            description: 'Web to check hiking trails with family, bike, partner...',
            skills: ['Angular', 'Json server', 'SCSS'],
            image: {
                name: 'project angular Journey',
                url: './assets/img/projects/project-upgrade-journey.jpg',
            }
        },
        {
            urlProject: 'https://molebuster.netlify.app',
            urlRepo: 'https://gitlab.com/javier-pueyo/upgrade-moleBuster',
            title: 'Mole Buster',
            description: 'Traditional mole buster game in web version. Do you want to play?',
            skills: ['JS', 'SCSS'],
            image: {
                name: 'project javacript molebuster videogame',
                url: './assets/img/projects/project-molebuster.jpg',
            }
        }
    ],
    educations: [
        {
            logo: './assets/img/entities_logos/upgradehub.svg',
            entity: 'UpgradeHub',
            specialty: 'Bootcamp Frontend Dev',
            date: '2022',
        },
        {
            logo: './assets/img/entities_logos/bau.svg',
            entity: 'Bau',
            specialty: 'University Degree in Design ',
            date: '2014 - 2018',
        },
        {
            logo: './assets/img/entities_logos/emav.svg',
            entity: 'EMAV',
            specialty: 'CertHE Multimedia',
            date: '2012 - 2014',
        },
    ],
    experiences: [
        {
            logo: './assets/img/entities_logos/Adgoritmo.svg',
            entity: 'Adgortimo',
            specialty: 'UI designer & SEO technician',
            date: '2022 - present',
        },
        {
            logo: './assets/img/entities_logos/DoriaGM.svg',
            entity: 'DGM',
            specialty: 'UI designer & developer',
            date: 'July 2019 - February 2022',
        },
        {
            logo: './assets/img/entities_logos/KEC.svg',
            entity: 'KEC',
            specialty: 'UX/UI Designer',
            date: 'July 2018 - May 2019',
        },
        {
            logo: './assets/img/entities_logos/tuliapps.svg',
            entity: 'TuliApps',
            specialty: 'UI Designer',
            date: 'November 2017 - April 2018',
        },
        {
            logo: './assets/img/entities_logos/onionlab.svg',
            entity: 'OnionLab',
            specialty: 'Grant Holder Motion Graphics',
            date: 'May - June 2014',
        },
    ],
    knowledges: [
        {
            name: 'Layout',
            subKnowledges: [
                'HTML5',
                'SCSS , CS3',
                'Bootstrap',
            ],
        },
        {
            name: 'Javascript',
            subKnowledges: [
                'JS ES6',
                'React',
                'Angular',
            ],
        },
        {
            name: 'Extras',
            subKnowledges: [
                'Git',
                'Atomic design',
                'Technical SEO',
            ],
        },
    ],
    contact: {
        title: 'Want to work together?',
        subtitle: 'Send me a message'
    }
}