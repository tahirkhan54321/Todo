import React, { useState } from "react";

function NewTodoForm(props: {addTodo: Function}) {
  const [description, setDescription] = useState(""); //empty string by default
  const [assigned, setAssigned] = useState(""); //empty string by default

  const submitTodo = () => {
    if (description !== "" && assigned !== "") {
      props.addTodo(description, assigned);
      setDescription('');
      setAssigned('');
    }
  };

  return (
    <div className="mt-5">
      <form>
        <div className="mb-3">
          <label className="form-label">Assigned</label>
          <input
            type="text"
            className="form-control"
            required
            onChange={(e) => setAssigned(e.target.value)} //e means event
            value={assigned}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows={3}
            required
            onChange={(e) => setDescription(e.target.value)} //e means event
            value={description}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mt-3"
          onClick={submitTodo}
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default NewTodoForm;
