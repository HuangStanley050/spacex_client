import React from "react";
import classNames from "classnames";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const mission_status = status => {
  switch (status) {
    case true:
      return "text-success";
    case false:
      return "text-danger";
    default:
      return "text-warning";
  }
};

const LaunchItem = ({
  launch: { flight_number, mission_name, launch_date_local, launch_success }
}) => {
  //console.log(props.launch);
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>
            Mission:{" "}
            <span className={mission_status(launch_success)}>
              {mission_name}
            </span>
          </h4>
          <p>
            Date: <Moment format="YYYY-MM-DD HH:mm">{launch_date_local}</Moment>
          </p>
        </div>
        <div className="col-md-3">
          <Link to={`/launch/${flight_number}`} className="btn btn-secondary">
            Launch Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LaunchItem;
