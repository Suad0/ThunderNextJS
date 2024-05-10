import React from "react";

import Image from "next/image";

function PreHeader() {
  return (
    <div className="preHeaderContainer">
      <Image
        src="/assets/images/preHeader.svg"
        alt="Logo"
        width={500}
        height={500}
        className="object-contain"
      />
    </div>
  );
}

export default PreHeader;
