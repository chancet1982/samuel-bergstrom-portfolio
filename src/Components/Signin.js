/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/AuthContext";
import Input from "./Shared/Input";
import Label from "./Shared/Label";
import Title from "./Shared/Title";
import Paragraph from "./Shared/Paragraph";
import View from "./View";
import FullScreenCenteredFlexContainer from "./Shared/FullScreenCenteredFlexContainer";
import Button from "./Shared/Button";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signIn } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signIn(email, password);
      navigate("/");
      // eslint-disable-next-line no-shadow
    } catch (e) {
      setError(e.message);
      // console.log(email, password);
      // console.log(e.message);
    }
  };

  return (
    <View>
      <FullScreenCenteredFlexContainer>
        <Title h={2}>Signin!</Title>

        <form onSubmit={handleSubmit}>
          <Label>Email address:</Label>
          <Input
            name="user-name"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <Label>Password:</Label>
          <Input
            name="user-password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button>Submit</Button>
        </form>
      </FullScreenCenteredFlexContainer>
    </View>
  );
}

export default Signup;
