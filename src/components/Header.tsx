import React from "react";
import ".././Global.css";
export default function Header(props: {
  submited: any;
  inputValue: string;
  getValue: any;
  Submit: any;
}) {
  return (
    <header>
      <h1>ToDo List</h1>
      <form onSubmit={props.submited} action="">
        <input
          type="text"
          placeholder="Add a new task"
          value={props.inputValue}
          onChange={props.getValue}
        />
        <button onClick={props.Submit}>Submit</button>
      </form>
    </header>
  );
}
