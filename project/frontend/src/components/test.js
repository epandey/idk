import React, { useRef } from 'react';

function Test() {
  const inputRef = useRef(null);

  function handleSubmit() {
    alert(`Name: ${inputRef.current.value}`);
  }

  const x = 'saurabh';

  return (
    <div className="App">
      <h3>Uncontrolled Component</h3>
      <form onSubmit={handleSubmit}>
        <label>Name :</label>
        <input type="text" name="name" ref={inputRef} defaultValue={x} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Test;
