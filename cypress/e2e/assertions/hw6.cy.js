/// <reference types="cypress"/>

describe('Home work 6', () => {

  const testPopup = [
    
    {testData: {
      position: '[ng-reflect-value="top-right"]',
      title: 'Top right!',
      content: 'Primary!',
      time: '1000',
      type: '[ng-reflect-value="primary"]'
    },
    expectedResult: {
      icon: 'email',
      title: 'Top right!',
      content: 'Primary',
      color: '#e91d63',
      position: 'style="justify-content: flex-end; align-items: flex-start;"'
    }},

    {testData: {
      position: '[ng-reflect-value="top-left"]',
      title: 'Top left!',
      content: 'Success!',
      time: '1000',
      type: '[ng-reflect-value="success"]'
    },
    expectedResult: {
      icon: 'checkmark',
      title: 'Top left!',
      content: 'Success!',
      color: '#60af20',
      position: 'style="justify-content: flex-start; align-items: flex-start;"'
    }},

    {testData: {
      position: '[ng-reflect-value="bottom-left"]',
      title: 'Bottom left!',
      content: 'Info!',
      time: '1000',
      type: '[ng-reflect-value="info"]'
    },
    expectedResult: {
      icon: 'question-mark',
      title: 'Bottom left!',
      content: 'Info!',
      color: '#0495ee',
      position: 'style="justify-content: flex-start; align-items: flex-end;"'
    }},

    {testData: {
      position: '[ng-reflect-value="bottom-right"]',
      title: 'Bottom right!',
      content: 'Warning!',
      time: '1000',
      type: '[ng-reflect-value="warning"]'
    },
    expectedResult: {
      icon: 'alert-triangle',
      title: 'Bottom right!',
      content: 'Warning!',
      color: '#ff9f05',
      position: 'style="justify-content: flex-end; align-items: flex-end;"'
    }}
  ]
  testPopup.forEach(({testData, expectedResult}) => {
        it(`Test ${testData}`, () => {
          cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
          cy.get('[alt="Material Dark Theme"]', {timeout: 10000}).click();
          cy.get('[class="menu-title ng-tns-c141-19"]').click();
          cy.get('[title="Toastr"]').click();
          cy.get('[icon="chevron-down-outline"]').eq(1).click();
          cy.get(testData.position).click();
          cy.get('[name="title"]').clear().type(testData.title);
          cy.get('[name="content"]').clear().type(testData.content);
          cy.get('[icon="chevron-down-outline"]').eq(2).click();
          cy.get(testData.type).click();
          cy.get('[name="timeout"]').clear().type(testData.time);
          cy.get('[class*="status-basic nb-transition"]').eq(2).click();
          
          cy.get('.toastr-overlay-container').should('contain', expectedResult)
        })
    })
})