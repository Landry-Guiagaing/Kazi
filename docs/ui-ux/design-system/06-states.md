# Kazi — UI States V1

**Version:** 1.0  
**Statut:** Validé pour implémentation

## 1. États obligatoires

Les composants interactifs doivent prévoir selon leur nature :
- default
- hover
- focus-visible
- active
- disabled

## 2. Hover

Le hover doit être discret :
- variation de couleur
- légère élévation
- éventuellement scale maximum proche de 1.02

Pas d'animation agressive.

## 3. Focus

Le focus doit être clairement visible.

Ne jamais supprimer le focus sans fournir une alternative accessible équivalente.

## 4. Active

L'état actif doit fournir un feedback immédiat lors d'une interaction.

## 5. Disabled

Un élément désactivé doit être identifiable visuellement et ne doit pas être présenté comme disponible.

## 6. Mobile

Le hover n'est pas une interaction fiable sur mobile.

Le feedback tactile doit donc être prévu lorsque pertinent.

## 7. Loading

Un état loading sera ajouté uniquement aux composants qui effectuent réellement une opération asynchrone.
