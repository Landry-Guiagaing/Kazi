# Kazi — Layout & Grid System V1

**Version:** 1.0  
**Statut:** Validé pour implémentation

## 1. Principe

Kazi utilise une structure aérée, centrée et éditoriale.

## 2. Container

Base :
- `width: 100%`
- `max-width: 1280px`
- marges latérales responsives

Sur mobile, viser environ 20–24px de padding horizontal.

## 3. Sections

Chaque grande section doit avoir un rythme vertical cohérent.

Références :
- mobile : 48–64px minimum entre grandes sections
- desktop : 80–128px selon l'importance de la section

## 4. Grille

La grille doit s'adapter au contenu.

Références :
- mobile : 1 colonne
- tablette : 2 colonnes lorsque pertinent
- desktop : 2–4 colonnes selon le composant

## 5. Hero

Desktop :
- composition en deux zones possible : contenu + visuel
- grande respiration
- CTA clairement hiérarchisés

Mobile :
- contenu prioritaire
- visuel au-dessus, dessous ou en arrière-plan léger
- CTA empilés si nécessaire

## 6. Text blocks

Les paragraphes et descriptions utilisent une largeur limitée afin de préserver la lisibilité.

Référence : `max-width: 65ch`.

## 7. Responsive

Breakpoints Tailwind disponibles :
- `sm`
- `md`
- `lg`
- `xl`
- `2xl`

Ils ne doivent pas être utilisés mécaniquement. Le changement doit être motivé par le contenu.

## 8. Overflow

Aucun débordement horizontal involontaire.

Les carrousels sont les seuls espaces pouvant volontairement dépasser la largeur visible, avec une interaction claire.

## 9. Principes

- espace avant densité
- alignements cohérents
- rythme vertical constant
- pas de contenu collé aux bords
- pas de grille artificielle lorsque le contenu ne la justifie pas
