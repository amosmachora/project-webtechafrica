import { PendingVerificationWebsite as PendingVerificationWebsiteType } from "@/types/Global";
import { formatDate } from "@/util/utilities";
import React, { useState } from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import { PaymentsModal } from "./payments/PaymentsModal";
import { ThemeBox } from "./ThemeBox";
import { WebsiteStage } from "./WebsiteStage";

export const PendingVerificationWebsite = ({
  website,
}: {
  website: PendingVerificationWebsiteType;
}) => {
  const [isShowingPaymentsModal, setIsShowingPaymentsModal] = useState(false);

  return (
    <div className="border w-full bg-white p-4 md:p-6 rounded-2xl font-semibold">
      <div className="flex items-center justify-between">
        <WebsiteStage stage={website.stage} />
        {website.stage === "Reviewed" && (
          <PrimaryButton
            text="Pay once 🚀"
            onClick={() => setIsShowingPaymentsModal(true)}
          />
        )}
      </div>
      <p>Website type description</p>
      <p className="text-gray-500 text-sm my-4 break-words">
        {website.selections.websiteDescription}
      </p>
      <p className="my-2">Theme</p>
      <ThemeBox
        theme={website.selections.theme}
        activeThemeId={website.selections.theme.id}
      />
      <div className="flex justify-between mt-5 text-sm md:w-4/5">
        <div>
          <p className="text-black3">Submission date</p>
          <p>{formatDate(website.createdAt)}</p>{" "}
        </div>
        <div>
          <p className="text-black3">Website Id</p>
          <p>{website.id}</p>
        </div>
        <div>
          <p className="text-black3">Website Domain</p>
          <p>{website.url}</p>
        </div>
        <div>
          <p className="text-black3">Plan</p>
          <p> {website.plan}</p>
        </div>
        <div>
          <p className="text-black3">Website type</p>
          <p>{website.selections.websiteType.type}</p>
        </div>
      </div>
      {isShowingPaymentsModal && (
        <PaymentsModal
          setShowPaymentMethodsModal={setIsShowingPaymentsModal}
          websiteURL={website.url}
        />
      )}
    </div>
  );
};
