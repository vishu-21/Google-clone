import { Modal } from "antd";
import React, { useState } from "react";

const Header = () => {
  const [title, setTitle] = useState("Untitled Document");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText("link of your doc");
  };

  return (
    <div className="pt-4 flex mx-5 p-2 h-10 justify-between items-center bg-headerbg">
      <div className="flex">
        <img
          className="mt-4 w-9 h-9 cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/512/5968/5968517.png"
          alt=""
        />
        <div className="mt-2">
          <div className="flex items-center">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-lg ml-2 opacity-80"
            />
            
            <svg style={{ padding: ".1rem" }} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>
            
           
           
          </div>
          <div className="flex ml-2">
            <h2 className="hoverEffect rounded-md px-2 text-sm">File</h2>
            <h2 className="hoverEffect rounded-md px-2 ml-1 text-sm">Edit</h2>
            <h2 className="hoverEffect rounded-md px-2 ml-1 text-sm">View</h2>
            <h2 className="hoverEffect rounded-md px-2 ml-1 text-sm">Insert</h2>
            <h2 className="hoverEffect rounded-md px-2 ml-1 text-sm">Format</h2>
            <h2 className="hoverEffect rounded-md px-2 ml-1 text-sm">Tools</h2>
            <h2 className="hoverEffect rounded-md px-2 ml-1 text-sm">
              Extensions
            </h2>
            <h2 className="hoverEffect rounded-md px-2 ml-1 text-sm">Help</h2>
          </div>
        </div>
      </div>
      <div className="flex items-center mr-1 mt-2">
        <svg
          className="w-9 ml-5 opacity-70 hoverEffect rounded-full p-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          id="history"
        >
          <path
            d="M30,16A13,13,0,0,1,6.54,23.72l1.61-1.19a11,11,0,1,0-1.67-9.71l1-.65,1.12,1.66-3,2A1,1,0,0,1,5,16a1,1,0,0,1-.83-.44l-2-3,1.66-1.12.68,1A13,13,0,0,1,30,16ZM16,9v7a1,1,0,0,0,.29.71l3,3,1.42-1.42L18,15.59V9Z"
            data-name="03  History, Recent"
          ></path>
        </svg>
        <svg
          className="w-10 h-8 ml-3 opacity-70 hoverEffect rounded-full p-1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          id="comment"
        >
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM20 4v13.17L18.83 16H4V4h16zM6 12h12v2H6zm0-3h12v2H6zm0-3h12v2H6z"></path>
        </svg>
        <div className="flex items-center ml-3 opacity-70 hoverEffect rounded-full p-2">
          <svg
            className="w-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="video"
          >
            <g data-name="Layer 2">
              <path
                d="M21 7.15a1.7 1.7 0 0 0-1.85.3l-2.15 2V8a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-1.45l2.16 2a1.74 1.74 0 0 0 1.16.45 1.68 1.68 0 0 0 .69-.15 1.6 1.6 0 0 0 1-1.48V8.63A1.6 1.6 0 0 0 21 7.15zM15 16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1zm5-1.4L17.19 12 20 9.4z"
                data-name="video"
              ></path>
            </g>
          </svg>
          <svg
            className="w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 512 512"
            id="down-arrow"
          >
            <path d="M98.9 184.7l1.8 2.1 136 156.5c4.6 5.3 11.5 8.6 19.2 8.6 7.7 0 14.6-3.4 19.2-8.6L411 187.1l2.3-2.6c1.7-2.5 2.7-5.5 2.7-8.7 0-8.7-7.4-15.8-16.6-15.8H112.6c-9.2 0-16.6 7.1-16.6 15.8 0 3.3 1.1 6.4 2.9 8.9z"></path>
          </svg>
        </div>
        <button
          onClick={showModal}
          className="ml-6 flex items-center justify-center px-3 py-2 bg-sharebtn rounded-3xl w-28 h-10"
        >
          <svg
            className="w-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="lock"
          >
            <path d="M12,13a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V14A1,1,0,0,0,12,13Zm5-4V7A5,5,0,0,0,7,7V9a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V12A3,3,0,0,0,17,9ZM9,7a3,3,0,0,1,6,0V9H9Zm9,12a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z"></path>
          </svg>{" "}
          Share
        </button>
        <Modal
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
          closable={false}
        >
          {" "}
          {/* this modal feature is used from ant design */}
          <div className="flex items-center justify-between">
            <h1 className="text-2xl">Share "new title"</h1>
            <div className="flex items-center">
              {/* <svg className='w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="help"><path d="M11.29,15.29a1.58,1.58,0,0,0-.12.15.76.76,0,0,0-.09.18.64.64,0,0,0-.06.18,1.36,1.36,0,0,0,0,.2.84.84,0,0,0,.08.38.9.9,0,0,0,.54.54.94.94,0,0,0,.76,0,.9.9,0,0,0,.54-.54A1,1,0,0,0,13,16a1,1,0,0,0-.29-.71A1,1,0,0,0,11.29,15.29ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM12,7A3,3,0,0,0,9.4,8.5a1,1,0,1,0,1.73,1A1,1,0,0,1,12,9a1,1,0,0,1,0,2,1,1,0,0,0-1,1v1a1,1,0,0,0,2,0v-.18A3,3,0,0,0,12,7Z"></path></svg> */}
              <img
                className="w-7 h-7 ml-5 hoverEffect rounded-full p-1"
                src="https://img.icons8.com/?size=512&id=646&format=png"
                alt=""
              />
              <img
                className="w-7 h-7 ml-3 hoverEffect rounded-full p-1"
                src="https://img.icons8.com/?size=512&id=364&format=png"
                alt=""
              />
            </div>
          </div>
          <input
            type="text"
            className="w-full border mt-4 rounded h-12 p-2 pl-4 inputadd"
            placeholder="Add people and groups"
          />
          <h1 className="mt-3 text-lg">People with access</h1>
          <div className="flex mt-3 justify-between items-center">
            <div className="flex">
              <img
                className="rounded-full mt-1 mx-2 cursor-pointer w-10 h-10"
                src="https://lh3.googleusercontent.com/a/AGNmyxbTOYm8Tj2zXtqWn3lxe-UlgIf4CoN-5A11ZA68VvE=s386-c-no"
                alt=""
              />
              <div>
                <h1 className="font-medium pb-0">Vishal Kumar (you)</h1>
                <h1 className="pt-0">vishal211199@mail.com</h1>
              </div>
            </div>
            <h1>Owner</h1>
          </div>
          <h1 className="mt-5 text-lg">General access</h1>
          <div className="flex mt-3 items-center">
            <svg
              className="w-10 ml-1 rounded-full p-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="lock"
            >
              <path d="M12,13a1.49,1.49,0,0,0-1,2.61V17a1,1,0,0,0,2,0V15.61A1.49,1.49,0,0,0,12,13Zm5-4V7A5,5,0,0,0,7,7V9a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V12A3,3,0,0,0,17,9ZM9,7a3,3,0,0,1,6,0V9H9Zm9,12a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z"></path>
            </svg>
            <div className="ml-2">
              <h1 className="font-medium pb-0 flex items-center">
                Restricted{" "}
                <svg
                  className="ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 512 512"
                  id="down-arrow"
                >
                  <path d="M98.9 184.7l1.8 2.1 136 156.5c4.6 5.3 11.5 8.6 19.2 8.6 7.7 0 14.6-3.4 19.2-8.6L411 187.1l2.3-2.6c1.7-2.5 2.7-5.5 2.7-8.7 0-8.7-7.4-15.8-16.6-15.8H112.6c-9.2 0-16.6 7.1-16.6 15.8 0 3.3 1.1 6.4 2.9 8.9z"></path>
                </svg>
              </h1>
              <h1 className="pt-0">
                Only people with access can open with the link
              </h1>
            </div>
          </div>
          <div className="mt-9 flex justify-between">
            <button
              onClick={copyToClipboard}
              className="flex w-32 items-center justify-center p-1 font-medium text-base text-btn borderclr rounded-3xl"
            >
              <svg
                className="w-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="link"
              >
                <path
                  fill="rgb(26 115 232)"
                  d="M8,12a1,1,0,0,0,1,1h6a1,1,0,0,0,0-2H9A1,1,0,0,0,8,12Zm2,3H7A3,3,0,0,1,7,9h3a1,1,0,0,0,0-2H7A5,5,0,0,0,7,17h3a1,1,0,0,0,0-2Zm7-8H14a1,1,0,0,0,0,2h3a3,3,0,0,1,0,6H14a1,1,0,0,0,0,2h3A5,5,0,0,0,17,7Z"
                ></path>
              </svg>{" "}
              Copy link
            </button>
            <button className="bg-btn rounded-3xl p-2 px-4 font-medium text-base text-white">
              Done
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Header;
