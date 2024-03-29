import { addOrUpdateUserDataInDB } from "@/firebase/firestore";
import { useAuth } from "@/hooks/useAuth";
import { useNewWebsiteSelections } from "@/hooks/useNewWebsiteSelections";
import { UserData } from "@/types/Global";
import { getTimestampForThreeDaysFromNow } from "@/util/utilities";
import React, { useState } from "react";
import { uid } from "uid";
import { SecondaryButton } from "../../buttons/SecondaryButton";
import Confirmation from "../Confirmation";
import { ThemeBox } from "../ThemeBox";

const NewWebsiteReview = ({
  showConfirmationModal,
}: {
  showConfirmationModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { selections } = useNewWebsiteSelections();

  const { user, userData } = useAuth();

  //state variables
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorOccurred, setErrorOccurred] = useState(false);

  const completeWebsiteBuildingProcess = async () => {
    setIsLoading(true);
    const randomId = uid(10);
    const updatedUserData: UserData = {
      ...userData!,
      pendingVerificationWebsites: [
        ...(userData!.pendingVerificationWebsites
          ? userData!.pendingVerificationWebsites
          : []),
        {
          decisionDeadline: getTimestampForThreeDaysFromNow(),
          id: randomId,
          url: selections.domainName!,
          selections: selections,
          plan: selections.plan!,
          createdAt: new Date().getTime(),
          stage: "In Review",
        },
      ],
    };

    try {
      await addOrUpdateUserDataInDB(updatedUserData, user!.uid);
      showConfirmationModal(true);
    } catch (error) {
      setErrorOccurred(true);
    }

    setIsLoading(false);
  };

  return (
    <div className="bg-white p-6 flex flex-col">
      {errorOccurred && (
        <Confirmation text="An error occurred! But don`t worry we have stored everything for you so that you dont have to make your selections again." />
      )}
      <SecondaryButton
        text="Submit 🚀"
        style={{
          backgroundColor: selections.theme.colors.primary,
          color: selections.theme.colors.text,
        }}
        className="outline-none hover:scale-100 transition-all ml-auto"
        onClick={() => completeWebsiteBuildingProcess()}
        isLoading={isLoading}
      />
      <p className="font-semibold mt-5 mb-2">Theme</p>
      <ThemeBox theme={selections.theme} activeThemeId={selections.theme.id} />
      <div>
        <p className="font-semibold mt-5">Description</p>
        <p className="break-words">{selections.websiteDescription}</p>
      </div>
      <div className="flex justify-between flex-wrap w-full md:w-2/3">
        <div className="w-1/2 md:w-auto">
          <p className="mt-5 text-sm text-gray-400">Plan</p>
          <p className="font-semibold">{selections.plan}</p>
        </div>
        <div className="w-1/2 md:w-auto">
          <p className="mt-5 text-sm text-gray-400">Content Style</p>
          {selections.userHasOwnContent ? (
            <p className="font-semibold">User generated</p>
          ) : (
            <p className="font-semibold">AI generated</p>
          )}
        </div>
        <div className="w-1/2 md:w-auto">
          <p className="mt-5 text-sm text-gray-400">Website Type</p>
          <p className="font-semibold">{selections.websiteType.type}</p>
        </div>
        <div className="w-1/2 md:w-auto">
          <p className="mt-5 text-sm text-gray-400">Website Domain</p>
          <p className="font-semibold">{selections.domainName}</p>
        </div>
      </div>
    </div>
  );
};

export default NewWebsiteReview;
