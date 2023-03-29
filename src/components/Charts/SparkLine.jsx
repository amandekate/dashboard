import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

const SparkLine = ({ id, height, width, color, data, type, currentColor }) => {
  const newData = data.reduce((acc, curr, i) => {
    acc.push({
      x: curr.x,
      xval: `${2000 + i}`,
      yval: curr.yval,
    });
    return acc;
  }, []);

  console.log(newData, data);

  return (
    <>
      <SparklineComponent
        id={id}
        height={height}
        width={width}
        lineWidth={1}
        valueType="Numeric"
        fill={color}
        border={{ color: currentColor, width: 2 }}
        dataSource={newData}
        xName="xval"
        yName="yval"
        type={type}
        tooltipSettings={{
          visible: true,
          format: '${xval}: data ${yval}',
          trackLineSettings: {
            visible: true
          }
        }}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    </>
  );
};

export default SparkLine;
