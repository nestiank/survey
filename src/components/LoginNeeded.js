import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginNeeded() {
  const currentUser = localStorage.getItem("userNickname");
  const navigate = useNavigate();
  useEffect(() => {
    if (!currentUser){
      setTimeout(() => navigate("/"), 3000);
    }
  });

  return (
    <div id="notLoggedIn">
      <h3>로그인이 필요합니다.</h3>
    </div>
  );
}

export default LoginNeeded;
