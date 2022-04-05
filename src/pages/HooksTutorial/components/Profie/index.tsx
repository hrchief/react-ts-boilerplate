import React, { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const Profile: React.FC = () => {
  const [firstname, setFN] = useState('')
  const [secondname, setSN] = useState('')
  const firstRef = useRef<any>(null)

  useEffect(() => {
    firstRef.current.focus()
    const fullname = document.getElementById("fullname")
    if (fullname) fullname.innerHTML = firstname + secondname
  }, [firstname, secondname])

  const handleFirstnameChange = (e: any) => {
    setFN(e.target.value)
  }
  const handleSecondnameChange = (e: any) => {
    setSN(e.target.value)
  }
  
  return (
    <div>
      <h2>Profile</h2>
      <div>
        <span>Your name is </span>
        <span id="fullname"></span>
      </div>
      <form>
        <input ref={firstRef} placeholder="first name" onChange={handleFirstnameChange} />
        <input placeholder="second name" onChange={handleSecondnameChange} />
      </form>
    </div>
  );
};

export default Profile