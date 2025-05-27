describe('Test1', () => {
  it('URl Check', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.url().should('include', 'rahulshettyacademy')
  })
})