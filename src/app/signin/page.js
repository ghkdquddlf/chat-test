"use client";
import Header from "@/shared/layouts/Header";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import InputLabel from "@/shared/components/InputLabel";

export default function SigninPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validatePassword, setValidatePassword] = useState("");
  const [entername, setEntername] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (password !== validatePassword) {
      console.log("패스워드 두개 다름");
    } else {
      router.replace("/login");
    }
  };

  return (
    <div className="w-full flex h-full flex-col items-center justify-center">
      <Header />

      <div className="w-full h-full">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="mb-[44px] flex justify-center">
            <h1 className="text-2xl font-bold">회원정보 입력</h1>
          </div>
          {/* // ㅇㄷㄷ */}
          <div className="flex flex-col justify-center items-center mb-[54px]">
            <div className="relative mb-[25px] w-80 box-content">
              <div className="box-border mb-3">
                <div className="relative">
                  <div className="gap-2 flex flex-col">
                    <InputLabel
                      name="이메일 *"
                      label="email"
                      type="text"
                      placeholder="이메일"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputLabel
                      name="비밀번호 *"
                      label="pw"
                      type="password"
                      placeholder="비밀번호"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputLabel
                      name="비밀번호 확인 *"
                      label="validatepw"
                      type="password"
                      placeholder="비밀번호 확인"
                      value={validatePassword}
                      onChange={(e) => setValidatePassword(e.target.value)}
                    />
                    <InputLabel
                      name="기업/기관명 *"
                      label="entername"
                      type="text"
                      placeholder="기업/기관명"
                      value={entername}
                      onChange={(e) => setEntername(e.target.value)}
                    />
                    <InputLabel
                      name="성함 *"
                      label="name"
                      type="text"
                      placeholder="성함"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
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
                  회원가입
                </div>
              </button>
            </div>
            <div className="flex gap-1 text-base">
              <h3 className="text-base">이미 계정이 있으신가요?</h3>
              <Link href="/login" className="font-semibold text-[#76CBF2]">
                <div className="">로그인</div>
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
