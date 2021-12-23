import React, { useEffect, useState } from 'react';
import styles from '../../styles/button.module.css'
import { InputForm } from '../components/input'
import ListQuery  from '../queries/listQuery'

export default function Button() {

  const displayTask = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsFormVisible(!isFormVisible);
    setIsListVisible(!isListVisible);

  };

  const createTask = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setIsFormVisible(!isFormVisible);
    setIsListVisible(!isListVisible);
  }
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isListVisible, setIsListVisible] = useState(false);
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

        <div>
          {isFormVisible && <div><InputForm/></div>}
          {isListVisible && <div><ListQuery/></div>}
        </div>
      </div>

  )
}

