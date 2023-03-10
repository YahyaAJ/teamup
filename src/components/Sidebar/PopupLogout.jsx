import React from "react";
import { Link } from "react-router-dom";

const Popup = ({ setModalOn, setChoice, onClose }) => {
  const handleOKClick = () => {
    setChoice(true);
    setModalOn(false);
  };
  const handleCancelClick = () => {
    setChoice(false);
    setModalOn(false);
  };

  const handleOnClose = () => {
    onClose();
  };
  return (
    <div className="bg-[rgba(0,0,0,0.5)] fixed inset-0 z-50 ">
      <div className="flex h-screen justify-center items-center">
        <div className="flex-col justify-center bg-white py-4 px-8 rounded-2xl relative h-[26%] w-max">
          <button
            className="absolute outline-right-5 right-5 top-1 text-4xl text-gray-500"
            onClick={onClose}
          >
            &times;
          </button>
          <div className="flex text-4xl text-[#22A6B3] font-bold mt-12">
            Yakin ingin keluar ?
          </div>
          <div className="flex absolute right-8 bottom-6">
            <Link to="/">
            <button
              onClick={handleOKClick}
              className="rounded-xl px-9 py-2 text-white bg-green-600"
              >
              Ya
            </button>
              </Link>
            <button
              onClick={handleCancelClick}
              className="rounded-xl px-9 py-2 ml-4 text-white bg-red-600"
            >
              Tidak
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
