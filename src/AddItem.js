import React, {useState, useContext} from "react";
import { context } from "./Context";

export const AddItem = () => {

    const [name, setName] = useState("");
    const [qty, setQty] = useState(1);
    const [id, setId] = useState(3);
    const [selected, setSelected] = useState(false);
    

    const [list, setList] = useContext(context)

    //updates name of item
    const updateName = (e) => {
        setName (e.target.value);
        

    }
    //updates quantity
    const updateQty = (e) => {
        setQty (e.target.value);
    }

        //adds items to the end of existing array using ... and getting the value from the jsx stuff
        //setId automatically gives a new ID for a new addelement 
        // setselected automatically sets the selected property to false
    const AddItem = e => {
        e.preventDefault();
        setId (id+1)
        setSelected(selected)
        setList (previousList => [...previousList,{name: name, qty: qty, id: id, isSelected : selected}])
    }
 

    return(

        <div>



        <form onSubmit={AddItem}>
        <input type="text" name="name" value = {name} onChange={updateName} />
        <input type="number" name="qty" value = {qty} onChange={updateQty} />      
        <button>submit</button>
    </form>

    </div>

    );
}