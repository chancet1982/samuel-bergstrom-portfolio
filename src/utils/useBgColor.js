/* eslint-disable no-nested-ternary */
import { useContext } from "react";
import { ElementColorContext } from "../Context/ElementColorContext";
import { SectionColorContext } from "../Context/SectionColorContext";
import { ViewColorContext } from "../Context/ViewColorContext";
import shouldUseLightText from "./shouldUseLightText";
import colors from "../theme/colors";

function useBgColor() {
  const [viewBgColor] = useContext(ViewColorContext);
  const [sectionBgColor] = useContext(SectionColorContext);
  const [elementBgColor] = useContext(ElementColorContext);

  const bgColor =
    elementBgColor !== null
      ? elementBgColor
      : sectionBgColor !== null
      ? sectionBgColor
      : viewBgColor !== null
      ? viewBgColor
      : colors.offwhite;

  return shouldUseLightText(bgColor);
}

useBgColor.propTypes = {};

export default useBgColor;
