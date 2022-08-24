/// < reference types= "cypress" />

const ObjectRepository = require("../../locators.json")

export default class AddcusomerpageElements{

    addcustomerBtn(){

        return cy.get(ObjectRepository.addcustomerpage.addcustomerbutton)
    }

    firstNameField(){

        return cy.get(ObjectRepository.addcustomerpage.firstname)

    }

    lastNameField(){

        return cy.get(ObjectRepository.addcustomerpage.lastname)

    }
    
    postCodeField(){

        return cy.get(ObjectRepository.addcustomerpage.postcode)
    }

    addCustomerSubmitbtn(){

        return cy.get(ObjectRepository.addcustomerpage.addcustomersubmitbutton)
    }



}



