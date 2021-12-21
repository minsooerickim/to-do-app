/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type addItemMutationVariables = {
    input: string;
};
export type addItemMutationResponse = {
    readonly createItem: {
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
  createItem(input: $input) {
    title
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "Item",
    "kind": "LinkedField",
    "name": "createItem",
    "plural": false,
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "addItemMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "addItemMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "09069c0e84a9483ac7141db8b9f5523f",
    "id": null,
    "metadata": {},
    "name": "addItemMutation",
    "operationKind": "mutation",
    "text": "mutation addItemMutation(\n  $input: String!\n) {\n  createItem(input: $input) {\n    title\n  }\n}\n"
  }
};
})();
(node as any).hash = 'cdb9147293e6d7435ffc6be42e67b899';
export default node;
