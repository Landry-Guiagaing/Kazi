# Kazi — Responsive System V1

**Version:** 1.0  
**Statut:** Validé pour implémentation

## 1. Philosophie

Kazi est conçu mobile-first.

On ne construit pas d'abord une interface desktop puis on la rétrécit.

## 2. Mobile

Références :
- 320px
- 375px
- 390px
- 430px

Principes :
- une colonne lorsque pertinent
- padding horizontal 20–24px
- CTA empilés si nécessaire
- navigation mobile
- cards adaptées
- pas de débordement horizontal

## 3. Tablet

Référence :
- 768px et plus

Possibilités :
- deux colonnes
- navigation plus large
- augmentation des espacements
- cards en grille

## 4. Desktop

Référence :
- 1024px et plus

Possibilités :
- grilles
- Hero en plusieurs zones
- navigation complète
- davantage d'espace négatif

## 5. Large Desktop

Référence :
- 1280px+
- 1440px+

Le contenu reste limité par le container de 1280px.

L'espace supplémentaire doit servir à respirer, pas à étirer artificiellement le contenu.

## 6. Components

Chaque composant doit définir son propre comportement responsive.

Exemple TalentCard :
- mobile : une carte par ligne ou carousel
- desktop : grille

## 7. Carousels

À utiliser avec modération.

Ils sont acceptables notamment pour :
- talents sur mobile
- témoignages

Ils ne doivent pas devenir la solution par défaut pour chaque section.

## 8. Tests obligatoires

Tester au minimum :
- 320px
- 375px
- 768px
- 1024px
- 1280px
- 1440px+

Et au moins un appareil mobile réel.
