/// <reference types="cypress"/>

// implicit assertion - явна перевірка
it('Implicit aseertions', () => {
  cy.visit('http://localhost:8080/commands/assertions');
  cy.get('.assertion-table tr').eq(3).should('have.class', 'success');    // eq - дозволяє вибрати якийсь елемент зі списку однакових, немурація поч. з 0 (ми вибрали 4-й)
  cy.get('.assertion-table tr').eq(3).should('have.attr', 'class');
  cy.get('.assertion-table tr th').eq(3).should('have.attr', 'scope');

  // перевірки наявності тексту
  cy.get('.assertion-table tr td').eq(3).should('have.text', 'Column content');
  cy.get('.assertion-table tr td').eq(3).should('contain', 'Column content');
  cy.get('.assertion-table tr td').eq(3).should('have.html', 'Column content');
  cy.get('.assertion-table tr td').eq(3).should('include.text', ' content'); // перевірка наявності тастину тексту, окремого слова
  cy.get('.assertion-table tr td').eq(3).should('not.contain', 'qwerty'); // перевірка, що такого тексту немає
  cy.get('.assertion-table tr th').eq(5).should('contain', '3');
  cy.get('.assertion-table tr th').eq(5).invoke('text').then(parseFloat).should('be.greaterThan', 2); // invoke - витягує будь-який параметр елементу з Properties


  cy.visit('http://localhost:8080/commands/querying');
  cy.get('#inputName').type('qweqwe').should('have.value', 'qweqwe'); // перевірка відображення введеного в поле тексту


  cy.visit('http://localhost:8080/commands/traversal');
  cy.get('.traversal-disabled .btn').eq(0).should('be.disabled');
  cy.get('.traversal-disabled .btn').eq(0).should('exist');
  cy.get('.traversal-disabled .btn').eq(0).should('exist').and('be.disabled');
  cy.get('.traversal-disabled .btn').eq(1).should('exist').and('be.enabled');


  cy.visit('http://localhost:8080/commands/assertions');
  // перевірка кольору елементу
  cy.get('.assertion-table tr td').eq(4).should('have.css', 'background-color').and('eq', 'rgb(223, 240, 216)');
  cy.get('h3:contains("Implicit Assertions")').should('be.visible'); // перевіряє, що елемент видимий
})