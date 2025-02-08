import { render, screen } from "@testing-library/react"
import { beforeEach, describe, expect, it, vi } from "vitest"
import Page from "../page"

import "@testing-library/jest-dom"

// Mock auth0 functions
vi.mock("@auth0/nextjs-auth0", () => ({
  withPageAuthRequired: (component: JSX.Element) => component,
  getSession: vi.fn(),
}))

describe("RootPage", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("should render the heading", async () => {
    render(await Page({}))
    const heading = screen.getByRole("heading", { level: 1 })
    expect(heading).toBeInTheDocument()
  })
})
