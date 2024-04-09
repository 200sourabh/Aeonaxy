import React from "react";

const Safe = () => {
  return (
    <div className="bg-gray-100 mt-4 px-4 md:px-40 overflow-hidden pb-4">
      <h2 className="font-semibold mt-2 text-[25px] mb-6">
        Paypal helps your gifts do more good
      </h2>
      <div className="flex md:flex-row flex-col gap-5">
        <div className="flex flex-col items-center md:items-start">
          <img
            src="image/safe.png"
            className="h-12 w-12"
            alt="Safe and secure donation"
          />
          <p className="mb-1 font-semibold text-[18px]">Safe and secure donation</p>
          <p className=" flex flex-wrap">Lorem ipsum dolor sit Lorem ipsum dolor sit amet
           Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <img
            src="image/transaction.png"
            className="h-12 w-12"
            alt="transaction"
          />
          <p className="mb-1 font-semibold text-[18px]">No transaction fee</p>
          <p className="flex-wrap">Lorem ipsum dolor sit Lorem ipsum dolor sit amet
           Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <img
            src="image/tax.png"
            className="h-12 w-12"
            alt="tax"
          />
          <p className="mb-1 font-semibold text-[18px]">Recieve a tax reciept</p>
          <p className="flex-wrap">Lorem ipsum dolor sit Lorem ipsum dolor sit amet
           Lorem ipsum dolor sit.</p>
        </div>
      </div>
    </div>
  );
};

export default Safe;
