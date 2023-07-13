import React from "react";
import Supplier from "./Supplier/Supplier";
import { SUPPLIER_CONST } from "@/mock/SupplierConst";

const SuppliersSection = () => {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-2xl font-semibold">Suppliers by region</p>

      <div className="flex flex-wrap gap-y-3">
        {SUPPLIER_CONST.map((supplier) => (
          <Supplier
            subtitle={supplier.subTitle}
            title={supplier.title}
            key={supplier.id}
            picUrl={supplier.picUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default SuppliersSection;
