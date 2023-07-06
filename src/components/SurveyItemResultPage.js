import { Link, useParams } from 'react-router-dom'
import { SomehowGetSurveyItem, SomehowGetSurveyResult } from '../scripts/database'

function SurveyItemResultPage() {
  const { surveyID } = useParams();

  // 설문 내용 가져오기
  const survey = SomehowGetSurveyItem(surveyID);

  // 투표 결과 조회
  const result = SomehowGetSurveyResult();

  if (!survey) {
    return (
      <div>
        <p>설문조사</p>
        <p>설문 번호: {surveyID}</p>
        <p><strong>유효하지 않은 설문입니다.</strong></p>
        <Link to="/surveylist"><p>설문 목록 보기</p></Link>
      </div>
    );
  }
  else {
    return (
      <div>
        <p>설문 결과</p>
        <p>설문 번호: {surveyID}</p>
        <p>설문 제목: {survey.title}</p>
        <p>선택지 #1: {survey.leftPoll} / {result.leftPoll}표</p>
        <p>선택지 #2: {survey.rightPoll} / {result.rightPoll}표</p>
        <Link to="/surveylist"><p>설문 목록 보기</p></Link>
      </div>
    );
  }
}

export default SurveyItemResultPage;
