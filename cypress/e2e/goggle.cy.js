import jobtittle from"../../pages/jobtittlepages"
describe('verify add job functionality', () => {
    before(function(){
        cy.fixture('jobtittle').then(function (data){
            this.data=data;   
        })
    
it('verify add job tittle with valid input details', () => {
    cy.login("Admin","admin123")
     cy.contains('Admin').click()
     cy.contains(jobtittle.jobSubMenu()).click()
    cy.contains(jobtittle.jobtittleoption()).click()
     cy.get("oxd-button oxd-button--medium oxd-button--secondary" ).click()
     cy.get('input[class="oxd-input oxd-input--active"]').type(this.data.jobtittle)
      cy.get('textarea[placeholder="Type description here"]').type(this.data.jobdescription)
     cy.get('button[type="submit"]').click()
    // cy.contains('Successfully Saved').should(be.visible)
 })
})
})