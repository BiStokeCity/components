import React from 'react'
import PropTypes from 'prop-types'

class DashboardNotificationComponent extends React.Component{

  constructor(props){
    super(props);
    this.state = {};
    this.viewDetail = this.viewDetail.bind(this);
  }

  viewDetail(){
    console.log(this.viewDetail);
  }
  render(){

    return(

        <div className="col-lg-3 col-md-3">
          <div className={'panel panel-'+this.props.color}>
            <div className="panel-heading">
              <div className="row">
                <div className="col-xs-3">
                  <i className="fa fa-bell" style={{fontSize:'48px' ,color:'red'}}></i>
                </div>

                <div className="col-xs-9 text-right">
                  <div className="huge">
                    26
                  </div>

                  <div>
                    {this.props.text}
                  </div>
                </div>
              </div>
            </div>

            <a href="#" onClick={this.viewDetail}>
              <div className="panel-footer">
                <span className="pull-left">
                  View Details
                </span>

                <span className="pull-right">
                  <i className="fa fa-arrow-circle-right"></i>
                </span>

                <span className="clearfix"></span>
              </div>
            </a>

          </div>
        </div>
    );
  }
}

DashboardNotificationComponent.propTypes = {
  color : PropTypes.oneOf([
    'primary',
    'success',
    'info,warning',
    'danger'
  ]).isRequired,
  text : PropTypes.string,
  onClick: PropTypes.func
}

DashboardNotificationComponent.defaultProps = {
  text: ''
}
export default DashboardNotificationComponent;
