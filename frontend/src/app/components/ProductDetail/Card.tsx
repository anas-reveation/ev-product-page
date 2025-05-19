type CardProps = {
  iconUrl: string;
  title: string;
  subtitle: string;
};

export default function Card({ iconUrl, title, subtitle }: CardProps) {
  return (
    <div className=" space-x-4 p-2 md:p-4 rounded-lg shadow bg-white text-black">
      <img src={iconUrl} alt={title} className="w-6 h-6 object-contain" />
      <h4 className="text-sm md:text-md font-semibold">{title}</h4>
      <p className="text-sm text-gray-600">{subtitle}</p>
    </div>
  );
}
