function Buttons({ all, setAll, active, setActive }) {
  return (
    <div className="my-8 sm:flex sm:items-center sm:justify-between">
      <h2 className="text-3xl font-bold text-[hsl(227,75%,14%)] text-center mb-8 sm:mb-0 dark:text-[hsl(200,60%,99%)]">
        Extensions List
      </h2>
      <div className="flex items-center justify-between sm:gap-6">
        <button
          className={`${all ? "bg-[hsl(3,77%,44%)] text-[hsl(200,60%,99%)] hover:bg-[hsl(3,71%,56%)]" : "bg-[hsl(200,60%,99%)] text-[hsl(227,75%,14%)] hover:bg-[hsl(217,61%,90%)]"}  
            ${all ? "dark:bg-[hsl(3,71%,56%)]  dark:text-[hsl(227,75%,14%)] dark:hover:bg-[hsl(3,86%,64%)]" : "dark:bg-[hsl(225,23%,24%)] dark:text-[hsl(200,60%,99%)] dark:hover:bg-[hsl(226,11%,37%)]"} 
            shadow px-6 py-2 rounded-3xl font-semibold focus:outline-offset-2`}
          onClick={() => {
            setAll(true);
            setActive(false);
          }}
        >
          All
        </button>
        <button
          className={`${active ? "bg-[hsl(3,77%,44%)] text-[hsl(200,60%,99%)] hover:bg-[hsl(3,71%,56%)]" : "bg-[hsl(200,60%,99%)] text-[hsl(227,75%,14%)] hover:bg-[hsl(217,61%,90%)]"}  
            ${active ? "dark:bg-[hsl(3,71%,56%)]  dark:text-[hsl(227,75%,14%)] dark:hover:bg-[hsl(3,86%,64%)]" : "dark:bg-[hsl(225,23%,24%)] dark:text-[hsl(200,60%,99%)] dark:hover:bg-[hsl(226,11%,37%)]"} 
            shadow px-6 py-2 rounded-3xl font-semibold focus:outline-offset-2`}
          onClick={() => {
            setActive(true);
            setAll(false);
          }}
        >
          Active
        </button>
        <button
          className={`${!active && !all ? "bg-[hsl(3,77%,44%)] text-[hsl(200,60%,99%)] hover:bg-[hsl(3,71%,56%)]" : "bg-[hsl(200,60%,99%)] text-[hsl(227,75%,14%)] hover:bg-[hsl(217,61%,90%)]"}  
            ${!active && !all ? "dark:bg-[hsl(3,71%,56%)]  dark:text-[hsl(227,75%,14%)] dark:hover:bg-[hsl(3,86%,64%)]" : "dark:bg-[hsl(225,23%,24%)] dark:text-[hsl(200,60%,99%)] dark:hover:bg-[hsl(226,11%,37%)]"} 
            shadow px-6 py-2 rounded-3xl font-semibold focus:outline-offset-2`}
          onClick={() => {
            setActive(false);
            setAll(false);
          }}
        >
          Inactive
        </button>
      </div>
    </div>
  );
}

export default Buttons;
