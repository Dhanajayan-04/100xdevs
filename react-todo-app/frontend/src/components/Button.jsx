
const Button = ({label, btnColor, onClick}) => {
  const colors = { 
    red: "bg-red-500", 
    cyan: "bg-cyan-500", 
    blue: "bg-blue-500", 
    green: "bg-green-500", 
    yellow: "bg-yellow-500" 
  };

  return (
    <button onClick={onClick} className={`${colors[btnColor] || colors.cyan} py-2 px-6 rounded-md text-black font-medium`} >
        {label}
    </button>
  )
}

export default Button