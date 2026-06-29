# General Site Images

Place general website photos here — hero images, backgrounds, office photos, etc.

## Files expected

| Filename             | Used in          | Dimensions       | Description                        |
|----------------------|------------------|------------------|------------------------------------|
| `hero.jpg`           | Hero section     | 840×1050 (4:5)   | Main hero — therapist/calm office  |
| `og-image.jpg`       | Open Graph meta  | 1200×630         | Social share preview image         |

## Naming convention
Use short, descriptive kebab-case names: `hero.jpg`, `about-office.jpg`, `team-group.jpg`

## How to use
```ts
import heroImg from "@/assets/images/site/hero.jpg";
```
Then reference `heroImg` as the `src` on the `<img>` tag in `App.tsx`.
