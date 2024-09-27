import React from "react";
import Dimensions from "./settings/Dimensions";
import Text from "./settings/Text";
import Color from "./settings/Color";
import Export from "./settings/Export";

const RightSidebar = () => {
  return (
    <section className='min-2-[227px] sticky right-0 flex h-full select-none flex-col border-t border-primary-grey-200 bg-primary-black text-primary-grey-300 max-sm:hidden'>
      <h3 className='px-5 pt-4 text-xs uppercase'>Design</h3>
      <span className='mt-3 border-b border-primary-grey-200 px-5 pb-4 text-xs text-primary-grey-300 '>
        Style to your heart's content!
      </span>

      <Dimensions />
      <Text />
      <Color />
      <Color />
      <Export />
    </section>
  );
};

export default RightSidebar;
