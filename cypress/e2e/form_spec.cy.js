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

    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Doe');
    cy.get('#userEmail').type('john.doe@example.com');
    cy.get('input[name="gender"][value="Male"]').check({ force: true });
    cy.get('#userNumber').type('1234567890');

cy.get('#dateOfBirthInput').click();

// Set Date of Birth to 28 February, 1930
cy.get('#dateOfBirthInput').click();
cy.get('.react-datepicker__year-select').select('1930');
cy.wait(200); // Let the month dropdown render properly
cy.get('.react-datepicker__month-select').select('February');
cy.get('.react-datepicker__day--028:not(.react-datepicker__day--outside-month)').click();
   
    cy.get('#subjectsInput').type('Economics{enter}');
    
    cy.contains('label', 'Music').click();
    
    cy.get('input#uploadPicture').selectFile('files/Nature.jpg');
    
    cy.get('#currentAddress').type('1234 Bee Street, Waspvile');
    
    cy.get('#state').click();
    cy.get('#react-select-3-input').type('NCR{enter}');

    cy.get('#city').click();
    cy.get('#react-select-4-input').type('Delhi{enter}');
    
    cy.get('#submit').click();
    
    cy.get('.modal-content').should('be.visible');
    cy.get('td').contains('John Doe').should('exist');
    cy.get('td').contains('john.doe@example.com').should('exist');
    cy.get('td').contains('Male').should('exist');
    cy.get('td').contains('1234567890').should('exist');
    cy.get('.modal-content').contains(/28\s*February,\s*1930/).should('exist');
    cy.get('td').contains('Economics').should('exist');
    cy.get('td').contains('Music').should('exist');
    cy.get('td').contains('Nature.jpg').should('exist');
    cy.get('td').contains('1234 Bee Street').should('exist');
    cy.get('td').contains('NCR Delhi').should('exist');
  });
});
