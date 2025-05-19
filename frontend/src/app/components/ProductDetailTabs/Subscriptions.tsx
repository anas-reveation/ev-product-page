type SpecificationItem = {
  label: string;
  monthlySubscription: string;
  refundableSecurityDeposit: string;
};

type SpecificationTableProps = {
  title: string;
  items: SpecificationItem[];
};

export default function Subscription({
  title,
  items,
}: SpecificationTableProps) {
  return (
    <div className="mb-6 text-black">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>

      <div className="bg-white rounded-lg overflow-hidden ">
        <div className="grid grid-cols-3 px-4 py-2 bg-gray-100 font-semibold border-b border-gray-300">
          <div>Duration</div>
          <div>Monthly Subscription</div>
          <div>Refundable Security Deposit</div>
        </div>

        {items.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-3 px-4 py-2 border-b border-gray-200"
          >
            <div className="font-medium text-gray-700">{item.label}</div>
            <div className="text-gray-800">{item.monthlySubscription}</div>
            <div className="text-gray-800">
              {item.refundableSecurityDeposit}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
