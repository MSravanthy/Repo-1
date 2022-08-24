///<reference types = 'cypress'/>
describe('Validate alert Events',()=>{


    it('Alert and confim event',()=>{


        // cy.visit("https://mail.rediff.com/cgi-bin/login.cgi")
        // cy.get('input[type=submit]').click()

        // cy.on('window:alert',(str)=>
        // {

        //  expect(str).to.equal('Please enter a valid user name')

        // })
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get("button[onclick='myFunction()']").click()
        cy.on('window:confirm',(str)=> {

         expect(str).to.equal('Press a button!')

        });
    });

})