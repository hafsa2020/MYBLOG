import React from "react";

const PageHeader = ({
  title = "Header",
  buttonTitle = "",
  onClick,
}) => {
  

  return ( 
    <div className=""> 
        <button
          className=""
          onClick={onClick}
        >
          {buttonTitle}
        </button>
      
    </div>
  );
};

export default PageHeader;
