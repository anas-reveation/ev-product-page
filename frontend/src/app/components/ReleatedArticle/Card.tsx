import Image from "next/image";

type CardProps = {
  imageUrl: string;
  title: string;
  date: string;
};

export default function Card({ imageUrl, title, date }: CardProps) {
  return (
    <div className="flex flex-col h-full w-full rounded-2xl overflow-hidden shadow hover:shadow-lg bg-white transition-shadow">
      <Image src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
    </div>
  );
}
