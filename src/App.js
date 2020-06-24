import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { addFeature, removeFeature } from './actions/index';
import { connect } from 'react-redux';

const App = props => {
  const {additionalFeatures, additionalPrice, car, addFeature, removeFeature} = props;

  const addItem = item => {
    addFeature(item);
  }

  const removeItem = item => {
    removeFeature(item)
  }


  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} removeItem={removeItem}/>
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={additionalFeatures} addItem={addItem}/>
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  };
};

const mapDispatchToProps = { addFeature, removeFeature }

export default connect(mapStateToProps, mapDispatchToProps)(App);
