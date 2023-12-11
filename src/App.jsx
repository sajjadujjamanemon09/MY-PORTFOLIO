import { Outlet } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout/MainLayout";


function App() {

  return (
    <div className="font-poppins bg-teal-800">
    <MainLayout>
      <Outlet></Outlet>
    </MainLayout>
    </div>
  )
}

export default App;
