/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ArtistInsightAchievements_artist = {
    readonly slug: string;
    readonly insightsList: ReadonlyArray<{
        readonly label: string;
        readonly entities: ReadonlyArray<string>;
    }>;
    readonly " $refType": "ArtistInsightAchievements_artist";
};
export type ArtistInsightAchievements_artist$data = ArtistInsightAchievements_artist;
export type ArtistInsightAchievements_artist$key = {
    readonly " $data"?: ArtistInsightAchievements_artist$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ArtistInsightAchievements_artist">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtistInsightAchievements_artist",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    },
    {
      "alias": "insightsList",
      "args": [
        {
          "kind": "Literal",
          "name": "kind",
          "value": [
            "SOLO_SHOW",
            "GROUP_SHOW",
            "COLLECTED",
            "REVIEWED",
            "BIENNIAL"
          ]
        }
      ],
      "concreteType": "ArtistInsight",
      "kind": "LinkedField",
      "name": "insights",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "label",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "entities",
          "storageKey": null
        }
      ],
      "storageKey": "insights(kind:[\"SOLO_SHOW\",\"GROUP_SHOW\",\"COLLECTED\",\"REVIEWED\",\"BIENNIAL\"])"
    }
  ],
  "type": "Artist",
  "abstractKey": null
};
(node as any).hash = '87b8f98d4bf32cdbc1edfe4f6bb55a03';
export default node;
