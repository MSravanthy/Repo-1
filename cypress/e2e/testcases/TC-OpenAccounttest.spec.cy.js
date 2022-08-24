/// < reference types= "cypress" />
import HomePageActions from '../../../pageobjects/pageactions/HomePageActions'
import AddCustomerPageActions from '../../../pageobjects/pageactions/AddCustomerPageActions'
import OpenAccountPageActions from '../../../pageobjects/pageactions/OpenAccountpageActions'

const userform = require("../../fixtures/testdata.json")

describe('Adding a new customer', () => {
    const homePage =new HomePageActions
    const addcustomer =new AddCustomerPageActions
    const openaccount = new OpenAccountPageActions

    beforeEach(() =>{

        homePage.navigateToURL()
   
    })

    it('Addcustomerdetails', () => {
        
        homePage.LoginAsBankMnger()
        addcustomer.addcustomerdetails(userform.firstname,userform.lastname,userform.postcode)
        addcustomer.validateAlert(userform.alertmsg)
        
        openaccount.OpenAccount(userform.currency,userform.customer)
        openaccount.validateAlert(userform.openaccountalertmsg)
    });


})

