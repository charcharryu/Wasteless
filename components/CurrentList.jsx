import React from 'react';
import Item from './Item';
import { useState } from 'react';

function CurrentList () {

const state = {
    listOfItems: ['Apples', 'Bananas', 'Carrots', 'Dates'], // <-- this will be intitialized w/ the data from get request
    login: true
}

const [ currState, setState ] = useState(state);
const listOfItems = currState.listOfItems;

let newItem;

function addItem() {
    // Does nothing if input field is empty
    if (!document.getElementById('newItemField').value) {
        return;
    };
    document.getElementById('newItemField').value = "";
    setState((prevState) => {
        const newList = prevState.listOfItems.concat(newItem);
        console.log("new list is " + newList);
        return { ...prevState, listOfItems: newList }
        // TBD: Trigger post request to let DB know about new item?
    })
}

//TBD: Mark as Bought functionality (update itemStatus property to 'bought' & remove from current render)
function markAsBought() {
    
}

//TBD: Delete item function??
function deleteItem() {

}

// Selects user input when change is detected
function handleChange(e){
    newItem = [e.target.value];
}


// handleKeyDown checks if 'enter' triggered onKeyDown(line 53) and calls addItem if true
function handleKeyDown(event) {
    if (event.key === 'Enter') {
        addItem();
    }
}

const listArray = [];
for (let i=0; i<currState.listOfItems.length;i++){
    listArray.push(<Item itemName={currState.listOfItems[i]} key={i} id={i +1}/>)
}


    return (
        <div className='currentList'>
            <h3>CURRENT LIST</h3>
            <p strong>TO BUY:</p>
            {listArray}
            <input type='text' id="newItemField" onChange={handleChange} onKeyDown={handleKeyDown} />
            <button onClick={addItem} onEnter={addItem}>Add Item</button>
        </div>
    )
}

export default CurrentList;