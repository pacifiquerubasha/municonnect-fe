import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const SkeletonWrapper = ({
  isLoaded,
  children,
}: {
  isLoaded: boolean;
  children: React.ReactNode;
}) => {
  return (
    <>
      {isLoaded ? (
        children
      ) : (
        <Skeleton className="h-[325px] w-full rounded-xl" />
      )}
    </>
  );
};

export default SkeletonWrapper;
