import { Link, useParams } from 'react-router-dom'

function SurveyItem() {
  const { surveyID } = useParams();

  const sampleSurvey = {
    "title": "surveyTitleSample",
    "leftPoll": "O",
    "rightPoll": "X"
  };

  // 설문 내용 가져오기
  const somehowSurveyGetFunction = (ID) => {
    if (ID === "1") {
      return sampleSurvey;
    }
    else {
      return null;
    }
  }
  const survey = somehowSurveyGetFunction(surveyID);

  if (!survey) {
    return (
      <div>
        <p>SurveyItem Page</p>
        <p>Survey ID: {surveyID}</p>
        <p>Invalid Survey ID</p>
        <Link to="/survey"><p>Go to Survey List</p></Link>
      </div>
    );
  }
  else {
    return (
      <div>
        <p>SurveyItem Page</p>
        <p>Survey ID: {surveyID}</p>
        <p>Survey Title: {survey.title}</p>
        <p>Survey Poll #1: {survey.leftPoll}</p>
        <p>Survey Poll #2: {survey.rightPoll}</p>
        <Link to="/survey"><p>Go to Survey List</p></Link>
      </div>
    );
  }
}

export default SurveyItem;
