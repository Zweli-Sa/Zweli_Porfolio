// <reference types="cypress"/>
import ContactScreenPageObject from '../../../src/components/screens/contato/ContactScreen.pageObject';

describe('/contato', () => {
  describe('when click contact button and modal is open', () => {
    describe('fill forms fields correctly', () => {
      // it === test that we're doing
      it('and submit the message', () => {
        // Pretest - Arrange
        cy.intercept('POST', '/api/sendgrid', (req) => {
          req.reply({ statusCode: 200 });
        }).as('sendGrid');
        const contactScreen = new ContactScreenPageObject(cy);

        // Scenario - Act
        contactScreen
          .callModalForm()
          .fillContactForm({ name: 'Zweli', email: 'zwelisangweni25@gmail.com', message: 'Hey there! It`s nice to meet you.' })
          .submitForm();

        // Assert
        cy.wait('@sendGrid')
          .should('have.property', 'state', 'Complete');

        cy.get('@sendGrid')
          .its('request.body')
          .should('deep.equal', {
            email: 'zwelisangweni25@gmail.com',
            message: 'Hey there! It`s nice to meet you.',
            name: 'Zweli',
          });

        cy.get('[alt="It\'s all right, it\'s all right"]')
          .should('be.visible');
        contactScreen.closeForm();
      });
    });
  });
});
