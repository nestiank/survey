function SurveyList() {
  const somehowSurveyListGetFunction = () => {
    return [
      {
        "title": "surveyTitleSample#1",
        "leftPoll": "O",
        "rightPoll": "X"
      },
      {
        "title": "surveyTitleSample#2",
        "leftPoll": "O",
        "rightPoll": "X"
      },
      {
        "title": "surveyTitleSample#3",
        "leftPoll": "O",
        "rightPoll": "X"
      }
    ];
  }
  const sampleSurveys = somehowSurveyListGetFunction();
  
  return (
    <div>
      {sampleSurveys.map(survey => <div><p>{survey.title} - {survey.leftPoll} vs. {survey.rightPoll}</p></div>)}
    </div>
  );
}

export default SurveyList;
