import { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import DummyBarChart from "./BarChart";
import StackedAreaChart from "./AreaChart";
const ResponsiveReactGridLayout = WidthProvider(Responsive);
const Layout = () => {
  const [layouts, setLayouts] = useState(null);
  const widgetArray = [
    { i: 0, x: 0, y: 0, w: 2, h: 2, chart: "BarChart" },
    { i: 1, x: 2, y: 2, w: 2, h: 2, chart: "AreaChart" },
  ];
  const handleModify = (layout) => {
    setLayouts(layout);
  };
  return (
    <div>
      <ResponsiveReactGridLayout
        onLayoutChange={handleModify}
        layout={layouts}
        cols={{ lg: 6, md: 6, sm: 3, xs: 2, xxs: 2 }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        margin={{
          lg: [6, 13],
          md: [6, 13],
          sm: [3, 13],
          xs: [6, 13],
          xxs: [6, 13],
        }}
        compactType={"vertical"}
        autoSize={false}
      >
        {widgetArray?.map((widget, index) => {
          return (
            <div
              className="reactGridItem"
              key={index}
              data-grid={{
                x: widget?.x,
                y: widget?.y,
                w: widget?.w,
                h: widget?.h,
                i: widget.i,
                minW: 2,

                minH: 2,

                isDraggable: true,
                isResizable: true,
              }}
            >
              <div className=" bg-white h-full border border-amber-700 shadow-md w-full">
                {widget.chart === "BarChart" ? (
                  <DummyBarChart />
                ) : (
                  <StackedAreaChart />
                )}
              </div>
            </div>
          );
        })}
      </ResponsiveReactGridLayout>
    </div>
  );
};

export default Layout;
