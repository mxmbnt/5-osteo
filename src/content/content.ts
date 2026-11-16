/**
 * Contenu du site — praticienne FICTIVE (à remplacer avant mise en ligne).
 * Structure = sections Omela (cf. schema.ts) : tout peut venir d'une base de données.
 */
import { validateContent, type SiteContent } from './schema'

/** Lien unique de prise de rendez-vous (future `bookingHref` Omela) — PROCESS §4 */
export const BOOKING_HREF = 'https://www.doctolib.fr/osteopathe/lyon/claire-morel'

export const content: SiteContent = validateContent({
  nav: {
    logo: '/img/client/logo.svg',
    links: [
      { label: 'Approche', href: '#deroulement' },
      { label: 'Motifs', href: '#motifs' },
      { label: 'Tarifs', href: '#tarifs' },
      { label: 'Avis', href: '#avis' },
      { label: 'Infos', href: '#infos' },
    ],
    rdvLabel: 'Prendre rendez-vous',
  },

  hero: {
    headline: 'Retrouvez votre mobilité. Faites ce que vous aimez.',
    subheadline:
      'Ostéopathe D.O. à Lyon 1er, j’accompagne adultes, sportifs, futures mamans et tout-petits avec des techniques douces et adaptées.',
    cta: { label: 'Prendre rendez-vous', href: BOOKING_HREF },
    photo: '/img/client/hero.webp',
  },

  deroulement: {
    title: 'Comment se déroule une séance',
    intro:
      'Chaque consultation dure de 45 minutes à 1 heure. Elle commence toujours par un temps d’échange et se termine par des conseils adaptés à votre quotidien.',
    steps: [
      { title: 'Échange\net bilan', desc: 'Votre histoire, vos habitudes et le motif de consultation.' },
      { title: 'Tests de\nmobilité', desc: 'Une évaluation globale, du bassin à la nuque.' },
      { title: 'Travail\nmanuel doux', desc: 'Des techniques choisies avec vous, adaptées à votre confort.' },
      { title: 'Conseils\npersonnalisés', desc: 'Des repères simples à appliquer chez vous.' },
    ],
  },

  aPropos: {
    name: 'Claire Morel',
    title: 'Claire Morel, ostéopathe D.O.',
    bio:
      'Diplômée en ostéopathie après cinq années de formation, j’exerce depuis 2014 dans mon cabinet des quais de Saône. J’ai à cœur de **prendre le temps d’écouter** et d’expliquer chaque étape de la séance.\n\nFormée à la périnatalité et au suivi du sportif, je travaille en lien avec les médecins, kinésithérapeutes et sages-femmes du quartier.',
    photo: '/img/client/praticien.webp',
    badges: ['Diplôme d’ostéopathe D.O.', 'Inscrite au registre des ostéopathes', 'Formation en périnatalité', 'Suivi du sportif'],
  },

  publics: {
    title: 'Les publics que j’accompagne',
    intro: 'L’ostéopathie s’adresse à chacun, à tous les âges de la vie. Les techniques sont toujours adaptées à l’âge et à la situation.',
    items: [
      {
        title: 'Femmes enceintes\net jeunes mamans',
        desc: 'Des séances très douces pendant la grossesse et après l’accouchement, en lien avec votre sage-femme.',
      },
      {
        title: 'Sportifs\namateurs et confirmés',
        desc: 'Préparation, récupération et accompagnement de la pratique, en complément de votre suivi médical.',
      },
      {
        title: 'Adultes\nactifs et seniors',
        desc: 'Travail sur écran, port de charges, sédentarité : une prise en charge globale et progressive.',
      },
    ],
  },

  motifs: {
    intro: 'Voici les motifs pour lesquels on me consulte le plus souvent. En cas de doute, n’hésitez pas à me poser la question.',
    items: [
      { title: 'Suivi du sportif', desc: 'Récupération après l’effort et accompagnement des gênes liées à la pratique sportive.' },
      { title: 'Gênes articulaires', desc: 'Genoux, épaules, poignets : un travail doux sur la mobilité des articulations.' },
      { title: 'Bas du dos', desc: 'Raideurs et tensions du bassin et du bas du dos, approche globale de la posture.' },
      { title: 'Tensions musculaires', desc: 'Stress, sédentarité, travail sur écran : des techniques douces de relâchement.' },
      { title: 'Posture et appuis', desc: 'Observation des appuis et conseils simples à appliquer au quotidien.' },
      { title: 'Nuque et dos', desc: 'Cervicales, dorsales, sensation de dos « bloqué » : une prise en charge progressive.' },
    ],
  },

  tarifs: {
    intro: 'Des tarifs clairs, sans dépassement. Une facture vous est remise à chaque séance.',
    lines: [
      { label: 'Consultation adulte', price: '60 €', note: '45 min à 1 h' },
      { label: 'Femme enceinte', price: '65 €', note: 'Séance adaptée à chaque trimestre' },
      { label: 'Enfant et nourrisson', price: '50 €', note: 'Toujours en présence d’un parent' },
      { label: 'Étudiant', price: '45 €', note: 'Sur présentation de la carte étudiante' },
    ],
    remboursement:
      'L’ostéopathie n’est pas remboursée par l’Assurance maladie, mais de nombreuses mutuelles prennent en charge plusieurs séances par an. Renseignez-vous auprès de la vôtre.',
  },

  avis: {
    intro: 'Quelques retours de patients, partagés avec leur accord. Chaque prise en charge reste unique.',
    items: [
      { author: 'Julien P.', rating: 5, text: 'Accueil très professionnel et explications claires à chaque étape. Je comprends mieux comment prendre soin de mon dos à vélo.' },
      { author: 'Amélie M.', rating: 5, text: 'Des séances douces et un vrai temps d’échange. Les conseils de posture pour le travail sur écran me servent tous les jours.' },
      { author: 'Sophie L.', rating: 5, text: 'Cabinet calme et lumineux, praticienne très à l’écoute pendant ma grossesse puis pour mon bébé.' },
    ],
  },

  blog: { intro: 'Mes articles pour mieux comprendre votre corps et prendre soin de vous au quotidien.' },

  faq: {
    items: [
      { q: 'Comment se passe une première séance ?', a: 'Elle commence par un échange sur votre histoire et vos habitudes, suivi de tests de mobilité. Le travail manuel est ensuite adapté à votre situation et à votre confort.' },
      { q: 'Faut-il une ordonnance ?', a: 'Non, vous pouvez consulter un ostéopathe directement. En cas de signe d’alerte, je vous orienterai vers votre médecin.' },
      { q: 'La séance est-elle remboursée ?', a: 'Pas par l’Assurance maladie, mais de nombreuses mutuelles prennent en charge plusieurs séances par an. Une facture vous est remise.' },
      { q: 'Combien de séances sont nécessaires ?', a: 'Cela dépend de chaque situation. Nous faisons le point ensemble à la fin de chaque séance, sans engagement sur un nombre de consultations.' },
      { q: 'Que dois-je apporter ?', a: 'Vos éventuels examens (radios, comptes rendus) et une tenue confortable.' },
    ],
  },

  infos: {
    address: '18 quai Saint-Clair',
    zip: '69001',
    city: 'Lyon',
    phone: '04 78 00 12 34',
    email: 'contact@claire-morel-osteo.fr',
    hours: [
      { day: 'Lundi', value: '8 h 30 – 20 h' },
      { day: 'Mardi', value: '8 h 30 – 20 h' },
      { day: 'Mercredi', value: '8 h 30 – 13 h' },
      { day: 'Jeudi', value: '8 h 30 – 20 h' },
      { day: 'Vendredi', value: '8 h 30 – 19 h' },
      { day: 'Samedi', value: '9 h – 13 h' },
      { day: 'Dimanche', value: 'Fermé' },
    ],
    access: 'Métro A, arrêt Hôtel de Ville (5 min à pied). Bus C3, arrêt Saint-Vincent. Cabinet au rez-de-chaussée, accessible aux personnes à mobilité réduite.',
    bookingHref: BOOKING_HREF,
  },

  contact: { intro: 'Une question avant de prendre rendez-vous ? Appelez-moi ou écrivez-moi, je vous réponds sous 24 h ouvrées.' },

  footer: {
    socials: {
      instagram: 'https://www.instagram.com/',
      facebook: 'https://www.facebook.com/',
      linkedin: 'https://www.linkedin.com/',
    },
  },
})

/** Libellés fixes du template (titres de sections, boutons) — pas des contenus client */
export const ui = {
  deroulementLabel: 'Mon approche',
  aProposLabel: 'Qui suis-je',
  publicsLabel: 'Pour qui',
  motifsLabel: 'Motifs de consultation',
  motifsTitle: 'Pourquoi consulter',
  tarifsLabel: 'Tarifs',
  tarifsTitle: 'Tarifs des consultations',
  remboursementTitle: 'Remboursement',
  avisLabel: 'Ils en parlent',
  avisTitle: 'Avis de patients',
  blogLabel: 'À lire',
  blogTitle: 'Conseils et actualités',
  blogAll: 'Tous les articles',
  faqLabel: 'Vos questions',
  faqTitle: 'Questions fréquentes',
  infosLabel: 'Infos pratiques',
  infosTitle: 'Venir au cabinet',
  hoursTitle: 'Horaires',
  accessTitle: 'Accès',
  contactLabel: 'Contact',
  contactTitle: 'Une question ?',
  footerPages: 'Pages',
  footerInfos: 'Informations',
  legal: 'Mentions légales',
  privacy: 'Confidentialité',
  madeWith: 'Site créé avec Omela',
}
