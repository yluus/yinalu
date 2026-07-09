# Part 1 — Findings

Document each issue you found and fixed. Add or remove sections as needed
(there are three issues to find).

## Issue 1 The fetch url should be whole, not partial under app.js

- **Symptom:** (what failed, and how — e.g. error message, flaky vs. consistent), api call not working
- **Root cause:** (why it actually happened), partial api call failed
- **Fix location:** (test or app? which file/line?) app.js
- **How I verified:** (what you ran to confirm it's fixed and stays fixed)

## Issue 2 Add missing piece to call event handler and post api from index.html

- **Symptom:** from index.html, if not adding the event handler, create portfolio button will not create a new portfolio if clicked
- **Root cause:**
- **Fix location:**   index.html
- **How I verified:** a new portfolio created successfully

## Issue 3 Cypress.config('baseUrl', null); => Need to turn it off in order to load index.html correctly under dashboard.cy.ts

- **Symptom:**  cannot load the browser
- **Root cause:** 
- **Fix location:** dashboard.cy.ts
- **How I verified:** The browser starts successful and can verify the web element

## Anything else you noticed

(Optional: other smells, risks, or improvements you'd make with more time.)
