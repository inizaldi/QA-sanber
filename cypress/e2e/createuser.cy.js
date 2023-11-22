describe('Reqres API Testing - Create User', () => {
    it('create user',() => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body:{
            "name":"Rizaldi",
            "job":"QA Enginerr"
        }
        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body).has.property("name","Rizaldi")
        })
    })
})