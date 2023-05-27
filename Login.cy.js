describe("Bombay Login functinality ", () => {
    it("Verify that user is able to login on web page", () => {
      cy.viewport(1089, 952);
      cy.visit("https://demo.bombay.live/operator/bombaydemo/bombay-live-lobby/fun");
      cy.get('#iframeId').its('0.contentDocument.body').find("[data-test-id='entry-username-input']").type("bhb2bh4400");
      cy.get('#iframeId').its('0.contentDocument.body').find("[data-test-id='save-username-button']").click();
      cy.get('#iframeId').its('0.contentDocument.body').find("[data-test-id='button-click-open-menu-modal']").click();
      cy.get('#iframeId').its('0.contentDocument.body').find("[data-test-id='menu-link-settings'] [data-test-id='menu-link-settings']").click();
      cy.get('#iframeId').its('0.contentDocument.body').find("[data-test-id='generic-scrollable-container-navigation-page-header']").should('contain','Settings');
    
    });

    it("Verify that multiple login with the same username is disallowed", () => {
        cy.viewport(1089, 952);
        cy.visit("https://demo.bombay.live/operator/bombaydemo/bombay-live-lobby/fun");
        cy.get('#iframeId').its('0.contentDocument.body').find("[data-test-id='entry-username-input']").type("bhb2bh4400");
        cy.get('#iframeId').its('0.contentDocument.body').find("[data-test-id='save-username-button']").click();
        cy.get('#iframeId').its('0.contentDocument.body').find("[data-test-id='username-already-in-use-error']").should('contain','This username is already in use');
      })

   

  });
  
