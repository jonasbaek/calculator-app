import "./App.css";
import { useState } from "react";

function App() {
  const theme1 = {
    mainBackground: "#3a4764",
    screenBackground: "	#182034",
    toggleButtonsBackground: "	#232c43",
    delAndResetButtonBackground: "#637097",
    delAndResetButtonShadow: "#404e72",
    equalsButtonBackground: "#d03f2f",
    equalsButtonShadow: "#93261a",
    textColor1: "#35352c",
    textColor2: "#ffffff",
  };

  const [theme, setTheme] = useState(theme1);

  return (
    <div style={{ backgroundColor: theme.mainBackground }} className="App">
      <div className="w-4/12">
        <header>
          <div className="flex flex-row">
            <p className="basis-2/4">calc</p>
            <p>THEME</p>
            <ul className="flex">
              <li>
                <label htmlFor="theme_1">1</label>
                <input id="theme_1" name="theme" type="radio" />
              </li>
              <li>
                <label htmlFor="theme_2">2</label>
                <input id="theme_2" name="theme" type="radio" />
              </li>
              <li>
                <label htmlFor="theme_3">3</label>
                <input id="theme_3" name="theme" type="radio" />
              </li>
            </ul>
          </div>
        </header>
        <main>
          <section>
            <p className="screen text-right ">399.981</p>
          </section>
          <section>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>7</div>
              <div>8</div>
              <div>9</div>
              <div>DEL</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>+</div>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>-</div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>RESET</div>
              <div>=</div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
