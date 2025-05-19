type DescriptionProps = {
  text: string;
};

export default function Description({ text }: DescriptionProps) {
  return <p className="font-normal text-normal text-gray-500">{text}</p>;
}
