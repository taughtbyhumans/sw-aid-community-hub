

# Update Social Sharing Image URLs to Absolute Path

Updating the Open Graph and Twitter image URLs to use your custom domain `swaid.co.uk` for reliable social media sharing.

---

## Changes

### Update index.html metadata

Replace the relative image paths with absolute URLs using your custom domain:

**Before:**
```html
<meta property="og:image" content="/og-image.png" />
<meta name="twitter:image" content="/og-image.png" />
```

**After:**
```html
<meta property="og:image" content="https://swaid.co.uk/og-image.png" />
<meta name="twitter:image" content="https://swaid.co.uk/og-image.png" />
```

---

## Why This Matters

Social media platforms (LinkedIn, Twitter/X, Facebook) need absolute URLs to reliably fetch and display the preview image. Relative paths can sometimes fail to resolve correctly when these platforms scrape your site.

---

## Testing After Deployment

Once live, you can validate the image appears correctly using:
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

