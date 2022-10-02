/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { ElementColorContext } from "../Context/ElementColorContext";
import { SectionColorContext } from "../Context/SectionColorContext";
import { ViewColorContext } from "../Context/ViewColorContext";

const useBgColor = () => {
  const [hasViewBgColor] = useContext(ViewColorContext);
  const [hasSectionBgColor] = useContext(SectionColorContext);
  const [hasElementBgColor] = useContext(ElementColorContext);

  return hasViewBgColor || hasSectionBgColor || hasElementBgColor;
};

useBgColor.propTypes = {};

export default useBgColor;
