Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Maria Eaduarda')
    cy.get('#lastName').type('Jaques')
    cy.get('#email').type('maria.betman03@gmail.com')
    cy.get('#open-text-area').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie, mi nec fringilla hendrerit, lectus neque volutpat mi, pharetra feugiat risus enim tempor nisl. Vestibulum sed facilisis ligula. Integer facilisis tincidunt lacinia. Vivamus nec vulputate diam, convallis feugiat metus. Etiam sagittis pretium enim et dapibus. Pellentesque non aliquet nisl. Nam nec ex eros. Duis elit orci, scelerisque sed tellus ac, gravida feugiat arcu. Maecenas elementum pretium quam, vehicula egestas ex suscipit eu. Mauris at lorem tempus, mattis dolor ut, laoreet magna. Ut nisi turpis, finibus nec posuere sed, faucibus vitae sem.', {delay: 0})
    cy.contains('button', 'Enviar').click()
})