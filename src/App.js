import React from "react"
import Navbar from "./Components/Navbar"
import Filter from "./Components/Filter"
import Cards from "./Components/Cards"
import Spinner from "./Components/Spinner.jsx"
 
import { apiUrl, filterData } from "./data.js";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const App = () => {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading]  = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  
  async function fetchData() {                //wait for other event to occur
    setLoading(true);                       
    try {
      let response = await fetch(apiUrl);          //wait and return a promise
      let output = await response.json();
      //save data into a variable
      setCourses(output.data);
     }
    catch(error) {
      toast.error("wrong");
    }
    setLoading(false);

  }
 
  useEffect ( () => {                         //any updation, it'll render
      fetchData();                
        
  }, [])
 
 
  return (
       <div className="min-h-screen flex-col flex bg-bgDark ">
        <div>
        <Navbar />
        </div>

    <div className="">
        <div>
        <Filter
          filterData = {filterData}
            category={category}
            setCategory={setCategory}
          />
        </div>
        <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
          {
            loading ? (<Spinner/>) : (<Cards courses={courses} 
              category={category}
            />)
          }
        </div>
          
      </div>

     </div>
        
  );
};

export default App;