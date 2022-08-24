/// < reference types= "cypress" />

const ObjectRepository = require("../../locators.json")

export default class HomePageElements{

    customerLoginBtn(){

        return cy.get(ObjectRepository.homepage.customerLoginButton)
    }

    bankManagerLoginBtn(){

        return cy.get (ObjectRepository.homepage.bankManagerLoginButton)
    }

    homeBtn(){

        return cy.get (ObjectRepository.homepage.homeButton)

    }

    homePageHeading(){

         return cy.get(ObjectRepository.homepage.homePageHeadingvalue)
    }

      


}