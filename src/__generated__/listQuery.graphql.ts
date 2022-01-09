/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type listQueryVariables = {};
export type listQueryResponse = {
    readonly list: ReadonlyArray<{
        readonly title: string;
    } | null> | null;
};
export type listQuery = {
    readonly response: listQueryResponse;
    readonly variables: listQueryVariables;
};



/*
query listQuery {
  list {
    title
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "listQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "list",
        "plural": true,
        "selections": [
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "listQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "list",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7e1618356fa2645703b87d4a0d490fe1",
    "id": null,
    "metadata": {},
    "name": "listQuery",
    "operationKind": "query",
    "text": "query listQuery {\n  list {\n    title\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '412538bf5c747155550f096e570ad611';
export default node;
