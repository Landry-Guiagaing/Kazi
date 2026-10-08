# Kazi — Navigation System V1

**Version:** 1.0  
**Statut:** Validé pour implémentation

## 1. Header

Le Header contient :
- logo Kazi
- navigation principale
- CTA principal
- accès au menu mobile

Navigation :
- Talents
- Catégories
- Comment ça marche
- FAQ

## 2. Desktop

Navigation horizontale.

Le CTA principal doit être identifiable sans dominer excessivement le reste.

## 3. Mobile

Navigation remplacée par un menu.

Le menu mobile doit :
- être accessible au clavier
- avoir une zone de fermeture claire
- utiliser des zones tactiles suffisantes
- conserver le CTA principal
- éviter le scroll horizontal

## 4. Menu animation

Animation discrète :
- fade
- slide léger

Durée indicative : 200–350ms.

Respecter `prefers-reduced-motion`.

## 5. Focus

Tous les éléments de navigation doivent avoir un focus visible.

## 6. Sémantique

Utiliser :
- `<header>`
- `<nav>`
- `<a>` pour la navigation
- `<button>` pour ouvrir/fermer le menu

Ne pas utiliser un `<div onClick>` pour remplacer un lien ou un bouton.
