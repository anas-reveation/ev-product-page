export function SavingOverview() {
  return (
    <div className="container py-5 my-5">
      <div className="bg-[#2A1C4D] text-white p-6 rounded-xl">
        <div className="grid grid-col-1 md:grid-col-2 lg:grid-cols-[80%_20%] items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold mb-2">
              Petrol Price? Nah, EV's Got This.
            </h2>
            <p className="text-xl mb-4">Your average monthly usage</p>
            <div className="w-full bg-white/20 h-1.5 rounded-full relative mb-4">
              <div className="bg-green-400 h-1.5 rounded-full w-[10%]"></div>
              <div className="flex justify-between text-xs text-white/80 w-full">
                <span>100</span>
                <span>3000 KM</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden border p-4">
            <h3 className="text-lg font-semibold text-black">Total Saving</h3>
            <div className="bg-gray-100 rounded border p-2 mt-3">
              <div className="grid grid-cols-2 gap-x-2">
                <div className="font-medium text-gray-700">3 Years</div>
                <div className=" text-right text-green-600 font-bold">
                  ₹-22,305
                </div>

                <div className="font-medium text-gray-700">5 Years</div>
                <div className=" text-right text-green-600 font-bold">
                  ₹-8,907
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
