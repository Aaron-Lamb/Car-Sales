import React from 'react';

const AddedFeature = props => {
  const {removeItem} = props
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => removeItem(props.feature.id)}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
