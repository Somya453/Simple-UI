
const Button = (props) => {
    return (
      <main className="p-8">
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-5 rounded">
          {props.title}
        </button>
      </main>
    )
}

export default Button;  
    