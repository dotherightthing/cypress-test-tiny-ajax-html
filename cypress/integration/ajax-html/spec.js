/**
 * Cypress spec for a modal
 *
 * @author dev@dotherightthing.co.nz
 *
 * @todo Not working - "No request ever occurred."
 */

// Passing arrow functions (“lambdas”) to Mocha is discouraged
// https://mochajs.org/#arrow-functions

/* eslint-disable prefer-arrow-callback */
/* global cy */

'use strict';

describe('Modaal', function () {
  it('User can launch the modal', function () {
    // load local web page
    cy.visit('cypress/integration/ajax-html/page.html');

    // set up a route to listen for the expected Ajax request
    cy.server();
    cy.route('cypress/integration/ajax-html/modal.html').as('modalAjaxHtml');

    // check that the launch link exists
    cy.get('a.modaal-ajax').as('modalLauncher');

    // then click it
    cy.get('@modalLauncher').click();

    // wait for the Ajax response
    cy.wait('@modalAjaxHtml').then(function(xhr){
      console.log('Cypress: Ajax response', xhr);
    });
  });
});
