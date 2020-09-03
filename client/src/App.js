import React, { useState, useEffect } from "react";
import "./App.css";
import Member from "./components/Member";
import MemberForm from "./components/MemberForm";
import Header from "./components/header";
import Footer from "./components/Footer";

function App() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/Members")
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setMembers( data );
        console.log();
      });
  }, []);

  const list = members.map((member, index) => (
    <Member member={member} key={index} />
  ));

  const addMember = (member) => {
    const newMembers = [...members, { name: member }];
    setMembers(newMembers);
  };

  return (
    <div className="App">
      <Header />
      <section className="App-members">
        <MemberForm addMember={addMember} />
        <ul className="App-members-list">{list}</ul>
      </section>
      <Footer />
    </div>
  );
}

export default App;
