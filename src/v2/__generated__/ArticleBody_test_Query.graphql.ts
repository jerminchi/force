/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ArticleBody_test_QueryVariables = {};
export type ArticleBody_test_QueryResponse = {
    readonly article: {
        readonly " $fragmentRefs": FragmentRefs<"ArticleBody_article">;
    } | null;
};
export type ArticleBody_test_Query = {
    readonly response: ArticleBody_test_QueryResponse;
    readonly variables: ArticleBody_test_QueryVariables;
};



/*
query ArticleBody_test_Query {
  article(id: "example") {
    ...ArticleBody_article
    id
  }
}

fragment ArticleBody_article on Article {
  ...ArticleHeader_article
  ...ArticleByline_article
  layout
  title
  newsSource {
    title
    url
  }
  href
  publishedAt(format: "MMM D, YYYY h:mma")
  sections {
    __typename
    ...ArticleSectionText_section
    ...ArticleSectionImageCollection_section
    ...ArticleSectionImageSet_section
    ...ArticleSectionVideo_section
    ...ArticleSectionSocialEmbed_section
    ...ArticleSectionEmbed_section
  }
  postscript
  relatedArticles {
    internalID
    title
    href
    byline
    thumbnailImage {
      cropped(width: 80, height: 60) {
        src
        srcSet
      }
    }
    id
  }
}

fragment ArticleByline_article on Article {
  byline
  authors {
    name
    initials
    bio
    image {
      cropped(width: 60, height: 60) {
        src
        srcSet
      }
    }
    id
  }
}

fragment ArticleHeader_article on Article {
  title
  vertical
  byline
  hero {
    __typename
    ... on ArticleFeatureSection {
      layout
      image {
        url
        split: resized(width: 900) {
          src
          srcSet
        }
        text: cropped(width: 1600, height: 900) {
          src
          srcSet
        }
      }
    }
  }
}

fragment ArticleSectionEmbed_section on ArticleSectionEmbed {
  url
  height
  mobileHeight
}

fragment ArticleSectionImageCollection_section on ArticleSectionImageCollection {
  layout
  figures {
    __typename
    ... on ArticleImageSection {
      id
      caption
      image {
        resized(width: 1220, version: ["normalized", "larger", "large"]) {
          src
          srcSet
          height
          width
        }
      }
    }
    ... on Artwork {
      ...Metadata_artwork
      id
      image {
        resized(width: 1220, version: ["normalized", "larger", "large"]) {
          src
          srcSet
          height
          width
        }
      }
    }
    ... on Node {
      __isNode: __typename
      id
    }
  }
}

fragment ArticleSectionImageSet_section on ArticleSectionImageSet {
  setLayout: layout
  title
  counts {
    figures
  }
  cover {
    __typename
    ... on ArticleImageSection {
      id
      image {
        small: cropped(width: 80, height: 80, version: ["normalized", "larger", "large"]) {
          src
          srcSet
          height
          width
        }
        large: resized(width: 1220, version: ["normalized", "larger", "large"]) {
          src
          srcSet
          height
          width
        }
      }
    }
    ... on Artwork {
      id
      image {
        small: cropped(width: 80, height: 80, version: ["normalized", "larger", "large"]) {
          src
          srcSet
          height
          width
        }
        large: resized(width: 1220, version: ["normalized", "larger", "large"]) {
          src
          srcSet
          height
          width
        }
      }
    }
    ... on Node {
      __isNode: __typename
      id
    }
  }
}

fragment ArticleSectionSocialEmbed_section on ArticleSectionSocialEmbed {
  url
  embed
}

fragment ArticleSectionText_section on ArticleSectionText {
  body
}

fragment ArticleSectionVideo_section on ArticleSectionVideo {
  embed(autoPlay: true)
  image {
    cropped(width: 910, height: 512) {
      src
      srcSet
    }
  }
}

fragment Contact_artwork on Artwork {
  href
  is_inquireable: isInquireable
  sale {
    is_auction: isAuction
    is_live_open: isLiveOpen
    is_open: isOpen
    is_closed: isClosed
    id
  }
  partner(shallow: true) {
    type
    id
  }
  sale_artwork: saleArtwork {
    highest_bid: highestBid {
      display
    }
    opening_bid: openingBid {
      display
    }
    counts {
      bidder_positions: bidderPositions
    }
    id
  }
}

fragment Details_artwork on Artwork {
  href
  title
  date
  sale_message: saleMessage
  cultural_maker: culturalMaker
  artists(shallow: true) {
    id
    href
    name
  }
  collecting_institution: collectingInstitution
  partner(shallow: true) {
    name
    href
    id
  }
  sale {
    is_auction: isAuction
    is_closed: isClosed
    id
  }
  sale_artwork: saleArtwork {
    counts {
      bidder_positions: bidderPositions
    }
    highest_bid: highestBid {
      display
    }
    opening_bid: openingBid {
      display
    }
    id
  }
}

fragment Metadata_artwork on Artwork {
  ...Details_artwork
  ...Contact_artwork
  href
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "example"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "byline",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "layout",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "src",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "srcSet",
  "storageKey": null
},
v8 = [
  (v6/*: any*/),
  (v7/*: any*/)
],
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v10 = {
  "kind": "Literal",
  "name": "height",
  "value": 60
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "href",
  "storageKey": null
},
v13 = {
  "kind": "Literal",
  "name": "version",
  "value": [
    "normalized",
    "larger",
    "large"
  ]
},
v14 = [
  (v13/*: any*/),
  {
    "kind": "Literal",
    "name": "width",
    "value": 1220
  }
],
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v16 = [
  (v6/*: any*/),
  (v7/*: any*/),
  (v15/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "width",
    "storageKey": null
  }
],
v17 = {
  "alias": null,
  "args": null,
  "concreteType": "Image",
  "kind": "LinkedField",
  "name": "image",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": (v14/*: any*/),
      "concreteType": "ResizedImageUrl",
      "kind": "LinkedField",
      "name": "resized",
      "plural": false,
      "selections": (v16/*: any*/),
      "storageKey": "resized(version:[\"normalized\",\"larger\",\"large\"],width:1220)"
    }
  ],
  "storageKey": null
},
v18 = [
  {
    "kind": "Literal",
    "name": "shallow",
    "value": true
  }
],
v19 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "display",
    "storageKey": null
  }
],
v20 = {
  "kind": "InlineFragment",
  "selections": [
    (v11/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v21 = {
  "kind": "Literal",
  "name": "width",
  "value": 80
},
v22 = [
  (v11/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "Image",
    "kind": "LinkedField",
    "name": "image",
    "plural": false,
    "selections": [
      {
        "alias": "small",
        "args": [
          {
            "kind": "Literal",
            "name": "height",
            "value": 80
          },
          (v13/*: any*/),
          (v21/*: any*/)
        ],
        "concreteType": "CroppedImageUrl",
        "kind": "LinkedField",
        "name": "cropped",
        "plural": false,
        "selections": (v16/*: any*/),
        "storageKey": "cropped(height:80,version:[\"normalized\",\"larger\",\"large\"],width:80)"
      },
      {
        "alias": "large",
        "args": (v14/*: any*/),
        "concreteType": "ResizedImageUrl",
        "kind": "LinkedField",
        "name": "resized",
        "plural": false,
        "selections": (v16/*: any*/),
        "storageKey": "resized(version:[\"normalized\",\"larger\",\"large\"],width:1220)"
      }
    ],
    "storageKey": null
  }
],
v23 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v24 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v25 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Image"
},
v26 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "CroppedImageUrl"
},
v27 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v28 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "ResizedImageUrl"
},
v29 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Int"
},
v30 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Int"
},
v31 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Boolean"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ArticleBody_test_Query",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Article",
        "kind": "LinkedField",
        "name": "article",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ArticleBody_article"
          }
        ],
        "storageKey": "article(id:\"example\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ArticleBody_test_Query",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Article",
        "kind": "LinkedField",
        "name": "article",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "vertical",
            "storageKey": null
          },
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "hero",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Image",
                    "kind": "LinkedField",
                    "name": "image",
                    "plural": false,
                    "selections": [
                      (v5/*: any*/),
                      {
                        "alias": "split",
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "width",
                            "value": 900
                          }
                        ],
                        "concreteType": "ResizedImageUrl",
                        "kind": "LinkedField",
                        "name": "resized",
                        "plural": false,
                        "selections": (v8/*: any*/),
                        "storageKey": "resized(width:900)"
                      },
                      {
                        "alias": "text",
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "height",
                            "value": 900
                          },
                          {
                            "kind": "Literal",
                            "name": "width",
                            "value": 1600
                          }
                        ],
                        "concreteType": "CroppedImageUrl",
                        "kind": "LinkedField",
                        "name": "cropped",
                        "plural": false,
                        "selections": (v8/*: any*/),
                        "storageKey": "cropped(height:900,width:1600)"
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "type": "ArticleFeatureSection",
                "abstractKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Author",
            "kind": "LinkedField",
            "name": "authors",
            "plural": true,
            "selections": [
              (v9/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "initials",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "bio",
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
                      (v10/*: any*/),
                      {
                        "kind": "Literal",
                        "name": "width",
                        "value": 60
                      }
                    ],
                    "concreteType": "CroppedImageUrl",
                    "kind": "LinkedField",
                    "name": "cropped",
                    "plural": false,
                    "selections": (v8/*: any*/),
                    "storageKey": "cropped(height:60,width:60)"
                  }
                ],
                "storageKey": null
              },
              (v11/*: any*/)
            ],
            "storageKey": null
          },
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "ArticleNewsSource",
            "kind": "LinkedField",
            "name": "newsSource",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              (v5/*: any*/)
            ],
            "storageKey": null
          },
          (v12/*: any*/),
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "format",
                "value": "MMM D, YYYY h:mma"
              }
            ],
            "kind": "ScalarField",
            "name": "publishedAt",
            "storageKey": "publishedAt(format:\"MMM D, YYYY h:mma\")"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "sections",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "body",
                    "storageKey": null
                  }
                ],
                "type": "ArticleSectionText",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "figures",
                    "plural": true,
                    "selections": [
                      (v3/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v11/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "caption",
                            "storageKey": null
                          },
                          (v17/*: any*/)
                        ],
                        "type": "ArticleImageSection",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v12/*: any*/),
                          (v1/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "date",
                            "storageKey": null
                          },
                          {
                            "alias": "sale_message",
                            "args": null,
                            "kind": "ScalarField",
                            "name": "saleMessage",
                            "storageKey": null
                          },
                          {
                            "alias": "cultural_maker",
                            "args": null,
                            "kind": "ScalarField",
                            "name": "culturalMaker",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": (v18/*: any*/),
                            "concreteType": "Artist",
                            "kind": "LinkedField",
                            "name": "artists",
                            "plural": true,
                            "selections": [
                              (v11/*: any*/),
                              (v12/*: any*/),
                              (v9/*: any*/)
                            ],
                            "storageKey": "artists(shallow:true)"
                          },
                          {
                            "alias": "collecting_institution",
                            "args": null,
                            "kind": "ScalarField",
                            "name": "collectingInstitution",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": (v18/*: any*/),
                            "concreteType": "Partner",
                            "kind": "LinkedField",
                            "name": "partner",
                            "plural": false,
                            "selections": [
                              (v9/*: any*/),
                              (v12/*: any*/),
                              (v11/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "type",
                                "storageKey": null
                              }
                            ],
                            "storageKey": "partner(shallow:true)"
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Sale",
                            "kind": "LinkedField",
                            "name": "sale",
                            "plural": false,
                            "selections": [
                              {
                                "alias": "is_auction",
                                "args": null,
                                "kind": "ScalarField",
                                "name": "isAuction",
                                "storageKey": null
                              },
                              {
                                "alias": "is_closed",
                                "args": null,
                                "kind": "ScalarField",
                                "name": "isClosed",
                                "storageKey": null
                              },
                              (v11/*: any*/),
                              {
                                "alias": "is_live_open",
                                "args": null,
                                "kind": "ScalarField",
                                "name": "isLiveOpen",
                                "storageKey": null
                              },
                              {
                                "alias": "is_open",
                                "args": null,
                                "kind": "ScalarField",
                                "name": "isOpen",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": "sale_artwork",
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
                                    "alias": "bidder_positions",
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "bidderPositions",
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              },
                              {
                                "alias": "highest_bid",
                                "args": null,
                                "concreteType": "SaleArtworkHighestBid",
                                "kind": "LinkedField",
                                "name": "highestBid",
                                "plural": false,
                                "selections": (v19/*: any*/),
                                "storageKey": null
                              },
                              {
                                "alias": "opening_bid",
                                "args": null,
                                "concreteType": "SaleArtworkOpeningBid",
                                "kind": "LinkedField",
                                "name": "openingBid",
                                "plural": false,
                                "selections": (v19/*: any*/),
                                "storageKey": null
                              },
                              (v11/*: any*/)
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": "is_inquireable",
                            "args": null,
                            "kind": "ScalarField",
                            "name": "isInquireable",
                            "storageKey": null
                          },
                          (v11/*: any*/),
                          (v17/*: any*/)
                        ],
                        "type": "Artwork",
                        "abstractKey": null
                      },
                      (v20/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "type": "ArticleSectionImageCollection",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": "setLayout",
                    "args": null,
                    "kind": "ScalarField",
                    "name": "layout",
                    "storageKey": null
                  },
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ArticleSectionImageSetCounts",
                    "kind": "LinkedField",
                    "name": "counts",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "figures",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "cover",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": (v22/*: any*/),
                        "type": "ArticleImageSection",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": (v22/*: any*/),
                        "type": "Artwork",
                        "abstractKey": null
                      },
                      (v20/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "type": "ArticleSectionImageSet",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": null,
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "autoPlay",
                        "value": true
                      }
                    ],
                    "kind": "ScalarField",
                    "name": "embed",
                    "storageKey": "embed(autoPlay:true)"
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
                            "value": 512
                          },
                          {
                            "kind": "Literal",
                            "name": "width",
                            "value": 910
                          }
                        ],
                        "concreteType": "CroppedImageUrl",
                        "kind": "LinkedField",
                        "name": "cropped",
                        "plural": false,
                        "selections": (v8/*: any*/),
                        "storageKey": "cropped(height:512,width:910)"
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "type": "ArticleSectionVideo",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "embed",
                    "storageKey": null
                  }
                ],
                "type": "ArticleSectionSocialEmbed",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v5/*: any*/),
                  (v15/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "mobileHeight",
                    "storageKey": null
                  }
                ],
                "type": "ArticleSectionEmbed",
                "abstractKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "postscript",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Article",
            "kind": "LinkedField",
            "name": "relatedArticles",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "internalID",
                "storageKey": null
              },
              (v1/*: any*/),
              (v12/*: any*/),
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Image",
                "kind": "LinkedField",
                "name": "thumbnailImage",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": [
                      (v10/*: any*/),
                      (v21/*: any*/)
                    ],
                    "concreteType": "CroppedImageUrl",
                    "kind": "LinkedField",
                    "name": "cropped",
                    "plural": false,
                    "selections": (v8/*: any*/),
                    "storageKey": "cropped(height:60,width:80)"
                  }
                ],
                "storageKey": null
              },
              (v11/*: any*/)
            ],
            "storageKey": null
          },
          (v11/*: any*/)
        ],
        "storageKey": "article(id:\"example\")"
      }
    ]
  },
  "params": {
    "cacheID": "64e1ccaf3529f5af7b683b5a31e83efc",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "article": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Article"
        },
        "article.authors": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "Author"
        },
        "article.authors.bio": (v23/*: any*/),
        "article.authors.id": (v24/*: any*/),
        "article.authors.image": (v25/*: any*/),
        "article.authors.image.cropped": (v26/*: any*/),
        "article.authors.image.cropped.src": (v27/*: any*/),
        "article.authors.image.cropped.srcSet": (v27/*: any*/),
        "article.authors.initials": (v23/*: any*/),
        "article.authors.name": (v23/*: any*/),
        "article.byline": (v23/*: any*/),
        "article.hero": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArticleHero"
        },
        "article.hero.__typename": (v27/*: any*/),
        "article.hero.image": (v25/*: any*/),
        "article.hero.image.split": (v28/*: any*/),
        "article.hero.image.split.src": (v27/*: any*/),
        "article.hero.image.split.srcSet": (v27/*: any*/),
        "article.hero.image.text": (v26/*: any*/),
        "article.hero.image.text.src": (v27/*: any*/),
        "article.hero.image.text.srcSet": (v27/*: any*/),
        "article.hero.image.url": (v23/*: any*/),
        "article.hero.layout": {
          "enumValues": [
            "BASIC",
            "FULLSCREEN",
            "SPLIT",
            "TEXT"
          ],
          "nullable": false,
          "plural": false,
          "type": "ArticleFeatureSectionType"
        },
        "article.href": (v23/*: any*/),
        "article.id": (v24/*: any*/),
        "article.layout": {
          "enumValues": [
            "CLASSIC",
            "FEATURE",
            "NEWS",
            "SERIES",
            "STANDARD",
            "VIDEO"
          ],
          "nullable": false,
          "plural": false,
          "type": "ArticleLayout"
        },
        "article.newsSource": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArticleNewsSource"
        },
        "article.newsSource.title": (v23/*: any*/),
        "article.newsSource.url": (v23/*: any*/),
        "article.postscript": (v23/*: any*/),
        "article.publishedAt": (v23/*: any*/),
        "article.relatedArticles": {
          "enumValues": null,
          "nullable": false,
          "plural": true,
          "type": "Article"
        },
        "article.relatedArticles.byline": (v23/*: any*/),
        "article.relatedArticles.href": (v23/*: any*/),
        "article.relatedArticles.id": (v24/*: any*/),
        "article.relatedArticles.internalID": (v24/*: any*/),
        "article.relatedArticles.thumbnailImage": (v25/*: any*/),
        "article.relatedArticles.thumbnailImage.cropped": (v26/*: any*/),
        "article.relatedArticles.thumbnailImage.cropped.src": (v27/*: any*/),
        "article.relatedArticles.thumbnailImage.cropped.srcSet": (v27/*: any*/),
        "article.relatedArticles.title": (v23/*: any*/),
        "article.sections": {
          "enumValues": null,
          "nullable": false,
          "plural": true,
          "type": "ArticleSections"
        },
        "article.sections.__typename": (v27/*: any*/),
        "article.sections.body": (v23/*: any*/),
        "article.sections.counts": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "ArticleSectionImageSetCounts"
        },
        "article.sections.counts.figures": (v29/*: any*/),
        "article.sections.cover": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArticleSectionImageSetFigure"
        },
        "article.sections.cover.__isNode": (v27/*: any*/),
        "article.sections.cover.__typename": (v27/*: any*/),
        "article.sections.cover.id": (v24/*: any*/),
        "article.sections.cover.image": (v25/*: any*/),
        "article.sections.cover.image.large": (v28/*: any*/),
        "article.sections.cover.image.large.height": (v30/*: any*/),
        "article.sections.cover.image.large.src": (v27/*: any*/),
        "article.sections.cover.image.large.srcSet": (v27/*: any*/),
        "article.sections.cover.image.large.width": (v30/*: any*/),
        "article.sections.cover.image.small": (v26/*: any*/),
        "article.sections.cover.image.small.height": (v29/*: any*/),
        "article.sections.cover.image.small.src": (v27/*: any*/),
        "article.sections.cover.image.small.srcSet": (v27/*: any*/),
        "article.sections.cover.image.small.width": (v29/*: any*/),
        "article.sections.embed": (v23/*: any*/),
        "article.sections.figures": {
          "enumValues": null,
          "nullable": false,
          "plural": true,
          "type": "ArticleSectionImageCollectionFigure"
        },
        "article.sections.figures.__isNode": (v27/*: any*/),
        "article.sections.figures.__typename": (v27/*: any*/),
        "article.sections.figures.artists": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "Artist"
        },
        "article.sections.figures.artists.href": (v23/*: any*/),
        "article.sections.figures.artists.id": (v24/*: any*/),
        "article.sections.figures.artists.name": (v23/*: any*/),
        "article.sections.figures.caption": (v23/*: any*/),
        "article.sections.figures.collecting_institution": (v23/*: any*/),
        "article.sections.figures.cultural_maker": (v23/*: any*/),
        "article.sections.figures.date": (v23/*: any*/),
        "article.sections.figures.href": (v23/*: any*/),
        "article.sections.figures.id": (v24/*: any*/),
        "article.sections.figures.image": (v25/*: any*/),
        "article.sections.figures.image.resized": (v28/*: any*/),
        "article.sections.figures.image.resized.height": (v30/*: any*/),
        "article.sections.figures.image.resized.src": (v27/*: any*/),
        "article.sections.figures.image.resized.srcSet": (v27/*: any*/),
        "article.sections.figures.image.resized.width": (v30/*: any*/),
        "article.sections.figures.is_inquireable": (v31/*: any*/),
        "article.sections.figures.partner": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Partner"
        },
        "article.sections.figures.partner.href": (v23/*: any*/),
        "article.sections.figures.partner.id": (v24/*: any*/),
        "article.sections.figures.partner.name": (v23/*: any*/),
        "article.sections.figures.partner.type": (v23/*: any*/),
        "article.sections.figures.sale": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Sale"
        },
        "article.sections.figures.sale.id": (v24/*: any*/),
        "article.sections.figures.sale.is_auction": (v31/*: any*/),
        "article.sections.figures.sale.is_closed": (v31/*: any*/),
        "article.sections.figures.sale.is_live_open": (v31/*: any*/),
        "article.sections.figures.sale.is_open": (v31/*: any*/),
        "article.sections.figures.sale_artwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtwork"
        },
        "article.sections.figures.sale_artwork.counts": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkCounts"
        },
        "article.sections.figures.sale_artwork.counts.bidder_positions": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "FormattedNumber"
        },
        "article.sections.figures.sale_artwork.highest_bid": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkHighestBid"
        },
        "article.sections.figures.sale_artwork.highest_bid.display": (v23/*: any*/),
        "article.sections.figures.sale_artwork.id": (v24/*: any*/),
        "article.sections.figures.sale_artwork.opening_bid": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkOpeningBid"
        },
        "article.sections.figures.sale_artwork.opening_bid.display": (v23/*: any*/),
        "article.sections.figures.sale_message": (v23/*: any*/),
        "article.sections.figures.title": (v23/*: any*/),
        "article.sections.height": (v30/*: any*/),
        "article.sections.image": (v25/*: any*/),
        "article.sections.image.cropped": (v26/*: any*/),
        "article.sections.image.cropped.src": (v27/*: any*/),
        "article.sections.image.cropped.srcSet": (v27/*: any*/),
        "article.sections.layout": {
          "enumValues": [
            "COLUMN_WIDTH",
            "FILLWIDTH",
            "OVERFLOW_FILLWIDTH"
          ],
          "nullable": false,
          "plural": false,
          "type": "ArticleSectionImageCollectionLayout"
        },
        "article.sections.mobileHeight": (v30/*: any*/),
        "article.sections.setLayout": {
          "enumValues": [
            "FULL",
            "MINI"
          ],
          "nullable": false,
          "plural": false,
          "type": "ArticleSectionImageSetLayout"
        },
        "article.sections.title": (v23/*: any*/),
        "article.sections.url": (v23/*: any*/),
        "article.title": (v23/*: any*/),
        "article.vertical": (v23/*: any*/)
      }
    },
    "name": "ArticleBody_test_Query",
    "operationKind": "query",
    "text": "query ArticleBody_test_Query {\n  article(id: \"example\") {\n    ...ArticleBody_article\n    id\n  }\n}\n\nfragment ArticleBody_article on Article {\n  ...ArticleHeader_article\n  ...ArticleByline_article\n  layout\n  title\n  newsSource {\n    title\n    url\n  }\n  href\n  publishedAt(format: \"MMM D, YYYY h:mma\")\n  sections {\n    __typename\n    ...ArticleSectionText_section\n    ...ArticleSectionImageCollection_section\n    ...ArticleSectionImageSet_section\n    ...ArticleSectionVideo_section\n    ...ArticleSectionSocialEmbed_section\n    ...ArticleSectionEmbed_section\n  }\n  postscript\n  relatedArticles {\n    internalID\n    title\n    href\n    byline\n    thumbnailImage {\n      cropped(width: 80, height: 60) {\n        src\n        srcSet\n      }\n    }\n    id\n  }\n}\n\nfragment ArticleByline_article on Article {\n  byline\n  authors {\n    name\n    initials\n    bio\n    image {\n      cropped(width: 60, height: 60) {\n        src\n        srcSet\n      }\n    }\n    id\n  }\n}\n\nfragment ArticleHeader_article on Article {\n  title\n  vertical\n  byline\n  hero {\n    __typename\n    ... on ArticleFeatureSection {\n      layout\n      image {\n        url\n        split: resized(width: 900) {\n          src\n          srcSet\n        }\n        text: cropped(width: 1600, height: 900) {\n          src\n          srcSet\n        }\n      }\n    }\n  }\n}\n\nfragment ArticleSectionEmbed_section on ArticleSectionEmbed {\n  url\n  height\n  mobileHeight\n}\n\nfragment ArticleSectionImageCollection_section on ArticleSectionImageCollection {\n  layout\n  figures {\n    __typename\n    ... on ArticleImageSection {\n      id\n      caption\n      image {\n        resized(width: 1220, version: [\"normalized\", \"larger\", \"large\"]) {\n          src\n          srcSet\n          height\n          width\n        }\n      }\n    }\n    ... on Artwork {\n      ...Metadata_artwork\n      id\n      image {\n        resized(width: 1220, version: [\"normalized\", \"larger\", \"large\"]) {\n          src\n          srcSet\n          height\n          width\n        }\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment ArticleSectionImageSet_section on ArticleSectionImageSet {\n  setLayout: layout\n  title\n  counts {\n    figures\n  }\n  cover {\n    __typename\n    ... on ArticleImageSection {\n      id\n      image {\n        small: cropped(width: 80, height: 80, version: [\"normalized\", \"larger\", \"large\"]) {\n          src\n          srcSet\n          height\n          width\n        }\n        large: resized(width: 1220, version: [\"normalized\", \"larger\", \"large\"]) {\n          src\n          srcSet\n          height\n          width\n        }\n      }\n    }\n    ... on Artwork {\n      id\n      image {\n        small: cropped(width: 80, height: 80, version: [\"normalized\", \"larger\", \"large\"]) {\n          src\n          srcSet\n          height\n          width\n        }\n        large: resized(width: 1220, version: [\"normalized\", \"larger\", \"large\"]) {\n          src\n          srcSet\n          height\n          width\n        }\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment ArticleSectionSocialEmbed_section on ArticleSectionSocialEmbed {\n  url\n  embed\n}\n\nfragment ArticleSectionText_section on ArticleSectionText {\n  body\n}\n\nfragment ArticleSectionVideo_section on ArticleSectionVideo {\n  embed(autoPlay: true)\n  image {\n    cropped(width: 910, height: 512) {\n      src\n      srcSet\n    }\n  }\n}\n\nfragment Contact_artwork on Artwork {\n  href\n  is_inquireable: isInquireable\n  sale {\n    is_auction: isAuction\n    is_live_open: isLiveOpen\n    is_open: isOpen\n    is_closed: isClosed\n    id\n  }\n  partner(shallow: true) {\n    type\n    id\n  }\n  sale_artwork: saleArtwork {\n    highest_bid: highestBid {\n      display\n    }\n    opening_bid: openingBid {\n      display\n    }\n    counts {\n      bidder_positions: bidderPositions\n    }\n    id\n  }\n}\n\nfragment Details_artwork on Artwork {\n  href\n  title\n  date\n  sale_message: saleMessage\n  cultural_maker: culturalMaker\n  artists(shallow: true) {\n    id\n    href\n    name\n  }\n  collecting_institution: collectingInstitution\n  partner(shallow: true) {\n    name\n    href\n    id\n  }\n  sale {\n    is_auction: isAuction\n    is_closed: isClosed\n    id\n  }\n  sale_artwork: saleArtwork {\n    counts {\n      bidder_positions: bidderPositions\n    }\n    highest_bid: highestBid {\n      display\n    }\n    opening_bid: openingBid {\n      display\n    }\n    id\n  }\n}\n\nfragment Metadata_artwork on Artwork {\n  ...Details_artwork\n  ...Contact_artwork\n  href\n}\n"
  }
};
})();
(node as any).hash = 'aa04a3448b96c85f66845792eb69cea7';
export default node;
