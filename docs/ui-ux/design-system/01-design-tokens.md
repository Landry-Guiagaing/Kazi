# Kazi — Design Tokens V1

**Version:** 1.0  
**Statut:** Validé pour implémentation

## 1. Objectif
Les Design Tokens définissent le vocabulaire visuel commun de Kazi : couleurs, espacements, rayons, ombres, dimensions et règles générales.

## 2. Direction
Kazi adopte une direction **élégante, premium, moderne, humaine et sobre**.

Le caractère premium repose principalement sur l'espace, la typographie, la composition et la précision.

## 3. Couleurs

| Token | Valeur | Rôle |
|---|---|---|
| `background-primary` | `#F8F6F2` | Fond principal |
| `background-secondary` | `#F1EDE6` | Sections secondaires |
| `text-primary` | `#1A1A1A` | Texte principal |
| `text-secondary` | `#5C5C5C` | Texte secondaire |
| `primary` | `#1C2B3A` | Actions, liens, éléments importants |
| `accent` | `#C5A572` | Accent premium |
| `white` | `#FFFFFF` | Surfaces / textes selon contexte |

### Règle
Le navy est l'accent fonctionnel principal. Le champagne est un accent visuel secondaire et ne doit pas être utilisé comme couleur principale de texte sans validation de contraste.

## 4. Spacing

`4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 128px`

Tokens :
- `space-1` = 4px
- `space-2` = 8px
- `space-3` = 12px
- `space-4` = 16px
- `space-5` = 24px
- `space-6` = 32px
- `space-7` = 48px
- `space-8` = 64px
- `space-9` = 80px
- `space-10` = 96px
- `space-11` = 128px

## 5. Border radius

- `radius-sm` = 6px
- `radius-md` = 10px
- `radius-lg` = 16px
- `radius-xl` = 24px
- `radius-full` = 9999px

## 6. Shadows

Trois niveaux :
- `shadow-sm` : séparation légère
- `shadow-md` : cards et surfaces
- `shadow-lg` : menus et éléments fortement surélevés

Les ombres restent discrètes.

## 7. Container

Largeur maximale : `1280px`.

Le contenu reste centré et conserve des marges latérales adaptées aux écrans.

## 8. Largeur de texte

Pour les textes longs, viser environ 60–70 caractères par ligne. `max-width: 65ch` est une bonne référence.

## 9. Éléments interactifs

Minimum : `44px`.  
Objectif Kazi : `48px`.

## 10. Images

Les images doivent conserver leur sujet et leur qualité. `object-fit: cover` ou `contain` est choisi selon le contenu, pas systématiquement.

## 11. Responsive

Approche mobile-first. Les breakpoints sont utilisés lorsque la mise en page doit réellement changer.

## 12. Motion

- durée courante : 200–350ms
- courbes : `ease` / `ease-in-out`
- pas de bounce
- pas d'effets agressifs
- respect de `prefers-reduced-motion`

## 13. Accessibilité

Objectif : **WCAG 2.1 AA minimum**.

## 14. Contraste

Combinaisons prévues à valider :
- `#1C2B3A` sur `#F8F6F2`
- `#5C5C5C` sur `#F8F6F2`
- `#C5A572` sur `#F8F6F2`
- `#FFFFFF` sur `#1C2B3A`
- `#1A1A1A` sur `#F1EDE6`

Minimum WCAG AA :
- texte normal : 4.5:1
- texte large : 3:1
- composants graphiques/UI pertinents : 3:1

## 15. Règles
1. Utiliser les tokens plutôt que des valeurs arbitraires.
2. Garder les composants cohérents.
3. Ne pas ajouter d'effet sans raison.
4. L'accessibilité prime sur l'esthétique.
5. Concevoir mobile-first.
6. Ne créer une abstraction que lorsqu'elle apporte une vraie valeur.
