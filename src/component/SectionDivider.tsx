import React from "react";

type SectionDividerProp = {
  page: string;
};

const SectionDivider = ({ page }: SectionDividerProp) => {
  return (
    <div className="flex gap-10 items-center justify-between">
      <h3 className="text-secondary text-[24px] font-bold uppercase">{page}</h3>

      <div className="w-[800px] h-1 bg-[#444444] ">
        <div className="bg-secondary w-20 h-1 flex justify-self-end" />
      </div>
    </div>
  );
};

export default SectionDivider;
