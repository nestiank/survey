import NaverLogin from 'react-naver-login';
import '../style/Misc.css'

function LoginPage() {
  return (
    <div>
      <p>로그인</p>
      <NaverLogin
        clientID="Rioh_LQASaofKvv7eelc"
        callbackUrl="https://nestiank.github.io/survey/login/"
        render={(props) => <div onClick={props.onClick}>
          <img class="loginButton" src="loginButtonNaver.png" alt="네이버 로그인"/>
        </div>}
        onSuccess={(naverUser) => console.log(naverUser)}
        onFailure={(result) => console.error(result)}
      />
    </div>
  );
}

export default LoginPage;
