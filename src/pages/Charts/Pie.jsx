import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  PieSeries,
} from "@syncfusion/ej2-react-charts";

import { Header, Pie as PieChart } from "../../components";
import { pieChartData } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const Pie = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Pie" title="Project Cost Breakdown" />
      <AccumulationChartComponent
        id="pie-chart"
        background={currentMode === "Dark" ? "#33373E" : "#fff"}
      >
        <Inject services={[PieSeries]} />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective dataSource={pieChartData} xName="x" yName="y" />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  );
};

export default Pie;
