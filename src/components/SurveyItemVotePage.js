import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom'
import { GetSurveyItem, PickSurveyItem } from '../scripts/database'

function SurveyItemVotePage() {
  const { surveyID } = useParams();

  // 설문 내용 가져오기
  const [survey, setSurvey] = useState();
  useEffect(() => {
    GetSurveyItem(surveyID).then((surveyItem) => {
      setSurvey(surveyItem);
    }).catch((error) => {
      console.error(error);
    });
  }, [surveyID]);

  // 투표 처리 및 결과 페이지로 리다이렉트
  const navigate = useNavigate();
  const PickLeft = () => {
    PickSurveyItem(surveyID, "left").then(() => {
      const url = "/result/" + surveyID;
      navigate(url);
    }).catch((error) => {
      console.error(error);
    });
  }
  const PickRight = () => {
    PickSurveyItem(surveyID, "right").then(() => {
      const url = "/result/" + surveyID;
      navigate(url);
    }).catch((error) => {
      console.error(error);
    });
  }

  if (survey) {
    // Survey ID is valid
    return (
      <div>
        <p>설문조사</p>
        <p>설문 번호: {surveyID}</p>
        <p>설문 제목: {survey.title}</p>
        <p className="link" onClick={PickLeft}>선택지 #1: {survey.leftPoll}</p>
        <p className="link" onClick={PickRight}>선택지 #2: {survey.rightPoll}</p>
        <Link to="/surveylist"><p>설문 목록 보기</p></Link>
      </div>
    );
  }
  else if (survey === undefined) {
    // Query did not return survey yet
    return (
      <div>
        <p>설문조사</p>
        <p>설문 번호: {surveyID}</p>
        <p><strong>설문 정보를 불러오고 있습니다.</strong></p>
        <Link to="/surveylist"><p>설문 목록 보기</p></Link>
      </div>
    );
  }
  else if (survey === null) {
    // Survey ID is invalid
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
