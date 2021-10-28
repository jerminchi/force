import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
  Button,
  Column,
  Image,
  Flex,
  GridColumns,
  Spacer,
  Text,
} from "@artsy/palette"
import React from "react"
import { RouterLink } from "v2/System/Router/RouterLink"
import { UserActiveBids_me } from "v2/__generated__/UserActiveBids_me.graphql"

import { createFragmentContainer, graphql } from "react-relay"

interface UserActiveBidsProps {
  me: UserActiveBids_me
}

export const UserActiveBids: React.FC<UserActiveBidsProps> = ({ me }) => {
  const lotStandings = me.lotStandings

  return (
    <>
      <Text variant={["sm", "lg"]} mt={4} mb={[2, 4]}>
        Active Bids
      </Text>

      {lotStandings?.length ? (
        <GridColumns mb={6}>
          {lotStandings.map((lot, i) => (
            <Column
              key={i}
              span={8}
              pb={2}
              display="flex"
              justifyContent="space-between"
              borderBottom={i + 1 < lotStandings.length ? "1px solid" : ""}
              borderColor="black10"
            >
              <Flex>
                <RouterLink
                  to={lot?.saleArtwork?.artwork?.href ?? ""}
                  noUnderline
                >
                  <Image
                    width={100}
                    height={100}
                    src={lot?.saleArtwork?.artwork?.image?.cropped?.src ?? ""}
                    srcSet={
                      lot?.saleArtwork?.artwork?.image?.cropped?.srcSet ?? ""
                    }
                    lazyLoad
                  />
                </RouterLink>

                <Flex ml={1} mr={1} flexDirection="column">
                  <Text color="black60" variant="xs">
                    Lot {lot?.saleArtwork?.lotLabel}
                  </Text>

                  <Spacer mb={0.5} />

                  <Text color="black80" variant="sm">
                    {lot?.saleArtwork?.artwork?.artist?.name}
                  </Text>

                  <Text color="black60" variant="sm" fontStyle="italic">
                    {lot?.saleArtwork?.artwork?.title}
                  </Text>

                  <Spacer mb={0.5} />

                  <Text color="black60" variant="xs">
                    {lot?.saleArtwork?.highestBid?.display} (
                    {lot?.saleArtwork?.counts?.bidderPositions} Bid)
                  </Text>
                </Flex>
              </Flex>

              <Flex flexDirection="column" alignItems="center">
                {lot?.isLeadingBidder ? (
                  <Text
                    variant="xs"
                    color="green100"
                    overflowEllipsis
                    display="flex"
                    alignItems="center"
                  >
                    <ArrowUpCircleIcon height={15} width={15} fill="green100" />
                    &nbsp; Highest bid
                  </Text>
                ) : (
                  <Text
                    variant="xs"
                    color="red100"
                    overflowEllipsis
                    display="flex"
                    alignItems="center"
                  >
                    <ArrowDownCircleIcon height={15} width={15} fill="red100" />
                    &nbsp; Outbid
                  </Text>
                )}

                <RouterLink
                  to={lot?.saleArtwork?.artwork?.href ?? ""}
                  noUnderline
                >
                  <Button mt={1} size="medium">
                    Bid
                  </Button>
                </RouterLink>
              </Flex>
            </Column>
          ))}
        </GridColumns>
      ) : (
        <Text mb={4} color="black60" variant="sm">
          Nothing to Show
        </Text>
      )}
    </>
  )
}

export const UserActiveBidsFragmentContainer = createFragmentContainer(
  UserActiveBids,
  {
    me: graphql`
      fragment UserActiveBids_me on Me {
        lotStandings {
          isLeadingBidder
          activeBid {
            id
          }
          saleArtwork {
            lotLabel
            highestBid {
              display
            }
            counts {
              bidderPositions
            }
            artwork {
              title
              href
              image {
                cropped(height: 100, width: 100) {
                  src
                  srcSet
                }
              }
              artist {
                name
              }
            }
          }
        }
      }
    `,
  }
)
