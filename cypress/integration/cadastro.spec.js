/// <reference types="cypress" />

const data = require('../fixtures/data.json')
const cadastroPage = require('../support/pages/cadastro.page')
const painelcontaPage = require('../support/pages/painelconta.page')
//import {faker} from 'faker'
//faker.locale = 'pt_BR'
import { faker } from '@faker-js/faker';
let emailFak = faker.internet.email()
describe ('Cadastro de usuário', () => {
  beforeEach(() => {
    cy.visit('/minha-conta/')
  })

  it('Usuário conseguir realizar cadastro', () => {
    cadastroPage.login(emailFak, data.senha)
    //painelcontaPage.conta.should("be.visible")
    //painelcontaPage.conta.should('be.visible')
    cy.contains('Olá')
  })
  it('Não cadastrar usuário já cadastrado', () => {
    cadastroPage.login(data.usuario, data.senha)
    cy.contains('Erro: Uma conta já está registrada com seu endereço de e-mail. Faça login.')
  });  
  
})