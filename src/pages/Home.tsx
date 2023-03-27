import { useState } from 'react';
import {
  Typography,
} from "@mui/material";
import { Counter } from '../features/counter/Counter';
import AddIcon from '@mui/icons-material/Add'

function Home() {

  const [count, setCount] = useState(0)

  return (
    <>
      <Typography className="text-3xl font-bold underline" color="primary.dark" variant="h1">
        Home
      </Typography>
      <div>
        <button
            className="border border-gray-400 rounded px-4 py-2 mt-4 hover:(bg-teal-400 border-teal-400)"
            onClick={() => setCount(count => count + 1)}>
            count is: {count}
        </button>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <AddIcon style={{ textAlign: "center", height: "100px" }} />
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src="/react.svg" className="logo" alt="React logo" />
        </a>
        <AddIcon style={{ textAlign: "center", height: "100px" }} />
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
          <img src="/TS.svg" className="logo" alt="TypeScript logo" />
        </a>
        <AddIcon style={{ textAlign: "center", height: "100px" }} />
        <a href="https://redux.js.org/" target="_blank" rel="noreferrer">
          <img src="/redux.svg" className="logo" alt="Redux logo" />
        </a>
        <AddIcon style={{ textAlign: "center", height: "100px" }} />
        <a href="https://mui.com/" target="_blank" rel="noreferrer">
          <img src="/mui.svg" className="logo" alt="MUI logo" />
        </a>
        <AddIcon style={{ textAlign: "center", height: "100px" }} />
        <a href="https://github.com/theWhiteFox/Vite-React-TS-Redux-boilerplate" target="_blank" rel="noreferrer">
          <img src="/octocat.svg" className="logo" alt="GitHub logo" />
        </a>
      </div>
      <div className="card">
        <Counter />
      </div>
    </>
  )
}
export default Home;
