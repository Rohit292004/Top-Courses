 import React, { useState } from 'react'
 import Card from "./Card";

 const Cards = (props) => {

   let courses = props.courses;
   let category = props.category;
   const [likedCourses, setLikedCourses] = useState([]);




  //   if (!courses) {                     //baad me added
  //   return [];                                      // Return an empty array if courses is null or undefined
  // }
    
                                            // return you a list of all courses recieved from the api response

    function getCourses () {
      if(category === "All") {
        let allCourses = [];
        Object.values(courses).forEach(array => {
            array.forEach(courseData  => {
                allCourses.push(courseData);
            })
        })
        return allCourses;
      }
      else {
        //mai sirf specific category ka array(data) pass karunga
        return courses[category];
      }
        
    }

   return (
     <div className="flex flex-wrap justify-center gap-4 mb-4">
        {
        getCourses().map( (course) => 
        (
        <Card key={course.id} 
        course={course} 
        likedCourses={likedCourses} 
        setLikedCourses={setLikedCourses}/>       
        )) 
        } 
     </div>         
          ) 
 }     
 export default Cards






 