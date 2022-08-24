/// < reference types= "cypress" />
import HomePageActions from "../../../pageobjects/pageactions/HomePageActions"


describe('Login As BankManager', () => {
    const homePage =new HomePageActions

    before(() =>{

     homePage.navigateToURL()

    })

    it('Validate the title of Homepage', () => {
        
       homePage.ValidateTitle().should('eq','Protractor practice website - Banking App')

    });

    it('Validate Homepage heading',()=> {

        homePage.ValidateHomePageMainHeading()
       
    });

    it('login as Bank Manager', () => {
        
        homePage.LoginAsBankMnger()
        
    });
    
});