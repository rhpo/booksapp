import { Category } from "@/types/category";



export const CATEGORIES: Category[] = [

    {
        name: 'Philosophy',
        description: 'Thought, ethics, and reflections on existence',
        cover: require('@/assets/images/categories/philosophy.jpg'),
    },
    {
        name: 'Personal Development',
        description: 'Personal growth and self-improvement',
        cover: require('@/assets/images/categories/development.jpg'),
    },
    {
        name: 'History',
        description: 'Historical events and biographies',
        cover: require('@/assets/images/categories/history.jpg'),
    },
    {
        name: 'Sciences',
        description: 'Scientific discoveries and popularization',
        cover: require('@/assets/images/categories/sciences.jpg'),
    },

    {
        name: 'News, Politics and Society',
        description: 'Current events, politics, and social issues',
        cover: require('@/assets/images/categories/politics.jpg'),
    },
    {
        name: 'Teens',
        description: 'Books for teens and young adults',
        cover: require('@/assets/images/categories/teens.jpg'),
    },
    {
        name: 'Arts and Photography',
        description: 'Art, photography, and visual creativity',
        cover: require('@/assets/images/categories/art.png'),
    },
    {
        name: 'Comics',
        description: 'Comics and graphic novels',
        cover: require('@/assets/images/categories/comic.png'),
    },
    {
        name: 'Coffee Table Books',
        description: 'Illustrated and prestige books',
        cover: require('@/assets/images/categories/coffee.png'),
    },

    {
        name: 'Calendars and Planners',
        description: 'Calendars, planners, and organization',
        cover: require('@/assets/images/categories/calendar.png'),
    },

    {
        name: 'Cookbooks, Cooking and Wine',
        description: 'Recipes, cooking, and wine',
        cover: require('@/assets/images/categories/cook.png'),
    },
    {
        name: 'Reference',
        description: 'Reference books and encyclopedias',
        cover: require('@/assets/images/categories/reference.png'),
    },
    {
        name: 'Law',
        description: 'Law, legislation, and jurisprudence',
        cover: require('@/assets/images/categories/law.png'),
    },
    {
        name: 'Business and Stock Market',
        description: 'Business, economy, and financial markets',
        cover: require('@/assets/images/categories/entreprise.png'),
    },

    {
        name: 'Higher Education',
        description: 'Books for university studies',
        cover: require('@/assets/images/categories/edu.png'),
    },
    {
        name: 'Family and Well-being',
        description: 'Family, health, and well-being',
        cover: require('@/assets/images/categories/family.png'),
    },
    {
        name: 'Science Fiction and Fantasy',
        description: 'Science fiction and imaginary worlds',
        cover: require('@/assets/images/categories/fantasy.jpg'),
    },
    {
        name: 'Humor',
        description: 'Humorous books and comedies',
        cover: require('@/assets/images/categories/humour.png'),
    },
    {
        name: 'Computing and Internet',
        description: 'Computing, programming, and web',
        cover: require('@/assets/images/categories/internet.png'),
    },
    {
        name: 'Children’s Books',
        description: 'Books for children and youth',
        cover: require('@/assets/images/categories/kids.png'),
    },
    {
        name: 'Creative Hobbies, Decoration and Home',
        description: 'Creative hobbies, decoration, and home',
        cover: require('@/assets/images/categories/interior.png'),
    },
    {
        name: 'Manga',
        description: 'Japanese manga and Asian comics',
        cover: require('@/assets/images/categories/manga.png'),
    },
    {
        name: 'Nature and Animals',
        description: 'Nature, animals, and environment',
        cover: require('@/assets/images/categories/nature.png'),
    },
    {
        name: 'Religions and Spirituality',
        description: 'Religions, spirituality, and beliefs',
        cover: require('@/assets/images/categories/islam.png'),
    },
    {
        name: 'Romance and Sentimental Literature',
        description: 'Romance and sentimental stories',
        cover: require('@/assets/images/categories/romance.jpg'),
    },
    {
        name: 'Novels and Literature',
        description: 'Novels and literary works',
        cover: require('@/assets/images/categories/novels.jpg'),
    },
    {
        name: 'Mystery and Suspense',
        description: 'Detective novels, mystery, and suspense',
        cover: require('@/assets/images/categories/mystery.png'),
    },
    {
        name: 'Health, Fitness and Diet',
        description: 'Health, fitness, and dietary advice',
        cover: require('@/assets/images/categories/health.png'),
    },
    {
        name: 'Science, Technology and Medicine',
        description: 'Science, technology, and medicine',
        cover: require('@/assets/images/categories/medicine.png'),
    },
    {
        name: 'Human Sciences',
        description: 'Psychology, sociology, and human sciences',
        cover: require('@/assets/images/categories/human-science.png'),
    },
    {
        name: 'School and Extracurricular',
        description: 'School textbooks and extracurricular activities',
        cover: require('@/assets/images/categories/extracurricular.png'),
    },
    {
        name: 'Sports and Leisure',
        description: 'Sports, leisure, and physical activities',
        cover: require('@/assets/images/categories/sports.jpg'),
    },
    {
        name: 'Tourism and Travel',
        description: 'Tourism, travel, and guides',
        cover: require('@/assets/images/categories/tourism.png')
    }
];

export function getCategory(id: Category['name']) {
    return CATEGORIES.find(c => c.name === id);
}
