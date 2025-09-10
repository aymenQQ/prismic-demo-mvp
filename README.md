# Prismic Demo MVP

## Quick Start

1. **Connect to Prismic**  
   - Create a new Prismic repository.  
   - In `slicemachine.config.json`, set your `"repositoryName"` to the new repo.  
   - Push the Custom Types & Slices.

2. **Customize the brand**  
   - Open `src/lib/theme/brands/newbrand.ts`.  
   - Edit or add CSS variables for Navbar, Hero, CTA, FAQ, etc.

3. **Choose the brand to display**  
   - In `.env.local`, set:  
     ```
     NEXT_PUBLIC_BRAND_KEY=newbrand
     ```
   - Change this value to switch to another brand file.

---
