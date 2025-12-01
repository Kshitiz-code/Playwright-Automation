const { test, expect } = require('@playwright/test')

// ✅ Passing tests
test("My First Test", async function({ page }) {
    expect(12).toBe(12)
})

test("My Second Test", async function({ page }) {
    expect(100).toBe(100)
})

test("My Fifth Test", async function({ page }) {
    expect(true).toBe(true)
})

test("My Sixth Test", async function({ page }) {
    expect("Playwright").toContain("Play")
})

test("My Seventh Test", async function({ page }) {
    expect([1, 2, 3]).toHaveLength(3)
})

// ❌ Failing tests
test("My Third Test (Intentional Failure)", async function({ page }) {
    expect(5).toBe(10)
})

test("My Fourth Test (Intentional Failure)", async function({ page }) {
    expect("hello").toBe("world")
})

test("My Eighth Test (Intentional Failure)", async function({ page }) {
    expect(false).toBe(true)
})

test("My Ninth Test (Intentional Failure)", async function({ page }) {
    expect([1, 2]).toContain(3)
})

test("My Tenth Test (Intentional Failure)", async function({ page }) {
    expect("abc").toBe("def")
})
