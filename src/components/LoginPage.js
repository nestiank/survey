import NaverLogin from 'react-naver-login';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import '../style/Misc.css'

function LoginPage({ auth, login }) {
  const ProceedNaverLogin = async (email, nickname) => {
    // 네이버 로그인이 지속되면 그만이므로 Firebase 세션은 형식적으로 구동
    const mock_password = "password";

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, mock_password);
      updateProfile(auth.currentUser, {
        displayName: nickname
      });
      login(userCredential);
    } catch (e) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, mock_password);
        updateProfile(auth.currentUser, {
          displayName: nickname
        });
        login(userCredential);
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div>
      <h3>로그인</h3>
      <NaverLogin
        clientId="Rioh_LQASaofKvv7eelc"
        callbackUrl="https://survey.nestian.kr"
        render={(props) => <div onClick={props.onClick}>
          <img className="loginButton" src="loginButtonNaver.png" alt="네이버 로그인"/>
        </div>}
        onSuccess={(naverUser) => ProceedNaverLogin(naverUser.email, naverUser.nickname)}
        onFailure={(result) => console.error(result)}
      />
    </div>
  );
}

export default LoginPage;
