import { useState } from "react";
import addItemMutation from '../mutations/addItemMutation';
import deleteItemMutation from '../mutations/deleteItemMutation'
import styles from '../../styles/input.module.css'

export function InputForm(props: { value: string, type: string }) {
    const [name, setName] = useState("");
    const [isDeletedMessage, setIsDeletedMessage] = useState(false);
    const [isInput, setIsInput] = useState(true);
    const [isAnother, setIsAnother] = useState(false);

    const handleSubmit = (evt: { preventDefault: () => void; }) => {
        evt.preventDefault();

        if (props.type === "add") {
          addItemMutation(name);
        }
        else if (props.type === "delete") {
          deleteItemMutation(name);
          setIsDeletedMessage(true);
          setIsInput(false);
          setIsAnother(true);
        }
    }
    function handleAnother() {
      setIsInput(true);
      setIsAnother(false);
      setIsDeletedMessage(false);
    }
    return (
      <div>
        {isInput && <form onSubmit={handleSubmit}>
          <label>
            <input
              placeholder="Task Name"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </label>
          <input type="submit" value={props.value} />
        </form>}
        <div className={styles.center}>
          {isDeletedMessage && <p className={styles.red}>deleted {name}</p>}
        </div>
        {isAnother && <button onClick={handleAnother}>Delete Another Task</button>}
      </div>
    );
}