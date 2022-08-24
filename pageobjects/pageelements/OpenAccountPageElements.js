///< reference types = "cypress" />
const ObjectRepository = require("../../locators.json")

export default class OpenAccountPageElements {

  openAccountButton(){

    return cy.get(ObjectRepository.openaccountpage.openaccountbutton)
     
  }
      
  // customerLabel(){

  //   return cy.get(ObjectRepository.openaccountpage.customerlabel)

  // }

  // currencyLabel(){

  //   return cy.get(ObjectRepository.openaccountpage.currencylabel)
  // }

  Customerdropdown(){

    return cy.get(ObjectRepository.openaccountpage.selectcustomerfield)

  }
       
  Currencydropdown(){

    return cy.get(ObjectRepository.openaccountpage.selectcurrencyfield)
  }
    
  processButton(){

    return cy.get(ObjectRepository.openaccountpage.processbutton)

  }

       
}



