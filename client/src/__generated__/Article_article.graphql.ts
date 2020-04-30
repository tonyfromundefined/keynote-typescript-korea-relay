/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Article_article = {
    readonly user: {
        readonly " $fragmentRefs": FragmentRefs<"User_user">;
    };
    readonly title: string;
    readonly content: string;
    readonly commentNum: number;
    readonly " $refType": "Article_article";
};
export type Article_article$data = Article_article;
export type Article_article$key = {
    readonly " $data"?: Article_article$data;
    readonly " $fragmentRefs": FragmentRefs<"Article_article">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Article_article",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "user",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "User_user"
        }
      ],
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
      "kind": "ScalarField",
      "name": "content",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "commentNum",
      "storageKey": null
    }
  ],
  "type": "Article"
};
(node as any).hash = '4a5dd41338ad54fda9c8b705e0981765';
export default node;
