import React from 'react'
import { MdHeight } from 'react-icons/md';
import { ClipLoader } from 'react-spinners'
const override = {
    display: "block",
    margin: '40px auto',
};
const Spinner = ({loading}) => {
  return (
        <ClipLoader 
            color='#4338ca'
            loading={loading}
            cssOverride={override}
            size={100}
        />
  )
}

export default Spinner