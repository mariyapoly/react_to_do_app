import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleAddBtn = (e) => {
    setInput([...input, input.length + 1]);
    // setInput([]);
  };

  console.log(input);

  // console.log(input);

  const handleDelete = (id) => {
    const remainingData = input.filter((item, index) => {
      console.log(index, id);
      return index !== id;
    });
    setInput(remainingData);
    console.log(remainingData);
  };

  return (
    <div className="App">
      <h1>Hello</h1>

      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            {input.length === 0 ? (
              <div className="todo-output">
                <input type="text" placeholder="name" />
                <button onClick={handleAddBtn}>add</button>
                <button>remove</button>
              </div>
            ) : (
              <>
                {input.map((item, index) => (
                  <div className="todo-output" key={index}>
                    <input type="text" placeholder="name" defaultValue={item} />
                    <button onClick={handleAddBtn}>add</button>
                    <button onClick={() => handleDelete(index)}>remove</button>
                  </div>
                ))}
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
