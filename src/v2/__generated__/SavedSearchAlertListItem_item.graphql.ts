/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SavedSearchAlertListItem_item = {
    readonly internalID: string;
    readonly artistIDs: ReadonlyArray<string> | null;
    readonly href: string;
    readonly userAlertSettings: {
        readonly name: string | null;
    };
    readonly " $refType": "SavedSearchAlertListItem_item";
};
export type SavedSearchAlertListItem_item$data = SavedSearchAlertListItem_item;
export type SavedSearchAlertListItem_item$key = {
    readonly " $data"?: SavedSearchAlertListItem_item$data;
    readonly " $fragmentRefs": FragmentRefs<"SavedSearchAlertListItem_item">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SavedSearchAlertListItem_item",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "internalID",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "artistIDs",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "href",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "SavedSearchUserAlertSettings",
      "kind": "LinkedField",
      "name": "userAlertSettings",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "SearchCriteria",
  "abstractKey": null
};
(node as any).hash = '94ac9c394d9515c367be113d028a6e94';
export default node;