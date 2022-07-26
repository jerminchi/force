import * as React from "react"
import { createRefetchContainer, RelayRefetchProp, graphql } from "react-relay"
import { useRouter } from "System/Router/useRouter"
import { BaseArtworkFilter } from "Components/ArtworkFilter"
import {
  ArtworkFilterContextProvider,
  Counts,
  SharedArtworkFilterContextProps,
} from "Components/ArtworkFilter/ArtworkFilterContext"
import { updateUrl } from "Components/ArtworkFilter/Utils/urlBuilder"
import { TagArtworkFilter_tag } from "__generated__/TagArtworkFilter_tag.graphql"
import { ActiveFilterPills } from "Components/SavedSearchAlert/Components/ActiveFilterPills"
import { useSystemContext } from "System"

interface TagArtworkFilterProps {
  tag: TagArtworkFilter_tag
  relay: RelayRefetchProp
}

const TagArtworkFilter: React.FC<TagArtworkFilterProps> = ({ tag, relay }) => {
  const { match } = useRouter()
  const { userPreferences } = useSystemContext()
  const { sidebar } = tag

  return (
    <ArtworkFilterContextProvider
      filters={match && match.location.query}
      onChange={updateUrl}
      sortOptions={[
        { text: "Default", value: "-decayed_merch" },
        { text: "Price (desc.)", value: "-has_price,-prices" },
        { text: "Price (asc.)", value: "-has_price,prices" },
        { text: "Recently updated", value: "-partner_updated_at" },
        { text: "Recently added", value: "-published_at" },
        { text: "Artwork year (desc.)", value: "-year" },
        { text: "Artwork year (asc.)", value: "year" },
      ]}
      counts={sidebar?.counts as Counts}
      aggregations={
        sidebar?.aggregations as SharedArtworkFilterContextProps["aggregations"]
      }
      userPreferredMetric={userPreferences?.metric}
    >
      <BaseArtworkFilter
        relay={relay}
        viewer={tag}
        FilterPillsSection={<ActiveFilterPills />}
      />
    </ArtworkFilterContextProvider>
  )
}

export const TagArtworkFilterRefetchContainer = createRefetchContainer(
  TagArtworkFilter,
  {
    tag: graphql`
      fragment TagArtworkFilter_tag on Tag
        @argumentDefinitions(
          input: { type: "FilterArtworksInput" }
          aggregations: { type: "[ArtworkAggregation]" }
          shouldFetchCounts: { type: "Boolean!", defaultValue: false }
        ) {
        slug
        internalID
        sidebar: filterArtworksConnection(
          aggregations: $aggregations
          first: 1
        ) {
          counts @include(if: $shouldFetchCounts) {
            followedArtists
          }
          aggregations {
            slice
            counts {
              name
              value
              count
            }
          }
        }
        filtered_artworks: filterArtworksConnection(first: 30, input: $input) {
          id
          counts {
            total(format: "0,0")
          }
          ...ArtworkFilterArtworkGrid_filtered_artworks
        }
      }
    `,
  },
  graphql`
    query TagArtworkFilterQuery($slug: String!, $input: FilterArtworksInput) {
      tag(id: $slug) {
        ...TagArtworkFilter_tag @arguments(input: $input)
      }
    }
  `
)