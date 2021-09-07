const TodoDisplay = (props) => {
    return (
        <div>
            <h1>To-do List</h1>
            {
                props.currentList.map((item, i) => {

                    return (
                    <div className ="listItems">
                    <h2 className = {item.checked? "strikethrough" : ""} idx={i} > {item.item} </h2>
                    
                    <input type="checkbox" className="check" onChange={()=>props.checkTask(i)} checked={item.checked} />
                    
                    <button onClick={()=>props.deleteTask(i)} className="btn">Delete</button>
                    </div>
                    )
                })
            }


        </div>
    )
}

export default TodoDisplay;