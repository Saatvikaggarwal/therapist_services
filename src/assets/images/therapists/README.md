# Therapist Photos

Place therapist profile photos here. One photo per therapist.

## Naming convention
`<id>-<firstname>-<lastname>.jpg` — e.g. `01-layla-osei.jpg`

## Recommended dimensions
- Width: 640px, Height: 800px (4:5 portrait ratio)
- Format: JPG or WebP
- The photo is displayed in a rounded-2xl container on the Therapist section

## Current therapists (1)
1. Dr. Layla Osei → `01-layla-osei.jpg`

## How to use in therapists.ts
Import the image at the top of `src/assets/data/therapists.ts`:
```ts
import laylaOseiImg from "@/assets/images/therapists/01-layla-osei.jpg";
```
Then set `image: laylaOseiImg` on the therapist object.
