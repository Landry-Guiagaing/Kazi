# Kazi — Motion System V1

**Version:** 1.0  
**Statut:** Validé pour implémentation

## 1. Philosophie

Kazi utilise le mouvement pour améliorer la compréhension et le feedback, pas pour divertir.

## 2. Durées

Référence :
- rapide : ~150–200ms
- standard : 200–350ms
- exceptionnel : jusqu'à 400ms

Au-delà de 400ms, une justification est nécessaire.

## 3. Easing

Privilégier :
- `ease`
- `ease-in-out`

## 4. Buttons

Feedback :
- légère variation de couleur
- légère élévation
- scale maximum ~1.02

## 5. Cards

Possibilités :
- légère élévation
- image scale 1.03–1.05
- transition douce

## 6. Links

Possibilités :
- changement de couleur
- soulignement progressif

## 7. Burger

Transition :
- burger → X
- fade / rotation légère

## 8. FAQ

- ouverture progressive
- rotation de l'icône
- pas d'effet abrupt

## 9. Carousels

- slide doux
- ou fade
- contrôles discrets

## 10. Reduced Motion

Les animations non essentielles doivent être réduites ou supprimées lorsque `prefers-reduced-motion: reduce` est actif.

## 11. Framer Motion

Framer Motion n'est pas obligatoire en V1.

CSS transitions/animations suffisent tant qu'elles répondent au besoin.

La bibliothèque pourra être ajoutée plus tard si une animation réelle le justifie.
