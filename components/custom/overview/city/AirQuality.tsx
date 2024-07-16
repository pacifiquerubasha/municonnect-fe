import React, { useEffect } from "react";
import { Card, Col, Row, Statistic } from "antd";
import SkeletonWrapper from "./SkeletonWrapper";

const AirQuality = ({
  cityData,
  isLoaded,
}: {
  cityData: any;
  isLoaded: boolean;
}) => {
  const processedQuality = Object.keys(cityData)
    .filter((key) => key !== "overall_aqi")
    .map((key) => {
      return {
        key,
        concentration: cityData[key].concentration,
        aqi: cityData[key].aqi,
      };
    });

  console.log("processedQuality", processedQuality);

  return (
    <div className="">
      <SkeletonWrapper isLoaded={isLoaded}>
        <Row gutter={16}>
          {processedQuality.map((item) => (
            <Col span={8} className="mb-4">
              <Card bordered={false}>
                <Statistic
                  title={item.key}
                  value={item.concentration}
                  precision={2}
                  valueStyle={{
                    color:
                      item.aqi < 50
                        ? "#3f8600"
                        : item.aqi < 100
                        ? "#faad14"
                        : "#cf1322",
                  }}
                  // prefix={item.aqi < 50 ? <ArrowDownOutlined /> : <ArrowUpOutlined />}
                  suffix={`AQI: ${item.aqi}`}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </SkeletonWrapper>
    </div>
  );
};

export default AirQuality;
