import React from "react";
import Supplier from "./Supplier/Supplier";
import { SUPPLIER_CONST } from "@/mock/SupplierConst";
import Title from "../Global/Title/Title";

const SuppliersSection = () => {
  return (

      <Title classnameParent="flex flex-col gap-6" title="Suppliers by region" classTitle="text-2xl font-semibold" >
        <div className="grid grid-cols-5 gap-y-3">
          {SUPPLIER_CONST.map((supplier) => (
            <Supplier
              subtitle={supplier.subTitle}
              title={supplier.title}
              key={supplier.id}
              picUrl={supplier.picUrl}
            />
          ))}
        </div>
      </Title>

  );
};

export default SuppliersSection;
