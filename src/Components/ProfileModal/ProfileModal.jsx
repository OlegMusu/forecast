import { useEffect, useState } from "react";
import OpenEyes from "../../Images/header/open-eyes.svg";
import CloseEyes from "../../Images/header/close-eyes.svg";
import DeleteAccount from "../../Images/forecast/delete.svg";
import {
  Backdrop,
  Modal,
  ModalTitle,
  FormGroup,
  PasswordInput,
  EyeButton,
  SubmitButton,
  DeleteButton,
  InputWrapper,
} from "./ProfileModal.styled";

export default function ProfileModal({ user, close, saveUser, deleteAccount }) {
  const [name, setName] = useState(user.name);
  const [password, setPassword] = useState(user.password);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const escape = (e) => {
      if (e.key === "Escape") close();
    };

    document.addEventListener("keydown", escape);

    return () => document.removeEventListener("keydown", escape);
  }, [close]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      close();
    }
  };

  const changeAvatar = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      saveUser({
        ...user,
        avatar: reader.result,
      });
    };

    reader.readAsDataURL(file);
  };

  const save = () => {
  if (!name.trim()) {
    setError("Please enter your name");
    return;
  }

  if (password.length < 6) {
    setError("Password must contain at least 6 characters");
    return;
  }

  saveUser({
    ...user,
    name: name.trim(),
    password,
  });

  close();
};

  return (
    <Backdrop onClick={handleBackdropClick}>
      <Modal>
        <ModalTitle>Settings</ModalTitle>

        <FormGroup>
          Change the avatar
          <input type="file" accept="image/*" onChange={changeAvatar} />
        </FormGroup>

        <FormGroup>
          <label>Username</label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="email">E-Mail</label>
          <input type="text" value={user.email} disabled />
        </FormGroup>

        <FormGroup>
          <label>Password</label>
          <InputWrapper>
            <PasswordInput
              type={showPassword ? "text" : "password"}
              maxLength={13}
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
            />
            <EyeButton
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              <img
                src={showPassword ? OpenEyes : CloseEyes}
                alt="Toggle password"
              />
            </EyeButton>
          </InputWrapper>
        </FormGroup>

        {error && <p className="error-text">{error}</p>}

        <SubmitButton onClick={save}>Save</SubmitButton>

        <DeleteButton onClick={deleteAccount} type="button">
          <img src={DeleteAccount} alt="Delete account" />
        </DeleteButton>
      </Modal>
    </Backdrop>
  );
}
