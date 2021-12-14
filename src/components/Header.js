import { Link } from 'react-router-dom';
import '../style/Header.css'

function Header() {
  return (
    <div id="header">
      <div id="title">
        <div className="logoWrapper">
          <img id="logo" src="/favicon.ico" alt="로고" />
        </div>
        <div className="center">
          <h2>설문조사 시스템</h2>
          <h4><a href="https://github.com/nestiank/survey/">React 연습용</a></h4>
        </div>
      </div>
      <hr />
      <div>
        <Link to="/">홈</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/survey">목록</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/admin">관리자</Link>
      </div>
      <hr />
    </div>
  );
}

export default Header;
