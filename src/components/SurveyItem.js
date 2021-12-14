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
        <p>설문조사</p>
        <p>설문 번호: {surveyID}</p>
        <p><strong>유효하지 않은 설문입니다.</strong></p>
        <Link to="/survey"><p>설문 목록 보기</p></Link>
      </div>
    );
  }
  else {
    return (
      <div>
        <p>설문조사</p>
        <p>설문 번호: {surveyID}</p>
        <p>설문 제목: {survey.title}</p>
        <p>선택지 #1: {survey.leftPoll}</p>
        <p>선택지 #2: {survey.rightPoll}</p>
        <Link to="/survey"><p>설문 목록 보기</p></Link>
      </div>
    );
  }
}

export default SurveyItem;
