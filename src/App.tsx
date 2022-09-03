import React, { useEffect } from 'react';
import { useDidMount } from './hooks/useDidMount'
import { useDidUpdate } from './hooks/useDidUpdate'
import './App.css';

function App() {
  const mount = useDidMount()
  const [counter, setCounter] = React.useState(0);
  const [temp, setTemp] = React.useState(false);

  useEffect(() => {
    if(mount)
      console.log('component is mounted now-------------------------')
  })

  // Incorrect way
  // React.useEffect(() => {
  //   if (temp) {
  //     console.log('udates will be performed soon-=-=-=');
  //   } else {
  //     console.log("component is not mounted yet so, update won't be permormed");
  //     setTemp((prev) => !prev);
  //   }
  // });

  //correct way to do componentDidUpdate
  // React.useEffect(() => {
  //   if (tempRef.current) {
  //     console.log('udates will be performed soon-=-=-=');
  //   } else {
  //     console.log("component is not mounted yet so, update won't be permormed");
  //     tempRef.current = true;
  //   }
  // });

  useDidUpdate(() => {
    console.log('Hello from app!');
  }, [counter]);

  return (
    <div className="App">
      <header className="App-header">
      <h3>Current count</h3>
      {counter}
      <br />
      <br />
      <button onClick={() => setCounter((prev) => prev + 1)}>Increase</button>
      <br />
      <button disabled={temp} onClick={() => setTemp((prev) => !prev)}>
        Enable
      </button>
      </header>
    </div>
  );
}

export default App;
