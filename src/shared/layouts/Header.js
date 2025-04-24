"use client";
import { useState, useEffect } from "react";
import KetiMini from "@/shared/styles/images/keti_mini.svg";
import Sidebar from "@/shared/styles/images/sidebar.svg";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const router = useRouter();
  const path = usePathname();
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const savedEmail = localStorage.getItem("userEmail");
    if (savedEmail) {
      setIsLogin(true);
    }
  }, []);

  const shareBtn = () => {
    console.log("공유하기 버튼 클릭");
  };

  const removeLocalStorageItem = () => {
    localStorage.removeItem("userEmail");
    router.push("/login");
  };

  
  return (
    <div className="z-10 sticky top-0 flex h-[3.5rem] items-center w-full p-3 font-semibold bg-[#E4F2FF] bg-opacity-25">
      <button className="w-[40px] h-[40px] px-2 ">
        <Image src={Sidebar} alt="icon" className="h-full" />
      </button>
      <Link
        href="/"
        className="relative items-center justify-center px-3 rounded-full inline-flex min-w-[68px] min-h-[30px] text-sm font-medium"
      >
        <Image src={KetiMini} alt="logo" className="h-[28px]" />
      </Link>

      <div className="w-full">
        <div className="flex w-full justify-end">
          {isLogin ? (
            <div className="leading-[0] gap-2 pr-1 items-center flex">
              <div className="flex items-center justify-center gap-2 ">
                <button
                  type="button"
                  onClick={shareBtn}
                  className="relative items-center justify-center py-1 px-3 rounded-full inline-flex min-w-[68px] min-h-[30px] text-sm font-medium bg-white"
                >
                  <div className="flex justify-center items-center text-gray-800 font-semibold">
                    공유하기
                  </div>
                </button>
                <button
                  onClick={removeLocalStorageItem}
                  className="relative items-center justify-center rounded-full inline-flex  w-[30px] h-[30px]  text-sm font-medium bg-green-600 border-gray-100"
                >
                  <div className="flex justify-center items-center text-white font-normal text-lg">
                    a
                  </div>
                </button>
              </div>
            </div>
          ) : path === "/login" || path === "/signin" ? null : (
            <div className="leading-[0] gap-2 pr-1 items-center flex">
              <div className="flex items-center justify-center gap-2 ">
                <Link
                  href="/login"
                  className="relative items-center justify-center py-1 px-3 rounded-full inline-flex min-w-[68px] min-h-[30px] text-sm font-medium bg-black"
                >
                  <div className="flex justify-center items-center">로그인</div>
                </Link>
                <Link
                  href="/signin"
                  className="relative items-center justify-center py-1 px-3 rounded-full inline-flex min-w-[68px] min-h-[30px] text-sm font-medium bg-white border-gray-100"
                >
                  <div className="flex justify-center items-center text-black">
                    회원가입
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
