import { assets } from "@/public/assets";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const Row = ({
  text,
  basic,
  advanced,
}: {
  text: string;
  basic?: boolean;
  advanced?: boolean;
}) => {
  return (
    <div className="bg-white flex justify-between text-secondaryFour py-5 px-7 md:px-14 text-sm">
      <p className="w-1/3">{text}</p>
      {basic ? (
        <div className="w-1/4 flex">
          <FontAwesomeIcon
            icon={faCircleCheck}
            style={{ color: "#25b636" }}
            className="w-5 h-5 mx-auto"
          />
        </div>
      ) : (
        <div className="w-1/4">
          <Image src={assets.Close} alt="cross" className="w-5 h-5 mx-auto" />
        </div>
      )}
      {advanced ? (
        <div className="w-1/4 flex">
          <FontAwesomeIcon
            icon={faCircleCheck}
            style={{ color: "#25b636" }}
            className="w-5 h-5 mx-auto"
          />
        </div>
      ) : (
        <div className="w-1/4">
          <Image src={assets.Close} alt="cross" className="w-5 h-5 mx-auto" />
        </div>
      )}
    </div>
  );
};

export default Row;
