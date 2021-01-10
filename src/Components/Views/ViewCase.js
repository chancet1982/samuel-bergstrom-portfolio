import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import View from "../View";
import CASES from "../../data/CASES";
import SectionsRenderer from "../SectionsRenderer";

const ViewCase = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();

  const sectionsData = CASES[id].details;

  return (
    <View>
      <SectionsRenderer sections={sectionsData} />
    </View>
  );
};

export default ViewCase;
