import { useRef, useState } from "react";
import { apiCall } from "../../services/apiService";
import { setToken, setUser } from "../../utils/cache";
import { useNavigate } from "react-router";

export default function LoginForm() {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (emailRef.current.value && passwordRef.current.value) {
      try {
        const endpoint = isLogin ? "login" : "register";
        const resp = await apiCall(
          `http://localhost:3000/${endpoint}`,
          "post",
          {
            email: emailRef.current.value,
            password: passwordRef.current.value,
          }
        );
        setToken(resp.accessToken);
        setUser(JSON.stringify(resp.user)); /// to string
        // JSON.parse(something) // to object
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="container">
      <div
        className="row d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="col-5">
          <div className="card">
            <div className="card-header">
              <h1>{isLogin ? "Log in" : "Register"}</h1>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input type="email" className="form-control" ref={emailRef} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    ref={passwordRef}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            <div className="card-footer">
              <span
                className="text-primary"
                style={{
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Not register yet ?" : "Login"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
