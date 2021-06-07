import { setupTestWrapper } from "v2/DevTools/setupTestWrapper"
import { graphql } from "react-relay"
import React from "react"
import { ArtistsRailFragmentContainer } from "../../Overview/ArtistsRail"
import {
  PartnerArtistsCarouselRenderer,
  PartnerArtistsRenderer,
} from "../../PartnerArtists"
import { ViewAllButton } from "../../Overview/ViewAllButton"

jest.mock("v2/Utils/Hooks/useMatchMedia", () => ({
  useMatchMedia: () => ({}),
}))
jest.unmock("react-relay")

const { getWrapper } = setupTestWrapper({
  Component: ({ partner }: any) => {
    return <ArtistsRailFragmentContainer partner={partner} />
  },
  variables: {
    partnerId: "unit-london",
  },
  query: graphql`
    query ArtistsRail_Test_Query($partnerId: String!) {
      partner(id: $partnerId) @principalField {
        ...ArtistsRail_partner
      }
    }
  `,
})

describe("ArtistsRail", () => {
  it("renders artist list if partner not eligible for full profile", () => {
    const wrapper = getWrapper({
      Partner: () => ({
        slug: "unit-london",
        profileArtistsLayout: "Grid",
        fullProfileEligible: false,
        artistsWithPublishedArtworks: {
          totalCount: 10,
        },
        representedArtistsWithoutPublishedArtworks: {
          totalCount: 0,
        },
      }),
    })

    expect(wrapper.find(PartnerArtistsRenderer)).toHaveLength(1)
    expect(wrapper.find(ViewAllButton)).toHaveLength(0)
  })

  describe("renders carousel", () => {
    it("renders container correctly", () => {
      const wrapper = getWrapper({
        Partner: () => ({
          slug: "unit-london",
          profileArtistsLayout: "Grid",
          fullProfileEligible: true,
          artistsWithPublishedArtworks: {
            totalCount: 10,
          },
          representedArtistsWithoutPublishedArtworks: {
            totalCount: 0,
          },
        }),
      })

      expect(wrapper.find(PartnerArtistsCarouselRenderer)).toHaveLength(1)
    })

    it("doesn't render if no artists with published artworks", () => {
      const wrapper = getWrapper({
        Partner: () => ({
          slug: "unit-london",
          profileArtistsLayout: "Grid",
          fullProfileEligible: true,
          artistsWithPublishedArtworks: {
            totalCount: 0,
          },
          representedArtistsWithoutPublishedArtworks: {
            totalCount: 10,
          },
        }),
      })

      expect(wrapper.html()).toBeFalsy()
    })
  })

  describe("renders list", () => {
    it("renders container correctly", () => {
      const wrapper = getWrapper({
        Partner: () => ({
          slug: "unit-london",
          profileArtistsLayout: "List",
          fullProfileEligible: true,
          artistsWithPublishedArtworks: {
            totalCount: 10,
          },
          representedArtistsWithoutPublishedArtworks: {
            totalCount: 10,
          },
        }),
      })

      expect(wrapper.find(PartnerArtistsRenderer)).toHaveLength(1)
    })

    it("doesn't render if no artists", () => {
      const wrapper = getWrapper({
        Partner: () => ({
          slug: "unit-london",
          profileArtistsLayout: "List",
          fullProfileEligible: true,
          artistsWithPublishedArtworks: {
            totalCount: 0,
          },
          representedArtistsWithoutPublishedArtworks: {
            totalCount: 0,
          },
        }),
      })

      expect(wrapper.html()).toBeFalsy()
    })
  })
})