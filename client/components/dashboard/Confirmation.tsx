import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";

const Confirmation = ({ text }: { text: string }) => {
  return (
    <div className="center-absolutely px-4 py-10 shadow-sm w-3/4 md:w-1/2 text-center border rounded-lg bg-white">
      <FontAwesomeIcon
        icon={faRectangleXmark}
        className="right-4 top-4 absolute text-primaryOne w-5 h-5 cursor-pointer hover:text-primaryOneLight transition-all"
      />
      <p className="mt-3">{text}</p>
      <Link href={"/dashboard/dev-websites"}>
        <PrimaryButton
          text="Check out your dev websites"
          className="mx-auto hover:scale-100 text-center mt-6"
        />
      </Link>
    </div>
  );
};

export default Confirmation;
