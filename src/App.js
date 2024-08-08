import About from "./container/pages/AboutUs";
import Services from "./container/pages/Services";
import Home from "./container/pages/Home";
import Error404 from "container/errors/Error404";
import { Route, Router, Routes } from "react-router-dom";
import { addUser } from "./redux/userSlice";

import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {

  const dispatch = useDispatch()
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => dispatch(addUser(data)))
      .catch((err) => console.log(err));
  }, []);

  


  
  return (
    <div className="text-3xl font-bold underline">
       <Routes>
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<Home />} />
       </Routes>
    </div>
  )
}

export default App;
      