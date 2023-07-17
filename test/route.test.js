const request = require('supertest')

let server 

describe('Router TEST', () => {
    describe('GET ON /', () => { 

        beforeEach( () => { 
            server = require('../server')
        })
        afterEach( () => {
            server.close()
        })

        it('Should return 200 status', async () => {
            const response = await request(server).get('/')
            expect(response.status).toBe(200)
        })
        it('Should return 501 status', async () => {
            const response = await request(server).get('/gggggggggg')
            expect(response.status).toBe(501)
        })
    })
    describe('GET ON /marcel', () => {
        it('Should return 200 status', async () => {
            const response = await request(server).get('/marcel/12')
            expect(response.status).toBe(200)
        })
        it('Should return 204 status', async () => {
            const response = await request(server).delete('/marcel/1')
            expect(response.status).toBe(204)
        })

    })
})