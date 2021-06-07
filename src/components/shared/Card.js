import React from "react";

const Head = () => null;
const Body = () => null;

const Card = ({ onClick, children }) => {
  const head = children.find((el) => el.type === Head);
  const body = children.find((el) => el.type === Body);
  return (
    <div>
      <h3 className="">{head ? head.props.children : null}</h3>

      <p className="text-xl">{body ? body.props.children : null}</p>
    </div>
  );
};

const CB = (props) => {
  return (
    <td
      {...props}
      className=""
    >
      {props.children}
    </td>
  );
  
};

const CH = (props) => {
  return (
    <th
      {...props}
      className=""
    >
      {props.children}
    </th>
  );
};

export { CB, CH };

Card.Head = Head;
Card.Body = Body;

export default Card;

