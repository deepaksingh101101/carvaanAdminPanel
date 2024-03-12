// import PropTypes from 'prop-types'
// import React, { Component } from "react"
// import withRouter from './Common/withRouter'

// class NonAuthLayout extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {}
//     this.capitalizeFirstLetter.bind(this)
//   }

//   capitalizeFirstLetter = string => {
//     return (string.charAt(1).toUpperCase() + string.slice(2));
//   }


//   render() {
//     return <React.Fragment>{this.props.children}</React.Fragment>
//   }
// }

// NonAuthLayout.propTypes = {
//   children: PropTypes.any,
//   location: PropTypes.object
// }

// export default withRouter(NonAuthLayout)




import PropTypes from 'prop-types';
import React, { Component } from "react";
import { Navigate } from 'react-router-dom'; // Corrected import

// Assuming withRouter is correctly implemented if needed for other functionalities
import withRouter from './Common/withRouter';

class NonAuthLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldNavigate: false, // State to control navigation
    };
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  componentDidMount() {
    const user = localStorage.getItem('authUser');
    if (user) {
      this.setState({ shouldNavigate: true });
    }
    // Assuming you want to set the document title based on path
    let currentPage = this.capitalizeFirstLetter(window.location.pathname.split("/").pop());
    document.title = currentPage + " |Carvaan";
  }

  render() {
    // Navigate to home if user is authenticated
    if (this.state.shouldNavigate) {
      return <Navigate to="/" replace />;
    }

    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
}

NonAuthLayout.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object,
};

export default withRouter(NonAuthLayout);
