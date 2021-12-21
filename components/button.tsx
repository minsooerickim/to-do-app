import React from 'react';
import styles from '../styles/button.module.css'

import {commitMutation, Environment} from 'react-relay';
import relayEnv from '../pages/api/relayEnv'

export default function Button() {
  const mutation = graphql`
  mutation addItem
  {    
    createItem(input: "newItemTitle") {      
      title
    }  
  }
  `;
  function createItem(environment: Environment, input: String) {  
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

  const displayTask = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const container = document.getElementById('tasksContainer');
    async function fetchTasks() {
        const response = await fetch('http://localhost:3001/api/graphql');
        const tasks = await response.json();
        return tasks;
    }
    fetchTasks().then(res => {
      res.data.list.forEach((task: { title: string; }) => {
          console.log(task);
          var p = document.createElement('p')
          var text = document.createTextNode(task.title);
          p.appendChild(text);
          container!.append(p)
      })
    });
  };
  const createTask = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    
    createItem(relayEnv, "hello");
  }
  return (
      <div className={styles.container}>
        <button className={styles.button}
          title="Create Task"
          onClick={createTask}
        >
        Create Task
        </button>

        <div className={styles.divider}></div>
        
        <button className={styles.button}
          title="Delete Task"
          onClick={() => console.log("should delete task")}
        >
        Delete Task
        </button>

        <div className={styles.divider}></div>

        <button className={styles.button}
          title="Display Task"
          onClick={displayTask}
        >
        Display Task
        </button>
      </div>

  )
}

