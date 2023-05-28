/// <reference types="cypress" />


//export const painelcontaPage = {
    //get conta() { return cy.get(`.woocommerce-MyAccount-navigation-link--dashboard > a`)}
//}

class PainelcontaPage {
    get #contaregister() { return cy.get(`.woocommerce-MyAccount-navigation-link--dashboard > a`)}

    conta(){
        //user = faker.internet.email()
        this.#contaregister.click()
    }
}

module.exports = new PainelcontaPage()