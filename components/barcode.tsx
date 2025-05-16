"use client";

import { useEffect, useRef } from "react";
import JsBarcode from "jsbarcode";

type BarcodeProps = {
  value: string;
};

export default function Barcode({ value }: BarcodeProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef.current) {
      JsBarcode(svgRef.current, value, {
        format: "CODE128",
        displayValue: false,
        height: 40,
        margin: 0,
      });
    }
  }, [value]);

  return <svg ref={svgRef} className="w-full h-10" />;
}
