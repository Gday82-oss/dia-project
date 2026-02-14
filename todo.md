# TODO - Harmonisation des encadrés

## Problème identifié
Les `borderRadius: "50%"` dans agentThemes.ts transforment les cartes en ellipses/ovales qui cachent le texte.

## Corrections à faire
- [x] AGT-003 (LUX) : borderRadius "50%" → "4px"
- [x] AGT-004 (CHRONOS) : borderRadius "50%" → "4px"
- [x] AGT-008 (EROS) : borderRadius "50%" → "4px"
- [x] AGT-010 (ANIMA) : borderRadius "50%" → "4px"
- [x] AGT-013 (ÉCHO) : borderRadius "50%" → "4px"
- [x] AGT-005 (LÉTHÉ) : borderRadius "24px" → "6px"
- [x] AGT-012 (CHLOROS) : borderRadius "20px" → "6px"
- [x] AGT-011 (NOESIS) : borderRadius "16px" → "6px"
- [x] AGT-006 (PSYCHE) : borderRadius "12px" → "6px"
- [ ] Vérifier AgentDetail.tsx pour les mêmes problèmes
- [ ] Vérifier Canon.tsx et Intro.tsx
- [ ] Tester visuellement
