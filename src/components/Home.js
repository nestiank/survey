import '../style/Misc.css'

function Home() {
  const logout = () => {
    localStorage.removeItem("userNickname");
    window.location.reload();
  }

  const userNickname = localStorage.getItem("userNickname");

  return (
    <div>
      <h3>{userNickname}님 환영합니다!</h3>
      <button className="logoutButton" onClick={logout}>로그아웃</button>
    </div>
  );
}

export default Home;
