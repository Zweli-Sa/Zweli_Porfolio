export default class ContactScreenPageObject {
  constructor(cy) {
    this.cy = cy;

    this.cy.visit('/contato');
  }

  callModalForm() {
    this.cy.get('#button').click().invoke('show');

    return this;
  }

  fillContactForm({ name, email, message }) {
    // find and fill input name (error, text also with name=name within textfield)
    this.cy.get('#contactForm input[name=name]').type(name);
    this.cy.get('#contactForm input[name=email]').type(email);
    this.cy.get('#contactForm input[name=message]').type(message);

    return this;
  }

  submitForm() {
    this.cy.get('#contactForm button[type="submit"]').click();

    return this;
  }

  closeForm() {
    this.cy.get('#contactForm button[type="button"]').click();

    return this;
  }
}
