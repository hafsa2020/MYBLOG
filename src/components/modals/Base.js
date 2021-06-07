import React from "react";
import { Fragment } from "react";

const Body = () => null;
const Footer = () => null;

const Modal = ({ show, title, children, close }) => {
  const body = children.find((el) => el.type === Body);
  const footer = children.find((el) => el.type === Footer);

  return (
    <Fragment> 
      <div
        dir="rtl"
        className={`fixed z-30 inset-0 overflow-y-auto w-screen ${
          show ? "fixed" : "hidden"
        }`}
        aria-labelledby={title}
        role="dialog"
        aria-modal="true"
      >
        <div>
          <div
            onClick={close}
            className={`fixed w-full inset-0 bg-gray-800 bg-opacity-75 transition-opacity ${
              show
                ? "ease-out duration-300 opacity-100"
                : "ease-in duration-200 opacity-0"
            }`}
            aria-hidden="true"
          />

          <div>
            <div className="">
              <div className="">
                {body ? body.props.children : null}
              </div>
            </div>
            <div className="">
              {footer ? footer.props.children : null}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
