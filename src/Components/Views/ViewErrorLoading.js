import React from "react";
import View from "../View";
import FullScreenCenteredFlexContainer from "../Shared/FullScreenCenteredFlexContainer";
import Title from "../Shared/Title";

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
