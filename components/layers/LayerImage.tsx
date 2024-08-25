"use client";

import { Layer } from "@/lib/layer.store";
import Image from "next/image";

export default function LayerImage({ layer }: { layer: Layer }) {
  if (layer.url && layer.name) {
    return (
      <>
        <div className="w-12 h-12 flex justify-center items-center">
          <Image
            src={layer.format === "mp4" ? layer.poster || layer.url : layer.url}
            alt={layer.name}
            className="w-full object-contain h-full rouded-sm"
            width={50}
            height={50}
          />
        </div>
        <div>
          <p className="text-xs">{`${layer.name?.slice(0, 15)}.${
            layer.format
          }`}</p>
        </div>
      </>
    );
  }
}
