

import classes from './ResearchOutput.module.css';

export default function ResearchOutput(props) {
  return (
    <div >
      <div>
        <h3>Title<span>{props.title}</span> </h3>
        <p>a/an {props.outputType}</p>
        <p>by {props.author} and {props.co_author}</p>
        <p>published in {props.yearPublished}</p>
      </div>

      <div>
        <button>Download</button>
        <button>Edit</button>
      </div>
    </div>
  );
}
