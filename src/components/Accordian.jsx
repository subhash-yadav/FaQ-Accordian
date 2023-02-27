import React, { useState } from "react";
import "./Accordian.scss";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Accordian = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="accordian">
      <div onClick={() => setShow(!show)} className="accordian-question">
        <span>{show ? <AiOutlineMinus /> : <AiOutlinePlus />}</span>
        <p>{question}</p>
      </div>
      {show ? <p className="accordian-answer">{answer}</p> : null}
    </div>
  );
};

export default Accordian;
