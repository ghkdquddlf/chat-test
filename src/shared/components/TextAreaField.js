import Arrowup from "@/shared/styles/images/arrow_up.svg";
import Image from "next/image";

export default function TextAreaField({ value, onChange }) {
  return (
    <div className="w-full">
      <div className="flex cursor-text rounded-3xl w-full flex-col bg-white">
        <div className="px-3 py-1 ">
          <div className="flex flex-col justify-start min-h-0">
            <div className="flex min-h-[44px] items-start pl-1">
              <div className="min-w-0 max-w-full flex-1">
                <div className="overflow-auto max-h-[25dvh]">
                  <textarea
                    value={value}
                    onChange={onChange}
                    placeholder="무엇이든 물어보세요."
                    className="w-full h-10 p-4 text-base text-black py-2 px-0 resize-none"
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="z-10 flex w-full h-full justify-end mt-5 mb-2"
          >
            <div className="flex justify-center items-center w-[36px] h-[36px] rounded-full bg-black">
              <Image src={Arrowup} alt="submitBtn" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
