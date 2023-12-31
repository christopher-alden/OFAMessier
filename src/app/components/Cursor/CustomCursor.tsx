"use client";

import { useEffect } from "react";
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import "./CustomCursor.css";

const CustomCursor = () => {
  useEffect(() => {
    MouseFollower.registerGSAP(gsap);
    const cursor = new MouseFollower({
      container: document.body,
      speed: 0.1,
      className: "custom-cursor",
      
    });
    cursor.setSkewing(6);
    
    return () => {};
  }, []);

  return null;
};

export default CustomCursor;
