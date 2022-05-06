///<reference types="cypress"/>

describe('API test automation', () => {
    
    // before(() => {
    //     cy.visit("https://reqres.in/")
    // })

    it('GET - TEST', () => {

        cy.request('GET', 'https://reqres.in/api/users?page=2').then((response) => {

            expect(response.status).equal(200)
            expect(response.body.data[1].id).equal(8)
            expect(response.body).to.have.property("total_pages")
        })

    })

    it('POST TEST', () => {


        const payload = {
            "name": "Raju",
            "job": "consultant"
        }
        cy.request('POST', 'https://reqres.in/api/users', payload).then((response) => {

            expect(response.status).equal(201)
            expect(response.body).to.have.property('name', 'Raju')
        })

    })

    it('PUT TEST', () => {

        cy.request('PUT', 'https://reqres.in/api/users/2', {
            "name": "Priyal",
            "job": "Doctor"
        }).then((response) => {

            expect(response.status).equal(200)
        })

    })

    it('DELETE TEST', () => {

        cy.request('DELETE', 'https://reqres.in/api/users/2').then((response) => {
            expect(response.status).equal(201)
        })

    })

})


//product detials 
//add cart
// check out
//payment
//UI 
//API
//runner 