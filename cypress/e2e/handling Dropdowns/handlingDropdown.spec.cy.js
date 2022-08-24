describe('Handling Dropdowns', () => {

   it.skip('Get the total count of language dropdownlist', () => {
    cy.visit('https://www.wikipedia.org/')
     cy.get("select[name='language']>option").then(($len)=>{
     const count =$len.length
     cy.log('total language list count', count)
     expect (count).to.eq(71);
     expect(count).to.greaterThan(0)

    });

  });

  it('Verify dropdownlist element', () => {

    cy.visit('https://www.wikipedia.org/')
    cy.get("select[name='language']>option").should('have.length','71')
    //cy.log('total language list count', count)
  //  cy.get("select[name='language']").select('Dansk').should('have.value','da')
  //  cy.get("select[name='language']") .select('da').should('have.value','da')
  });

})



describe('Handling Dropdowns', () => {

  it('Count of language names',()=>{
    cy.visit('https://www.wikipedia.org/')
    cy.get("select[name='language']>option").should('have.length','71')
    //cy.log('total language list count', count)
  });
 
  it('print all the language names',()=>{
     cy.visit('https://www.wikipedia.org/') 
     cy.get("select[name='language']>option").each(($el) => {
     const text =$el.text();
     cy.log('All names', text)
     // expect(text).to.match(/[A-Za-z0-9]/)
     });
   });
 })
 //how to select different languages 