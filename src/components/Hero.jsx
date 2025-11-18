import Button from './Button.jsx'
import Header from './Header.jsx'

const App = () => {
  return (
    <div>
      
      
      <div className='max-w text-center mt-20 py-[8rem]'>
        <h1 className='text-7xl font-bold'>The Best Way To <span className='bg-amber-300 rounded-2xl px-3'>Review</span> Creative Assets!</h1>

        <p className='text-lg my-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure culpa necessitatibus, saepe temporibus ipsa repellendus vitae aperiam amet autem laudantium incidunt illo vero sequi at exercitationem iste voluptatibus, magni cumque.</p>

        <div className='flex justify-center gap-5 my-5'>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-5 rounded" title="Get Started" />
          
        </div>
      
        
        </div>
          
    </div>
  )
}

export default App
