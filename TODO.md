# QHAWEAR Cart & Checkout Enhancement TODO

## Plan Breakdown & Progress

✅ **Step 1**: Create TODO.md [DONE]

✅ **Step 1**: Create TODO.md [DONE]

✅ **Step 2**: Update JavaScript [DONE]
- Extended cart item structure (add size, unique index)
- Modified addToCart() with size selection (XS-XXL dropdown)
- Updated renderCart() with size display + remove button per item
- Updated processCheckout() with delivery address + email (mailto: wangamalinda4@gmail.com)
- Added helpers (updateCartCount, calculateTotal, removeFromCart)

✅ **Step 3**: Update HTML [DONE]
- Added delivery address input to cart sidebar
- Changed "WHATSAPP TO ORDER" to "ORDER" button (opens cart)

**⏳ Step 4**: Minor CSS for new elements (size select, remove btn)

**⏳ Step 5**: Test functionality

**⏳ Step 6**: Final update + complete

Last updated: Steps 2-3 complete

## SEO And Publishing Notes

Added in repo:
- `sitemap.xml` for crawl discovery.
- `robots.txt` pointing search engines to the sitemap.
- `llms.txt` with a compact site summary for LLM crawlers.
- SEO metadata in `index.html`, including a Google Search Console verification placeholder.
- GitHub Pages deploy workflow in `.github/workflows/deploy.yml` for the Vite build.

Still manual for this project:
- Google Search Console verification must be completed in Google’s UI. Open Search Console, add `https://www.qhawear.com/`, choose HTML tag verification, then replace `REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_CODE` in `index.html` with the provided token and redeploy.
- In GitHub repo settings, set Pages source to GitHub Actions so the workflow can publish `dist/`.
