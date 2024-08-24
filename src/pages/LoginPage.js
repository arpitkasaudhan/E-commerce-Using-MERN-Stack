import Login from "../features/auth/components/Login";

function LoginPage() {
  return (
    <div
      style={{
        backgroundImage: `url('/images/online_shopping_2.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Login />
    </div>
  );
}

export default LoginPage;
