import {
  Clickable,
  Flex,
  InfoCircleIcon,
  Spacer,
  Text,
  Tooltip,
} from "@artsy/palette"
import { createFragmentContainer, graphql } from "react-relay"
import { Media } from "Utils/Responsive"
import { MyCollectionArtworkDemandIndex_marketPriceInsights } from "__generated__/MyCollectionArtworkDemandIndex_marketPriceInsights.graphql"
import { DemandIndexBar } from "./DemandIndexBar"
import { HighDemandIcon } from "./HighDemandIcon"

interface MyCollectionArtworkDemandIndexProps {
  marketPriceInsights: MyCollectionArtworkDemandIndex_marketPriceInsights
}

const DemandIndexExplanation =
  "Overall strength of demand for this artist and medium combination. Based on the last 36 months of auction sale data from top commercial auction houses."

const MyCollectionArtworkDemandIndex: React.FC<MyCollectionArtworkDemandIndexProps> = ({
  marketPriceInsights,
}) => {
  if (!marketPriceInsights?.demandRank) {
    return null
  }

  const demandRank = Number((marketPriceInsights.demandRank * 10).toFixed(2))

  const adjustedDemandRank =
    demandRank.toFixed(1) === "10.0" ? "9.9" : demandRank

  const isHighDemand = Number(demandRank) >= 9
  const demandRankColor = demandRank >= 7 ? "blue100" : "black60"

  const barWidth = Math.min(demandRank * 10, 100)

  return (
    <>
      <Media greaterThanOrEqual="sm">
        <Text variant="lg">Demand Index</Text>

        <Text variant="md" color="black60">
          {DemandIndexExplanation}
        </Text>
      </Media>

      <Media lessThan="sm">
        <Flex>
          <Text variant={"sm-display"}>Demand Index</Text>

          <Tooltip
            placement="top-start"
            size="lg"
            content={<Text variant="xs">{DemandIndexExplanation}</Text>}
          >
            <Clickable ml={0.5} style={{ lineHeight: 0 }}>
              <InfoCircleIcon />
            </Clickable>
          </Tooltip>
        </Flex>
      </Media>

      <Spacer m={2} />

      <Text variant={["xl", "xxl"]} color={demandRankColor}>
        {adjustedDemandRank}
      </Text>
      <Flex flexDirection="row" alignItems="center">
        {!!isHighDemand && (
          <Flex data-testid="highDemandIcon" alignItems="center" mr={0.5}>
            <HighDemandIcon />
          </Flex>
        )}

        <Text variant={["md", "lg"]} color={demandRankColor}>
          {marketPriceInsights.demandRankDisplayText}
        </Text>
      </Flex>

      <DemandIndexBar progress={barWidth} />

      <Flex justifyContent="space-between">
        <Text variant="xs" color="black60">
          0.0
        </Text>
        <Text variant="xs" color="black60">
          10.0
        </Text>
      </Flex>
    </>
  )
}

export const MyCollectionArtworkDemandIndexFragmentContainer = createFragmentContainer(
  MyCollectionArtworkDemandIndex,
  {
    marketPriceInsights: graphql`
      fragment MyCollectionArtworkDemandIndex_marketPriceInsights on ArtworkPriceInsights {
        demandRank
        demandRankDisplayText
      }
    `,
  }
)