import React, {useEffect, useState} from "react";

const App = () => {
  const [user, setUser] = useState("");
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState(["Ana"]);

  const handleAddUser = () => {
    setUsers([...users, user]);
    setUser("");
  };

  useEffect(()=>{
    setCount(users.length);
  }, [users]);

  console.log('Tudo Okay');
    return (
      <>
      <div className="App">
        <h1>Hello</h1>
        <h3>Total: {count}</h3>
          <input 
              value={user}
              onChange={(event) => setUser(event.target.value)}
          />
          <button onClick={handleAddUser}>Add</button>
          </div>
          <hr />
          {users.map((item) =>
            <p>{item}</p>
          )}
      </>
    );
  
}

export default App;