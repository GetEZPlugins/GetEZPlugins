# EZ Plugins Website — Setup Guide

This guide will walk you through setting up your EZ Plugins website on GitHub Pages.

---

## What You Need

1. A **GitHub account** (free)
2. Your **plugin screenshots** (light and dark versions for each plugin)
3. Your **plugin logos**
4. Download URLs for your plugins (you can add these later)

---

## Step 1: Create Your GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** button (top right) → **New repository**
3. Name it `ez-plugins` (or whatever you want — this will be part of your URL)
4. Make it **Public**
5. Check **"Add a README file"**
6. Click **Create repository**

---

## Step 2: Upload the Website Files

### Option A: Using GitHub Web Interface (Easiest)

1. In your new repo, click **"Add file"** → **"Upload files"**
2. Drag and drop the entire `dist/` folder contents (from this project) into the upload area
3. Make sure `index.html` is at the root of the repository
4. Click **Commit changes**

### Option B: Using Git (Recommended for updates)

1. Install Git if you haven't: [git-scm.com](https://git-scm.com)
2. Open a terminal and run:

```bash
git clone https://github.com/YOUR_USERNAME/ez-plugins.git
cd ez-plugins
```

3. Copy the `dist/` folder contents into this folder (so `index.html` is at the root)
4. Add your images to the `images/` folder (see Step 3 below)
5. Commit and push:

```bash
git add .
git commit -m "Initial website launch"
git push origin main
```

---

## Step 3: Add Your Images

Your images should be placed in the `images/` folder at the root of your repository (next to `index.html`).

### Required Images

For each plugin you want to showcase, you need:

| File | Description | Example Filename |
|------|-------------|-----------------|
| Light theme screenshot | The plugin UI in light mode | `ez-level-light.png` |
| Dark theme screenshot | The plugin UI in dark mode | `ez-level-dark.png` |
| Plugin logo | The product logo with gradient | `ez-level-logo.png` |

### Brand Images (Already Included)

| File | Description |
|------|-------------|
| `Full Gradient Logo.png` | The main EZ brand logo |

### Image Tips

- **Format**: PNG is recommended for screenshots (supports transparency, lossless)
- **Resolution**: 1200–1600px wide is ideal for screenshots
- **Naming**: Use lowercase with hyphens, no spaces: `ez-eq-light.png`
- **Aspect ratio**: Screenshots should be roughly 16:9 or 3:2

---

## Step 4: Configure Your Data

All your content lives in two files. You can edit these directly on GitHub or locally.

### File 1: `src/data/config.ts`

Edit this file to set your Discord and GitHub links:

```typescript
export const socialLinks = {
  discord: "https://discord.gg/YOUR_ACTUAL_INVITE_CODE",
  github: "https://github.com/YOUR_USERNAME/YOUR_REPO",
};
```

### File 2: `src/data/products.ts`

This is the main file you'll edit to add/remove plugins. Each plugin follows this structure:

```typescript
{
  id: "ez-eq",                          // Unique identifier (no spaces)
  name: "EZ EQ",                        // Display name
  tagline: "Sculpt your sound.",        // Short catchy description
  description: "A powerful parametric...", // Longer description
  features: [                            // List of features (appears as checkmarks)
    "Feature 1",
    "Feature 2",
  ],
  imageLight: "/images/ez-eq-light.png",  // Path to light screenshot
  imageDark: "/images/ez-eq-dark.png",    // Path to dark screenshot
  logoImage: "/images/ez-eq-logo.png",    // Path to plugin logo
  platforms: {
    windows: "yes",                       // "yes", "no", or "coming-soon"
    mac: "coming-soon",
  },
  downloads: {
    withUI: {                             // Installer WITH UI
      windows: "https://...",             // Direct download link
      mac: "https://...",
    },
    withoutUI: {                          // Installer WITHOUT UI
      windows: "https://...",
      mac: "https://...",
    },
    direct: {                             // Direct download (bypass installer)
      windows: "https://...",
      mac: "https://...",
    },
  },
}
```

**Note**: If you don't have download URLs yet, just leave them as `"#"` or remove the keys entirely. The buttons will show "Coming soon" automatically.

### Adding a New Plugin

Simply add a new object to the `products` array:

```typescript
export const products: Product[] = [
  {
    id: "ez-level",
    name: "EZ Level",
    // ... existing plugin
  },
  // Add your new plugin here:
  {
    id: "ez-eq",
    name: "EZ EQ",
    tagline: "Sculpt your sound.",
    description: "A powerful parametric equalizer...",
    features: ["8-band parametric EQ", "Spectrum analyzer", ...],
    imageLight: "/images/ez-eq-light.png",
    imageDark: "/images/ez-eq-dark.png",
    logoImage: "/images/ez-eq-logo.png",
    platforms: { windows: "yes", mac: "yes" },
    downloads: {
      withUI: { windows: "#", mac: "#" },
      withoutUI: { windows: "#", mac: "#" },
    },
  },
];
```

---

## Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top tab)
3. In the left sidebar, click **Pages**
4. Under **Source**, select **Deploy from a branch**
5. Under **Branch**, select **main** and folder **/(root)**
6. Click **Save**
7. Wait 1–2 minutes, then visit `https://YOUR_USERNAME.github.io/ez-plugins/`

---

## Step 6: Updating Your Site

Whenever you want to update content, images, or styling:

### If using Git locally:

```bash
cd ez-plugins
# Make your changes (edit files, add images, etc.)
git add .
git commit -m "Describe your changes"
git push origin main
```

Changes will go live in about 1–2 minutes.

### If using GitHub web interface:

1. Navigate to the file you want to edit
2. Click the **pencil icon** (Edit this file)
3. Make your changes
4. Click **Commit changes...** at the bottom

---

## File Structure Reference

```
# What gets deployed to GitHub Pages:
index.html              # Main entry point
images/                 # All your images
  Full Gradient Logo.png
  EZ Level Logo.png
  EZ Level light theme.png
  EZ Level dark theme.png
  # ...add your new plugin images here
assets/                 # Generated JS/CSS (don't touch)
  index-XXXX.js
  index-XXXX.css

# Source files (for editing):
src/
  data/
    config.ts           # Site config, social links
    products.ts         # Plugin data — ADD PLUGINS HERE
  components/           # Reusable UI pieces
    Header.tsx
    Footer.tsx
    ThemeToggle.tsx
    ProductShowcase.tsx
    PlatformMatrix.tsx
    DownloadCard.tsx
    SocialLinks.tsx
    AnimatedSection.tsx
  pages/
    HomePage.tsx
    DownloadPage.tsx
  hooks/
    useTheme.tsx        # Light/dark mode logic
  App.tsx               # Routes
  index.css             # Theme colors and styles
  main.tsx              # Entry point
```

---

## Customization Tips

### Change Colors

Edit `src/index.css` — the `:root` section defines light theme colors, `.dark` defines dark theme colors.

### Change Fonts

The site uses **Inter** (body) and **JetBrains Mono** (monospace). To change:

1. Update the Google Fonts link in `index.html`
2. Update the `font-family` declarations in `src/index.css`

### Add More Pages

1. Create a new page component in `src/pages/`
2. Add a route in `src/App.tsx`
3. Add a nav link in `src/data/config.ts`

### Change the Hero Section

Edit `src/pages/HomePage.tsx` — the hero section is at the top.

### The Theme Toggle

The sun/moon toggle in the header automatically:
- Saves the user's preference to `localStorage`
- Crossfades the entire site's color scheme (400ms)
- Crossfades product screenshots between light/dark versions

---

## Need Help?

- **Discord**: Join the community server for questions
- **GitHub Issues**: Open an issue on your repo if something breaks
- **GitHub Pages Docs**: [docs.github.com/en/pages](https://docs.github.com/en/pages)
