// describe('Google', () => {
//   beforeAll(async () => {
//     await page.goto('https://www.google.com')
//   })
//
//   it('should display "google" text on page', async () => {
//     await expect(page).toMatch('google')
//   })
// })

const app = require('../../server') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)

describe('Gets the test endpoint', () => {
  it('Test main page text and status and redirects to login page', async done => {
    // Sends GET Request to / endpoint
    const homeResponse = await request.get('/')
    const loginResponse = await request.get('/login')
    expect(homeResponse.status).toBe(302)
    expect(loginResponse.status).toBe(200)
    expect(loginResponse.text).toContain('Login')
    done()
  })


  // it('Test settings page', async done => {
  //   // Sends GET Request to / endpoint
  //   supertest(app)
  //   .post("/settings")
  //   .type("text")
  //   .send("hey")
  //   .then(() => {
  //     supertest(app)
  //       .get("/settings")
  //       console.log(supertest(app).get("/settings"))
  //       .expect({ array: ["hey"] }, done);
  // })
})
