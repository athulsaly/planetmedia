"use client";

import MaxWidthWrapper from "@/components/atoms/MaxWidthWrapper";
import Navbar from "@/components/molecules/Navbar";
import React from "react";
import { useAdDetailsController } from "./actions";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const AdvertisementDetails = ({ params }: AdvertisementDetailsProps) => {
  const { state, actions } = useAdDetailsController(params.id);
  return (
    <>
      <Navbar />
      <MaxWidthWrapper className="flex flex-col py-10 gap-y-10">
        <div className="w-full flex justify-between items-center">
          <div className="font-bold text-4xl text-primary">
            {state.adDetails?.title}
          </div>
          <Button
            className="w-20"
            variant={state.deleteMode ? "default" : "destructive"}
            size="sm"
            onClick={() => actions.toggleDeleteMode()}
          >
            {state.deleteMode ? "Cancel" : "Delete"}
          </Button>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-10">
          {state.adDetails && (
            <div className="bg-white rounded-lg p-6 shadow-md">
              <Image
                src={state.adDetails.image}
                width={720}
                height={500}
                alt={state.adDetails.title}
                className="object-contain w-[720] h-[500px] shadow-md rounded-md"
              />
            </div>
          )}
          <div className="flex flex-col w-full gap-y-5">
            <div className="font-bold text-2xl text-primary">
              Description:{" "}
              <span className="text-2xl font-medium text-black">
                {state.adDetails?.description}
              </span>
            </div>
            <div className="font-bold text-2xl text-primary">
              Price:{" "}
              <span className="text-2xl font-medium text-black">
                ₹{state.adDetails?.price}
              </span>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      <AlertDialog
        open={state.deleteMode}
        onOpenChange={actions.toggleDeleteMode}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure that you want to delete the ad?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              advertisements and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={actions.handleAdDelete(params.id)}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default AdvertisementDetails;
