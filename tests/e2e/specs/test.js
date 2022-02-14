// https://docs.cypress.io/api/introduction/api.html

describe('Tests', () => {

   it('Visits the app root url', () => {
      cy.visit('/')
   })

   //delete a post
   it('should delete posts', () => {
      cy.get('.post-list li').should('have.length', 5)
      cy.wait(3000)
      cy.get('.post-list li:first-child .btn').click()
      cy.wait(3000)
      cy.get('.btn-danger').click()
      cy.wait(3000)
   })
   //validate this post has been deleted
   it('verifies that the post is deleted', () => {
      cy.get('.post-list li').should('have.length', 4)
      cy.wait(3000)
      cy.get('.post-list li:first-child .post__title')
         .should('not.have.text','sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
      cy.wait(3000)
   })

   //post editing
   it('should edit posts', () => {
      cy.get('.post-list li').should('have.length', 4)
      cy.wait(3000)
      cy.get('.post-list li:first-child .btn').click()
      cy.wait(3000)
      cy.get('.btn-secondary').click()
      cy.get('.form-edit input[type=text]')
         .should('have.value', 'qui est esse')
         .type('test text 12345', {delay: 200})
      cy.wait(3000)
      cy.get('.form-edit').submit()
   })
   //validate this post has been edited
   it('verifies that the post is edited', () => {
      cy.wait(3000)
      cy.get('.post-list li:first-child .post__title')
         .should('have.text', 'qui est essetest text 12345')
      cy.wait(3000)
   })

   //post creating
   it('should create post', () => {
      cy.get('.nav-item:nth-child(2) a').click()
      cy.get('#postTitleInput')
         .should('have.value', '')
         .type('post title', {delay: 200})
      cy.get('#postTextInput')
         .should('have.value', '')
         .type('post body', {delay: 200})
      cy.wait(1000)
      cy.get('.form-create').submit()
   })
   //validate this post has been created
   it('verifies that the post is created', () => {
      cy.wait(3000)
      cy.get('.post-list li:first-child .post__title')
         .should('have.text', 'post title')
      cy.wait(3000)
      cy.get('.post-list li:first-child .post__body')
         .should('have.text', 'post body')
      cy.wait(3000)
      cy.get('.post-list li').should('have.length', 5)
   })

   //routing to post inner page and back home
   it('routing to post and back', () => {
      cy.wait(3000)
      cy.get('.post-list li:first-child .btn').click()
      cy.wait(3000)
      cy.get('.btn-primary').click()
      cy.wait(3000)
   })

   //routing to create page and back home by nav
   it('routing to create page and back', () => {
      cy.wait(3000)
      cy.get('.nav-item:nth-child(2) a').click()
      cy.wait(3000)
      cy.get('.nav-item:nth-child(1) a').click()
      cy.wait(3000)
   })

})
