///<reference types = "cypress" />

describe('Handling dynamic dropdown in demo automationtesting', () => {

    it('Find the lenth of Dropdown list', () => {

        cy.visit("https://demo.automationtesting.in/Register.html")
        cy.get('#msdd').click()
                
        cy.get(".ui-corner-all li").then(($len)=>{
            const count =$len.length
            cy.log('total language list count', count)
        })
       
        cy.get('.ui-corner-all li').should('have.length',41)
        cy.get('.ui-corner-all li').contains('English').click()        
        cy.get('.ui-corner-all li:last-of-type a').should('have.text','Vietnamese').click()
        cy.get('.ui-corner-all li:first-of-type').click()
        cy.get('.ui-corner-all li:nth-of-type(3)').click()           
        cy.get('span[role="combobox"]').click({force:true});
        cy.get('li[role="treeitem"]').then(($len)=>{
            const count =$len.length
            cy.log('total language list count', count)
        })
        cy.get('input[type="search"]').type('Denmark{enter}')

      //need guidence on Multi select Language list  custom command
    });      
});  
