import '../style/Misc.css'

function Home({ userID, logout }) {
  const logoutFunction = () => {
    // 인증 해제 진행
    logout(null);
  }
  const somehowGetUserNickname = ({ id }) => {
    return "nestiank";
  }

  const userNickname = somehowGetUserNickname(userID);

  return (
    <div>
      <h3>{userNickname}님 환영합니다!</h3>
      <button className="logoutButton" onClick={logoutFunction}>로그아웃</button>
    </div>
  );
}

export default Home;
