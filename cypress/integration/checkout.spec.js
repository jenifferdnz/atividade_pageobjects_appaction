/// <reference types="cypress" />

const data = require('../fixtures/data.json')
const login = require('../support/commands')
const checkout = require('../support/commands')

describe ('Cadastro de usuário', () => {
    beforeEach(() => {
      cy.visit('/minha-conta/')
      cy.login(data.usuario, data.senha)

    })

    it('Usuário realizar checkout', () => {
        cy.checkout()
        cy.comprafinalizada()
        cy.contains('Obrigado. Seu pedido foi recebido.')
        //cy.get('.checkout-button').click()
        //cy.get('#terms').click()
        //cy.get('.woocommerce-terms-and-conditions-checkbox-text').click()
    })
})