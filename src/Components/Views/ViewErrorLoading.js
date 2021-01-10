import React from "react";
import View from "../View";
import FullScreenCenteredFlexContainer from "../FullScreenCenteredFlexContainer";
import Title from "../Elements/Title";

const ViewErrorLoading = () => {
  return (
    <View>
      <FullScreenCenteredFlexContainer>
        <Title h={4}>Error Loading view...</Title>
      </FullScreenCenteredFlexContainer>
    </View>
  );
};

export default ViewErrorLoading;
