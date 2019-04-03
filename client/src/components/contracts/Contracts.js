import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../common/Spinner';
import { getContracts } from '../../actions/contractActions';
import ContractItem from './ContractItem'

class Contracts extends Component {
  componentDidMount() {
    this.props.getContracts();
  }

  render() {
    const { contracts, loading } = this.props.contract;
    let contractContent;

    if (contracts === null || loading) {
      contractContent = <Spinner />;
    } else {
        //remove line below
      contractContent = contracts.map(contract => <ContractItem key={contract._id} contract={contract} />);
    }

    return (
      <div className="feed">
        <div className="table-title">
          <div className="row">
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-auto">
                  <h1 className="display-4">Proposals</h1>
                </div>
                <div className="col-md-auto align-self-end">
                  <ul class="nav nav-tabs">
                    <li class="nav-item">
                      <a class="nav-link active" href="#">All</a>
                    </li> 
                    <li class="nav-item">
                      <a class="nav-link" href="#">Sent</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Countered</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Accepted</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Declined</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="row">  
                <div className="col-md-auto align-self-center">
                  <button type="button" class="btn btn-primary">+ New Proposal</button>
                </div>
                <div className="col-md-auto align-self-center">
                  <a href="#" className="user-help"><span>?</span></a>
                </div> 
                <div className="col-md-auto align-self-center">
                  <a href="#" className="user-profile"><span>EK</span></a>
                </div> 
              </div>
            </div>
          </div>
        </div>
        <div className="table-view">
          <div className="table-header">
            <div className="row">
              <div className="col-md-1">
                <p>Image</p>
              </div>
              <div className="col-md-2">
                <p>ID</p>
              </div>
              <div className="col-md-1">
                <p>Platform</p>
              </div>
              <div className="col-md-1">
                <p>Exclusive?</p>
              </div>
              <div className="col-md-2">
                <p>Credit Used</p>
              </div>
              <div className="col-md-1">
                <p>Length</p>
              </div>
              <div className="col-md-1">
                <p>Price</p>
              </div>
              <div className="col-md-2">
                <p>Current User Votes</p>
              </div>
              <div className="col-md-1">
                <p>URL</p>
              </div>
            </div>
          </div>
          {contractContent}
        </div>
      </div>
    );
  }
}

Contracts.propTypes = {
  getContracts: PropTypes.func.isRequired,
  contract: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  contract: state.contract
});

export default connect(mapStateToProps, { getContracts })(Contracts);
