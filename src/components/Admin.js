import { CreateSurveyItem, UpdateSurveyItem, DeleteSurveyItem, GetSurveyItem } from '../scripts/database'

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
  const ReadSurvey = () => {
    const surveyID = document.getElementById("surveyReadID").value;
    GetSurveyItem(surveyID).then((surveyItem) => {
      if (surveyItem) {
        document.getElementById("surveyUpdateID").value = surveyItem.id;
        document.getElementById("surveyUpdateTitle").placeholder = surveyItem.title;
        document.getElementById("surveyUpdateLeftPoll").placeholder = surveyItem.leftPoll;
        document.getElementById("surveyUpdateRightPoll").placeholder = surveyItem.rightPoll;
      } else if (surveyItem === null) {
        alert("존재하지 않는 설문 ID입니다.");
      }
    }).catch((error) => {
      console.error(error);
    });
  }
  const UpdateSurvey = () => {
    const surveyID = document.getElementById("surveyUpdateID").value;
    const title = document.getElementById("surveyUpdateTitle").value;
    const leftPoll = document.getElementById("surveyUpdateLeftPoll").value;
    const rightPoll = document.getElementById("surveyUpdateRightPoll").value;
    const survey = {
      "id": surveyID,
      "title": title,
      "leftPoll": leftPoll,
      "rightPoll": rightPoll,
      "leftVotes": 0,
      "rightVotes": 0
    };
    UpdateSurveyItem(surveyID, survey);
  }
  const DeleteSurvey = () => {
    const surveyID = document.getElementById("surveyDeleteID").value;
    DeleteSurveyItem(surveyID);
  }

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
        <li>U: 설문 수정</li>
        <form action="/read" method="post" onSubmit={(e) => {
          e.preventDefault();
          ReadSurvey();
        }}>
          <input type="text" id="surveyReadID" placeholder="설문 ID"/>
          <input type="submit" id="surveyReadSubmit" value="설문 불러오기"/>
        </form>
        <form action="/update" method="post" onSubmit={(e) => {
          e.preventDefault();
          UpdateSurvey();
        }}>
          <input type="text" id="surveyUpdateID" placeholder="설문 ID" readOnly={true}/>
          <input type="text" id="surveyUpdateTitle" placeholder="설문 제목"/>
          <input type="text" id="surveyUpdateLeftPoll" placeholder="선택지 1"/>
          <input type="text" id="surveyUpdateRightPoll" placeholder="선택지 2"/>
          <input type="submit" id="surveyUpdateSubmit" value="설문 수정"/>
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
          <li>회원 명단</li>
          <li>서비스 통계</li>
          <li>관리자만 관리자 페이지에 접속할 수 있도록 제한</li>
          <li>CRUD에서 입력값 유효성 검사</li>
        </ul>
      </ul>
    </div>
  );
}

export default Admin;
