# Evidence Capture Index

Target: https://www.creategiftwebsite.com/preview
Capture time and per-file hashes: see ../capture-manifest.json and resource-inventory.json.
Collection scope: ordinary public HTTP GET responses and same-origin assets directly linked from the target HTML only.

## Files
- ../preview.html — raw server response for the target route.
- ../site-root.html — raw server response for the homepage.
- ../robots.txt and ../sitemap.xml — public site metadata.
- ../*.headers.json — response headers.
- resource-inventory.json — canonical URL, HTTP status, Content-Type, byte count and SHA-256 for each captured asset.
- Remaining files in this folder are the corresponding raw, downloaded JS/CSS/font/icon/manifest resources.

The downloaded JavaScript was not executed. No unlinked .map paths, API routes, login flows, or robots-disallowed paths were queried during asset collection.
