import React,{useState, createContext} from "react";

export const context =  createContext(); //maybe not used maybe try removing and running application

export const ListProvider = (abcd) => {
    const [list, setList] = useState ([
        {
            name : "item 1",
            qty : 1,
            isSelected : false,
            id :0

        },{
            name : "item 2",
            qty : 3,
            isSelected : false,
            id :1
        },{
            name : "item 3",
            qty : 5,
            isSelected : false,
            id :2
        }
    ])


// for context in theAPP.JS PAGE AND TO give context to componentsgit

    return(
        <context.Provider value = {[list, setList]}>context provider
        {abcd.children}  
        </context.Provider>
    )

}