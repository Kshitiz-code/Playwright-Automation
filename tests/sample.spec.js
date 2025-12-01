const { test, expect } = require('@playwright/test')

test("My First Test", async function({ page }) {
    expect(12).toBe(12)
})

test("My Second Test", async function({ page }) {
    expect(100).toBe(100)
})

// Failing test 1
test("My Third Test (Intentional Failure)", async function({ page }) {
    expect(5).toBe(10)  // This will fail
})

// Failing test 2
test("My Fourth Test (Intentional Failure)", async function({ page }) {
    expect("hello").toBe("world")  // This will fail
})
