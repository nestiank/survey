import { CreateSurveyItem } from '../scripts/database'

function Admin() {
  const CreateSurvey = () => {
    const surveyID = document.getElementById("surveyID").value;
    const title = document.getElementById("surveyTitle").value;
    const leftPoll = document.getElementById("leftPoll").value;
    const rightPoll = document.getElementById("rightPoll").value;
    const survey = {
      "id": surveyID,
      "title": title,
      "leftPoll": leftPoll,
      "rightPoll": rightPoll,
      "leftVotes": 0,
      "rightVotes": 0
    };
    CreateSurveyItem(survey);
  }

  // TO-DO: 관리자만 관리자 페이지에 접속할 수 있도록 제한하기

  return (
    <div>
      <h3>관리자 페이지</h3>
      <ul>
        <li>C: 새로운 설문 생성</li>
        <div>
          <p>설문 ID</p>
          <input type="number" id="surveyID"/>
          <p>설문 제목</p>
          <input type="text" id="surveyTitle"/>
          <p>선택지 1</p>
          <input type="text" id="leftPoll"/>
          <p>선택지 2</p>
          <input type="text" id="rightPoll"/>
          <p>제출하기</p>
          <input type="button" value="제출" name="submit" onClick={CreateSurvey}/>
        </div>
        <li>TO-DO</li>
        <ul>
          <li>R: 고급 설문 목록</li>
          <li>U: 설문 수정</li>
          <li>D: 설문 삭제</li>
          <li>회원 명단</li>
          <li>서비스 통계</li>
        </ul>
      </ul>
    </div>
  );
}

export default Admin;
