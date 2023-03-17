import React, { useState } from "react";
import { NewWebsiteSelections, WebsiteType } from "../../Types/Global";
import website_types from "../../Json/WebsiteTypes.json";

const SelectWebsiteType = ({
  setSelections,
}: {
  setSelections: React.Dispatch<React.SetStateAction<NewWebsiteSelections>>;
}) => {
  const [activeWebsiteType, setActiveWebsiteType] = useState<WebsiteType>(
    website_types[0]
  );
  return (
    <div className="my-5">
      <p>Website Type</p>
      <select
        onChange={(e) => {
          const activeWebsite = website_types.find(
            (type) => type.type === e.target.value
          )!;
          setActiveWebsiteType(activeWebsite);
          setSelections((prev) => {
            return {
              ...prev,
              websiteType: activeWebsite,
            };
          });
        }}
        className="border-2 rounded-md cursor-pointer my-5 p-3 border-primaryOne outline-none"
      >
        {website_types.map((type) => (
          <option
            value={type.type}
            className="rounded-sm border border-primaryOne"
          >
            {type.type}
          </option>
        ))}
      </select>
      <p>{activeWebsiteType.description}</p>
    </div>
  );
};

export default SelectWebsiteType;
