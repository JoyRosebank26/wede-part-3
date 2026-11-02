# Olifantsfontein Youth Development NPC (OYDP) Website

Welcome to the official repository for the Olifantsfontein Youth Development NPC (OYDP) web platform. This project provides an accessible, responsive digital hub highlighting youth programs, community service initiatives, and enrollment resources.



## Part 2 Feedback & Implementation Changelog

In accordance with the feedback received from Part 2, the following improvements and fixes have been executed for Part 3:

 **File Structure Optimization:** 
  * Flattened the project directory by removing unnecessary nested subfolders to ensure clean, standard file paths across the site.

* **README File Naming & Formatting:** 
  * Formatted using StackEdit (`stackedit.io`) and saved with the mandatory `.md` file extension (`README.md`).

* **JavaScript Integration:** 
  * Created a dedicated `script.js` file to drive client-side interactivity, DOM manipulation, dynamic searching, and form validation.

* **Meta Tags & SEO Enhancements:** 
  * Embedded `<meta name="description">`, `<meta name="keywords">`, and unique `<title>` tags across all HTML pages (`index.html`, `about.html`, `services.html`, `register.html`, `contact.html`, `gallery.html`).

* **Dynamic Search Feature:** 
  * Implemented real-time client-side search filtering on the Services page (`services.html`) using JavaScript to filter programs by key terms.

* **Interactive Maps:** 
  * Embedded an interactive Google Maps location frame into `contact.html` to assist visitors in locating the OYDP center.

* **Deployment Setup:** 
  * Deployed the site live using Netlify for remote hosting and access.


## Part 3 Functional Highlights

1. **On-Page SEO & Crawler Setup:**
   * Global meta tags included on all root HTML pages.
   * Added `robots.txt` and `sitemap.xml` files in the root folder.

2. **Form Functionality & Validation:**
   * **Enquiry/Registration Form (`register.html`):** Features client-side JavaScript validation, dynamic fee processing (R0.00 / fully funded display), and an instant HTML summary view upon submission.
   * **Contact Form (`contact.html`):** Validates required contact input and message fields prior to action processing.

3. **Interactive Features:**
   * **Gallery Lightbox:** Clickable image modal overlay on `gallery.html`.
   * **Location Map:** Embedded interactive map frame on `contact.html`.

## 3.2 Off-Page SEO & Community Reach

To boost OYDP's online visibility and trust, the site uses the following off-page strategies:

* **Backlinks:** Building links from local school portals, government youth sites, and South African NGO directories[span_1](start_span)[span_1](end_span).
* **Social Media:** Connecting social channels (Facebook, LinkedIn, Instagram) to drive traffic back to the main site[span_2](start_span)[span_2](end_span).
* **Local Search:** Using local keywords and an embedded Google Map on the Contact page to help community members easily find the center[span_3](start_span)[span_3](end_span)[span_4](start_span)[span_4](end_span).

## 3.3 Page Speed & Security Implementation

* **Page Performance & Loading Speed:**
  * Clean, lightweight vanilla HTML, CSS, and JavaScript code without heavy framework overhead[span_1](start_span)[span_1](end_span)[span_2](start_span)[span_2](end_span).
  * Optimized image dimensions and format scaling to minimize render-blocking resources and maintain fast load times[span_3](start_span)[span_3](end_span).

* **Website Security Measures:**
  * Secure form input validation using client-side JavaScript to prevent empty or malformed user submissions.
  * HTTPS deployment strategy via Netlify web hosting to encrypt communication between visitors and the web server.
  * Inclusion of `robots.txt` to control search engine indexing and protect site directory privacy[span_4](start_span)[span_4](end_span).

## Folder Structure


oydp-website

css/
styles.css

js/
script.js

images/
(site assets and gallery images)

index.html
about.html
services.html
register.html
contact.html
gallery.html
README.md
robots.txt
sitemap.xml



---------------------------------------------------------------------------------------------------------

Olifantsfontein Youth Development NPC (OYDP) - Web Development Portfolio (Part 2)
Introduction


This repository holds the fully responsive, multi-page web platform created for the Olifantsfontein Youth Development NPC (OYDP) to fulfill the deliverables of the WEDE5020 module. Building directly upon the groundwork laid in Part 1, this phase focuses heavily on custom desktop styling, modern layout mechanisms like Flexbox and CSS Grid, cross-browser reliability, consistent image formatting, and thorough testing documentation.

Technical & Architectural Overview

1. Unified Stylesheet & Global Reset
 Consolidated Design: All pages (⁠index.html⁠, ⁠about.html⁠, ⁠services.html⁠, ⁠gallery.html⁠, ⁠register.html⁠, ⁠contact.html⁠) point to a single master stylesheet (⁠style.css⁠).
 Consistent Box Model: Enforces a universal reset (⁠* { margin: 0; padding: 0; box-sizing: border-box; }⁠) to ensure predictable element rendering across different web browsers.
 Design Tokens: Relies on CSS Custom Properties (⁠:root⁠) for color palettes, text hierarchies, animation timings, and standard border radii to guarantee visual harmony.


2. Layout & Visual Structure
 Flexbox Integration: Implements flexible containers (⁠display: flex⁠) for adaptive navigation bars, footer alignment, and internal card content distribution.
 CSS Grid Systems: Employs CSS Grid (⁠display: grid⁠) with explicit column rules to structure multi-item sections such as service offerings, photo galleries, and contact details.
 Image Scaling & Cropping: Uses fixed box heights (⁠200px⁠) combined with ⁠object-fit: cover⁠ on card images to avoid distortion and deliver a neat, uniform presentation.
 User Interaction: Incorporates pseudo-classes (⁠:hover⁠, ⁠:focus⁠, ⁠:active⁠) across navigational links, form inputs, and buttons to improve interactivity.


3. Responsive Web Design (RWD)
 Adaptive Breakpoints: Features media queries customized for tablet screens (⁠992px⁠) and mobile devices (⁠768px⁠).
 Fluid Layout Switching: Automatically shifts multi-column desktop grids (such as 3-column galleries or 2-column service/contact sections) into clean, single-column stacks on smaller viewports.
 Flexible Media: Applies fluid image parameters (⁠max-width: 100%⁠) to prevent unwanted horizontal scrolling on compact screens.


Testing & Quality Assurance

Desktop - 1920 x 1080
Tablet - 768 x 1024
Mobile - 375 x 812

Viewport Documentation
 Desktop Layout: ⁠[Desktop View](screenshots/desktop.png)⁠
 Tablet Layout: ⁠ [Tablet View](screenshots/tablet.png)⁠
 Mobile Layout: ⁠ [Mobile View](screenshots/mobile.png)

References
 MDN Web Docs. (2024). CSS Layout - Grid and Flexbox. Available at: https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout [Accessed 2026].
 W3C. (2023). Responsive Web Design Basics. Available at: https://www.w3.org/WAI/tutorials/ [Accessed 2026].