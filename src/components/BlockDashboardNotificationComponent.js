import React from 'react'
import DashboardNotificationComponent from '../_components/DashboardNotificationComponent';
class BlockDashboardNotificationComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return(
      <div className="row">
        <div className="alert alert-warning col-md-12 col-xs-12">
          <strong>Leave</strong>
        </div>

        <DashboardNotificationComponent text="Lala" color="primary"/>

        <DashboardNotificationComponent text="Nana" color="success"/>

        <DashboardNotificationComponent text="Lala" color="danger"/>

        <DashboardNotificationComponent text="Nana" color="warning"/>
      </div>
    );
  }
}
export default BlockDashboardNotificationComponent;
