import React from "react";

interface EachUtilsProps<T> {
  items: T[];
  render: (item: T, index: number) => React.ReactNode;
}

const EachUtils = <T,>({ items, render }: EachUtilsProps<T>) => {
  return (
    <>
      {items.map((item, index) => (
        <React.Fragment key={index}>{render(item, index)}</React.Fragment>
      ))}
    </>
  );
};

export default EachUtils;
