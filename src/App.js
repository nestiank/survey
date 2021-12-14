import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import Home from './components/Home';
import SurveyList from './components/SurveyList';
import SurveyItem from './components/SurveyItem';
import Admin from './components/Admin';
import Page404 from './components/Page404';
import LoginNeeded from './components/LoginNeeded';
import Error from './components/Error'

function App() {
  try {
    const currentUser = localStorage.getItem("userNickname");
    return (
      <div className="App">
        <Header />
        {currentUser ?
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/survey" element={<SurveyList />} />
            <Route path="/survey/:surveyID" element={<SurveyItem />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/*" element={<Page404 />} />
          </Routes> :
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/*" element={<LoginNeeded />} />
          </Routes>
        }
      </div>
    );
  } catch (e) {
    console.log("localStorage is not working...");
    return (
      <div className="App">
        <Header />
        <Error />
      </div>
    )
  }
}

export default App;
