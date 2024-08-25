"use client";

import Editor from "@/components/Editor";
import { ImageStore } from "@/lib/image.store";
import { LayerStore } from "@/lib/layer.store";
import React from "react";

const EditPage = () => {
  return (
    <ImageStore.Provider
      initialValue={{
        activeTag: "all",
        activeColor: "green",
        activeImage: "",
      }}
    >
      <LayerStore.Provider
        initialValue={{
          layerComparisonMode: false,
          layers: [
            {
              id: crypto.randomUUID(),
              url: "",
              height: 0,
              width: 0,
              publicId: "",
            },
          ],
        }}
      >
        <div>
          <Editor />
        </div>
      </LayerStore.Provider>
    </ImageStore.Provider>
  );
};

export default EditPage;
