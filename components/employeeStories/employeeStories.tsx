import { Stories } from "@/types/stories";
import Image from "next/image";

const EmployeeStories = ({ review }: { review: Stories }) => {
  const { id, header, designation, image, content } = review;
  return (
    <div className={`rounded-3xl h-full p-9 pt-7.5 dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none w-full`}>
      <div className={`flex justify-center items-center'`}>
        <div className={`flex justify-between dark:border-strokedark`}>
          <div className="p-2">
            <img className={`w-9 h-9 -m1-1 md:ml-0`} src={'/images/employeeStories/quote.png'} alt={header} />
            <div className="flex lg:flex-row flex-col items-center">
              <p className="text-base text-justify text-white m-auto md:px-0">{content}</p>
              <Image className={`rounded-full w-36 h-40 md:ml-3`} src={image} alt={header} /> </div>
            <h2 className="text-metatitle2 text-bold text-white lg:text-right text-center">
              {header}
            </h2>
            <p className="text-xs text-normalGray lg:text-right text-center">{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeStories;
