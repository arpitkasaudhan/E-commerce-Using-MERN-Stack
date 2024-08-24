import ForgotPassword from "../features/auth/components/ForgotPassword";
function ForgotPasswordPage() {
    return ( <div
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
        <ForgotPassword></ForgotPassword>
    </div>  );
}

export default ForgotPasswordPage;