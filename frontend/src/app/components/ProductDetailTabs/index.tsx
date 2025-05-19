"use client";

import { useState } from "react";
import Specification from "./Specification.tsx";
import { QuestionAnswer } from "./QuestionAnswer";
import Description from "./Description";
import Subscription from "./Subscriptions";
import { Product } from "@/app/types/product.js";

const tabs = [
  "Description",
  "Specification",
  "Question & Answer",
  "Subscription",
];

type ProductDetailTabsProps = {
  product: Product;
};

export default function ProductDetailTabs({ product }: ProductDetailTabsProps) {
  const [activeTab, setActiveTab] = useState("Description");
  const renderContent = () => {
    switch (activeTab) {
      case "Description":
        return <Description text={product?.description} />;
      case "Specification":
        return product.specifications ? (
          <Specification specifications={product.specifications} />
        ) : (
          <p className="text-red-500">No specifications available.</p>
        );

      case "Question & Answer":
        return <QuestionAnswer />;
      case "Subscription":
        return (
          <Subscription
            title={"Ather 450X 3.7kWh (With Ather Pro and Extended Warranty)"}
            items={[
              {
                label: "36 months",
                monthlySubscription: "5249",
                refundableSecurityDeposit: "12999",
              },
              {
                label: "24 months",
                monthlySubscription: "6799",
                refundableSecurityDeposit: "12999",
              },
              {
                label: "12 months",
                monthlySubscription: "9999",
                refundableSecurityDeposit: "12999",
              },
            ]}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full container my-5 py-5">
      <div className="flex overflow-x-auto no-scrollbar space-x-4 sm:grid sm:grid-cols-4 sm:space-x-0 mb-4">
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-shrink-0 min-w-max sm:min-w-0 cursor-pointer pb-3 px-4 sm:px-0 text-center text-lg transition-colors duration-200 border-b-2 ${
              activeTab === tab
                ? "border-green-500 text-green-600"
                : "border-gray-200 text-gray-600 hover:border-green-500 hover:text-green-600"
            }`}
          >
            {tab}
          </div>
        ))}
      </div>

      <div className="pt-5 bg-white ">{renderContent()}</div>
    </div>
  );
}
