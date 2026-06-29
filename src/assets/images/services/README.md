# Service Images

Place service card images here. Name them to match the service they represent.

## Naming convention
`<service-id>-<slug>.jpg` — e.g. `01-individual-therapy.jpg`

## Recommended dimensions
- Width: 600px, Height: 400px (3:2 ratio)
- Format: JPG or WebP

## Current services (12)
1. individual-therapy
2. anxiety-depression
3. trauma-emdr
4. grief-counseling
5. teen-adolescent
6. couples-counseling
7. family-therapy
8. anxiety-support-group
9. mindfulness-meditation
10. cognitive-behavioral-therapy
11. art-therapy
12. sleep-burnout-recovery

## How to use in services.ts
Import the image at the top of `src/assets/data/services.ts`:
```ts
import individualTherapyImg from "@/assets/images/services/01-individual-therapy.jpg";
```
Then set `image: individualTherapyImg` on the service object.
