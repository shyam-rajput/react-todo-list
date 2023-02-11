import React, { useState } from 'react';
import ToDoList from './ToDoList';

const App = () => {
  const [inputList, setInputList] = useState('');
  const [Items, setItems] = useState([]);

  const itemEvent = (e) => {
    setInputList(e.target.value);
  };

  const listofItems = () => {
    setItems((olditems) => {
      return [...olditems, inputList];
    });

    setInputList('');
  };

  const deleteItem = (id) => {
    console.log('delete');

    setItems((olditems) => {
      return olditems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h2>ToDo Lists</h2>
          <br />
          <input
            type="text"
            placeholder="Add a Items"
            onChange={itemEvent}
            value={inputList}
          />
          <button onClick={listofItems}>
            <i class="fa fa-plus" aria-hidden="true"></i>
          </button>

          <ol>
            {Items.map((itemval, index) => {
              return (
                <ToDoList
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
