/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Auction2BidRouteQueryVariables = {
    artworkID: string;
    saleID: string;
};
export type Auction2BidRouteQueryResponse = {
    readonly artwork: {
        readonly " $fragmentRefs": FragmentRefs<"Auction2BidRoute_artwork">;
    } | null;
    readonly me: {
        readonly " $fragmentRefs": FragmentRefs<"Auction2BidRoute_me">;
    } | null;
    readonly sale: {
        readonly " $fragmentRefs": FragmentRefs<"Auction2BidRoute_sale">;
    } | null;
};
export type Auction2BidRouteQuery = {
    readonly response: Auction2BidRouteQueryResponse;
    readonly variables: Auction2BidRouteQueryVariables;
};



/*
query Auction2BidRouteQuery(
  $artworkID: String!
  $saleID: String!
) {
  artwork(id: $artworkID) {
    ...Auction2BidRoute_artwork
    id
  }
  me {
    ...Auction2BidRoute_me
    id
  }
  sale(id: $saleID) {
    ...Auction2BidRoute_sale
    id
  }
}

fragment Auction2BidRoute_artwork on Artwork {
  slug
  internalID
  saleArtwork {
    ...AuctionLotInfo_saleArtwork
    minimumNextBid {
      cents
    }
    increments(useMyMaxBid: true) {
      cents
      display
    }
    sale {
      internalID
      bidder {
        id
      }
      slug
      registrationStatus {
        qualifiedForBidding
        id
      }
      id
    }
    id
  }
}

fragment Auction2BidRoute_me on Me {
  internalID
  hasQualifiedCreditCards
}

fragment Auction2BidRoute_sale on Sale {
  internalID
  slug
}

fragment AuctionLotInfo_saleArtwork on SaleArtwork {
  counts {
    bidderPositions
  }
  lotLabel
  currentBid {
    display
  }
  artwork {
    internalID
    date
    title
    image {
      resized(width: 150, height: 150, version: "square") {
        src
        srcSet
        width
        height
      }
    }
    imageUrl
    artistNames
    slug
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "artworkID"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "saleID"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "artworkID"
  }
],
v2 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "saleID"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "display",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cents",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "Auction2BidRouteQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Auction2BidRoute_artwork"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Auction2BidRoute_me"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Sale",
        "kind": "LinkedField",
        "name": "sale",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Auction2BidRoute_sale"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "Auction2BidRouteQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "SaleArtwork",
            "kind": "LinkedField",
            "name": "saleArtwork",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "SaleArtworkCounts",
                "kind": "LinkedField",
                "name": "counts",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "bidderPositions",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "lotLabel",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "SaleArtworkCurrentBid",
                "kind": "LinkedField",
                "name": "currentBid",
                "plural": false,
                "selections": [
                  (v5/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Artwork",
                "kind": "LinkedField",
                "name": "artwork",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "date",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "title",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Image",
                    "kind": "LinkedField",
                    "name": "image",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "height",
                            "value": 150
                          },
                          {
                            "kind": "Literal",
                            "name": "version",
                            "value": "square"
                          },
                          {
                            "kind": "Literal",
                            "name": "width",
                            "value": 150
                          }
                        ],
                        "concreteType": "ResizedImageUrl",
                        "kind": "LinkedField",
                        "name": "resized",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "src",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "srcSet",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "width",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "height",
                            "storageKey": null
                          }
                        ],
                        "storageKey": "resized(height:150,version:\"square\",width:150)"
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "imageUrl",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "artistNames",
                    "storageKey": null
                  },
                  (v3/*: any*/),
                  (v6/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "SaleArtworkMinimumNextBid",
                "kind": "LinkedField",
                "name": "minimumNextBid",
                "plural": false,
                "selections": [
                  (v7/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "useMyMaxBid",
                    "value": true
                  }
                ],
                "concreteType": "BidIncrementsFormatted",
                "kind": "LinkedField",
                "name": "increments",
                "plural": true,
                "selections": [
                  (v7/*: any*/),
                  (v5/*: any*/)
                ],
                "storageKey": "increments(useMyMaxBid:true)"
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Sale",
                "kind": "LinkedField",
                "name": "sale",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Bidder",
                    "kind": "LinkedField",
                    "name": "bidder",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Bidder",
                    "kind": "LinkedField",
                    "name": "registrationStatus",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "qualifiedForBidding",
                        "storageKey": null
                      },
                      (v6/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v6/*: any*/)
                ],
                "storageKey": null
              },
              (v6/*: any*/)
            ],
            "storageKey": null
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "hasQualifiedCreditCards",
            "storageKey": null
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Sale",
        "kind": "LinkedField",
        "name": "sale",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          (v3/*: any*/),
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5877ec19748c39d7ffde2afa883c5dde",
    "id": null,
    "metadata": {},
    "name": "Auction2BidRouteQuery",
    "operationKind": "query",
    "text": "query Auction2BidRouteQuery(\n  $artworkID: String!\n  $saleID: String!\n) {\n  artwork(id: $artworkID) {\n    ...Auction2BidRoute_artwork\n    id\n  }\n  me {\n    ...Auction2BidRoute_me\n    id\n  }\n  sale(id: $saleID) {\n    ...Auction2BidRoute_sale\n    id\n  }\n}\n\nfragment Auction2BidRoute_artwork on Artwork {\n  slug\n  internalID\n  saleArtwork {\n    ...AuctionLotInfo_saleArtwork\n    minimumNextBid {\n      cents\n    }\n    increments(useMyMaxBid: true) {\n      cents\n      display\n    }\n    sale {\n      internalID\n      bidder {\n        id\n      }\n      slug\n      registrationStatus {\n        qualifiedForBidding\n        id\n      }\n      id\n    }\n    id\n  }\n}\n\nfragment Auction2BidRoute_me on Me {\n  internalID\n  hasQualifiedCreditCards\n}\n\nfragment Auction2BidRoute_sale on Sale {\n  internalID\n  slug\n}\n\nfragment AuctionLotInfo_saleArtwork on SaleArtwork {\n  counts {\n    bidderPositions\n  }\n  lotLabel\n  currentBid {\n    display\n  }\n  artwork {\n    internalID\n    date\n    title\n    image {\n      resized(width: 150, height: 150, version: \"square\") {\n        src\n        srcSet\n        width\n        height\n      }\n    }\n    imageUrl\n    artistNames\n    slug\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e4ac7b308b2606e1dd32e313ecc49b2d';
export default node;
