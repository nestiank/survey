import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import LoginPage from './components/LoginPage'
import Home from './components/Home'
import SurveyList from './components/SurveyList'
import SurveyItem from './components/SurveyItem'
import Admin from './components/Admin'
import Page404 from './components/Page404'

function App() {
  // 로그인 구현을 위해
  const [currentUser, setCurrentUser] = useState();

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={currentUser ? <Home userID={currentUser} logout={setCurrentUser}/> : <LoginPage login={setCurrentUser} />} />
        <Route path="/survey" element={<SurveyList />} />
        <Route path="/survey/:surveyID" element={<SurveyItem />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
