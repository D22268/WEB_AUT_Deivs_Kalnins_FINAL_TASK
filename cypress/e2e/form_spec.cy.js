describe('Automation Practice Form', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.viewport(1280, 720);
  });

  it('Fills out the form correctly and submits', () => {
    // Avoid ads
    cy.get('body').then($body => {
      if ($body.find('#close-fixedban').length) {
        cy.get('#close-fixedban').click();
      }
    });

    // Fill out basic text fields
    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Doe');
    cy.get('#userEmail').type('john.doe@example.com');
    cy.get('input[name="gender"][value="Male"]').check({ force: true });
    cy.get('#userNumber').type('1234567890');

    // Set Date of Birth
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select('1930');
    cy.get('.react-datepicker__month-select').select('February');
    cy.contains('.react-datepicker__day--028', '28').click();

    // Subject
    cy.get('#subjectsInput').type('Economics{enter}');

    // Hobbies
    cy.contains('label', 'Music').click();

    // File Upload
    cy.get('input#uploadPicture').selectFile('image/Nature.jpg');

    // Current Address
    cy.get('#currentAddress').type('123 Demo Street, Testville');

    // State and City
    cy.get('#react-select-3-input').type('NCR{enter}');
    cy.get('#react-select-4-input').type('Delhi{enter}');

    // Submit
    cy.get('#submit').click();

    // Validation of Modal
    cy.get('.modal-content').should('be.visible');
    cy.get('td').contains('John Doe').should('exist');
    cy.get('td').contains('john.doe@example.com').should('exist');
    cy.get('td').contains('Male').should('exist');
    cy.get('td').contains('1234567890').should('exist');
    cy.get('td').contains('28 February,1930').should('exist');
    cy.get('td').contains('Economics').should('exist');
    cy.get('td').contains('Music').should('exist');
    cy.get('td').contains('Nature.jpg').should('exist');
    cy.get('td').contains('123 Demo Street').should('exist');
    cy.get('td').contains('NCR Delhi').should('exist');
  });
});
