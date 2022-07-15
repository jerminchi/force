import { OnboardingSearchResultsFragmentContainer } from "../OnboardingSearchResults"
import { graphql } from "react-relay"
import { screen } from "@testing-library/react"
import { setupTestWrapperTL } from "v2/DevTools/setupTestWrapper"

jest.unmock("react-relay")
jest.mock("v2/Components/EntityHeaders/EntityHeaderArtist", () => {
  return {
    EntityHeaderArtistFragmentContainer: () => <div>Test Artist</div>,
  }
})
jest.mock("v2/Components/EntityHeaders/EntityHeaderPartner", () => {
  return {
    EntityHeaderPartnerFragmentContainer: () => <div>Test Gallery</div>,
  }
})

const { renderWithRelay } = setupTestWrapperTL({
  Component: OnboardingSearchResultsFragmentContainer,
  query: graphql`
    query OnboardingSearchResults_Test_Query @relay_test_operation {
      viewer {
        ...OnboardingSearchResults_viewer
      }
    }
  `,
})

describe("OnboardingSearchResults", () => {
  it("shows no results if none found", () => {
    renderWithRelay({
      Viewer: () => ({
        matchConnection: {
          edges: [],
        },
      }),
    })

    expect(screen.getByText("No results found")).toBeInTheDocument()
  })

  it("renders search results for artists correctly", () => {
    renderWithRelay({
      Viewer: () => ({
        matchConnection: {
          edges: [{ node: { __typename: "Artist" } }],
        },
      }),
    })

    expect(screen.getByText("Test Artist")).toBeInTheDocument()
  })

  it("renders search results for galleries correctly", () => {
    renderWithRelay({
      Viewer: () => ({
        matchConnection: {
          edges: [{ node: { __typename: "Profile" } }],
        },
      }),
    })

    expect(screen.getByText("Test Gallery")).toBeInTheDocument()
  })
})