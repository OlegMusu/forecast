import { useState } from "react";
import Modal from "../Modal/Modal";
import ProfileModal from "../ProfileModal/ProfileModal";
import userAvatar from "../../Images/header/user.png";
import logo from "../../Images/logo.png";
import {
  HeaderStyle,
  HeaderContainer,
  UserRegistration,
  DeleteUser,
  OpenSignup,
} from "./Header.styled";

export default function Header() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const [modal, setModal] = useState(false);
  const [profileModal, setProfileModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const saveUser = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    localStorage.setItem("account", JSON.stringify(data));
    setUser(data);
  };

  const loginUser = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);
  };

  const deleteUser = () => {
    localStorage.removeItem("user");
    setUser(null);
    setProfileModal(false);
  };

  const deleteAccount = () => {
    localStorage.clear();
    setUser(null);
    setProfileModal(false);
  };

  const openSignup = () => {
    setIsLogin(false);
    setModal(true);
  };

  const openLogin = () => {
    setIsLogin(true);
    setModal(true);
  };

  return (
    <>
      <HeaderStyle>
        <HeaderContainer>
          <a href="#">
            <img src={logo} alt="logo" />
          </a>

          <ul>
            <li>
              <a href="#">Who we are</a>
            </li>

            <li>
              <a href="#">Contacts</a>
            </li>

            <li>
              <a href="#">Menu</a>
            </li>
          </ul>

          <UserRegistration>
            {user ? (
              <DeleteUser onClick={deleteUser}>
                Leave
              </DeleteUser>
            ) : (
              <>
                <OpenSignup onClick={openSignup}>
                  {isLogin ? "Log in" : "Sign Up"}
                </OpenSignup>
              </>
            )}

            <button onClick={() => user && setProfileModal(true)}>
              <img
                src={user?.avatar || userAvatar}
                alt="Profile"
              />
            </button>
          </UserRegistration>
        </HeaderContainer>
      </HeaderStyle>

      {modal && (
        <Modal
          close={() => setModal(false)}
          saveUser={saveUser}
          loginUser={loginUser}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
        />
      )}

      {profileModal && (
        <ProfileModal
          user={user}
          close={() => setProfileModal(false)}
          saveUser={saveUser}
          deleteAccount={deleteAccount}
        />
      )}
    </>
  );
}
