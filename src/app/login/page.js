"use client";
import Header from "@/shared/layouts/Header";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    localStorage.setItem("userEmail", email);
    router.replace("/");
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <Header />
      <div className="w-full h-full">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="mb-[34px] flex justify-center">
            <h1 className="text-2xl font-bold">로그인</h1>
          </div>
          <div className="flex flex-col justify-center items-center mb-[54px]">
            <div className="relative mb-[25px] w-[320px] box-content">
              <div className="box-border mb-3">
                <div className="relative">
                  <div className="gap-2 flex flex-col">
                    <label for="email" className="text-sm">
                      이메일
                    </label>
                    <input
                      id="email"
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="이메일주소 *"
                      className="rounded-md tracking-[0.025em] px-5 relative flex items-center justify-stretch h-[3.25rem] leading-[1.5rem] font-medium w-full text-black"
                      required
                    />
                    <label for="pw" className="text-sm">
                      비밀번호
                    </label>
                    <input
                      id="pw"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="비밀번호 *"
                      className="rounded-md tracking-[0.025em] px-5 relative flex items-center justify-stretch h-[3.25rem] text-base font-medium w-full text-black"
                      required
                    />
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="bg-[#005AA1] rounded-md px-5 relative flex items-center justify-stretch h-[3.25rem] leading-[1.5rem] font-[1rem] w-full"
              >
                <div className="w-full flex justify-center text-white font-medium">
                  로그인
                </div>
              </button>
            </div>
            <div className="flex gap-1 text-base">
              <h3 className="text-base">계정이 없으신가요?</h3>
              <Link href="/signin" className="font-semibold text-[#76CBF2]">
                <div className="">회원가입</div>
              </Link>
            </div>
          </div>

          <div className="font-semibold tracking-[0.015rem] leading-[22px]">
            이용약관 | 개인정보 보호 정책
          </div>
        </div>
      </div>
    </div>
  );
}
