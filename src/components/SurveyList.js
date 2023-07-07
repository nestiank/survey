import { Link, useNavigate } from 'react-router-dom';
import { SomehowGetSurveyList } from '../scripts/database'

function SurveyList() {
  const samples = SomehowGetSurveyList();

  const navigate = useNavigate();
  const Search = () => {
    const url = "/survey/" + document.getElementById('surveySearch').value;
    navigate(url);
  };
  
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
        {samples ?
          samples.map(
            survey => (
              <li key={survey.id}>
                <Link to={`/survey/${survey.id}`}>설문 #{survey.id}: {survey.title}</Link>
              </li>
            )
          ) :
          <li>설문이 없습니다.</li>
        }
      </ul>
    </div>
  );
}

export default SurveyList;
