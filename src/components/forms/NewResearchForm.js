
import React, { useState, useEffect } from "react";
import axios from "axios";

import classes from './NewReportForm.module.css';


function NewResearchForm(){

  const [outputType, setOutputType] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [co_author, setCoAuthor] = useState('');
  const [yearPublished, setYearPublished] = useState();

  const submitOutput = () => {
    alert('ddddd');
    axios.post('http://localhost:8000/researchOutputss',
     {
      outputType: outputType,
      title: title,
      author: author,
      co_author: co_author,
      yearPublished: yearPublished
    }).then((response) => {
      console("Successfull Creation");
    })
  };

  return(
    <div>

      <div>
        <form className={classes.form}>
        <div>
              <label htmlFor="outputType">Choose a Research Output Type</label>
              <select id="outputType" onChange={(e) => {setOutputType(e.target.value);}}
              >
                <option value="Book">Book</option>
                <option value="Book Chapter">Book Chapter</option>
                <option value="Article in Periodicall">Article in Periodical</option>
                <option value="Journal Article">Journal Article</option>
                <option value="Website">Website</option>
                <option value="patent">Patent</option>
                <option value="Miscellaneous">Miscellaneous</option>
                <option value="Document from Website">Document from Website</option>
                <option value="Sound Recording">Sound Recording</option>
                <option value="Electronic Source">Electronic Source</option>
                <option value="Art">Art</option>
                <option value="Conference Proceedings">Conference Proceedings</option>
                <option value="Film">Film</option>
              </select>
            </div>

            <div>
              <label htmlFor="title">Title</label>
              <input type="text" id="title" onChange={(e) => {setTitle(e.target.value);}} />
            </div>

            <div>
              <label htmlFor="author">Author/Inventor</label>
              <input type="text" id="author" onChange={(e) => {setAuthor(e.target.value);}} />
            </div>

            <div>
              <label htmlFor="co_author">Co-Author</label>
              <input className={classes.align} type="text" id="co_author" onChange={(e) => {setCoAuthor(e.target.value);}} />
            </div>

            <div>
              <label htmlFor="year_published">Year Published</label>
              <input className={classes.align} type="number" id="year_published" onChange={(e) => {setYearPublished(e.target.value);}} />
            </div>

            <div>
               <input type="file" id="file" /> 
              <button type="submit" className={classes.btn} onClick={submitOutput} >Upload Output</button>
            </div>
        </form>
      </div>

    </div>
  );
}

export default NewResearchForm;