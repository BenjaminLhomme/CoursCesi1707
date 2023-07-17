const request = require('supertest')

let server 

describe('Router TEST', () => {
    describe('GET ON /', () => { 

        beforeEach('Router TEST', () => { 
            server = require('../server')
        })

        it('Should return 200 status', async () => {
            const response = await request(server).get('/')
            expect(response.status).toBe(200)
        })
        it('Should return 501 status', async () => {
            const response = await request(server).get('/gggggggggg')
            expect(response.status).toBe(501)
        }
    })
})