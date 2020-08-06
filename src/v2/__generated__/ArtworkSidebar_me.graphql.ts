/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ArtworkSidebar_me = {
    readonly " $fragmentRefs": FragmentRefs<"ArtworkSidebarBidAction_me">;
    readonly " $refType": "ArtworkSidebar_me";
};
export type ArtworkSidebar_me$data = ArtworkSidebar_me;
export type ArtworkSidebar_me$key = {
    readonly " $data"?: ArtworkSidebar_me$data;
    readonly " $fragmentRefs": FragmentRefs<"ArtworkSidebar_me">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "ArtworkSidebar_me",
  "type": "Me",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "ArtworkSidebarBidAction_me",
      "args": null
    }
  ]
};
(node as any).hash = 'dae43a7cd24d3adbf9bb5ab1333ede35';
export default node;
