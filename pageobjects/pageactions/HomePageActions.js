/// < reference types= "cypress" />

import HomePageElements from '../pageelements/HomePageElements'

export default class HomePageActions{

  constructor(){

   globalThis.homepageelement = new HomePageElements ()

  }

  navigateToURL(){

     cy.visit('/')

  }

  ValidateTitle(){

    return cy.title()

  }

  ValidateHomePageMainHeading(homePageHeadingg){
    
    homepageelement.homePageHeading().contains(homePageHeadingg,'XYZ Bank')

  }
  
  LoginAsBankMnger(){

    homepageelement.bankManagerLoginBtn().click()
        
  }

   
  LoginAsCustomer(){
    
    homepageelement.customerLoginBtn().click()

  }

  navigateToHomepage(){

    homepageelement.homeBtn().click

  }



}
