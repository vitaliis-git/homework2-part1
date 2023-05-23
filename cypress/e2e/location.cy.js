/// <reference types="cypress"/>

it('Explicit aseertions', () => {
    cy.visit('http://localhost:8080/commands/assertions');

    cy.location().then(location => {
        expect(location.hash).to.be.empty;
        expect(location.href).to.be.eq('http://localhost:8080/commands/assertions');
        expect(location.host).to.be.eq('localhost:8080');
        expect(location.hostname).to.be.eq('localhost');
        expect(location.origin).to.be.eq('http://localhost:8080');
        expect(location.pathname).to.be.eq('/commands/assertions');
        expect(location.port).to.be.eq('8080');
        expect(location.protocol).to.be.eq('http:');
        expect(location.search).to.be.eq('');
    })

    cy.url().then(url => {
        expect(url)
    })
})