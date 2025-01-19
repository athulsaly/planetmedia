import Image from "next/image";

export const AdvertBox = ({
  src,
  alt,
  title,
  description,
  price,
  onClick,
}: AdvertBoxProps) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg w-fit p-5 flex flex-col gap-y-4 max-w-[540px] max-h-[480px] cursor-pointer"
    >
      <Image
        src={src}
        alt={alt}
        width={500}
        height={400}
        className="object-contain w-[500px] h-[400px] shadow-md rounded-md"
      />
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-x-1 flex-1 overflow-ellipsis">
          <div className="max-w-[150px] overflow-hidden text-ellipsis whitespace-nowrap font-semibold">
            {title}
          </div>
          -
          <div className="max-w-[250px] overflow-hidden text-ellipsis whitespace-nowrap">
            {description}
          </div>
        </div>
        <div className="font-medium max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
          ₹ {price}
        </div>
      </div>
    </div>
  );
};
