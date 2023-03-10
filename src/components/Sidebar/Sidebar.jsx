import {
  AiOutlineHome,
  AiOutlineFolderOpen,
  AiOutlineUser,
} from "react-icons/ai";
import { MdNotificationsNone } from "react-icons/md";
import { IoMdExit } from "react-icons/io";
import Popup from "./PopupLogout";
import { useState } from "react";
import profile from "../../assets/img/img.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false);

  const handleOnClose = () => setModalOn(false);

  const clicked = () => {
    setModalOn(true);
  };
  return (
    <div className=" bg-gray-100 fixed top-0 left-0 z-[999999] rounded-br-xl rounded-tr-xl">
      <div className="py-10 w-[5rem] overflow-hidden border-r hover:w-72 bg-white rounded-xl hover:bg-white transition-[2s]">
        <div className="flex h-[80vh] flex-col justify-between pt-2 pb-6">
          <div>
            <div className="m-2 relative flex items-center gap-[10px] space-x-4 bg-gradient-to-r  ">
              <img src={profile} alt="" className="ml-2" />
              <div>
                <span className="font-semibold">Vellya Riona</span>
                <p className="text-sm">vellyariona@gmail.com</p>
              </div>
            </div>
            <ul className="mt-6 space-y-2 tracking-wide">
              <li className="min-w-max">
                <div className="text-xl hover:text-[#22A6B3]">
                  <Link
                    to="/dashboard/explore"
                    className="relative group flex items-center gap-5 space-x-4 bg-gradient-to-r px-4 py-3 "
                  >
                    {/* <img src="/assets/Home.png" alt="" /> */}
                    <AiOutlineHome size={33} className="ml-[6px]" />
                    <span className="fill-current">Explore</span>
                  </Link>
                </div>
              </li>
              <li className="min-w-max">
                <div className="text-xl hover:text-[#22A6B3]">
                  <Link
                    to="/dashboard/myproject"
                    className="bg group flex items-center gap-5  space-x-4 rounded-full px-4 py-3"
                  >
                    {/* <img src="/assets/Project.png" alt="" /> */}
                    <AiOutlineFolderOpen size={33} className="ml-[6px]" />
                    <span className="fill-current ">Proyek Saya</span>
                  </Link>
                </div>
              </li>
              <li className="min-w-max">
                <div className="text-xl hover:text-[#22A6B3]">
                  <Link
                    to="/dashboard/myprofile"
                    className="group flex items-center gap-5  space-x-4 rounded-md px-4 py-3"
                  >
                    {/* <img src="/assets/Profile.png" alt="" /> */}
                    <AiOutlineUser size={33} className="ml-[6px]" />
                    <span className=" fill-current  ">Profil Saya</span>
                  </Link>
                </div>
              </li>
            </ul>
          </div>

          <div className="w-max -mb-3 align-center">
            <div className="text-xl hover:text-[#22A6B3]">
              <Link
                to="/dashboard/notification"
                className="group flex items-center gap-5  space-x-4 rounded-md px-4 py-3"
              >
                {/* <img src="/assets/Notifikasi.png" alt="" /> */}
                <MdNotificationsNone size={33} className="ml-[6px]" />
                <span className="fill-current ">Notifikasi</span>
              </Link>
            </div>
            <div
              className="text-xl hover:text-[#22A6B3] cursor-pointer"
              onClick={clicked}
            >
              <div className="group flex items-center gap-5  space-x-4 rounded-md px-4 py-3">
                {/* <img src="/assets/LogOut.png" alt="" /> */}
                <IoMdExit size={33} className="ml-[6px]" />
                <span className="fill-current ">Keluar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalOn && (
        <Popup
          setModalOn={setModalOn}
          setChoice={setChoice}
          onClose={handleOnClose}
        />
      )}
    </div>
  );
};
export default Sidebar;
