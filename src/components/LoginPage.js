import { useState } from "react";

function LoginPage({ login }) {
  const [id, setID] = useState();
  const [pw, setPW] = useState();

  const loginFunction = () => {
    // 인증 진행
    const somehowLoginLogic = pw === "pw";
    if (somehowLoginLogic) {
      login(id);
    }
    else {
      window.alert("비밀번호가 틀렸습니다.");
    }
  }

  return (
    <div>
      <p>Login Page</p>
      <form onSubmit={loginFunction} method="post" className="login-form">
        <div>
          <div>
          <div style={{display: 'inline'}}>ID: </div>
            <label for="id">
              <input type="text" value={id} onChange={e => setID(e.target.value)} required placeholder="ID를 입력하세요."></input>
            </label>
          </div>
          <div>
            <div style={{display: 'inline'}}>PW: </div>
            <label for="password">
              <input type="text" value={pw} onChange={e => setPW(e.target.value)} required placeholder="비밀번호를 입력하세요."></input>
            </label>
          </div>
          <div>
            <input type="submit" value="로그인" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
