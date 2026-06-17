import React,{useState} from 'react'

const App = () => {
  const arr = [1,2,3,4,-1,-3]
  const [buttons, setButtons] = useState(
    arr.map((value) => [
      {
        value: value,
        initialValue: value,
        disabled: false,
        count: 0,
      },
    ])
  );

  const handleClick = (column, btn) => {
    setButtons((prev) => {

      const newButton = [...prev];
      const activeBtn = newButton[column][btn];

      activeBtn.disabled = true;
      const newCount = activeBtn.count + 1;
      const newVal = newCount % 2 === 1 ? activeBtn.initialValue + 1 : activeBtn.initialValue - 1;

      newButton[column] = [...newButton[column], 
        {
          value: newVal,
          initialValue: activeBtn.initialValue,
          disabled: false,
          count: newCount,
        },
      ];
        return [...newButton];
    });
  }

  return (
    <>
      <div className='flex gap-20 p-5 justify-center'>
        {buttons.map((btn, index) => (
          <div key={index} className='flex flex-col gap-5'>
            {
              btn.map((b, i) => (
                <button key={i} disabled = {b.disabled} onClick={() => handleClick(index, i)}
                  className={`border text-2xl font-bold shadow-lg transition-all duration-300 p-2 rounded-xl w-16 h-16  ${b.disabled ? "bg-gray-500 opacity-70 cursor-not-allowed" : "bg-blue-700 text-white hover:bg-blue-500 hover:scale-110 cursor-pointer"}`}
                >
                  {b.value}
                </button>
              ))
            }
          </div>
        ))}
      </div>

    </>
  )
}

export default App
