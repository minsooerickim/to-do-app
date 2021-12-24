import { commitMutation, graphql } from 'react-relay'
import environment from '../../pages/api/relayEnv'

const mutation = graphql`
    mutation deleteItemMutation($input: String!)
    {    
      deleteItemMutation(input: $input)  
    }
`;

export default function deleteItemMutation(input: String) {  
  const variables = {    
    input
  };
  commitMutation(    
    environment,    {      
      mutation,      
      variables,      
      onCompleted: (response, errors) => {        
        console.log('Response received from server (delete).')      
      },      
      onError: err => console.error(err),    
    },  
  );
} 