import { useState, useEffect } from "react";
import "./App.css";
import Header from "./header";
import Buttons from "./Buttons";
import Extensions from "./extensions";

function App() {
  const [extensions, setExtension] = useState([]);
  const [all, setAll] = useState(true);
  const [active, setActive] = useState(false);

  useEffect(() => {
    fetch("./data.json", {mode : 'cors',})
      .then((response) => response.json())
      .then((response) => setExtension(response));
  }, []);

  return (
    <main>
      <Header />
      <section>
        <Buttons
          all={all}
          setAll={setAll}
          active={active}
          setActive={setActive}
        />
        <Extensions
          extensions={extensions}
          setExtension={setExtension}
          active={active}
          all={all}
        />
      </section>
    </main>
  );
}

export default App;
