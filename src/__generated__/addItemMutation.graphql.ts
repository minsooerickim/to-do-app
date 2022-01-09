/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type addItemMutationVariables = {
    input: string;
};
export type addItemMutationResponse = {
    readonly addItemMutation: {
        readonly title: string;
    } | null;
};
export type addItemMutation = {
    readonly response: addItemMutationResponse;
    readonly variables: addItemMutationVariables;
};



/*
mutation addItemMutation(
  $input: String!
) {
  addItemMutation(input: $input) {
    title
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "addItemMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "addItemMutation",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "addItemMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "addItemMutation",
        "plural": false,
        "selections": [
          (v2/*: any*/),
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
    "cacheID": "46b6d3dbe01b587967e04af7d3b245a0",
    "id": null,
    "metadata": {},
    "name": "addItemMutation",
    "operationKind": "mutation",
    "text": "mutation addItemMutation(\n  $input: String!\n) {\n  addItemMutation(input: $input) {\n    title\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '289e764cd0992b8342a421f1852c8036';
export default node;
