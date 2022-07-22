import { useState } from "react";
import { Routes,Route,BrowserRouter as Router } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import ShopState from "./context/ShopState";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Payment from "./pages/Payment";
import Register from "./pages/Register";

function App() {
  const [progress,setProgress] = useState(0);
  
  //We pass this method to each page component and run it to show that loading animation
  const showLoader = () =>{
    setProgress(50);
    setTimeout(()=>{
      setProgress(100);
    },500)
  }
  return (
    <>
      <ShopState>
       <LoadingBar color='orange' className="mt-1" progress={progress} />
        <Router>
         <Routes>
          <Route path="/login" element={<Login showLoader={showLoader}/>}></Route>
          <Route path="/signup" element={<Register showLoader={showLoader}/>}></Route>
          <Route path="/" element={<Payment showLoader={showLoader}/>}></Route>
          <Route path='*' element={<NotFound />} />  
         </Routes>
        </Router>
      </ShopState>
    </>
  );
}

export default App;
