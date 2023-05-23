/// <reference types="cypress"/>

// explicit assertion - явна перевірка
it('Explicit aseertions', () => {
    cy.visit('http://localhost:8080/commands/assertions');

    expect('text').to.equal('text');
    cy.get('.assertion-table tr').eq(3).then(element => {
        cy.wrap(element).click;

        expect(element).to.have.class('success');
        expect(element).to.have.attr('class');
        expect(element.attr('class')).to.eq('success');
        expect(element.attr('class')).to.eql('success');
        expect(element.attr('class')).to.eqls('success');
        expect(element.attr('class')).to.equal('success');
        expect(element.attr('class')).to.equals('success');
    })

    // const obj = {
    //     key: 'Dima',
    //     keyObj: {
    //         key2: '1'
    //     }
    // }

    // const obj2 = {
    //     key: 'Dima',
    //     keyObj: {
    //         key2: '1'
    //     }
    // }

    // expect(obj).to.eql(obj2);
    // expect(obj).to.eqls(obj2);
    // expect(obj).to.eq(obj2);
    // expect(obj).to.equal(obj2);
    // expect(obj).to.equals(obj2);

    // const obj3 = obj;

    // expect(obj).to.eql(obj3);
    // expect(obj).to.eqls(obj3);
    // expect(obj).to.eq(obj3);
    // expect(obj).to.equal(obj3);
    // expect(obj).to.equals(obj3);


    cy.get('.assertion-table tr td').eq(3).then(tableCell => {
        expect(tableCell).to.have.text('Column content');
        expect(tableCell).to.contain('Column content');
        expect(tableCell).to.contain(' content'); // пошук по частині тексту
        expect(tableCell).to.have.html('Column content');
        expect(tableCell.text()).to.have.include('Column content');
        expect(tableCell.text()).to.have.include(' content'); // пошук по частині тексту

        expect(tableCell).to.not.contain('ajhfgsjgs');
    })


    cy.get('.assertion-table tr th').eq(5).then(tableCell => {
        expect(tableCell).to.contain('3');
        expect(parseFloat(tableCell.text())).to.be.greaterThan(2);
    })


    cy.visit('http://localhost:8080/commands/querying');

    cy.get('#inputName').type('qweqwe').then(inputField => {
        expect(inputField).to.have.value('qweqwe');
    })


    cy.visit('http://localhost:8080/commands/traversal');

    cy.get('.traversal-disabled .btn').eq(0).then(disabledButton => {
        expect(disabledButton).to.be.disabled;
        expect(disabledButton).to.exist;
    })
})