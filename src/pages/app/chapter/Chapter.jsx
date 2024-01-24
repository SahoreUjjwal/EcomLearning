import React from "react";
import styles from "./Chapter.module.css";
import { useParams,useOutletContext } from "react-router-dom";


function Chapter() {
  const {chapter} = useParams();
  const courseDetails = useOutletContext();
  const chap = courseDetails.chapters.find((chap)=>chap.chapter == chapter)
  return (
    <div>
      <h1>{chap.title}</h1>
      <h2>{chap.description}</h2>
      <p className={styles.para}>{chap.details}</p>
      <br />
      <br />
      <div className={styles.videos}>
        {/*TASK:5 CHAPTER VIDEO SRC SHOULD BE GIVEN IN THE SOURCE */}
        <iframe
          width="800"
          height="560"
          src={chap.video}
          title="React Video"
          frameborder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Chapter;
