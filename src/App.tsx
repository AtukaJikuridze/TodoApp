import { useState } from "react";
import "./Global.css";
import Header from "./components/Header";
import TodoMain from "./components/TodoMain";
function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [list, setList] = useState<Array<any>>([]);
  function Submited(e: any) {
    e.preventDefault();
  }
  function getValue(e: any) {
    setInputValue(e.target.value);
  }
  function Submit(e: any) {
    inputValue.length > 0
      ? setList([
          {
            title: inputValue,
            id: Math.random(),
            approved: false,
          },
          ...list,
        ])
      : setList([...list]);

    setInputValue("");
  }

  function deleteList(id: number) {
    let newList = list.filter((e) => e.id !== id);
    setList(newList);
  }

  function Approve(id: any) {
    let newList = list.map((e: any) => {
      if (e.id === id) {
        e.approved = !e.approved;
      }
    });
    setList([...list]);
  }
  return (
    <>
      <Header
        submited={Submited}
        inputValue={inputValue}
        getValue={getValue}
        Submit={Submit}
      />
      <TodoMain
        submited={Submited}
        inputValue={inputValue}
        getValue={getValue}
        Submit={Submit}
        list={list}
        Approve={Approve}
        deleteList={deleteList}
      />
    </>
  );
}

export default App;
