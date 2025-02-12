import { Details } from "@/types/details";
import Image from "next/image";

const DetailsData = ({ review }: { review: Details }) => {
  const { id, header, image, content } = review;
  return (
    <div className={`rounded-3xl p-9 pt-7.5 shadow-solid-9 dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none ${id == 1 ? "bg-orange-50" : id == 2 ? "bg-blue-100" : "bg-pink-100"}`}>
      {id == 1 || id == 3 ? <Image height={100} className="" src={image} alt={header} /> : ""}
      <div className={`flex justify-between dark:border-strokedark ${id == 1 ? "pb-8" : ""}`}>
        {id == 2 ? <Image height={100} className="" src={image} alt={header} /> : ""}
        <div className="p-2">
          {id == 2 ? <p>#We are</p> : ""}
          <h3 className="text-metatitle3 font-semibold text-black dark:text-white">
            {header}
          </h3>
          <p className="text-xs">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsData;
