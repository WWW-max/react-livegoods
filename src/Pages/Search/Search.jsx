import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Search(props) {
    const history = useHistory();
    console.log('[-', props);
  return (
    <div>
        <div>Search:{props.match.params.val}</div>
    </div>
  )
}
