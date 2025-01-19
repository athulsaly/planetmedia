"use client";

import MaxWidthWrapper from "@/components/atoms/MaxWidthWrapper";
import Navbar from "@/components/molecules/Navbar";
import React from "react";
import { useAdListController } from "./actions";
import { AdvertBox } from "@/components/atoms/AdBox";

const AdvertisementList = () => {
  const { state, action } = useAdListController();
  return (
    <>
      <Navbar />
      <MaxWidthWrapper className="flex flex-col py-10 gap-y-10">
        <div className="flex flex-col gap-y-10">
          <div className="text-4xl text-primary font-bold">Advertisements</div>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-6">
              {state.adList &&
                state.adList.map((data) => {
                  return (
                    <AdvertBox
                      key={data.id}
                      src={data.image}
                      alt={data.title}
                      price={data.price}
                      description={data.description}
                      title={data.title}
                      id={data.id}
                      onClick={action.gotoAdDetails(data.id)}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default AdvertisementList;
