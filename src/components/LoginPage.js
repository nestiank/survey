import NaverLogin from 'react-naver-login';
import '../style/Misc.css'

function LoginPage({ login }) {
  return (
    <div>
      <p>로그인</p>
      <NaverLogin
        clientId="Rioh_LQASaofKvv7eelc"
        callbackUrl="https://nestiank.github.io/survey/"
        render={(props) => <div onClick={props.onClick}>
          <img className="loginButton" src="loginButtonNaver.png" alt="네이버 로그인"/>
        </div>}
        onSuccess={(naverUser) => login(naverUser.email)}
        onFailure={(result) => console.error(result)}
      />
    </div>
  );
}

export default LoginPage;
