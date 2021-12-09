function Home({ userID, logout }) {
  const logoutFunction = () => {
    // 인증 해제 진행
    logout(null);
  }

  return (
    <div>
      <p>Home Page</p>
      <p>User: {userID}</p>
      <button onClick={logoutFunction}>로그아웃</button>
    </div>
  );
}

export default Home;
