import { Route, Routes } from "react-router-dom"
import MainLayout from "./components/MainLayout"
import Dashboard from "./pages/Dashboard"

function App() {
  return(
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path="/" element={<Dashboard/>} ></Route>
      </Route>
    </Routes>
  )
}
export default App