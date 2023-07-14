import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/'
    
    login("Onil Blanco");
    navigate('/marvel', {
      replace: true,
    });
  };

  return (
    <div className="m-8">
      <h1>Login</h1>
      <hr />

      <button onClick={handleLogin} className="btn btn-warning  btn-outline">
        Login
      </button>
    </div>
  );
};

export default LoginPage;
