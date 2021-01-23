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
  it('Test main page text and status', async done => {
    // Sends GET Request to / endpoint
    const response = await request.get('/')
    expect(response.status).toBe(200)
    expect(response.text).toContain('<h1>This is awesome</h1>')
    expect(response.text).toContain('<title>Home</title>')
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
