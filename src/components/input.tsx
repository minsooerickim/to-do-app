import { useState } from "react";
import addItemMutation from '../mutations/addItemMutation';

export function InputForm() {
    const [name, setName] = useState("");

    const handleSubmit = (evt: { preventDefault: () => void; }) => {
        evt.preventDefault();
        addItemMutation(name);
    }

    return (
        <form onSubmit={handleSubmit}>
          <label>
            Frirst Name:
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
    );
}