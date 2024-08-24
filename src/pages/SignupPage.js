import Signup from "../features/auth/components/Signup";

function SignupPage() {
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
        <Signup/>
      </div>
     );
}

export default SignupPage;