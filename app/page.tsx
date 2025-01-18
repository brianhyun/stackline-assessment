"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "@/lib/features/product/productSlice";
import { setSales } from "@/lib/features/sales/salesSlice";

import mockData from "@/public/mock_data.json";

import { Sidebar } from "./components/Sidebar";
import { RootState } from "@/lib/store";

export default function IndexPage() {
  const dispatch = useDispatch();
  const product = useSelector((state: RootState) => state.product);

  useEffect(() => {
    const product = mockData[0];
    dispatch(setProduct(product));
    dispatch(setSales(product.sales));
  }, [dispatch]);

  if (!product || !product.title) return null;

  return (
    <div className="w-full flex bg-gray-100 p-6">
      <Sidebar />
    </div>
  );
}
