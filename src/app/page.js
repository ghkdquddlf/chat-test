"use client";
import React, { useState, useEffect } from "react";
import { useChat } from "ai/react";
import TextAreaField from "@/shared/components/TextAreaField";
import Header from "@/shared/layouts/Header";
import Like from "@/shared/styles/images/like_before.svg";
import LikeAfter from "@/shared/styles/images/like_after.svg";
import DisLike from "@/shared/styles/images/dislike_before.svg";
import DisLikeAfter from "@/shared/styles/images/dislike_after.svg";
import Image from "next/image";
import dynamic from 'next/dynamic';
import RobotLottie from "@/shared/styles/images/lottie_robot.json";

const Lottie = dynamic(() => import('react-lottie-player'), {
  ssr: false,
});

export default function Home() {
  const [likedMessages, setLikedMessages] = useState({});
  const [dislikedMessages, setDisLikedMessages] = useState({});
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: "/api/chat",
      onFinish: (message) => {
        console.log(input);
        console.log(message);
      },
    });

  useEffect(() => {
    // 메시지가 추가되더라도 기존 상태를 유지하며 변경이 필요한 경우에만 업데이트
    setLikedMessages((prev) => {
      const updated = { ...prev };
      let hasChanges = false;
      messages.forEach((message) => {
        if (!(message.id in updated)) {
          updated[message.id] = false;
          hasChanges = true;
        }
      });
      return hasChanges ? updated : prev;
    });

    setDisLikedMessages((prev) => {
      const updated = { ...prev };
      let hasChanges = false;
      messages.forEach((message) => {
        if (!(message.id in updated)) {
          updated[message.id] = false;
          hasChanges = true;
        }
      });
      return hasChanges ? updated : prev;
    });
  }, [messages]);

  const handleLikeClick = (id) => {
    setLikedMessages((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const handleDisLikeClick = (id) => {
    setDisLikedMessages((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="flex flex-col h-full">
        <div className="flex flex-1 grow basis-auto flex-col overflow-hidden">
          <div className="relative h-full">
            <div id="target" className="h-full flex flex-col overflow-y-auto">
              <div className="mt-[0.375rem] flex flex-col gap-[.25rem] h-full">
                {messages.length > 0 ? (
                  messages.map((m) => (
                    <div key={m.id} className="flex flex-col mb:pb-9">
                      <article className="w-full">
                        <div className="px-6 py-1 mx-auto my-auto text-base">
                          <div className="mx-auto flex flex-1 flex-col max-w-[48rem] mt-0">
                            <div className="px-4 min-w-0 w-full relative flex-col ">
                              <div className="flex-col gap-3 ">
                                <div className="flex max-w-full flex-col">
                                  <div className="text-start break-keep flex justify-end">
                                    {m.role === "user" && (
                                      <div className="user-chat">
                                        {m.content}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="px-6 py-1 mx-auto my-auto text-base w-full">
                              <div className="mx-auto flex flex-1 flex-col max-w-[48rem] ">
                                {m.role !== "user" && (
                                  <div className="ai-chat">{m.content}</div>
                                )}
                              </div>

                              {m.role !== "user" &&  (
                                <div className="px-6 pt-[8px] mx-auto w-full gap-2">
                                  <button
                                    type="button"
                                    onClick={() => handleLikeClick(m.id)}
                                    className="w-5 h-5 mr-2"
                                    disabled={likedMessages[m.id]}
                                  >
                                    <Image
                                      src={
                                        likedMessages[m.id] ? LikeAfter : Like
                                      }
                                      alt="Likebtn"
                                      className="w-5 h-5 z-1"
                                    />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => handleDisLikeClick(m.id)}
                                    className="w-5 h-5"
                                    disabled={dislikedMessages[m.id]}
                                  >
                                    <Image
                                      src={
                                        dislikedMessages[m.id]
                                          ? DisLikeAfter
                                          : DisLike
                                      }
                                      alt="Likebtn"
                                      className="w-5 h-5"
                                    />
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  ))
                ) : (
                  <div className="text-3xl flex flex-col w-full justify-center items-center h-full ">
                    <div className="mb-5">무엇을 도와드릴까요?</div>
                    <div className="isolate basis-auto justify-center w-full">
                      <div className="mx-auto px-5 text-base w-full ">
                        <div className="mx-auto flex flex-1 text-base max-w-[48rem] gap-6 w-full">
                          <div className="flex justify-center empty:hidden"></div>
                          <Lottie
                            loop
                            animationData={RobotLottie}
                            className="w-32"
                            play
                          />
                          <form onSubmit={handleSubmit} className=" w-full">
                            <div className="relative z-[1] flex h-full max-w-full flex-1 flex-col">
                              <div className="absolute bottom-full left-0 right-0 z-20"></div>
                              <div className="group relative z-[1] flex w-full items-center">
                                <TextAreaField
                                  value={input}
                                  onChange={handleInputChange}
                                />
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="relative mt-auto min-h-8 flex w-full items-center justify-center p-2 text-center text-xs px-[60px]">
                        <div>
                          실수를 할 수 있습니다. 중요한 정보는 재차 확인하세요.
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {messages.length > 0 && (
        <div className="isolate basis-auto justify-center w-full">
          <div className="mx-auto px-5 text-base w-full">
            <div className="mx-auto flex flex-1 text-base max-w-[48rem] gap-6 w-full">
              <div className="flex justify-center empty:hidden"></div>
              <Lottie loop animationData={RobotLottie} className="w-32" play />
              <form onSubmit={handleSubmit} className=" w-full">
                <div className="relative z-[1] flex h-full max-w-full flex-1 flex-col">
                  <div className="absolute bottom-full left-0 right-0 z-20"></div>
                  <div className="group relative z-[1] flex w-full items-center">
                    <TextAreaField value={input} onChange={handleInputChange} />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="relative mt-auto min-h-8 flex w-full items-center justify-center p-2 text-center text-xs px-[60px]">
            <div>실수를 할 수 있습니다. 중요한 정보는 재차 확인하세요.</div>
          </div>
        </div>
      )}
    </div>
  );
}
