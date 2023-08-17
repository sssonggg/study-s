import MemoizedButton from './Button';
import Button from './Button';
import React, { useState } from 'react';

function App() {
  const [value, setValue] = useState("Save Changes")
  const changeValue = () => setValue("Revert Changes");

  return (
    <div className="App">
      <h1>Welcome!😁</h1>
      <MemoizedButton text={value} onClick={changeValue}/>
      <MemoizedButton text="Continue"/>
    </div>
  );
}

export default App;
