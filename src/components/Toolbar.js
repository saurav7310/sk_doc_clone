import React from "react";

const Toolbar = () => {
  return (
    <div
      style={{ width: "" }}
      className="bg-toolbar h-10 rounded-full mx-5 mt-5 flex items-center"
    >
      <div className="flex ml-3 items-center">
        <img
          className="w-5 h-5 opacity-75"
          src="https://img.icons8.com/?size=512&id=14899&format=png"
          alt=""
        />
        <img
          className="w-5 h-5 ml-4 opacity-75"
          src="https://img.icons8.com/?size=512&id=14898&format=png"
          alt=""
        />
        <img
          className="w-5 h-5 ml-4 opacity-75"
          src="https://img.icons8.com/?size=512&id=16138&format=png"
          alt=""
        />
        <img
          className="w-5 h-5 ml-4 opacity-75"
          src="https://img.icons8.com/?size=512&id=99482&format=png"
          alt=""
        />
        <img
          className="w-5 h-5 ml-4 opacity-75"
          src="https://img.icons8.com/?size=512&id=2021&format=png"
          alt=""
        />
        <div className="flex ml-5 items-center">
          100%
          <img
            className="w-4 h-4 ml-1 opacity-75"
            src="https://img.icons8.com/?size=512&id=85502&format=png"
            alt=""
          />
        </div>
      </div>
      <p className="ml-2 mb-1 text-xl font-extralight opacity-50">|</p>
      <div className="flex ml-3 items-center">
        <p className="opacity-80 text-sm font-medium">Normal text</p>
        <img
          className="w-4 h-4 ml-1 opacity-75"
          src="https://img.icons8.com/?size=512&id=85502&format=png"
          alt=""
        />
      </div>
      <p className="ml-2 mb-1 text-xl font-extralight opacity-50">|</p>
      <div className="flex ml-3 items-center">
        <p className="opacity-80 text-sm font-medium">Arial</p>
        <img
          className="w-4 h-4 ml-3 opacity-75"
          src="https://img.icons8.com/?size=512&id=85502&format=png"
          alt=""
        />
      </div>
      <p className="ml-2 mb-1 text-xl font-extralight opacity-50">|</p>
    </div>
  );
};

export default Toolbar;
