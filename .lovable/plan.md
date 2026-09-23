# English default with French and Spanish

## Goal
Make English the default language across the whole website, while keeping complete French and Spanish versions accessible from a language selector.

## What will change
- Add a compact `EN / FR / ES` selector in the desktop and mobile navigation.
- Serve English at the existing default URLs, with French under `/fr/...` and Spanish under `/es/...`.
- Translate every visitor-facing page and shared element: excursions, activities, airport transfers, guided tours, home, about, contact, FAQ, booking form, navigation, footer, sticky booking controls, error pages, and structured data.
- Preserve all prices, times, addresses, WhatsApp details, policies, and service facts exactly; only the language changes.
- Keep the selected language while visitors move between pages and map each language to the matching page.

## SEO and accessibility
- Give each language/page its own translated title, description, Open Graph, and Twitter metadata.
- Add canonical and `hreflang` links for English, French, Spanish, and `x-default`.
- Emit translated JSON-LD and breadcrumbs without changing business facts.
- Update the sitemap and `llms.txt` with all language versions.
- Set the document language correctly and keep keyboard/touch navigation accessible.

## Technical approach
- Centralize locale definitions, translated shared labels, localized service data, and URL mapping.
- Reuse the existing page layouts instead of maintaining three unrelated copies.
- Add localized route wrappers for `/fr` and `/es`; leave current default routes as English.
- Preserve old URL structure and all booking/WhatsApp behavior.

## Verification
- Check every route in all three languages for missing translations and broken links.
- Verify desktop and mobile selectors, page switching, booking form messages, metadata, and structured data.
- Confirm the preview builds without errors and inspect representative pages in all languages.
