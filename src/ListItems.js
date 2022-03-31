import React, { useContext} from "react";
import { context } from "./Context";

export const ListItems =()=> {
     const [list, setList] = useContext(context) 

 // this function sets the is select property to true or false on click of toggle switch
 // it makes a new list by using previous list items and then changes the property using ! operator 
 //then sends the new list with changed property to the setList function
    const toggleProperty = (index) => {
        const newList = [...list]
        newList[index].isSelected = !newList[index].isSelected
        setList(newList)     
        }
        
    const removeElement= (id)=> {
        // this removelement function takes the id of the target item 
        //then filter filters out everything that is not the same id and returns it back everything else
        //set list uses hooks to set it and takes .filter as a function
        setList(list.filter(list=>list.id !==  id))
        }


    return (

        <div className="ListContainer">
            
            {
                list.map ((list,index)=>(
                    <li  key={list.id}>

                    <input type="checkbox" onClick={()=>toggleProperty(index)} className="box" ></input>
                    <span className="box">
                    -  {list.name},  Qty={list.qty} 
                    </span>
                    <button type="button" onClick={()=>removeElement(list.id)} className="box">X  </button>
                    </li>
                    
                ))
            }   
        </div>
    
    )}