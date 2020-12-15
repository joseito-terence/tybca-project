import React, { cloneElement } from "react";

function Accordion({ id, children }) {
  return (
    <div class="accordion" id={`accordian${id}`}>
      {children.map(child => 
        cloneElement(child, { parentId: id })
      )}
    </div>
  );
}

export default Accordion;
