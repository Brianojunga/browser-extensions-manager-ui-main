import { useState, useEffect } from "react";

function Header() {
  const [bgDark, setBgDark] = useState(false);
  useEffect(() => {
    const body = document.body;
    body.className = bgDark
      ? "[background:linear-gradient(180deg,#040918_0%,#091540_100%)] dark"
      : "[background:linear-gradient(180deg,#EBF2FC_0%,#EEF8F9_100%)]";
    body.classList.add("py-8");
    body.classList.add("mx-auto");
    body.classList.add("max-sm:px-3");
    body.classList.add("max-md:px-6");
  }, [bgDark]);

  return (
    <div className="flex justify-between items-center bg-[hsl(200,60%,99%)] p-2 rounded-xl shadow dark:bg-[hsl(225,23%,24%)]">
      <div>
        <img className="" src={bgDark ? "./images/logo2.svg" : "./images/logo.svg" } alt="logo" />
      </div>
      <button
        aria-label={
          bgDark ? "change to white background" : "change to dark background"
        }
        onClick={() => setBgDark((prev) => !prev)}
        className="p-1.5 bg-[hsl(0,0%,93%)] rounded-lg dark:bg-[hsl(226,11%,37%)] hover:bg-[#54596952]"
      >
        <img
          src={
            bgDark
              ? "./images/icon-sun.svg"
              : "./images/icon-moon.svg"
          }
          alt={bgDark ? "sunny svg" : "moon svg"}
        />
      </button>
    </div>
  );
}

export default Header;
