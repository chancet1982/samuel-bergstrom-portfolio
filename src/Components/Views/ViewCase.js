import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import View from "../View";
import { CASES } from "../../data/dictionaries/CASES";
import SectionsRenderer from "../SectionsRenderer";
import { CASE_STATUS } from "../../data/dictionaries/CASE_STATUS";
import FullScreenCenteredFlexContainer from "../Shared/FullScreenCenteredFlexContainer";
import { ReactComponent as Image } from "../../assets/404(2).svg";
import TitleAndText from "../Shared/TitleAndText";
import Paragraph from "../Shared/Paragraph";

function ViewCase() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();

  const clientCase = CASES.find((item) => item.caseUrl === `/cases/${id}`);
  const { details, caseStatus } = clientCase;

  return caseStatus === CASE_STATUS.FEATURED ||
    caseStatus === CASE_STATUS.PUBLISHED ? (
    <View>
      <SectionsRenderer sections={details} />
    </View>
  ) : (
    <View>
      <FullScreenCenteredFlexContainer>
        <Image />
        <TitleAndText h={4} title="This is akward..">
          <Paragraph>
            It seems you are trying to access a case that is not published yet.
            Try again later or reach out to me to ask me for details
          </Paragraph>
          <Link to="./">Back to safety</Link>
        </TitleAndText>
      </FullScreenCenteredFlexContainer>
    </View>
  );
}

export default ViewCase;
