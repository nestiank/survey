import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import Home from './components/Home';
import SurveyList from './components/SurveyList';
import SurveyItemVotePage from './components/SurveyItemVotePage';
import SurveyItemResultPage from './components/SurveyItemResultPage';
import Admin from './components/Admin';
import Page404 from './components/Page404';
import LoginNeeded from './components/LoginNeeded';
import Error from './components/Error'

function App() {
  const [userCredential, setUserCredential] = useState();
  try {
    const globalAuth = getAuth();
    onAuthStateChanged(globalAuth, (user) => {
      if (user) {
        setUserCredential(user);
      }
    })
    return (
      <div className="App">
        <Header />
        {userCredential ?
          <Routes>
            <Route path="/" element={<Home auth={globalAuth} user={userCredential} logout={setUserCredential} />} />
            <Route path="/surveylist" element={<SurveyList />} />
            <Route path="/survey/:surveyID" element={<SurveyItemVotePage />} />
            <Route path="/result/:surveyID" element={<SurveyItemResultPage />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/*" element={<Page404 />} />
          </Routes> :
          <Routes>
            <Route path="/" element={<LoginPage auth={globalAuth} login={setUserCredential} />} />
            <Route path="/*" element={<LoginNeeded />} />
          </Routes>
        }
      </div>
    );
  } catch (e) {
    console.log(e);
    return (
      <div className="App">
        <Header />
        <Error />
      </div>
    )
  }
}

export default App;
