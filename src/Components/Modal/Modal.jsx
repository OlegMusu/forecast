import { useEffect, useState } from "react";
import {
  Backdrop,
  ModalWindow,
  FormContainer,
} from "./Modal.styled";

export default function Modal({
  close,
  saveUser,
  loginUser,
  isLogin,
  setIsLogin,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    login: "",
  });

  useEffect(() => {
    const escape = (e) => {
      if (e.key === "Escape") {
        close();
      }
    };

    document.addEventListener("keydown", escape);

    return () => {
      document.removeEventListener("keydown", escape);
    };
  }, [close]);

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      close();
    }
  };

  const clearErrors = () => {
    setErrors({
      name: "",
      email: "",
      password: "",
      login: "",
    });
  };

  const switchToLogin = (e) => {
    e.preventDefault();

    clearErrors();
    setName("");
    setEmail("");
    setPassword("");

    setIsLogin(true);
  };

  const switchToSignup = (e) => {
    e.preventDefault();

    clearErrors();
    setName("");
    setEmail("");
    setPassword("");

    setIsLogin(false);
  };

  const register = (e) => {
    e.preventDefault();

    const newErrors = {
      name: "",
      email: "",
      password: "",
      login: "",
    };

    if (!name.trim()) {
      newErrors.name = "Please enter your name";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (password.length < 6) {
      newErrors.password =
        "Password must contain at least 6 characters";
    }

    setErrors(newErrors);

    if (
      newErrors.name ||
      newErrors.email ||
      newErrors.password
    ) {
      return;
    }

    const existingAccount = JSON.parse(
      localStorage.getItem("account")
    );

    if (existingAccount) {
      setErrors({
        ...newErrors,
        email: "An account with this email already exists.",
      });

      return;
    }

    const newUser = {
      name: name.trim(),
      email: email.trim(),
      password,
      avatar: null,
    };

    saveUser(newUser);
    close();
  };

  const login = (e) => {
    e.preventDefault();

    const account = JSON.parse(
      localStorage.getItem("account")
    );

    if (!account) {
      setErrors({
        name: "",
        email: "",
        password: "",
        login: "Account not found. Please create an account first.",
      });

      return;
    }

    if (
      email.trim() !== account.email ||
      password !== account.password
    ) {
      setErrors({
        name: "",
        email: "",
        password: "",
        login: "Incorrect email or password.",
      });

      return;
    }

    loginUser(account);
    close();
  };

  const handleSubmit = isLogin ? login : register;

  return (
    <Backdrop onClick={handleBackdropClick}>
      <ModalWindow>
        <h2>{isLogin ? "Log in" : "Sign up"}</h2>

        <FormContainer onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <label htmlFor="username">
                Username
              </label>

              <input
                id="username"
                type="text"
                placeholder="Username"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setErrors((prev) => ({
                    ...prev,
                    name: "",
                  }));
                }}
              />

              {errors.name && (
                <p className="error-text">
                  {errors.name}
                </p>
              )}
            </>
          )}

          <label htmlFor="email">
            E-Mail
          </label>

          <input
            id="email"
            type="text"
            placeholder="E-Mail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors((prev) => ({
                ...prev,
                email: "",
                login: "",
              }));
            }}
          />

          {errors.email && (
            <p className="error-text">
              {errors.email}
            </p>
          )}

          <label htmlFor="password">
            Password
          </label>

          <input
            id="password"
            type="password"
            placeholder="Password"
            maxLength={13}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrors((prev) => ({
                ...prev,
                password: "",
                login: "",
              }));
            }}
          />

          {errors.password && (
            <p className="error-text">
              {errors.password}
            </p>
          )}

          {errors.login && (
            <p className="error-text">
              {errors.login}
            </p>
          )}

          <button type="submit">
            {isLogin ? "Log in" : "Sign up"}
          </button>

          <p className="footer-text">
            {isLogin ? (
              <>
                Don't have an account?{" "}
                <a href="#" onClick={switchToSignup}>
                  Create account
                </a>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <a href="#" onClick={switchToLogin}>
                  Log in
                </a>
              </>
            )}
          </p>
        </FormContainer>
      </ModalWindow>
    </Backdrop>
  );
}
