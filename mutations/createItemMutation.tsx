import {commitMutation, graphql} from 'react-relay'
import { ConnectionHandler } from 'react-relay'
import environment from '../pages/api/relayEnv'

const mutation = graphql`
    mutation addItem
    {    
      createItem(input: "newItemTitle") {      
        title
      }  
    }
`;

export default function createItem(input: String) {  
  const variables = {    
    input
  };
  commitMutation(    
    environment,    {      
      mutation,      
      variables,      
      onCompleted: (response, errors) => {        
        console.log('Response received from server.')      
      },      
      onError: err => console.error(err),    
    },  
  );
} 