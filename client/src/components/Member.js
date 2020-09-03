import React from 'react'
import {motion} from 'framer-motion'

const Member = ({ member, index }) => {

  return (
    <>
      <motion.li
        key={index}
      >
        {member.name}
      </motion.li>
    </>
  );
}


export default Member