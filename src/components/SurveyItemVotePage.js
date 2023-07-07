import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom'
import { GetSurveyItem, SomehowPickLeft, SomehowPickRight } from '../scripts/database'

function SurveyItemVotePage() {
  const { surveyID } = useParams();

  // 설문 내용 가져오기
  const [survey, setSurvey] = useState();
  useEffect(() => {
    GetSurveyItem(surveyID).then((surveyItem) => {
      setSurvey(surveyItem);
    }).catch((error) => {
      console.error(error)
    });
  }, [surveyID]);

  // 투표 처리 및 결과 페이지로 리다이렉트
  const navigate = useNavigate();
  const PickLeft = () => {
    SomehowPickLeft(surveyID);

    const url = "/result/" + surveyID
    navigate(url);
  }
  const PickRight = () => {
    SomehowPickRight(surveyID);

    const url = "/result/" + surveyID
    navigate(url);
  }

  if (survey) {
    return (
      <div>
        <p>설문조사</p>
        <p>설문 번호: {surveyID}</p>
        <p>설문 제목: {survey.title}</p>
        <p onClick={PickLeft}>선택지 #1: {survey.leftPoll}</p>
        <p onClick={PickRight}>선택지 #2: {survey.rightPoll}</p>
        <Link to="/surveylist"><p>설문 목록 보기</p></Link>
      </div>
    );
  }
  else {
    return (
      <div>
        <p>설문조사</p>
        <p>설문 번호: {surveyID}</p>
        <p><strong>유효하지 않은 설문 번호입니다.</strong></p>
        <Link to="/surveylist"><p>설문 목록 보기</p></Link>
      </div>
    );
  }
}

export default SurveyItemVotePage;
