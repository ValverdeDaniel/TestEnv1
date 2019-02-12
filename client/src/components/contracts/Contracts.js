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
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {contractContent}
            </div>
          </div>
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
