import React, { useState } from "react";
import styled from "styled-components";
import padding from "../theme/padding";
import Button from "./Elements/Button";
import Input from "./Elements/Input";
import Label from "./Elements/Label";
import Textarea from "./Elements/Textarea";

const StyledDiv = styled.div`
  padding-bottom: ${padding.vertical.half};
`;

// TODO: (later) provide better styling for the success/error messages
const ContactForm = () => {
  const [status, setStatus] = useState("");

  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");

    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  };

  return (
    <form
      onSubmit={submitForm}
      action="https://formspree.io/f/xqkgwqjz"
      method="POST"
    >
      <StyledDiv>
        <Label>Email: </Label>
        <Input type="email" name="email" required />
      </StyledDiv>
      <StyledDiv>
        <Label>Message: </Label>
        <Textarea name="message" rows="4" cols="50" />
      </StyledDiv>
      {status === "SUCCESS" ? <p>Thanks!</p> : <Button>Submit</Button>}
      {status === "ERROR" && <p>Ooops! There was an error.</p>}
    </form>
  );
};

export default ContactForm;
