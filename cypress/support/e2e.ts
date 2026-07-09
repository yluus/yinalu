// Loaded before every spec file.
//
// NOTE TO CANDIDATE: there is a deliberately-missing piece of test isolation
// here. One of the specs depends on the API being in its seeded starting state.
// The API exposes POST /api/admin/reset for exactly this purpose. Part of the
// exercise is deciding where/whether to call it.

export function getBaseUrl() {
    return "http://localhost:3001";
}

export async function startBrowser(
): Promise<void> {
    Cypress.config('baseUrl', null);
   // cy.visit("/");
    cy.visit('./app/public/index.html');
}

export function waitLong(
){
   cy.wait(50000);
}

export function waitMedium(
){
   cy.wait(25000);
}

export function waitShort(
) {
   cy.wait(12000);
}

