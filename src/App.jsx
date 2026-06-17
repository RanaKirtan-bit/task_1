import React,{useState} from 'react'

const App = () => {
  const arr = [1,2,3,4,-1,-3]
  const [buttons, setButtons] = useState(
    arr.map((value) => [
      {
        value: value,
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
      const newVal = newCount % 2 === 1 ? activeBtn.value - 1 : activeBtn.value + 1;

      newButton[column] = [...newButton[column], 
        {
          value: newVal,
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
                  className={`border text-2xl p-2 rounded-xl w-12 ${b.disabled ? "bg-gray-500" : "bg-blue-600"}`}
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
