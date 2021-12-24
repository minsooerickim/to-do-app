/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type deleteItemMutationVariables = {
    input: string;
};
export type deleteItemMutationResponse = {
    readonly deleteItemMutation: string | null;
};
export type deleteItemMutation = {
    readonly response: deleteItemMutationResponse;
    readonly variables: deleteItemMutationVariables;
};



/*
mutation deleteItemMutation(
  $input: String!
) {
  deleteItemMutation(input: $input)
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
    "kind": "ScalarField",
    "name": "deleteItemMutation",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "deleteItemMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "deleteItemMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "38b705ace4be14d8f255235d24905fee",
    "id": null,
    "metadata": {},
    "name": "deleteItemMutation",
    "operationKind": "mutation",
    "text": "mutation deleteItemMutation(\n  $input: String!\n) {\n  deleteItemMutation(input: $input)\n}\n"
  }
};
})();
(node as any).hash = 'f4e60b905d6c544c8810db43274c59bd';
export default node;
