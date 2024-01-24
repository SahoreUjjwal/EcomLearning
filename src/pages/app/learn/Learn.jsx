import React from "react";
import style from "./Learn.module.css";
import coursesData from "../../../data/courses.json";
// Task4: Import all the required elements from the react-router-dom
import { useParams,Link,Outlet } from "react-router-dom";
function Learn() {
  const {itemId} = useParams();
  const courseDetails = coursesData.find((course)=>course.id == itemId);
  return (
    <div className={style.courses_container}>
      <div className={style.top_head}>
        {/* Task4: Create Link to go back to the Courses page */}
       <Link to={`/courses/${courseDetails.id}`}>
        <h2 className={style.back}>{"<<"}</h2>
       </Link>
        

        {/* Task4: Title of the Course */}
        <h1 className={style.heading}>{courseDetails.title}</h1>
      </div>
      <div className={style.chapter_box}>
        <div className={style.chapters}>
          <h1>Chapters</h1>
          <hr />
          <ul>{/*Task4: List of Chapters must be rendered here  */}
              {courseDetails.chapters.map((chap)=>(<Link to={`chapter/${chap.chapter}`}><li>{chap.description}</li></Link>))}
          </ul>
        </div>
      
      <div className={style.courses}>
        {/**Task5:  Chapter Details Must be rendered here */}
          <Outlet context ={{...courseDetails}}/>
      </div>
    </div>
</div>
  );
}

export default Learn;
