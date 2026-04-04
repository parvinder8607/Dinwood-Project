# 🪵 Dinwood — Next.js Website

**Premium Wooden Interiors & Woodcraft | Rohtak, Haryana**

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| **Next.js 14** (App Router) | Framework |
| **Tailwind CSS** | Styling |
| **GSAP + ScrollTrigger** | Animations |
| **TypeScript** | Type safety |
| **Lucide React** | Icons |

---

## Project Structure

```
dinwood/
├── app/
│   ├── layout.tsx          # Root layout + LocalBusiness JSON-LD + WhatsApp float
│   ├── page.tsx            # Homepage (Hero, Stats, Services, About, Process, Testimonials, CTA)
│   ├── about/page.tsx      # About Dinwood
│   ├── services/
│   │   ├── page.tsx                  # Services listing
│   │   ├── custom-furniture/page.tsx
│   │   ├── modular-kitchens/page.tsx
│   │   ├── wardrobes-storage/page.tsx
│   │   ├── interior-woodwork/page.tsx
│   │   └── office-furniture/page.tsx
│   ├── gallery/page.tsx    # Portfolio gallery with filter
│   ├── blog/
│   │   ├── page.tsx
│   │   ├── craft-of-custom-furniture/page.tsx
│   │   ├── why-sheesham-wood/page.tsx
│   │   └── transform-your-kitchen/page.tsx
│   ├── faq/page.tsx        # FAQ with FAQPage JSON-LD schema
│   ├── contact/page.tsx    # WhatsApp, Phone, Email, Map, Walk-in
│   ├── sitemap.ts          # Auto-generated sitemap
│   ├── robots.ts           # Crawler rules
│   └── globals.css         # Design system, grain texture, animations
├── components/
│   ├── Navbar.tsx          # Sticky nav with services dropdown
│   ├── Footer.tsx          # Rich footer with all links
│   └── ServicePageTemplate.tsx  # Reusable service page layout
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000)

---

## Before Going Live — Checklist

### 🔑 Replace Placeholders
- [ ] `+91 XXXXX XXXXX` → your actual phone number (search all files)
- [ ] `hello@dinwood.in` → your actual email
- [ ] `Your Street Address, Rohtak` → your full showroom address
- [ ] `YOUR_GOOGLE_VERIFICATION_CODE` in `layout.tsx` → from Google Search Console
- [ ] Instagram handle in Footer.tsx
- [ ] WhatsApp links throughout (replace `91XXXXXXXXXX` with your number)

### 📸 Replace Image Placeholders
All image placeholders are styled divs. Replace with:
- Hero: Dramatic workshop/showroom photo
- Services: One hero photo per service type
- Gallery: Your actual project photos (12+ recommended)
- Blog posts: Relevant cover photos
- Add `/public/og-image.jpg` (1200×630px) for social sharing

### 🗺️ Google Maps Embed
In `contact/page.tsx`, replace the map placeholder div with:
```html
<iframe
  src="https://maps.google.com/maps?q=YOUR+FULL+ADDRESS&output=embed"
  width="100%" height="100%" style={{border:0}} loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
```

### 🔍 SEO Actions After Launch
1. Submit to **Google Search Console** → https://search.google.com/search-console
2. Submit sitemap: `https://dinwood.in/sitemap.xml`
3. Create **Google Business Profile** at https://business.google.com (critical for local Rohtak search)
4. Add consistent NAP (Name, Address, Phone) across all platforms
5. Register on **Justdial**, **Sulekha**, **IndiaMART** with same address
6. Get customer reviews on Google Business Profile

### 🚀 Recommended Deployment
- **Vercel** (easiest for Next.js): https://vercel.com
- Connect GitHub repo → auto-deploys on every push
- Add custom domain `dinwood.in`

---

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| `forest` | `#1c2b1a` | Deepest dark |
| `bark` | `#3b2a1a` | Primary text |
| `soil` | `#5c3d1e` | Dark sections |
| `wood` | `#8b5e3c` | Mid-tone |
| `honey` | `#c9893a` | **Primary accent** |
| `straw` | `#e2c27d` | Borders |
| `parch` | `#f5e6c8` | Card backgrounds |
| `linen` | `#faf3e4` | **Page background** |

**Fonts:** Playfair Display (display) · Lora (body) · JetBrains Mono (labels)
