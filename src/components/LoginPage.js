import NaverLogin from 'react-naver-login';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import '../style/Misc.css'

function LoginPage({ auth, login }) {
  const ProceedNaverLogin = async (email, nickname) => {
    // 네이버 계정에 기반하여 동작하므로 Firebase 세션에 비밀번호를 저장하지 않음
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
        clientId={process.env.REACT_APP_NAVER_LOGIN_CLIENTID}
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
