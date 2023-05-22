import React from "react";

const Sidebar = () => {
  return (
    <div style={{ top: "0.5rem" }} className="fixed">
      <img
        className="rounded-full mt-1 mx-2 cursor-pointer w-8"
        src="https://publicdomainvectors.org/tn_img/female-user-icon.webp"
        alt=""
      />
      <div className="flex flex-col justify-center items-center mt-8">
        <a href="https://calendar.google.com/">
          <img
            className="w-9 cursor-pointer"
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-03-512.png"
            alt=""
          />
        </a>
        <a href="https://keep.google.com/">
          <img
            className="w-5 mt-7 cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Google_Keep_icon_%282020%29.svg/558px-Google_Keep_icon_%282020%29.svg.png"
            alt=""
          />
        </a>
        <a href="https://tasks.google.com/">
          <img
            className="w-7 mt-7 cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Google_Tasks_2021.svg/1200px-Google_Tasks_2021.svg.png"
            alt=""
          />
        </a>
        <a href="https://contacts.google.com/">
          <img
            className="w-5 mt-7 cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Google_Contacts_icon_%282022%29.svg/423px-Google_Contacts_icon_%282022%29.svg.png?20221103112314"
            alt=""
          />
        </a>
        <a href="https://www.google.com/maps">
          <img
            className="w-7 mt-7 cursor-pointer"
            src="https://cdn-icons-png.flaticon.com/512/2991/2991231.png"
            alt=""
          />
        </a>
      </div>
      <p className="text-5xl font-thin opacity-50">_</p>
      <div className="flex flex-col justify-between items-center h-64 mt-9">
        <img
          className="w-5 cursor-pointer"
          src="https://img.icons8.com/?size=512&id=37784&format=png"
          alt=""
        />
        <img
          className="w-4 cursor-pointer"
          src="https://img.icons8.com/?size=512&id=79025&format=png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Sidebar;
