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

  it('Tests form on login page and link to register apge', async done => {
    const loginResponse = await request.get('/login')
    expect(loginResponse.text).toContain('<form action="" method="post"><input type="text" name="logUsername" placeholder="Username or email" required=""/><input type="password" name="logPassword" placeholder="Password" required=""/><input type="submit" value="Login"/></form>')
    expect(loginResponse.text).toContain('<a href="/register">Need an account? Register here</a>')
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
