import { Link, useNavigate } from "react-router-dom";

function SurveyList() {
  const SomehowSurveyListGetFunction = () => {
    return [
      {
        "id": 1,
        "title": "설문 샘플 #1",
        "leftPoll": "O",
        "rightPoll": "X"
      },
      {
        "id": 2,
        "title": "설문 샘플 #2",
        "leftPoll": "O",
        "rightPoll": "X"
      },
      {
        "id": 3,
        "title": "설문 샘플 #3",
        "leftPoll": "O",
        "rightPoll": "X"
      }
    ];
  }
  const samples = SomehowSurveyListGetFunction();

  const navigate = useNavigate();
  const Search = () => {
    const url = "/survey/" + document.getElementById('surveySearch').value;
    navigate(url);
  };
  
  return (
    <div>
      <h3>설문 목록</h3>
      <div>
        <h4 style={{display: "inline"}}>설문 검색</h4>
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
                <Link to={`/survey/${survey.id}`}>{survey.title} - {survey.leftPoll} vs. {survey.rightPoll}</Link>
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
