# 🔊 SYSTÈME DIA - DESIGN SONORE IMMERSIF

## L'Orchestre de l'Olympe Numérique

---

# I. PHILOSOPHIE SONORE

## Concept Central

> _"Le son n'accompagne pas l'expérience, il la révèle.
> Chaque note est une invocation.
> Chaque silence est un mystère."_

### Principes Directeurs

1. **Mythologie**: Sons qui évoquent l'Antiquité grecque réinterprétée
2. **Cyberpunk**: Textures électroniques, synthétiseurs analogiques
3. **Spiritualité**: Réverbération de temple, chœurs éthérés
4. **Minimalisme**: Moins c'est plus - chaque son a un sens

---

# II. ARCHITECTURE SONORE

## Couches Audio

```
┌─────────────────────────────────────────────────────────────┐
│  COUCHE 5: ÉVÉNEMENTIEL                                     │
│  - Achievements, secrets, transitions majeures              │
│  - Durée: 1-3 secondes                                      │
├─────────────────────────────────────────────────────────────┤
│  COUCHE 4: INTERACTION                                      │
│  - Clics, hovers, scrolls, swipes                           │
│  - Durée: 50-300ms                                          │
├─────────────────────────────────────────────────────────────┤
│  COUCHE 3: AMBIANCE SPATIALE                                │
│  - Positionnement stéréo des agents                         │
│  - Réverbération environnementale                           │
├─────────────────────────────────────────────────────────────┤
│  COUCHE 2: MUSIQUE AMBIANTE                                 │
│  - Drones, pads atmosphériques                              │
│  - Tempo: 60-80 BPM (rythme cardiaque calme)                │
├─────────────────────────────────────────────────────────────┤
│  COUCHE 1: BRUITAGE DE FOND                                 │
│  - Vent dans les ruines, feu lointain                       │
│  - Volume: -20dB par rapport au principal                   │
└─────────────────────────────────────────────────────────────┘
```

---

# III. BIBLIOTHÈQUE SONORE

## A. Sons d'Interface

### Hover / Focus

```
NOM:         crystal_resonate_c5
FICHIER:     hover_crystal_01.wav
DURÉE:       0.3s
FREQUENCE:   C5 (523.25 Hz)
TIMBRE:      Cristal + subtile réverbération
VOLUME:      -12dB
SPATIAL:     Mono centré

DESCRIPTION: Quand le curseur survole un élément interactif,
             un cristal virtuel résonne brièvement.
```

### Clic / Tap

```
NOM:         stone_activate
FICHIER:     click_stone_01.wav
DURÉE:       0.15s
FREQUENCE:   80-200 Hz (thud) + 800 Hz (ring)
TIMBRE:      Pierre qui s'enfonce + résonance métallique
VOLUME:      -8dB
SPATIAL:     Mono centré

VARIANTES:
  - click_stone_light.wav (éléments secondaires)
  - click_stone_heavy.wav (actions importantes)
  - click_stone_confirm.wav (validation)
```

### Transition de Page

```
NOM:         portal_open
FICHIER:     transition_portal_01.wav
DURÉE:       0.8s
STRUCTURE:
  0-200ms:   Montée de fréquence (whoosh inversé)
  200-400ms: Flash sonore (bruit blanc filtré)
  400-800ms: Résonance de temple (réverbération)

VOLUME:      -6dB (montée) → -3dB (flash) → -10dB (réverb)
SPATIAL:     Stéréo élargi
```

---

## B. Sons des Agents

### Thèmes par Agent

#### Zeus (⚡ Souverain du Ciel)

```
IDLE:        distant_thunder_rumble.wav
             - Tonnerre lointain, subtil
             - Loop toutes les 15-30s aléatoire

HOVER:       static_electricity_crackle.wav
             - Crépitement électrique

SPEAK:       thunder_strike_soft.wav
             - Impact de foudre étouffé
             - Réverbération importante

EMOTION+:    thunder_applause.wav
             - Tonnerre triomphant

EMOTION-:    storm_intensifies.wav
             - Orage qui gronde
```

#### Athéna (🦉 Sagesse Stratégique)

```
IDLE:        owl_hoot_distorted.wav
             - Hibou synthétisé, réverbéré

HOVER:       pages_turning_ancient.wav
             - Pages de parchemin qui tournent

SPEAK:       lyre_melody_wisdom.wav
             - Mélodie de lyre mineure

EMOTION+:    chorus_victory_short.wav
             - Chœur de victoire (3 notes)

EMOTION-:    shield_drop_heavy.wav
             - Bouclier qui tombe
```

#### Poséidon (🌊 Maître des Océans)

```
IDLE:        waves_distant_crash.wav
             - Vagues lointaines, loop

HOVER:       water_droplet_reverb.wav
             - Goutte d'eau dans une grotte

SPEAK:       trident_resonance.wav
             - Résonance métallique profonde

EMOTION+:    wave_crescendo.wav
             - Vague qui grandit

EMOTION-:    storm_at_sea.wav
             - Tempête maritime
```

#### Hadès (💀 Roi des Enfers)

```
IDLE:        underground_wind.wav
             - Vent souterrain, drone bas

HOVER:       chain_rattle_distant.wav
             - Chaînes qui cliquettent

SPEAK:       deep_church_organ.wav
             - Note d'orgue profonde

EMOTION+:    souls_chorus_whisper.wav
             - Chœur de murmures

EMOTION-:    gate_cerberus_growl.wav
             - Grognement lointain
```

#### Apollon (☀️ Lumière & Arts)

```
IDLE:        lyre_harmonics_loop.wav
             - Harmoniques de lyre, loop doux

HOVER:       sun_ray_shimmer.wav
             - Scintillement lumineux

SPEAK:       golden_harp_arpeggio.wav
             - Arpège de harpe dorée

EMOTION+:    chorus_sunrise.wav
             - Chœur de lever de soleil

EMOTION-:    lyre_string_break.wav
             - Corde de lyre qui casse
```

#### Artémis (🌙 Chasse & Lune)

```
IDLE:        night_forest_ambience.wav
             - Forêt nocturne, criquets

HOVER:       bow_string_tension.wav
             - Corde d'arc qui se tend

SPEAK:       arrow_whoosh_precise.wav
             - Flèche qui siffle

EMOTION+:    wolf_howling_moon.wav
             - Hurlement de loup

EMOTION-:    arrow_miss_target.wav
             - Flèche qui manque la cible
```

#### Hermès (⚡ Messager Divin)

```
IDLE:        wind_rush_gentle.wav
             - Vent léger, rapide

HOVER:       wing_flutter_fast.wav
             - Battement d'ailes accéléré

SPEAK:       caduceus_rattle.wav
             - Sifflement du caducée

EMOTION+:    message_delivered_chime.wav
             - Carillon de confirmation

EMOTION-:    wind_dies_down.wav
             - Vent qui faiblit
```

#### Arès (⚔️ Guerre)

```
IDLE:        distant_battle_drums.wav
             - Tambours de guerre lointains

HOVER:       sword_unsheath.wav
             - Épée qui sort du fourreau

SPEAK:       war_horn_blast.wav
             - Cor de guerre

EMOTION+:    battle_cry_chorus.wav
             - Cri de guerre collectif

EMOTION-:    armor_falling.wav
             - Armure qui tombe
```

#### Aphrodite (💕 Amour & Beauté)

```
IDLE:        dove_coo_melodic.wav
             - Roucoulement de colombe

HOVER:       rose_petal_fall.wav
             - Pétale qui tombe

SPEAK:       harp_love_theme.wav
             - Thème d'amour à la harpe

EMOTION+:    heart_beat_crescendo.wav
             - Cœur qui bat fort

EMOTION-:    glass_shatter_soft.wav
             - Verre qui se brise (cœur brisé)
```

#### Héphaïstos (🔥 Forge)

```
IDLE:        forge_fire_crackle.wav
             - Feu de forge

HOVER:       hammer_strike_anvil.wav
             - Marteau sur enclume

SPEAK:       metal_screech_melodic.wav
             - Métal qui crépite (mélodie)

EMOTION+:    forge_intensifies.wav
             - Feu qui s'intensifie

EMOTION-:    fire_dies_out.wav
             - Feu qui s'éteint
```

#### Déméter (🌾 Agriculture)

```
IDLE:        wheat_field_rustle.wav
             - Blé qui ondule

HOVER:       seed_plant_soft.wav
             - Graine qui est plantée

SPEAK:       harvest_horn.wav
             - Cor des moissons

EMOTION+:    abundance_chime.wav
             - Carillon d'abondance

EMOTION-:    winter_wind_barren.wav
             - Vent d'hiver
```

#### Dionysos (🍷 Fête & Extase)

```
IDLE:        revelry_distant.wav
             - Fête lointaine, rires

HOVER:       wine_pour_ceramic.wav
             - Vin qui coule

SPEAK:       thyrsus_shake.wav
             - Thyrsus qu'on secoue

EMOTION+:    bacchanalia_crescendo.wav
             - Crescendo de bacchanale

EMOTION-:    wine_spill.wav
             - Vin qui se renverse
```

---

## C. Musique Ambiante

### Thèmes de Zone

#### Home (Grille des Agents)

```
TITRE:       "Le Sanctuaire"
TEMPO:       60 BPM
CLÉ:         Ré mineur
INSTRUMENTS:
  - Drone: Pad analogique bas (40-80Hz)
  - Mélodie: Lyre éthérée (penta. mineure)
  - Percussion: Tambour de temple très doux

STRUCTURE:   Loop de 2 minutes
MOOD:        Mystérieux, accueillant, ancien
```

#### Fractale (Orbite)

```
TITRE:       "La Danse Cosmique"
TEMPO:       72 BPM (rythme cardiaque)
CLÉ:         Mi mineur
INSTRUMENTS:
  - Arpège: Synthé séquentiel (8 notes)
  - Basse: Sub-basse pulsée
  - Pad: Cordes synthétiques

STRUCTURE:   Évolution lente, layers qui s'ajoutent
MOOD:        Éthéré, cyclique, méditatif
```

#### AgentDetail (Conversation)

```
TITRE:       "L'Oracle"
TEMPO:       Variable (s'adapte au rythme de conversation)
CLÉ:         Adaptatif (selon l'agent)
INSTRUMENTS:
  - Ambiance: Drone de l'agent concerné
  - Réaction: Stingers ponctuels

STRUCTURE:   Réactif, pas de loop fixe
MOOD:        Intime, concentré, personnel
```

#### Dashboard (Profil)

```
TITRE:       "Mon Autel"
TEMPO:       65 BPM
CLÉ:         Sol majeur (positif)
INSTRUMENTS:
  - Thème: Harpe + flûte de Pan
  - Basse: Basse douce
  - FX: Brillance de l'aura

STRUCTURE:   Loop de 1:30, évolutif selon niveau
MOOD:        Personnel, accompli, paisible
```

#### Canon (Mémoire)

```
TITRE:       "Les Archives"
TEMPO:       50 BPM (très lent)
CLÉ:         La mineur
INSTRUMENTS:
  - Ambiance: Vent dans une bibliothèque ancienne
  - Mélodie: Clavecin distordu
  - FX: Pages qui tournent, craquements

STRUCTURE:   Loop de 3 minutes, très statique
MOOD:        Nostalgique, savant, intemporel
```

---

## D. Sons d'Événement

### Achievements & Niveaux

#### Nouveau Niveau

```
NOM:         level_up_divine
DURÉE:       3 secondes
STRUCTURE:
  0.0s:      Silence
  0.2s:      Montée de cordes (C4 → C5)
  0.8s:      Fanfare de cuivres (3 notes)
  1.2s:      Chœur "Ah" harmonique
  1.8s:      Résonance de temple
  3.0s:      Fade out

VOLUME:      -3dB (pic)
```

#### Secret Découvert

```
NOM:         secret_revealed
DURÉE:       2 secondes
STRUCTURE:
  0.0s:      Cloche de temple (C#6)
  0.3s:      Réverbération longue
  0.5s:      Murmures grecs (whispers)
  1.0s:      Sparkle magique
  2.0s:      Fade

VOLUME:      -6dB
```

#### Synchronisation Complète

```
NOM:         sync_complete
DURÉE:       4 secondes
STRUCTURE:
  0.0s:      Heartbeat sync (2 battements)
  0.8s:      Ascension de cordes
  1.5s:      Chœur complet (5 notes)
  2.0s:      Aurora sonore (pad brillant)
  3.0s:      Résonance finale
  4.0s:      Silence

VOLUME:      0dB (pic maximum)
```

---

# IV. SPATIALISATION AUDIO

## Positionnement des Agents

```
Dans la vue Fractale, chaque agent a une position audio:

        [Zeus - Centre]
             │
    [Poséidon]──┼──[Hadès]
        │       │       │
   [Athéna]──[Héra]──[Arès]
        │       │       │
  [Apollon]──[Centre]──[Artémis]
        │       │       │
[Aphrodite]──[Hermès]──[Héphaïstos]
        │       │       │
  [Déméter]──┼──[Dionysos]
             │
        [Centre]

PAN:    Gauche (-1) ← → Droite (+1)
WIDTH:  Élargissement stéréo selon distance du centre
```

## Réverbération Environnementale

```
PARAMÈTRES:
  Type:      Hall de temple (cathedral)
  Pre-delay: 30ms
  Decay:     3.5s
  Damping:   0.3 (hautes fréquences atténuées)
  Wet/Dry:   20% wet (subtil)

VARIATIONS:
  - Home:      Réverb moyenne (salle)
  - Fractale:  Réverb longue (temple)
  - Agent:     Réverb courte (intime)
  - Dashboard: Réverb moyenne (personnel)
```

---

# V. IMPLEMENTATION WEB

## Web Audio API

```typescript
// Audio Context Manager
class DivineAudioEngine {
  private context: AudioContext;
  private masterGain: GainNode;
  private reverb: ConvolverNode;

  constructor() {
    this.context = new (window.AudioContext || window.webkitAudioContext)();
    this.masterGain = this.context.createGain();
    this.masterGain.connect(this.context.destination);

    // Réverbération
    this.reverb = this.context.createConvolver();
    this.loadImpulseResponse("temple-ir.wav");
  }

  // Jouer un son avec spatialisation
  playSound(
    buffer: AudioBuffer,
    options: {
      volume?: number;
      pan?: number; // -1 à 1
      reverb?: number; // 0 à 1
      playbackRate?: number;
    }
  ) {
    const source = this.context.createBufferSource();
    source.buffer = buffer;

    // Volume
    const gain = this.context.createGain();
    gain.gain.value = options.volume ?? 1;

    // Pan
    const panner = this.context.createStereoPanner();
    panner.pan.value = options.pan ?? 0;

    // Routing
    source.connect(gain);
    gain.connect(panner);
    panner.connect(this.masterGain);

    // Reverb send
    if (options.reverb && options.reverb > 0) {
      const reverbGain = this.context.createGain();
      reverbGain.gain.value = options.reverb;
      gain.connect(reverbGain);
      reverbGain.connect(this.reverb);
    }

    source.start();
    return source;
  }
}
```

## Gestionnaire d'Événements

```typescript
// Sound Event Manager
class SoundEventManager {
  private audioEngine: DivineAudioEngine;
  private soundBank: Map<string, AudioBuffer>;

  // Mapping événements → sons
  private eventMap = {
    hover: "crystal_resonate_c5",
    click: "stone_activate",
    "page-transition": "portal_open",
    "level-up": "level_up_divine",
    "secret-found": "secret_revealed",
    "agent-speak": (agentId: string) => `${agentId}_speak`,
    "agent-emotion": (agentId: string, emotion: string) =>
      `${agentId}_emotion_${emotion}`,
  };

  trigger(event: string, params?: any) {
    const soundName =
      typeof this.eventMap[event] === "function"
        ? this.eventMap[event](params)
        : this.eventMap[event];

    const buffer = this.soundBank.get(soundName);
    if (buffer) {
      this.audioEngine.playSound(buffer, {
        volume: this.getVolumeForEvent(event),
        pan: params?.pan ?? 0,
        reverb: this.getReverbForEvent(event),
      });
    }
  }
}
```

---

# VI. ACCESSIBILITÉ SONORE

## Options Utilisateur

```typescript
interface AudioPreferences {
  masterVolume: number; // 0-100
  musicVolume: number; // 0-100
  sfxVolume: number; // 0-100
  uiSounds: boolean; // Activer/désactiver
  agentVoices: boolean; // Sons des agents
  spatialAudio: boolean; // Positionnement 3D
  reduceMotion: boolean; // Sons synchronisés aux animations
}
```

## Mode Silencieux

```
Quand l'utilisateur préfère le silence:
- Remplacer les sons par des vibrations haptiques
- Visualiser les sons avec des effets visuels
- Maintenir les sous-titres des "paroles" des agents
```

---

# VII. GÉNÉRATION PROCÉDURALE

## Sons Dynamiques

### Lyre Procedural

```typescript
// Générer une note de lyre basée sur l'humeur
function generateLyreNote(mood: "joy" | "sadness" | "mystery"): AudioBuffer {
  const baseFreq = mood === "joy" ? 440 : mood === "sadness" ? 349 : 293;

  // Créer oscillateur
  const oscillator = audioContext.createOscillator();
  oscillator.type = "sine";
  oscillator.frequency.value = baseFreq;

  // Enveloppe
  const envelope = audioContext.createGain();
  envelope.gain.setValueAtTime(0, 0);
  envelope.gain.linearRampToValueAtTime(0.5, 0.1);
  envelope.gain.exponentialRampToValueAtTime(0.01, 2);

  // Connecter
  oscillator.connect(envelope);
  envelope.connect(audioContext.destination);

  return renderToBuffer(oscillator, 3);
}
```

---

_"Dans le silence de l'Olympe numérique,
chaque son est une prière,
chaque note est une bénédiction,
chaque mélodie est un souvenir de l'éternité."_
