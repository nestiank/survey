import '../style/Header.css'

function Header() {
  return (
    <div id="header">
      <div id="title">
        <div className="logoWrapper">
          <img id="logo" src="favicon.ico" alt="로고" />
        </div>
        <div className="center">
          <h2>설문조사 시스템</h2>
          <h4><a href="https://github.com/nestiank">React 연습용</a></h4>
        </div>
      </div>
      <hr />
      <div>
        <a href="/">홈</a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="/survey">목록</a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="/admin">관리자</a>
      </div>
      <hr />
    </div>
  );
}

export default Header;
