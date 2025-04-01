function Extensions({ extensions, setExtension, active, all }) {
  function deleteExtension(extName) {
    setExtension(extensions.filter((extension) => extension.name !== extName));
  }

  function updateActive(extName) {
    setExtension(
      extensions.map((extension) =>
        extension.name === extName
          ? { ...extension, isActive: !extension.isActive }
          : extension,
      ),
    );
  }

  return (
    <div className="grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-4">
      {extensions.map((extension) => {
        if (active && !extension.isActive) return;
        if (!active && !all && extension.isActive) return;
        return (
          <div
            key={extension.name}
            className="rounded-xl bg-[hsl(200,60%,99%)] dark:bg-[hsl(225,23%,24%)] shadow-sm p-4 dark:border-1 border-[hsl(226,11%,37%)]"
          >
            <div className="flex items-start gap-2">
              <img src={extension.logo} alt="" />
              <div className="pb-8">
                <h3 className="font-bold text-[hsl(227,75%,14%)] text-lg dark:text-[hsl(200,60%,99%)]">{extension.name}</h3>
                <p className="mt-0.5 text-[0.78rem] text-[hsl(226,11%,37%)] dark:text-[hsl(0,0%,78%)]">{extension.description}</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <button
                className="bg-transparent border-1 border-[hsl(226,11%,37%)] py-1 px-3 rounded-3xl hover:bg-[hsl(3,77%,44%)] hover:text-[hsl(200,60%,99%)] font-semibold hover:border-none text-[hsl(227,75%,14%)]  focus:bg-[hsl(0,0%,93%)] dark:text-[hsl(200,60%,99%)] dark:hover:hover:bg-[hsl(3,86%,64%)] dark:hover:text-[hsl(227,75%,14%)] dark:focus:bg-[hsl(226,11%,37%)]"
                onClick={() => deleteExtension(extension.name)}
              >
                Remove
              </button>
              <label className="toggle">
                <input
                  type="checkbox"
                  checked={extension.isActive}
                  onChange={() => updateActive(extension.name)}
                  className="checkboxInput"
                />
                <span className="slider round" tabIndex="0"></span>
              </label>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Extensions;
