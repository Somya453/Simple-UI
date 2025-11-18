function App() {
  return (
    <>
      <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Welcome to My Tailwind CSS App</h1>

        <nav className="flex gap-6 text-lg">
          <a href="" className="hover:text-gray-200">Features</a>
          <a href="" className="hover:text-gray-200">Pricing</a>
          <a href="" className="hover:text-gray-200">Contact</a>
          <a href="" className="hover:text-gray-200">About</a>
        </nav>
      </header>

      <main className="p-8">
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-5 rounded">
          Join Us
        </button>
      </main>
    </>
  );
}

export default App;
