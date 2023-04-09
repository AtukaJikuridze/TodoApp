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
          <p className={`${e.approved ? "approved" : ""}`}>{e.title}</p>
          <BsCheckLg onClick={() => props.Approve(e.id)} />
          <BsTrashFill size={17} onClick={() => props.deleteList(e.id)} />
        </div>
      ))}
    </div>
  );
}
