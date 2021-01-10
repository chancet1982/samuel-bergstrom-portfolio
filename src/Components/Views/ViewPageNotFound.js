import React from "react";
import { Link } from "react-router-dom";
import View from "../View";
import FullScreenCenteredFlexContainer from "../FullScreenCenteredFlexContainer";
import { ReactComponent as Image } from "../../assets/404(2).svg";
import Title from "../Elements/Title";

const ViewPageNotFound = () => {
  return (
    <View>
      <FullScreenCenteredFlexContainer>
        <Image />
        <Title h={4}>404 Page not found</Title>
        <Link to="./">Back to safety</Link>
      </FullScreenCenteredFlexContainer>
    </View>
  );
};

export default ViewPageNotFound;
