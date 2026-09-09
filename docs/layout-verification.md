# Layout verification — 9 September 2026

Reviewed the actual local website in the in-app browser using screenshots, DOM bounding rectangles and computed styles.

## Corrections

- Matched the homepage hero's left gutter to the header and main section containers. At the 1440px desktop test width, all three start at 104.5px (the browser reserves 15px for its scrollbar).
- Centered the eyebrow labels above centered section headings and the partner logos. Their horizontal centers now exactly match their parent containers.
- Changed the tablet footer from four cramped columns to two. At the 768px test width, each footer column is 321px wide and its content fits within that width.
- Vertically centered the booking-section buttons and restored a readable champagne colour to the phone link on the dark background.

## Checks

All 12 customer-facing routes were checked at viewport widths of 320, 390, 768 and 1440px: homepage, About, Services, all six collections, Contact, Schedule and Privacy. All 48 checks found no elements extending beyond the page horizontally and no broken images among completed image loads. Raw measurements are saved in `screenshots/layout-audit.json`.

The desktop collection image boxes, headings and enquiry links have matching vertical positions within their row. Tablet collection enquiry offsets match across all six collections. Service links have equal bottom positions within each tablet row.

The mobile navigation opens below the header, locks background scrolling, closes on Escape, restores focus to its toggle and restores scrolling. No console errors were recorded in the inspected browser log. Production build and ESLint pass.

These checks cover the website's own layout. They do not inspect the internals of the external booking iframe or submit an appointment or enquiry.

## Screenshots

- `screenshots/home-desktop.png`: desktop homepage opening.
- `screenshots/home-mobile.png`: mobile homepage opening.
- `screenshots/home-full-desktop.png`: complete desktop homepage after scrolling through its sections.
- `screenshots/collection-desktop.png`: collection image, title and enquiry rows.
- `screenshots/services-tablet.png`: service rows at tablet width.
- `screenshots/footer-tablet.png`: corrected tablet footer columns.

The browser viewport override was reset after testing and the preview returned to the homepage.
