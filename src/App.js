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
  const currentUser = localStorage.getItem("userNickname");

  try {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={currentUser ? <Home /> : <LoginPage />} />
          <Route path="/survey" element={currentUser ? <SurveyList /> : <LoginNeeded />} />
          <Route path="/survey/:surveyID" element={currentUser ? <SurveyItem /> : <LoginNeeded />} />
          <Route path="/admin" element={currentUser ? <Admin /> : <LoginNeeded />} />
          <Route path="/*" element={currentUser ? <Page404 /> : <LoginNeeded />} />
        </Routes>
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
