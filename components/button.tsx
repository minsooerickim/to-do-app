import styles from '../styles/button.module.css'

export default function Button() {
  return (
      <div className={styles.container}>
        <button className={styles.button}
          title="Create Task"
          onClick={() => console.log("should create task")}
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
      </div>

  )
}