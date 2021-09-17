import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import View from "../View";
import { CASES } from "../../data/dictionaries/CASES";
import SectionsRenderer from "../SectionsRenderer";

const ViewCase = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();

  const caseDetails = CASES.find(
    (item) => item.caseUrl === `/cases/${id}`
  ).details;

  return (
    <View>
      <SectionsRenderer sections={caseDetails} />
    </View>
  );
};

export default ViewCase;
