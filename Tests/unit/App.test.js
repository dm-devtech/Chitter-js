// const request = require('supertest')
// import 'expect-puppeteer'
//
// describe("gets page output", () => {
//
//   beforeAll(async () => {
//     await page.goto('http://localhost:3001')
//   });
//
//   it("test homepage", async () => {
//     console.log(page)
//     await expect(page).toMatch('this is the main page')
//   })
// })

describe('Google', () => {
  beforeAll(async () => {
    await page.goto('https://www.google.com')
  })

  it('should display "google" text on page', async () => {
    await expect(page).toMatch('google')
  })
})
