import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GetSurveyItem } from '../scripts/database'

function SurveyList() {
  // 설문 목록 불러오기
  const [surveys, setSurveys] = useState();
  useEffect(() => {
    GetSurveyItem(null).then((surveyList) => {
      setSurveys(surveyList);
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  // 설문 검색
  const navigate = useNavigate();
  const Search = () => {
    const url = "/survey/" + document.getElementById('surveySearch').value;
    navigate(url);
  };

  if (surveys) {
    // One or more surveys exist
    return (
      <div>
        <h3>설문 목록</h3>
        <div>
          <h4 style={{display: "inline"}}>설문 번호 입력</h4>
          &nbsp;&nbsp;
          <form action="#" onSubmit={Search} style={{display: "inline"}}>
            <input id="surveySearch" />
          </form>
        </div>
        <ul>
          {Object.keys(surveys).map(
            key => (
              <li key={surveys[key].id}>
                <Link to={`/survey/${surveys[key].id}`}>설문 #{surveys[key].id}: {surveys[key].title}</Link>
              </li>
            )
          )}
        </ul>
      </div>
    );
  }
  else if (surveys === undefined) {
    // Query did not return survey list yet
    return (
      <div>
        <h3>설문 목록</h3>
        <ul>
          <li>설문 목록을 불러오는 중입니다.</li>
        </ul>
      </div>
    );
  }
  else if (surveys === null) {
    // There is no survey
    return (
      <div>
        <h3>설문 목록</h3>
        <div>
          <h4 style={{display: "inline"}}>설문 번호 입력</h4>
          &nbsp;&nbsp;
          <form action="#" onSubmit={Search} style={{display: "inline"}}>
            <input id="surveySearch" />
          </form>
        </div>
        <ul>
          <li>설문이 없습니다.</li>
        </ul>
      </div>
    );
  }
}

export default SurveyList;
