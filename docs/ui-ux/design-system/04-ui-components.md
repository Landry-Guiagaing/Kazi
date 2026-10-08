# Kazi — UI Components V1

**Version:** 1.0  
**Statut:** Validé pour implémentation

## 1. Principe

Un composant doit avoir une responsabilité claire et devenir réutilisable lorsqu'il représente une vraie unité d'interface.

## 2. Button

Variantes principales :
- Primary
- Secondary
- Ghost

### Primary
Fond navy, texte clair.

### Secondary
Style plus léger, destiné aux actions secondaires.

### Ghost
Action discrète, sans surface forte.

Tous les boutons doivent avoir :
- hauteur cible ~48px
- focus visible
- état hover
- état active
- état disabled si nécessaire
- texte compréhensible

## 3. Link

Les liens doivent être visuellement identifiables et conserver un état focus clair.

## 4. TalentCard

Contenu possible :
- photo
- nom
- spécialité
- extrait de réalisation
- CTA

La carte doit pouvoir être réutilisée plus tard dans :
- recherche
- catégories
- recommandations
- favoris
- profils associés

## 5. CategoryCard

Contenu :
- icône ou visuel
- nom
- courte description si nécessaire

## 6. BenefitCard

Contenu :
- icône
- titre
- description

## 7. TestimonialCard

Contenu :
- citation
- nom
- rôle
- avatar si disponible

Les données de démonstration doivent être clairement fictives.

## 8. Accordion

Comportement :
- une question s'ouvre
- une question se ferme
- zone de clic suffisamment grande
- interaction clavier
- état ouvert clairement identifiable

## 9. Card principles

Les cards utilisent :
- spacing cohérent
- rayon cohérent
- ombre discrète si nécessaire
- hiérarchie claire

Elles ne doivent pas toutes être surchargées de bordures, ombres et couleurs.

## 10. Iconography

Bibliothèque : **Lucide React**.

Les icônes doivent :
- rester simples
- avoir une taille cohérente
- ne pas remplacer un texte important
- avoir un label accessible lorsqu'elles sont seules
