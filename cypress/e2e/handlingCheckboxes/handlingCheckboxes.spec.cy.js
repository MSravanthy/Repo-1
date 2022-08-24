///<reference types = "cypress"/>
    
describe('handling static and dynamic checkboxes', () => {

   it('handling static checkboxes',() => {

     cy.visit('https://demo.automationtesting.in/Register.html')
     cy.get('input[type=checkbox]').should('not.have.text','ABC')
     cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies')
     cy.get('#checkbox2').uncheck().should('not.be.checked')
        cy.get('input[type=checkbox]').check('Hockey')

    // Select Multiple check boxes
     cy.get('input[type=checkbox]').check(['Cricket','Movies'])

   //Total list of checkboxes
     cy.get('input[type=checkbox]').then(($len)=>{
       const count =$len.length
       cy.log('Total count of hobbies',count)

     });
    //Print the list of checkboxes
     cy.get('div.col-md-4.col-md-4.col-xs-4.col-sm-4 div>input[type=checkbox]').each(($el)=>{
      const text =$el.val()
      cy.log('print all the checkbox names',text)
     });
     

     

 
   });


});