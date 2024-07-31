import React, { useEffect, useRef, useState } from "react";
import "./Accordion.css";
import Chevron from "./chevron.svg";

export default function Accordion() {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();

  const refHeight = useRef();

  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  }, []);

  const toggleState = () => {
    setToggle(!toggle);
  };

  return (
    <div className="accordion">
      <button onClick={toggleState} className="accordion-visible">
        <span>Lorem ipsum dolor sit amet.</span>
        <img
          id="chevron"
          className={toggle && "active"}
          src={Chevron}
          alt="chevron icon"
        />
      </button>

      <div
        className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
        ref={refHeight}
        style={{ height: toggle ? heightEl : "0px" }}
      >
        <p aria-hidden={toggle ? "true" : "false"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          asperiores doloremque repellendus harum architecto eum suscipit quae
          consequatur vel explicabo?
        </p>
      </div>
    </div>
  );
}
