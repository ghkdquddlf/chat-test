"use client";
import React from "react";
import { useChat } from "ai/react";
import TextAreaField from "@/shared/components/TextAreaField";
import Button from "@/shared/components/Button";
export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
    onFinish: (message) => {
      console.log(input); // 유저가 작성한 메세지
      console.log(message); // ai response
      // saveResume({ message }); // X?
    },
  });

  return (
    <div className="flex flex-col w-full h-full px-16 py-24 mx-auto max-w-[48rem] min-w-60 ">
      <form onSubmit={handleSubmit} className="flex flex-col justify-center">
        <label className="pb-2 border-b-2 border-b-gray-200">
          아래에 질문해보세요
        </label>
        <TextAreaField value={input} onChange={handleInputChange} />
        <Button className="flex items-center">보내기</Button>
      </form>
      {/* {messages.length > 0
        ? messages.map((m) => (
            <div key={m.id} className="my-2 whitespace-pre-wrap">
              {m.role === 'user' ? 'User: ' : 'AI: '}
              {m.content}
            </div>
          ))
        : null} */}

      {messages.length > 0
        ? messages.map((m) => (
            <div key={m.id} className="gap-[.25rem] flex flex-col ">
              {m.role === "user" ? (
                <div className="w-full px-6 py-[18px] flex items-end justify-end">
                  <div
                    class="user-chat"
                  >
                    {m.content}
                  </div>
                </div>
              ) : (
                <div
                  class="ai-chat"
                >
                  {m.content}
                </div>
              )}
            </div>
          ))
        : null}
      {/* 간단한 CSS 처리, 이후 role과 content 입력 */}
      {/* <div className="gap-[.25rem] flex flex-col ">
        <div className="px-6 py-[18px] flex items-end justify-end">
          <div
            class="user-chat"
            className="w-full my-2 whitespace-pre-wrap flex flex-end"
          >
            나무에 보드로액을 뿌리려고 하는데 어제 비가 와서 축축하거든?? 오늘
            뿌려도 되나?
          </div>
        </div>
        <div
          class="ai-chat"
          className="w-full my-2 whitespace-pre-wrap bg-slate-100"
        >
          보드로액은 건조가 되어야하기 때문에 일기예보를 보고 건조가 될 수 있는
          날씨면 뿌려주세요.
        </div> */}
      {/* </div> */}
    </div>
  );
}
