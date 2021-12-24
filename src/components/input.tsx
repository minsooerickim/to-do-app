import { useState } from "react";
import addItemMutation from '../mutations/addItemMutation';
import deleteItemMutation from '../mutations/deleteItemMutation'

export function InputForm(props: { value: string, type: string }) {
    const [name, setName] = useState("");

    const handleSubmit = (evt: { preventDefault: () => void; }) => {
        evt.preventDefault();

        if (props.type === "add") {
          addItemMutation(name);
        }
        else if (props.type === "delete") {
          deleteItemMutation(name);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
          <label>
            <input
              placeholder="Task Name"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </label>
          <input type="submit" value={props.value} />
        </form>
    );
}