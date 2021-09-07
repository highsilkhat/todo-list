import react, { useState } from 'react';

const ListItemCreate = (props) => {
    const [listItem, setListItem] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log({item})
        props.onNewListItem( listItem
        )
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>
                Add a to-do Item
            </h1>
            <input type="text" className="textBox" placeholder="A new task" value={listItem} name='item' onChange={(event) => setListItem(event.target.value)} />

            <button type="submit" className= "add" >Add</button>
        </form>
    );
};

export default ListItemCreate