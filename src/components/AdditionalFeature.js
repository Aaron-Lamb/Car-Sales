import React from 'react';
import { connect } from 'react-redux';
import { addFeature } from '../actions';

const AdditionalFeature = props => {
  console.log(props);
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => {
        props.addFeature(props.feature)
      }}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    features: state.car.features
    }
  }


const mapDispatchToProps = { addFeature };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdditionalFeature);
