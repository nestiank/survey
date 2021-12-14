import NaverLogin from 'react-naver-login';
import '../style/Misc.css'

function LoginPage() {
  const somehowDBInsertNickname = (email, nickname) => {
    // to-do...
    return true;
  };
  const login = ( email ) => {
    // to-do...
    // const nickname = somehowDBGetNickname(email);
    const nickname = "nestiank";
    if (nickname) {
      localStorage.setItem("userNickname", nickname);
    }
    else {
      while (true) {
        const nicknameCandidate = prompt('새로 사용할 닉네임을 입력해주세요');
        const isNicknameAvailable = somehowDBInsertNickname(email, nicknameCandidate);
        if (isNicknameAvailable) {
          localStorage.setItem("userNickname", nicknameCandidate);
          break;
        }
        else {
          window.alert("사용할 수 없는 닉네임입니다");
        }
      }
    }

    window.location.reload();
  };

  return (
    <div>
      <p>로그인</p>
      <NaverLogin
        clientId="Rioh_LQASaofKvv7eelc"
        callbackUrl="https://nestiank-survey.firebaseapp.com/"
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
