import React from "react";
import ".././Global.css";
import { BsTrashFill, BsCheckLg } from "react-icons/bs";

export default function TodoMain(props: {
  submited: any;
  inputValue: string;
  getValue: any;
  Submit: any;
  list: Array<[]>;
  Approve: any;
  deleteList: any;
}) {
  return (
    <div className="todo-main">
      {props.list.map((e: any) => (
        <div className="todo-list" key={Math.random()}>
          {e.approved ? (
            <p className="approved">{e.title}</p>
          ) : (
            <p>{e.title}</p>
          )}
          <BsCheckLg onClick={() => props.Approve(e.id)} />
          <BsTrashFill size={17} onClick={() => props.deleteList(e.id)} />
        </div>
      ))}
    </div>
  );
}
