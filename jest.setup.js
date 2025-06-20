import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect';
import { server } from './src/mocks/server'
import { afterAll, afterEach, beforeAll } from 'vitest'
// Start the mock server before all tests
beforeAll(() => {
  server.listen({
    onUnhandledRequest: 'error',
  })
})
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => {
  server.resetHandlers()
})
// Clean up after the tests are finished.
afterAll(() => {
  server.close()
})

export { MonType }
