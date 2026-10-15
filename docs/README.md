# Kazi — Documentation Pack V1

Pack de documentation préparatoire à l'implémentation de Kazi V1.

Il couvre produit, exigences, UX, architecture, technique, qualité, diagrammes, Git/GitHub et release.

La V1 est une landing page frontend-only : Next.js + React + TypeScript + Tailwind CSS + Lucide React, avec données locales.

## État

La V1 est implémentée et déployée :
https://kazi-talent.vercel.app

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4
- Lucide React

## Qualité

- Lighthouse (PageSpeed Insights, mobile) : Performance 99, Accessibilité 100, Bonnes pratiques 100, SEO 100
- Audit a11y (axe DevTools) : 0 problème
- WCAG 2.1 AA respecté
- Navigation agentique : 2/2

## Structure

- `src/app/` : pages et layout
- `src/components/layout/` : Header, MobileMenu, Footer
- `src/components/sections/` : les 9 sections de la landing
- `src/components/ui/` : composants réutilisables (Button, Container, cards, Accordion)
- `src/data/` : données locales typées
- `src/types/` : types TypeScript
- `public/images/` : logo et icônes
- `docs/` : documentation complète du projet

## Projet d'apprentissage

Ce projet fait partie d'un parcours d'apprentissage front-end en 5 projets.
Voir le plan dans les échanges de conception du projet.