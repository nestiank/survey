import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import Home from './components/Home';
import SurveyList from './components/SurveyList';
import SurveyItem from './components/SurveyItem';
import Admin from './components/Admin';
import Page404 from './components/Page404';
import LoginNeeded from './components/LoginNeeded';
import Error from './components/Error'

function App({ app }) {
  const [userCredential, setUserCredential] = useState();
  try {
    const globalAuth = getAuth(app);
    return (
      <div className="App">
        <Header />
        {userCredential ?
          <Routes>
            <Route path="/" element={<Home auth={globalAuth} user={userCredential} logout={setUserCredential} />} />
            <Route path="/survey" element={<SurveyList />} />
            <Route path="/survey/:surveyID" element={<SurveyItem />} />
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
