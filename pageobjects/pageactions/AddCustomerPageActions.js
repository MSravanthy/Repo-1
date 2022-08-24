/// < reference types= "cypress" />
import AddcustomerpageElements from '../pageelements/AddcustomerpageElements'

export default class AddCustomerPageActions{

  constructor(){

    globalThis.Addcustomerelement = new AddcustomerpageElements()

 }
     
    addcustomerdetails(firstName,lastName,postCode){

        Addcustomerelement.addcustomerBtn().click()
        Addcustomerelement.firstNameField().type(firstName)
        Addcustomerelement.lastNameField().type(lastName)
        Addcustomerelement.postCodeField().type(postCode)
        Addcustomerelement.addCustomerSubmitbtn().click()
    }

    validateAlert(alertMsg){

        cy.on('window:alert',(alertText)=>{
         
         expect(alertText).contains(alertText)

        })

    }




}