describe("New User App", ()=>{
    beforeEach(function (){
        cy.visit('http://localhost:3000/');
    })

    const lastName = () => cy.get('input[name=lastName]');
    const firstName = () => cy.get('input[name=firstName]');
    const email = () => cy.get('input[name=email]');
    const password = () => cy.get('input[name=password]');
    const submitBtn = () => cy.get('button');
    const terms = () => cy.get('input[name = terms]');


    describe("filling out inputs and button", ()=>{

        it('checking for non-check checkbox at start', () => {
            terms()
                .should('not.be.checked')
        })
        
        it('Checking For Inputs', ()=>{
            password()
                .should('have.value', '')
                .type('Password input')
                .should('have.value', 'Password input')
            
            email()
                .should('have.value', '')
                .type('Email Input')
                .should('have.value', 'Email Input')

            firstName()
                .should('have.value', '')
                .type('First Name Input')
                .should('have.value', 'First Name Input')

            lastName()
                .should('have.value', '')
                .type('Last Name Input')
                .should('have.value', 'Last Name Input')
        })

        it('submit button starts out disabled', ()=>{
            submitBtn().should('be.disabled');
        })
        it('the submit button enables and can be clicked when both inputs are filled out', ()=>{
            firstName().type('Nathan');
            lastName().type('Cheney');
            email().type('abc123@email.com');
            password().type('password');
            terms().check();
            submitBtn().should('not.be.disabled');
            submitBtn().click();
            cy.contains('Nathan');
        })
        
        

    })
})

