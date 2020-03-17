import React from "react";

export default ({ event }) => {
  return (
    <div className="container event-card">
      <div className="col-xs-4 pull-left padding-top-btm"><h3>{event.period.text}</h3></div>
      <div className="col-xs-8 pull-left">
        <div className="col-xs-12 padding-top-btm">
        <h3>{event.exposition.name}</h3>
        </div>
        <div className="col-xs-4 pull-left">
          <div className="padding-top-btm">Places available: </div>
          <div className="padding-top-btm">Appropriate for: </div>
          <div className="padding-top-btm">Language: </div>
        </div>
        <div className="col-xs-8 pull-left">
          <div className="padding-top-btm"> {event.period.remaining} of {event.period.maximum}</div>
          <div className="padding-top-btm">{event.expositionType.friendlyName}</div>
          <div className="padding-top-btm">{event.lang}</div>
        </div>
      </div>
    </div>
  );
};
