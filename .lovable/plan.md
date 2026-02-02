
# Add Social Sharing Image

Adding your branded SW*AID image as the Open Graph and Twitter card image so the site looks professional when shared on social media.

---

## Changes

### 1. Copy Image to Public Folder
Copy `SWAID_-_logo_1200_x_630_px.png` to `public/og-image.png`

### 2. Update Metadata in index.html
Replace the placeholder Lovable images with your branded image:

**Before:**
```html
<meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
<meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
```

**After:**
```html
<meta property="og:image" content="/og-image.png" />
<meta name="twitter:image" content="/og-image.png" />
```

---

## Result
When the site is shared on LinkedIn, Twitter, Facebook, or other platforms, your SW*AID branded image will appear instead of the default Lovable placeholder.

---

## Note
For the full URL to work correctly when deployed to GitHub Pages, you may want to use the absolute URL (e.g., `https://yourusername.github.io/sw-aid-community-hub/og-image.png`) after deployment.
