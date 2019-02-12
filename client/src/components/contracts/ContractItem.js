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
            <TextFieldGroup
              value={contract.platform}
              info="Platform you will use this content on"
            />
            <TextFieldGroup
              value={contract.exclusive}
              info="Will the Buyer have Exclusive rights to this content?"
            />
            <TextFieldGroup
              value={contract.credit}
              info="Will the Creator receive credit in your posts? ('yes' or 'no')"
            />
            <TextFieldGroup
              value={contract.length_usage}
              info="How long does the Buyer have the rights to this content?"
            />
            <TextFieldGroup
              value={contract.price}
              info="Set Price"
            />
            {/* <TextFieldGroup
              value={contract.comments}
              info="Comments"
            /> */}
          </form>
          {/* <div className="col-md-2">
            <a href="profile.html">
              <img
                className="rounded-circle d-none d-md-block"
                src={contract.avatar}
                alt=""
              />
            </a>
            <br />
            <p className="text-center">{contract.name}</p>
          </div>
          <div className="col-md-10">
            <p className="lead">{contract.text}</p>
            {showActions ? (
              <span>
                <button
                  onClick={this.onLikeClick.bind(this, contract._id)}
                  type="button"
                  className="btn btn-light mr-1"
                >
                  <i
                    className={classnames('fas fa-thumbs-up', {
                      'text-info': this.findUserLike(contract.likes)
                    })}
                  />
                  <span className="badge badge-light">{contract.likes.length}</span>
                </button>
                <button
                  onClick={this.onUnlikeClick.bind(this, contract._id)}
                  type="button"
                  className="btn btn-light mr-1"
                >
                  <i className="text-secondary fas fa-thumbs-down" />
                </button>
                <Link to={`/contract/${contract._id}`} className="btn btn-info mr-1">
                  Comments
                </Link>
                {contract.user === auth.user.id ? (
                  <button
                    onClick={this.onDeleteClick.bind(this, contract._id)}
                    type="button"
                    className="btn btn-danger mr-1"
                  >
                    <i className="fas fa-times" />
                  </button>
                ) : null}
              </span>
            ) : null}
          </div> */}
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
