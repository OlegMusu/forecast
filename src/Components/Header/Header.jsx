import { useState, useEffect } from "react";
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
  ThemeToggleSlider,
  MenuButton,
  MobileMenu,
} from "./Header.styled";

export default function Header() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [modal, setModal] = useState(false);
  const [profileModal, setProfileModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isFloating, setIsFloating] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 80) {
        setIsFloating(true);
      } else {
        setIsFloating(false);
      }

      const diff = currentScrollY - lastScrollY;

      document.documentElement.style.setProperty("--scroll-diff", `${diff}px`);

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      document.documentElement.classList.add("dark-theme");
    } else {
      document.documentElement.classList.remove("dark-theme");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

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
    setIsMenuOpen(false);
  };

  const openProfile = () => {
    if (user) {
      setProfileModal(true);
    }

    setIsMenuOpen(false);
  };

  const handleMobileLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <HeaderStyle $isFloating={isFloating} $theme={theme}>
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
            <ThemeToggleSlider
              type="button"
              onClick={toggleTheme}
              $theme={theme}
              aria-label="Toggle theme"
            >
              <div className="toggle-thumb" />
            </ThemeToggleSlider>

            <div className="desktop-user-controls">
              {user ? (
                <DeleteUser onClick={deleteUser}>Leave</DeleteUser>
              ) : (
                <OpenSignup onClick={openSignup}>
                  {isLogin ? "Log in" : "Sign Up"}
                </OpenSignup>
              )}

              <button
                onClick={() => user && setProfileModal(true)}
                className="profile-button"
                type="button"
              >
                <img src={user?.avatar || userAvatar} alt="Profile" />
              </button>
            </div>

            <MenuButton
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              $isOpen={isMenuOpen}
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
            >
              <span />
              <span />
              <span />
            </MenuButton>
          </UserRegistration>
        </HeaderContainer>

        {isMenuOpen && (
          <MobileMenu $theme={theme}>
            <a href="#" onClick={handleMobileLinkClick}>
              Who we are
            </a>

            <a href="#" onClick={handleMobileLinkClick}>
              Contacts
            </a>

            <a href="#" onClick={handleMobileLinkClick}>
              Menu
            </a>

            <button
              onClick={() => user && setProfileModal(true)}
              className="profile-button"
              type="button"
            >
              <img src={user?.avatar || userAvatar} alt="Profile" />
            </button>

            {!user && (
              <button type="button" onClick={openSignup}>
                Sign Up
              </button>
            )}

            {user && (
              <>
                <button type="button" onClick={openProfile}>
                  Profile
                </button>

                <button
                  type="button"
                  onClick={() => {
                    deleteUser();
                    setIsMenuOpen(false);
                  }}
                >
                  Leave
                </button>
              </>
            )}
          </MobileMenu>
        )}
      </HeaderStyle>

      {modal && (
        <Modal
          close={() => setModal(false)}
          saveUser={saveUser}
          loginUser={loginUser}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          theme={theme}
        />
      )}

      {profileModal && (
        <ProfileModal
          user={user}
          close={() => setProfileModal(false)}
          saveUser={saveUser}
          deleteAccount={deleteAccount}
          theme={theme}
        />
      )}
    </>
  );
}
