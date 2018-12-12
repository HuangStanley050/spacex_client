import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import * as d3 from "d3";

const SUCCESS_QUERY = gql`
  query Success {
    launches {
      launch_success
    }
  }
`;

const getData = data => {
  let success = 0;
  let fail = 0;
  let no_launch = 0;
  const pie_data = [];
  //console.log(data);
  data.map(result => {
    if (result.launch_success) {
      success++;
      pie_data[0] = success;
    } else if (result.launch_success === false) {
      fail++;
      pie_data[1] = fail;
    } else {
      no_launch++;
      pie_data[2] = no_launch;
    }
  });
  //console.log(pie_data);
  return pie_data;
};

const Pie = () => {
  let data;
  const width = 200;
  const height = 150;
  const radius = Math.min(width, height) / 2;
  const color = d3.scaleOrdinal(["#2AA198", "#D33682", "#CB4B16"]);
  const pie = d3
    .pie()
    .sort(null)
    .value(d => d);
  const arc = d3
    .arc()
    .innerRadius(0)
    .outerRadius(radius);

  return (
    <Query query={SUCCESS_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <h5>Loading...</h5>;
        if (error) {
          console.log(error);
        }
        //console.log(data.launches);
        data = getData(data.launches);
        data = pie(data);
        console.log(data);
        return (
          <div>
            <svg width={width} heigh={height}>
              <g transform={`translate(${width / 2},${height / 2})`}>
                {data.map(d => {
                  console.log(d);
                  return (
                    <g className="arc">
                      <path d={arc(d)} fill={color(d.data)} />
                    </g>
                  );
                })}
              </g>
            </svg>
          </div>
        );
      }}
    </Query>
  );
};

export default Pie;
