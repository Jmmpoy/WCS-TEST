import React from "react";
import { motion } from "framer-motion";

export const header = () => {
  return (
    <>
      <header className="App-header">
        <motion.div
          initial={{ x: -250 }}
          animate={{ x: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1.3,
          }}
          className="header-img"
        >
          <img
            src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png"
            alt="Wild Code School logo"
          />
        </motion.div>
        <motion.div
          initial={{ x: 250 }}
          animate={{ x: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 0.8,
          }}
          className="header-title"
        >
          <h1>Les Argonautes</h1>
        </motion.div>
      </header>
    </>
  );
};

export default header;
