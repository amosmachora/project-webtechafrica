import React from "react";
import { ThemeBox } from "../ThemeBox";
import themes from "../../../util/themes.json";
import { SecondaryButton } from "../../buttons/SecondaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import ThemePreview from "./ThemePreview";
import { useNewWebsiteSelections } from "@/hooks/useNewWebsiteSelections";

const SelectThemeSlide = ({
  setActiveStageId,
}: {
  setActiveStageId: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { setSelections, selections } = useNewWebsiteSelections();
  return (
    <div className="flex flex-col">
      <div className="bg-white px-6 py-6">
        <div className="flex items-center justify-between mb-2">
          <p className="font-semibold">Select Theme</p>
          <SecondaryButton
            text={
              <DashboardButtonText text={`Pick ${selections.theme.name}`} />
            }
            style={{
              backgroundColor: selections.theme.colors.primary,
              color: selections.theme.colors.text,
            }}
            className="outline-none hover:scale-100 transition-all duration-300"
            onClick={() => setActiveStageId((prev) => prev + 1)}
          />
        </div>
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {themes.map((theme) => (
            <ThemeBox
              theme={theme}
              activeThemeId={selections.theme.id}
              setSelections={setSelections}
              key={theme.id}
            />
          ))}
        </div>
      </div>
      <ThemePreview theme={selections.theme} />
    </div>
  );
};

export default SelectThemeSlide;

const DashboardButtonText = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center">
      <p className="mr-2">{text}</p>
      <FontAwesomeIcon icon={faRocket} />
    </div>
  );
};
