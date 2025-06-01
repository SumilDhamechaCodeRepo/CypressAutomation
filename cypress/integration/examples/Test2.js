/// <reference types="cypress" />

describe('Test2', () => {
  it('URl Check', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('input.search-keyword').type('ca')
    cy.wait(2000)
    cy.get('.product h4').should('have.length', 4)
    //using alisaing
    cy.get('.product').as('productlocator')
    //below is one of the way to click on Add to Cart button based on index
    cy.get('@productlocator').eq(2).contains('ADD TO CART').click()
    //we can also use the contains method to find the button
    cy.get('@productlocator').each(($el, index, $list) => {
      var value = $el.find('h4.product-name').text()
      if(value.includes('Cashews')) {
        cy.wrap($el).find('button').click()
      }
    })
    var value = cy.get('.brand.greenLogo');
    value.contains('GREENKART').should('be.visible')
    value.then(($el) => {
      cy.log($el.text())
      expect($el.text()).to.equal('GREENKART')
    })
    cy.get('a.cart-icon').click()
    cy.wait(2000)
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.wait(2000)
    cy.contains('Place Order').click()
    cy.wait(2000)

  })
})