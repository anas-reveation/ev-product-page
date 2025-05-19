type SpecificationItem = {
  label: string;
  value: string;
};

type SpecificationTableProps = {
  title: string;
  items: SpecificationItem[];
};

export default function SpecificationTable({
  title,
  items,
}: SpecificationTableProps) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2 text-black">{title}</h3>
      <div className="bg-white rounded-lg overflow-hidden border">
        {items.map((item, index) => (
          <div
            key={index}
            className={`grid grid-cols-2 px-4 py-2 ${index % 2 === 1 ? "bg-gray-100" : ""}`}
          >
            <div className="font-medium text-gray-700">{item.label}</div>
            <div className="text-gray-800">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
