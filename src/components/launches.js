import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import LaunchItem from "./launchitem";
import MissionLegend from "./missionlegend";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

class Launches extends Component {
  render() {
    return (
      <div>
        <h1 className="display-4 my-3">Launches</h1>
        <MissionLegend />

        <Query query={LAUNCHES_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) {
              console.log(error);
            }
            //console.log(data);
            return (
              <div>
                {data.launches.map(launch => {
                  return (
                    <LaunchItem key={launch.flight_number} launch={launch} />
                  );
                })}
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default Launches;
