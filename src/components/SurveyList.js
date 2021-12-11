import { Link } from "react-router-dom";

function SurveyList() {
  const somehowSurveyListGetFunction = () => {
    return [
      {
        "id": 1,
        "title": "surveyTitleSample#1",
        "leftPoll": "O",
        "rightPoll": "X"
      },
      {
        "id": 2,
        "title": "surveyTitleSample#2",
        "leftPoll": "O",
        "rightPoll": "X"
      },
      {
        "id": 3,
        "title": "surveyTitleSample#3",
        "leftPoll": "O",
        "rightPoll": "X"
      }
    ];
  }
  const sampleSurveys = somehowSurveyListGetFunction();
  
  return (
    <ul>
      {sampleSurveys.map(
        survey => (
          <li>
            <Link to={`/survey/${survey.id}`}>{survey.title} - {survey.leftPoll} vs. {survey.rightPoll}</Link>
          </li>
        )
      )}
    </ul>
  );
}

export default SurveyList;
