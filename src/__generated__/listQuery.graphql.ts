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
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Item",
    "kind": "LinkedField",
    "name": "list",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "listQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "listQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "3a2ae24ed5b49d6646e6a377fe4bc26a",
    "id": null,
    "metadata": {},
    "name": "listQuery",
    "operationKind": "query",
    "text": "query listQuery {\n  list {\n    title\n  }\n}\n"
  }
};
})();
(node as any).hash = '412538bf5c747155550f096e570ad611';
export default node;
