import { useState } from "react";
import { evaluate } from "mathjs";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("0");

  const handleDisplay = (value) => {
    if (/[/+*]/.test(display[display.length - 1]) && value.match(/[/+*]/)) {
      setDisplay((ex) => ex.slice(0, -1) + value);
    } else if (
      /[-]/.test(display[display.length - 1]) &&
      value.match(/[/+*]/)
    ) {
      setDisplay((ex) => ex.slice(0, -2) + value);
    } else if (/--/.test(display)) {
      setDisplay((ex) => ex.slice(0, -2) + "+" + value);
    } else if (/[.]/.test(display[display.length - 1]) && value.match(/[.]/)) {
      setDisplay((ex) => ex + "");
    } else if (
      /\d[.]/g.test(display) &&
      /\d[.]\d+[/+*-]\d+$/g.test(display) === false &&
      value.match(/[.]/)
    ) {
      setDisplay((ex) => ex + "");
    } else if (/\d[.]\d+[/+*-]\d+$/g.test(display) && value.match(/[.]/)) {
      setDisplay((ex) => ex + value);
    } else if (display === "0" && value === "0") {
      setDisplay((ex) => ex + "");
    } else if (display === "0" && value.match(/[^.=]/)) {
      setDisplay(value);
    } else {
      setDisplay((ex) => ex + value);
    }

    if (display[display.length - 1] === "=") {
      if (/[0-9.]/.test(value)) {
        setDisplay(value);
      } else {
        setDisplay(answer + value);
      }
    }
  };

  const calculate = () => {
    if (/[\+\-\*\/]/.test(display)) {
      const answer = parseFloat(evaluate(display).toFixed(12));
      setDisplay(answer);
    }

    // setDisplay(parseFloat(evaluate(display).toFixed(12)).toString());
  };

  return (
    <>
      <main className="h-screen flex justify-center items-center">
        <div className=" bg-neutral-950 flex flex-col items-center justify-center rounded-md shadow-[5px_5px_5px_#000000]">
          <div className="w-[300px] h-[70px] border-b border-neutral-600 m-3 flex justify-end items-end overflow-hidden">
            <h1 id="display" className="text-4xl pb-2">
              {display}
            </h1>
          </div>
          <div className="w-[300px] h-[370px] grid grid-rows-5 grid-cols-4 gap-3 m-3 text-2xl">
            <button
              id="clear"
              onClick={() => {
                setDisplay("0");
              }}
              className="bg-[#9F9F9F] text-neutral-950 hover:bg-[#bdbcbc] transition duration-200 ease-out rounded-full col-span-3 text-xl"
            >
              CLEAR
            </button>
            <button
              id="divide"
              onClick={() => handleDisplay("/")}
              className="bg-[#F69906] rounded-full text-2xl hover:bg-[#e9bc73] transition duration-200 ease-in"
            >
              /
            </button>
            <button
              id="seven"
              onClick={() => handleDisplay("7")}
              className="bg-[#313131] rounded-full hover:bg-[#575757] transition duration-200 ease-in"
            >
              7
            </button>
            <button
              id="eight"
              onClick={() => handleDisplay("8")}
              className="bg-[#313131] rounded-full hover:bg-[#575757] transition duration-200 ease-in"
            >
              8
            </button>
            <button
              id="nine"
              onClick={() => handleDisplay("9")}
              className="bg-[#313131] rounded-full hover:bg-[#575757] transition duration-200 ease-in"
            >
              9
            </button>
            <button
              id="multiply"
              onClick={() => handleDisplay("*")}
              className="bg-[#F69906] rounded-full text-2xl hover:bg-[#e9bc73] transition duration-200 ease-in"
            >
              *
            </button>
            <button
              id="four"
              onClick={() => handleDisplay("4")}
              className="bg-[#313131] rounded-full hover:bg-[#575757] transition duration-200 ease-in"
            >
              4
            </button>
            <button
              id="five"
              onClick={() => handleDisplay("5")}
              className="bg-[#313131] rounded-full hover:bg-[#575757] transition duration-200 ease-in"
            >
              5
            </button>
            <button
              id="six"
              onClick={() => handleDisplay("6")}
              className="bg-[#313131] rounded-full hover:bg-[#575757] transition duration-200 ease-in"
            >
              6
            </button>
            <button
              id="subtract"
              onClick={() => handleDisplay("-")}
              className="bg-[#F69906] rounded-full hover:bg-[#e9bc73] transition duration-200 ease-in"
            >
              -
            </button>
            <button
              id="one"
              onClick={() => handleDisplay("1")}
              className="bg-[#313131] rounded-full hover:bg-[#575757] transition duration-200 ease-in"
            >
              1
            </button>
            <button
              id="two"
              onClick={() => handleDisplay("2")}
              className="bg-[#313131] rounded-full hover:bg-[#575757] transition duration-200 ease-in"
            >
              2
            </button>
            <button
              id="three"
              onClick={() => handleDisplay("3")}
              className="bg-[#313131] rounded-full hover:bg-[#575757] transition duration-200 ease-in"
            >
              3
            </button>
            <button
              id="add"
              onClick={() => handleDisplay("+")}
              className="bg-[#F69906] rounded-full hover:bg-[#e9bc73] transition duration-200 ease-in"
            >
              +
            </button>
            <button
              id="zero"
              onClick={() => handleDisplay("0")}
              className="bg-[#313131] rounded-full col-span-2  hover:bg-[#575757] transition duration-200 ease-in"
            >
              0
            </button>
            <button
              id="decimal"
              onClick={() => handleDisplay(".")}
              className="bg-[#313131] rounded-full  hover:bg-[#575757] transition duration-200 ease-in"
            >
              .
            </button>
            <button
              id="equals"
              onClick={calculate}
              className="bg-[#F69906] rounded-full hover:bg-[#e9bc73] transition duration-200 ease-in"
            >
              =
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
