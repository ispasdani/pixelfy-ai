"use client";

import React from "react";
import Layers from "./layers/layers";
import { ModeToggle } from "./theme/ModeToggle";
import ActiveImage from "./ActiveImage";
import UploadForm from "./upload/UploadForm";

const Editor = () => {
  return (
    <div className="flex min-h-[100vh]">
      <div className="py-6 px-4 basis-[240px] shrink-0">
        <div className="pb-12 text-center">
          <ModeToggle />
        </div>
      </div>
      <UploadForm />
      <ActiveImage />
      <Layers />
    </div>
  );
};

export default Editor;
