import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("0");

  const handleNumbers = (event) => {
    const number = event.target.textContent;
    if (display === "0" || display === 0) {
      setDisplay(number);
    } else {
      setDisplay(display + number);
    }
  };

  const handleOperators = (event) => {
    const operator = " " + event.target.textContent + " ";
    if (display !== "0") {
      const array = display.split(" ");
      const lastElement = array[array.length - 1];
      if (isNaN(parseInt(lastElement)) === false) {
        setDisplay(display + operator);
      }
    }
  };

  const handleEqual = () => {
    setDisplay(parseFloat(eval(display).toFixed(12)).toString());
  };

  const handleDecimal = () => {
    const array = display.split(" ");
    const lastElement = array[array.length - 1];
    if (!lastElement.includes(".") && isNaN(parseInt(lastElement)) === false) {
      setDisplay(display + ".");
    }
  };

  return (
    <>
      <main className="h-screen flex justify-center items-center">
        <div className=" bg-neutral-950 flex flex-col items-center justify-center rounded-md shadow-[5px_5px_5px_#000000]">
          <div className="w-[300px] h-[70px] border-b border-neutral-600 m-3 flex justify-end items-end overflow-hidden">
            <span id="display" className="text-4xl pb-2">
              {display}
            </span>
          </div>
          <div className="w-[300px] h-[370px] grid grid-rows-5 grid-cols-4 gap-3 m-3 text-2xl">
            <button
              id="clear"
              value=""
              onClick={() => {
                setDisplay("0");
              }}
              className="bg-[#9F9F9F] text-neutral-950 hover:bg-[#bdbcbc] transition duration-200 ease-out rounded-full col-span-3 text-xl"
            >
              CLEAR
            </button>
            <button
              id="divide"
              value=""
              onClick={handleOperators}
              className="bg-[#F69906] rounded-full text-2xl hover:bg-[#e9bc73] transition duration-200 ease-in"
            >
              /
            </button>
            <button
              id="seven"
              value=""
              onClick={handleNumbers}
              className="bg-[#313131] rounded-full hover:bg-[#575757] transition duration-200 ease-in"
            >
              7
            </button>
            <button
              id="eight"
              value=""
              onClick={handleNumbers}
              className="bg-[#313131] rounded-full hover:bg-[#575757] transition duration-200 ease-in"
            >
              8
            </button>
            <button
              id="nine"
              value=""
              onClick={handleNumbers}
              className="bg-[#313131] rounded-full hover:bg-[#575757] transition duration-200 ease-in"
            >
              9
            </button>
            <button
              id="multiply"
              value=""
              onClick={handleOperators}
              className="bg-[#F69906] rounded-full text-2xl hover:bg-[#e9bc73] transition duration-200 ease-in"
            >
              *
            </button>
            <button
              id="four"
              value=""
              onClick={handleNumbers}
              className="bg-[#313131] rounded-full hover:bg-[#575757] transition duration-200 ease-in"
            >
              4
            </button>
            <button
              id="five"
              value=""
              onClick={handleNumbers}
              className="bg-[#313131] rounded-full hover:bg-[#575757] transition duration-200 ease-in"
            >
              5
            </button>
            <button
              id="six"
              value=""
              onClick={handleNumbers}
              className="bg-[#313131] rounded-full hover:bg-[#575757] transition duration-200 ease-in"
            >
              6
            </button>
            <button
              id="subtract"
              value=""
              onClick={handleOperators}
              className="bg-[#F69906] rounded-full hover:bg-[#e9bc73] transition duration-200 ease-in"
            >
              -
            </button>
            <button
              id="one"
              value=""
              onClick={handleNumbers}
              className="bg-[#313131] rounded-full hover:bg-[#575757] transition duration-200 ease-in"
            >
              1
            </button>
            <button
              id="two"
              value=""
              onClick={handleNumbers}
              className="bg-[#313131] rounded-full hover:bg-[#575757] transition duration-200 ease-in"
            >
              2
            </button>
            <button
              id="three"
              value=""
              onClick={handleNumbers}
              className="bg-[#313131] rounded-full hover:bg-[#575757] transition duration-200 ease-in"
            >
              3
            </button>
            <button
              id="add"
              value=""
              onClick={handleOperators}
              className="bg-[#F69906] rounded-full hover:bg-[#e9bc73] transition duration-200 ease-in"
            >
              +
            </button>
            <button
              id="zero"
              value=""
              onClick={handleNumbers}
              className="bg-[#313131] rounded-full col-span-2  hover:bg-[#575757] transition duration-200 ease-in"
            >
              0
            </button>
            <button
              id="decimal"
              value=""
              onClick={handleDecimal}
              className="bg-[#313131] rounded-full  hover:bg-[#575757] transition duration-200 ease-in"
            >
              .
            </button>
            <button
              id="equals"
              value=""
              onClick={handleEqual}
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
