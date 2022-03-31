import React from 'react';
import './App.css';

//importing components
import { Background } from './Backgroound';
import {ListItems} from './ListItems'
import {ListProvider} from './Context'
import { AddItem } from './AddItem';

function App() {
  return (
    <div className="App"> 
      <Background>
        </Background>
        <ListProvider>
            <AddItem>add item</AddItem>
            <ListItems>list item</ListItems>
        </ListProvider>

    </div>
  );
}

export default App;
