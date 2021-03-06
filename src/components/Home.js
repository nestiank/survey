import { signOut } from 'firebase/auth';
import '../style/Misc.css'

function Home({ auth, user, logout }) {
  const Logout = () => {
    signOut(auth);
    logout();
    window.location.reload();
  }

  const userEmail = user.user.providerData[0].email;
  // to-do...
  // const userNickname = SomehowDBGetNickname(userEmail);
  const userNickname = "nestiank";

  return (
    <div>
      <h3>{userNickname}님 환영합니다!</h3>
      <h4>이메일 주소: {userEmail}</h4>
      <button className="logoutButton" onClick={Logout}>로그아웃</button>
    </div>
  );
}

export default Home;
