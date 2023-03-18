describe('zadanie modul 5', () => {
    
      it('Go to fabryka testow and take screenshot', () => {
        cy.visit('https://fabrykatestow.pl/')
        cy.get('[role="button"][href="https://fabrykatestow.pl/cypress"]').click()
        cy.url().should('eq', 'https://fabrykatestow.pl/cypress/')
        cy.get('[data-id="2d7d28f4"]').scrollIntoView().screenshot()
       
      })

    })