import React, { useState } from 'react';
import Login from './components/Login/Login';
import Form from './components/Home/Form';

function App() {
  const [DATA, setDATA] = useState([])

  function addNewData(data) {
    setDATA((prev) => {
      return [...prev, data]
    
    })
  }
  console.log('password', DATA);
 
  return (
    <React.Fragment>
     <Login onAddData={addNewData}/>
    </React.Fragment>
  );
}
export default App;
