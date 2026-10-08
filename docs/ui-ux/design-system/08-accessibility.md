# Kazi — Accessibility System V1

**Version:** 1.0  
**Statut:** Validé pour implémentation

## 1. Objectif

Objectif minimum : **WCAG 2.1 AA**.

## 2. Contraste

Minimum :
- texte normal : 4.5:1
- texte large : 3:1
- éléments UI/graphiques pertinents : 3:1

Les couleurs champagne doivent être particulièrement contrôlées avant d'être utilisées comme texte.

## 3. Clavier

Tous les éléments interactifs doivent être accessibles au clavier.

Ordre de tabulation logique.

Focus visible.

## 4. Sémantique

Utiliser les éléments HTML adaptés :
- headings
- nav
- main
- section
- footer
- button
- a
- form
- label

## 5. Images

Image informative : `alt` pertinent.

Image décorative : `alt=""`.

Ne pas mettre dans l'alt une information déjà donnée par le texte adjacent.

## 6. Boutons et liens

`button` = action.

`a` = navigation.

Ne pas les remplacer par des `div`.

## 7. Touch

Cible minimale : 44×44px.

Objectif Kazi : environ 48×48px.

## 8. Typographie

Texte courant minimum : 16px.

Line-height du body : environ 1.5–1.7.

Le texte doit rester lisible lorsque l'utilisateur augmente la taille du texte.

## 9. Motion

Respecter `prefers-reduced-motion`.

## 10. Langue

La page française doit déclarer correctement :

```html
<html lang="fr">
```

## 11. Headings

Un seul H1 par page.

La hiérarchie H2/H3/etc. doit refléter la structure du contenu.

## 12. Formulaires futurs

Chaque champ devra avoir :
- label
- état focus
- état erreur si nécessaire
- message d'erreur compréhensible

## 13. Tests

Avant livraison :
- clavier
- contraste
- zoom
- lecteur d'écran si possible
- mobile réel
- Lighthouse
