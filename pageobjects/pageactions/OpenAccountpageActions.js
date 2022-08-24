///< reference types ='cypress'/>
import OpenAccountPageElements from "../pageelements/OpenAccountPageElements";

export default class OpenAccountPageActions{

  constructor(){

    globalThis.openaccountpageelements =new OpenAccountPageElements()
             
  }
     
    OpenAccount(customer,currency){
    

      openaccountpageelements.openAccountButton().click()
      openaccountpageelements.Customerdropdown().select(customer)
      openaccountpageelements.Currencydropdown().select(currency)
      openaccountpageelements.processButton().click()
      openaccountpageelements.Customer().invoke(customerLabel)
      openaccountpageelements.Currency().contains(currencyLabel)
    }
       
    validateAlert(alertMsg){

        cy.on('window:alert',(alertText)=>{
         
         expect(alertText).contains(alertText)

        })

    }

}
