import { useState } from 'react';
import './App.css';
import ListItemCreate from './components/ListItemCreate';
import TodoDisplay from './components/TodoDisplay';

function App() {

  const [list, setList] = useState([]);

  const addToList = (newItem) => {
    setList([
      ...list,
      {
        item: newItem,
        checked: false
      }]
    )
  }

  const deleteTask = (id) => {
    console.log(id);
    setList([
      ...list.slice(0, id),
      ...list.slice(id + 1)

    ])
  }

  const checkTask = (id) => {
    console.log(id);

    const updatedList = list[id];
    updatedList.checked = !updatedList.checked;

    setList([
      ...list.slice(0, id),
      updatedList,
      ...list.slice(id + 1)

    ])


  }


  return (
    <div className="App">
      <ListItemCreate onNewListItem={addToList} />
      <TodoDisplay currentList={list} deleteTask={deleteTask} checkTask={checkTask}/>
    </div>
  );
}

export default App;
