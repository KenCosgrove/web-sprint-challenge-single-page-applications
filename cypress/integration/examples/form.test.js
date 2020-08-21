
describe('name input', ()=> {
    it('can type a name', ()=>{
        cy.visit("http://localhost:3000/pizza")
        cy.get('input[name="name"]')
        .type('alexander')
        .should('have.value', 'alexander')
    })
})

describe('toppings input', ()=>{
    it('can select multiple toppings', ()=>{
        cy.visit("http://localhost:3000/pizza")
        cy.get('input[type="checkbox"]').click({ multiple: true })
    })
})

describe('button submit', ()=>{
    it('button can be clicked', ()=>{
        cy.visit("http://localhost:3000/pizza")
        cy.get('button').click()
    })
})