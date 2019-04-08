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
      <div className="card card-body mb-6">
        <div className="row">
        {/* <p className="lead">{contract.url}</p>
        <p className="lead">{contract._id}</p> */}
          <form>
            <TextFieldGroup
              // placeholder={contract.url}
              // name="url"
              value={contract.url}
              // onChange={this.onChange}
              // error={errors.url}
              info="URL containing image for licensing"
            />
            {/* <TextFieldGroup
              value={contract.platform}
              info="Platform you will use this content on"
            /> */}
            {/* <TextFieldGroup
              value={contract.exclusive}
              info="Will the Buyer have Exclusive rights to this content?"
            /> */}
            {/* <TextFieldGroup
              value={contract.credit}
              info="Will the Creator receive credit in your posts? ('yes' or 'no')"
            />
            <TextFieldGroup
              value={contract.length_usage}
              info="How long does the Buyer have the rights to this content?"
            /> */}
            <TextFieldGroup
              value={contract.price}
              info="Set Price"
            />
            {/* <TextFieldGroup
              value={contract.comments}
              info="Comments"
            /> */}
          </form>
          <div>
          Current User Votes:
            {votes.map(vote => (<div>{vote.user.name} - {vote.userSay}</div>))}
          </div>
        </div>
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
