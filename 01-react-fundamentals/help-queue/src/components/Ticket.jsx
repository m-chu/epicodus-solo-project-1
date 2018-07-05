import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props) {
  const ticketInfo =
    <div>
      <div className="ticket">
        <h3>{props.names} - {props.location} - {props.formattedWaitTime} ago</h3>
      </div>
      <hr/>
    </div>;

  if (props.currentRouterPath === '/admin') {
    return (
      <div onClick={() => {
        props.onTicketSelection(
          {
            names: props.names,
            location: props.location,
            issue: props.issue,
            formattedWaitTime: props.formattedWaitTime
          }
        );
      }}>
        {ticketInfo}
      </div>
    );
  } else {
    return (
      <div>
        {ticketInfo}
      </div>
    );
  }
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string.isRequired,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func
};

export default Ticket;
