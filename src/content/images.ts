/**
 * Assets de design génériques (défauts du template) — PROCESS §5.
 * Les contenus du client (logo, photos) sont dans /img/client et passent par les champs du contenu.
 * Le design ne dépend jamais d'UNE photo : chaque image optionnelle a un repli trouvé par mots-clés.
 */

const D = '/img/design/'

/** Icônes des étapes du déroulement (cycliques) */
export const stepIcons = [D + 'examination-icon.svg', D + '24-hr-icon.svg', D + 'emergency-icon.svg', D + 'license-icon.svg']

/** Illustrations des motifs (repli par mots-clés du titre) */
const motifArt: [RegExp, string][] = [
  [/sport|course|genou|cheville/i, D + 'phsio.svg'],
  [/articul|épaule|poignet|coude/i, D + 'knee.webp'],
  [/lomb|bas du dos|bassin|sciati/i, D + 'flex.webp'],
  [/tension|stress|musc|massage/i, D + 'massage-therapy.svg'],
  [/posture|appui|pied|semelle/i, D + 'formthotics-insoles.svg'],
  [/nuque|cervic|dos|colonne|vertèb/i, D + 'spine.webp'],
]
const motifDefault = [D + 'phsio.svg', D + 'knee.webp', D + 'flex.webp', D + 'massage-therapy.svg', D + 'formthotics-insoles.svg', D + 'spine.webp']

export function motifImage(title: string, i: number, image?: string) {
  if (image) return image
  return motifArt.find(([re]) => re.test(title))?.[1] ?? motifDefault[i % motifDefault.length]
}

/** Photos des publics accueillis (repli par mots-clés) */
const publicPhotos: [RegExp, string][] = [
  [/sport/i, D + 'getting-results.webp'],
  [/enfant|bébé|nourrisson|grossesse|enceinte|maman/i, D + 'nurse-one.webp'],
  [/adulte|senior|actif|bureau/i, D + 'educating.webp'],
]
const publicDefault = [D + 'nurse-one.webp', D + 'getting-results.webp', D + 'educating.webp']

export function publicImage(title: string, i: number, image?: string) {
  if (image) return image
  return publicPhotos.find(([re]) => re.test(title))?.[1] ?? publicDefault[i % publicDefault.length]
}

/** Visuels des cartes de blog : le PROCESS ne prévoit pas d'image d'article -> visuel générique par mots-clés */
const blogVisuals: [RegExp, string][] = [
  [/lomb|dos|bureau|posture/i, D + 'back_pain.webp'],
  [/genou|course|sport|reprise/i, D + 'knee-pain.webp'],
  [/colonne|habitude|mobil/i, D + 'back.webp'],
  [/sciati|nerf|tension|stress/i, D + 'muscle.webp'],
  [/bébé|nourrisson|grossesse/i, D + 'physiotherapy.webp'],
]
const blogDefault = [D + 'inflammed.webp', D + 'back.webp', D + 'muscle.webp']

export function blogVisual(title: string, i: number) {
  return blogVisuals.find(([re]) => re.test(title))?.[1] ?? blogDefault[i % blogDefault.length]
}
