///<reference types = "cypress" />

describe('Handling static dropdown in CodeboxAutomation labs', () => {

    it('Static Dropdowns', () => {

        cy.visit("https://codenboxautomationlab.com/practice/")

         //Length of the list 
         cy.get('select#dropdown-class-example>option').then(($len)=>{
            const count =$len.length
            cy.log('total language list count', count)
           })
        //Select method
        cy.get('select#dropdown-class-example').select('API').should('have.value','option3')

       // Print the list of text names from dropdown
        cy.get('select#dropdown-class-example').each(($el) =>{
            const text =$el.text();
            cy.log('All names',text)
        });
        // Print the list of text and Values from dropdown
        cy.get('select#dropdown-class-example>option').each(($el) => {
          const text =$el.val();
          const text1 =$el.text();
         cy.log('Print all options values', text,text1)
         
         });     
         
    });   
    
    it('Dynamic Dropdowns', () => {

        cy.visit("https://codenboxautomationlab.com/practice/")
        //Dynamic dropdown
         cy.get('input#autocomplete').type('can')
         cy.get('.ui-menu-item div').each(($el) => {
         if ($el.text() === 'Canada'){
            cy.wrap($el).click()            
         }
        });
    });    
       
    



});  
