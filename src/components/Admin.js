import { CreateSurveyItem, DeleteSurveyItem } from '../scripts/database'

function Admin() {
  const CreateSurvey = () => {
    const surveyID = document.getElementById("surveyCreateID").value;
    const title = document.getElementById("surveyCreateTitle").value;
    const leftPoll = document.getElementById("surveyCreateLeftPoll").value;
    const rightPoll = document.getElementById("surveyCreateRightPoll").value;
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
  const DeleteSurvey = () => {
    const surveyID = document.getElementById("surveyDeleteID").value;
    DeleteSurveyItem(surveyID);
  }

  // TO-DO: 관리자만 관리자 페이지에 접속할 수 있도록 제한하기

  return (
    <div>
      <h3>관리자 페이지</h3>
      <ul>
        <li>C: 새로운 설문 생성</li>
        <form action="/create" method="post" onSubmit={(e) => {
          e.preventDefault();
          CreateSurvey();
        }}>
          <input type="text" id="surveyCreateID" placeholder="설문 ID"/>
          <input type="text" id="surveyCreateTitle" placeholder="설문 제목"/>
          <input type="text" id="surveyCreateLeftPoll" placeholder="선택지 1"/>
          <input type="text" id="surveyCreateRightPoll" placeholder="선택지 2"/>
          <input type="submit" id="surveyCreateSubmit" value="설문 생성"/>
        </form>
        <li>D: 설문 삭제</li>
        <form action="/delete" method="post" onSubmit={(e) => {
          e.preventDefault();
          DeleteSurvey();
        }}>
          <input type="text" id="surveyDeleteID" placeholder="설문 ID"/>
          <input type="submit" id="surveyDeleteSubmit" value="설문 삭제"/>
        </form>
        <li>TO-DO</li>
        <ul>
          <li>R: 고급 설문 목록</li>
          <li>U: 설문 수정</li>
          <li>회원 명단</li>
          <li>서비스 통계</li>
        </ul>
      </ul>
    </div>
  );
}

export default Admin;
