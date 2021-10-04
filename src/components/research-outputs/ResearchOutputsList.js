

import ResearchOutput from "./ResearchOutput";
// import classes from './ResearchOutputsList.module.css'

function ResearchOutputList(props) {

  return (
    <ul>
      {props.researchOutputs.map((researchOutput) => (
        <ResearchOutput
          id={researchOutput.id}
          title={researchOutput.title}
          subtitle={researchOutput.subtitle}
          datePublished={researchOutput.datePublished}
        />
      ))}
    </ul>
  );

}

export default ResearchOutputList;
