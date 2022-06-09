import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import "./scroll.css";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { fontSize } from "@mui/system";
const Scroll = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (pageYOffset > 400) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [pageYOffset]);

  const scrollToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  if (!visible) {
    return false;
  } else {
  }

  return (
    <div className="scroll-to-top  cursor-pointer " onClick={scrollToTop}>
      <i className="fa fa-arrow-up"></i>
    </div>
  );
};

export default Scroll;
