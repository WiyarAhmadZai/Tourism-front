import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex justify-center mb-8">
        <a href="https://vite.dev" target="_blank" className="mx-4">
          <img src={viteLogo} className="h-16 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className="mx-4">
          <img src={reactLogo} className="h-16 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa]" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold text-center mb-8">Vite + React</h1>
      <div className="p-8 max-w-md mx-auto text-center bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg">
        <button 
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Edit <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-center mt-8 text-gray-500 dark:text-gray-400">
        Click on the Vite and React logos to learn more
      </p>
      <p className="text-center mt-8 text-blue-900 dark:text-gray-400">
        the text should be blue 
      </p>
    </>
  )
}

export default App