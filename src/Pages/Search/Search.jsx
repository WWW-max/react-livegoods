import React from 'react';
import { useHistory } from 'react-router-dom';
import CommonHeader  from '../../Components/CommonHeader/CommonHeader';
import MyInput from '../../Components/MyInput/MyInput';

export default function Search(props) {
    const history = useHistory();
    console.log('[-', props);
  return (
    <div className='title'>
        <CommonHeader>
            <MyInput />
        </CommonHeader>
    </div>
  )
}
