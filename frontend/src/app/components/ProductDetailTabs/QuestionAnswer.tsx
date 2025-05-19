import { FiSearch } from "react-icons/fi";

export function QuestionAnswer() {
  return (
    <div className="p-4 bg-white rounded-xl shadow-sm space-y-4 text-black">
      <h3 className="text-xl font-semibold">
        Questions about this product (0)
      </h3>

      <div className="relative">
        <input
          type="text"
          placeholder="Search questions..."
          className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <FiSearch className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>

      <div className="p-4 border border-gray-300 rounded-lg">
        <p className="text-gray-700">
          Don't see the answer you're looking for?
        </p>
      </div>
    </div>
  );
}
