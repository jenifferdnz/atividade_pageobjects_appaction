/// <reference types="cypress" />
// PageObjects com classe
//var faker = require('faker')
//faker.locale = 'pt_BR'


class CadastroPage {
    get #user() { return cy.get('#reg_email')}
    get #pass() { return cy.get('#reg_password')}
    get #register() { return cy.get(':nth-child(4) > .button')}

    login(user, pass){
        //user = faker.internet.email()
        this.#user.wait(200).type(user , {force: true})
        this.#pass.type(pass)
        this.#register.click()
    }
}

module.exports = new CadastroPage()