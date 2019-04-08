import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Link } from 'react-router-dom'; 

//importing form components
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';
import InputCheckboxGroup from '../common/InputCheckboxGroup';
import placeholder from '../common/spinner.gif';

// import { deletePost, addLike, removeLike } from '../../actions/postActions';

class ContractItem extends Component {
//   onDeleteClick(id) {
//     this.props.deletePost(id);
//   }

//   onLikeClick(id) {
//     this.props.addLike(id);
//   }

//   onUnlikeClick(id) {
//     this.props.removeLike(id);
//   }

//   findUserLike(likes) {
//     const { auth } = this.props;
//     if (likes.filter(like => like.user === auth.user.id).length > 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }

  render() {
    const { contract, auth, showActions } = this.props;
    const { votes = [] } = contract;
    return (
      <div className="table-row">
        <div className="row">
          <div className="col-md-1">
            <img src="{placeholder}" />
          </div>
          <div className="col-md-2">
            <p>{contract._id}</p>
          </div>
          {/* <div className="col-md-1">
            <p>{contract.platform}</p>
          </div>
          <div className="col-md-1">
            <p>{contract.exclusive}</p>
          </div>
          <div className="col-md-2">
            <p>{contract.credit}</p>
          </div>
          <div className="col-md-1">
            <p>{contract.length_usage}</p>
          </div> */}
          <div className="col-md-1">
            <p>{contract.price}</p>
          </div>
          <div className="col-md-2">
            <p>{votes.map(vote => (<div>{vote.user.name} - {vote.userSay}</div>))}</p>
          </div>
          <div className="col-md-1">
            <Link to={`/Contract/${contract._id}/view`}>Go</Link>
          </div>
        </div>
        {/* <p className="lead">{contract.url}</p>
        <p className="lead">{contract._id}</p> */}
      </div>

      
    );
  }
}

ContractItem.defaultProps = {
  showActions: true
};

ContractItem.propTypes = {
//   deletePost: PropTypes.func.isRequired,
//   addLike: PropTypes.func.isRequired,
//   removeLike: PropTypes.func.isRequired,
  contract: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null )(
  ContractItem
);
