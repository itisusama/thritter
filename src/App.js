import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import NavigationBar from "./components/NavigationBar"
import HostelEleven from "./pages/HostelEleven"

export default function App() {
  return (
    <div className="App container mx-auto text-white">
      <BrowserRouter>
        <NavigationBar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/hostel-11" element={<HostelEleven/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}