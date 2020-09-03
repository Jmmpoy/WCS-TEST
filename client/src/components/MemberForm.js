import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from "axios";

export const MemberForm = ({addMember}) => {

    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
      if (!value) return alert('ya rien boy');
        addMember(value);
      setValue('');
      axios.post("http://localhost:5000/api/Members", { name: value });
    }

    return (
      <>
        <form className="member-form" onSubmit={handleSubmit}>
          <motion.label
            htmlFor="name"
            className="member-label"
          >
            Nom de l&apos;Argonaute
          </motion.label>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="member-input"
          />
          <button type="submit" className="member-button">
            Envoyer
          </button>
        </form>
      </>
    );
}

export default MemberForm;
