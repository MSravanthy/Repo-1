/// < reference types= "cypress" />
import HomePageActions from '../../../pageobjects/pageactions/HomePageActions'
import AddCustomerPageActions from '../../../pageobjects/pageactions/AddCustomerPageActions'
const userform = require("../../fixtures/testdata.json")

describe('Adding a new customer', () => {
    const homePage =new HomePageActions
    const addcustomer =new AddCustomerPageActions


    // before(()=>{

    //     cy.fixture('testdata').then((data)=>{

    //         globalThis.data = data
    //     })
    // })
    
    beforeEach(() =>{

     homePage.navigateToURL()

    })

    it('Add Customerdetails', () => {
        
        homePage.LoginAsBankMnger()
        addcustomer.addcustomerdetails(userform.firstname,userform.lastname,userform.postcode)
        addcustomer.validateAlert(userform.alertmsg)

    });

})

