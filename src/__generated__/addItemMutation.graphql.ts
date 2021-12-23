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
    "name": "addItemMutation",
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
    "cacheID": "ee90e1a1a2d86d10eb59a077f45c0316",
    "id": null,
    "metadata": {},
    "name": "addItemMutation",
    "operationKind": "mutation",
    "text": "mutation addItemMutation(\n  $input: String!\n) {\n  addItemMutation(input: $input) {\n    title\n  }\n}\n"
  }
};
})();
(node as any).hash = '289e764cd0992b8342a421f1852c8036';
export default node;
