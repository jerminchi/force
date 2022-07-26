/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type NewForYouApp_viewer = {
    readonly " $fragmentRefs": FragmentRefs<"NewForYouArtworksGrid_viewer">;
    readonly " $refType": "NewForYouApp_viewer";
};
export type NewForYouApp_viewer$data = NewForYouApp_viewer;
export type NewForYouApp_viewer$key = {
    readonly " $data"?: NewForYouApp_viewer$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"NewForYouApp_viewer">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "first"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "includeBackfill"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "version"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "NewForYouApp_viewer",
  "selections": [
    {
      "args": [
        {
          "kind": "Variable",
          "name": "first",
          "variableName": "first"
        },
        {
          "kind": "Variable",
          "name": "includeBackfill",
          "variableName": "includeBackfill"
        },
        {
          "kind": "Variable",
          "name": "version",
          "variableName": "version"
        }
      ],
      "kind": "FragmentSpread",
      "name": "NewForYouArtworksGrid_viewer"
    }
  ],
  "type": "Viewer",
  "abstractKey": null
};
(node as any).hash = 'c8f71ef5675999e803e6ea924c24685e';
export default node;