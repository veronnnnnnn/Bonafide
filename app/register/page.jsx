"use client";

import React, { useState, useEffect } from "react";
import { BsChevronLeft } from "react-icons/bs";
import Modal from "../../components/Modal"; // Import your Modal component
import Firebase from "../../lib/firebase";
import '../styles.css';

export default function Project() {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [registerEvent, setRegisterEvent] = useState(null);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [showCongratulationModal, setShowCongratulationModal] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const firebase = new Firebase();
        const eventsData = await firebase.getEvents();
        setEvents(eventsData);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
  
    fetchEvents();
  }, []);

  const handleBack = () => {
    window.history.back(); // Navigate back using browser's history
  };

  const handleEventClick = (event) => {
    setRegisterEvent(event);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false); // Close the modal
  };

  const handleRegistrationYesClick = () => {
    setShowRegistrationModal(true);
  };

  const handleRegistrationNoClick = () => {
    setShowModal(false);
  };

  const handleRegistrationSubmit = async (event) => {
    event.preventDefault();
    if (!userName.trim() || !userEmail.trim()) {
      // Display prompt message if fields are empty
      alert("Please fill in all fields.");
      return;
    }
    
    // Call Firebase method to add registration details
    const firebase = new Firebase();
    const { status } = await firebase.addRegistration(registerEvent.id, userName, userEmail);
    if (status === 200) {
      console.log("Registration submitted successfully");
      // Close registration modal
      setShowRegistrationModal(false);
      setShowModal(false);
      setShowCongratulationModal(true);
      
    } else {
      console.error("Failed to submit registration");
    }
  };
  

  return (
    <div className="w-full h-full relative overflow-hidden">
    {/* Background image */}
    <div
      className="fixed inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url(/assets/star.png), linear-gradient(#2b1055, #7597de)",
      }}
    ></div>
  
    {/* Back button */}
    <div className="absolute top-5 left-5 z-10">
      <BsChevronLeft
        size={50}
        className="text-black rounded-full bg-white p-4 cursor-pointer"
        onClick={handleBack}
      />
    </div>
  
    {/* Render events */}
    
    <div className="container mx-auto relative py-16">
  <h1 className="text-3xl font-semibold text-white mb-8">Upcoming Events</h1>
  <div className="overflow-x-auto">
    <table className="table-auto w-full text-black">
      <thead>
        <tr>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Date</th>
          <th className="px-4 py-2">Description</th>
          <th className="px-4 py-2">Actions</th> {/* Added Actions column */}
        </tr>
      </thead>
      <tbody>
        {events.map(event => (
          <tr key={event.id} className="hover:bg-gray-800">
            <td className="px-4 py-2">{event.name}</td>
            <td className="px-4 py-2">{new Date(event.date.seconds * 1000).toLocaleString()}</td>
            <td className="px-4 py-2">{event.description}</td>
            <td className="px-4 py-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleEventClick(event)}>Register Now</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
  
    {/* Main Modal */}
    {showModal && (
      <Modal onClose={handleRegistrationNoClick} showCloseButton={false}>
        <div className="flex flex-col items-center">
          <h2 className="text-center mb-4  text-2xl font-bold text-black">Do you want to register for this event?</h2>
          <div className="flex justify-center">
            <button className="mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handleRegistrationYesClick}>Yes</button>
            <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400" onClick={handleRegistrationNoClick}>No</button>
          </div>
        </div>
      </Modal>
    )}
  
  
  {showRegistrationModal && (
  <Modal onClose={() => setShowRegistrationModal(false)} showCloseButton={false}>
    <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-center mb-6 text-3xl font-bold text-black">Register</h2>
      <form onSubmit={handleRegistrationSubmit} className="w-full max-w-sm">
        <div className="mb-6">
          <input 
            type="text" 
            placeholder="Name" 
            className="input-field" 
            value={userName} 
            onChange={(e) => setUserName(e.target.value)} 
          />
        </div>
        <div className="mb-6">
          <input 
            type="email" 
            placeholder="Email" 
            className="input-field" 
            value={userEmail} 
            onChange={(e) => setUserEmail(e.target.value)} 
          />
        </div>
        <div className="flex justify-center">
          <button 
            type="submit" 
            className="mr-4 px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 ease-in-out"
          >
            Submit
          </button>
          <button 
            onClick={() => setShowRegistrationModal(false)} 
            className="px-6 py-3 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition duration-300 ease-in-out"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </Modal>
)}
{showCongratulationModal && (
  <Modal onClose={() => setShowRegistrationModal(false)} showCloseButton={false}>
    <div className="flex justify-center items-center flex-col p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-center mb-4 text-2xl font-bold text-green-500">Thank you for registering for our upcoming event!</h2>
      <p className="text-center text-lg text-gray-800 mb-6">Your registration has been successfully received.</p>
      <p className="text-center text-base text-gray-800 mb-6">Please keep an eye on your email inbox for further details and instructions on how to join the event. We&apos;ll be sending you all the necessary information to ensure your seamless participation.</p>
      <p className="text-center text-base text-gray-800 mb-6">In the meantime, if you have any questions or need assistance, feel free to reach out to us at <strong className="font-semibold">bonafide.team@gmail.com</strong>. We&apos;re here to help!</p>
      <p className="text-center text-base text-gray-800 mb-6">We look forward to having you join us for an enriching and impactful experience.</p>
      <p className="text-center text-base text-gray-800 mb-6 font-semibold">Best regards,<br />Bonafide Team</p>
      <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" onClick={() => setShowCongratulationModal(false)}>Close</button>
    </div>
  </Modal>
)}

    </div>
  );
}
