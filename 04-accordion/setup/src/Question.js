import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ id, info, title }) => {
  return (
    <div>
      <h2>{title}</h2>;<h2>{info}</h2>;
    </div>
  );
};

export default Question;
