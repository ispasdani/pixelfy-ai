"use client";

import { useLayerStore } from "@/lib/layer.store";
import { Card, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";
import { useState } from "react";
import UploadImage from "./UploadImage";

export default function UploadForm() {
  const activeLayer = useLayerStore((state) => state.activeLayer);
  const [selectedType, setSelectedType] = useState("image");

  if (!activeLayer.url)
    return (
      <div className="w-full p-24 flex flex-col justify-center h-full">
        {selectedType === "image" ? <UploadImage /> : null}
      </div>
    );
}
