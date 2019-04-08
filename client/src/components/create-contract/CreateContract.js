import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';
import InputCheckboxGroup from '../common/InputCheckboxGroup';
import { createContract } from '../../actions/contractActions';

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      // platform: '',
      // exclusive: false,
      // credit: true,
      // length_usage: '',
      price: '',
      // comments: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const contractData = {
      url: this.state.url,
      // platform: this.state.platform,
      // exclusive: this.state.exclusive,
      // credit: this.state.credit,
      // length_usage: this.state.length_usage,
      price: this.state.price,
      // comments: this.state.comments,

    };

    this.props.createContract(contractData, this.props.history);
  }

  onChange(event) {
    if (event.target.type === 'checkbox') {
      this.setState({ [event.target.name]: event.target.checked });
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  }

  render() {
    const { errors } = this.state;


    // Select options for status
    const options = [
      { label: '* Select Platform', value: 0 },
      { label: 'Facebook', value: 'Facebook' },
      { label: 'Instagram', value: 'Instagram' },
      { label: 'Twitter', value: 'Twitter' },
      { label: 'Other', value: 'Other' }
    ];

    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Create Your Contract</h1>
              <p className="lead text-center">
                Let's get some information to generate your ByteRights ;)
              </p>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="URL"
                  name="url"
                  value={this.state.url}
                  onChange={this.onChange}
                  error={errors.url}
                  info="URL containing image for licensing"
                />
                {/* <SelectListGroup
                  placeholder="Platform"
                  name="platform"
                  value={this.state.platform}
                  onChange={this.onChange}
                  options={options}
                  error={errors.platform}
                  info="Which Platform will you use this content on"
                />
                <InputCheckboxGroup
                  placeholder="exclusive"
                  name="exclusive"
                  value={this.state.exclusive}
                  onChange={this.onChange}
                  error={errors.exclusive}
                  info="Will the Buyer have Exclusive rights to this content?"
                />
                <InputCheckboxGroup
                  placeholder="credit"
                  name="credit"
                  value={this.state.credit}
                  onChange={this.onChange}
                  error={errors.credit}
                  info="Will the Creator receive credit in your posts? ('yes' or 'no')"
                />
                <TextFieldGroup
                  placeholder="Length of Usage"
                  name="length_usage"
                  value={this.state.length_usage}
                  onChange={this.onChange}
                  error={errors.length_usage}
                  info="How long does the Buyer have the rights to this content?"
                /> */}
                <TextFieldGroup
                  placeholder="i.e. (giftcard, $10, credit on post)"
                  name="price"
                  value={this.state.price}
                  onChange={this.onChange}
                  error={errors.price}
                  info="Compensation"
                />
                {/* <TextFieldGroup
                  placeholder="Date"
                  name="date"
                  value={this.state.date}
                  onChange={this.onChange}
                  error={errors.date}
                  info="Today's Date (This will automatically be populated in the DB and not be shown in the near future"
                /> */}
                {/* <TextAreaFieldGroup
                  placeholder="Comments"
                  name="comments"
                  value={this.state.comments}
                  onChange={this.onChange}
                  error={errors.comments}
                  info="Any comments can be added here, this is where you can add non-monetary compensation as well."
                /> */}
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { createContract })(
  withRouter(CreateProfile)
);
