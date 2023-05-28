// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login',(user, pass)=>{
    cy.visit('/minha-conta/')
    cy.get('#username').type(user, {force: true})
    cy.get('#password').type(pass)
    cy.get('.woocommerce-form > .button').click()
})

Cypress.Commands.add('checkout', () => {
    const fd = new FormData()
    fd.append('attribute_size', 'S')
    fd.append('attribute_color', 'Gray')
    fd.append('quantity', 1)
    fd.append('testcookie', 1)
    fd.append('add-to-cart', 3702)
    fd.append('product_id', 3702)
    fd.append('variation_id', 3710)

    cy.request({
        url: 'http://lojaebac.ebaconline.art.br/product/electra-bra-top/',
        method: 'POST',
        body: fd
    }).then(resp => {
        resp.headers['set-cookie'].forEach(cookie =>{
            const firstPart = cookie.split(';')[0]
            const divisor = firstPart.indexOf('=')
            const key = firstPart.substring(0, divisor)
            const valor = firstPart.substring(divisor+1)
            cy.setCookie(key, valor)
        })
    })
    cy.visit('http://lojaebac.ebaconline.art.br/product/electra-bra-top/')
})

Cypress.Commands.add('comprafinalizada',()=>{

    cy.request({
        url: 'http://lojaebac.ebaconline.art.br/carrinho/',
        method: 'GET'
    })
    cy.visit('http://lojaebac.ebaconline.art.br/carrinho/')
    cy.get('.checkout-button').click()
    cy.get('.woocommerce-terms-and-conditions-checkbox-text').click({force: true})
    cy.get('#place_order').click()
})