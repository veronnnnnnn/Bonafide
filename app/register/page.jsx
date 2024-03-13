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
    // Call Firebase method to add registration details
    const firebase = new Firebase();
    const { status } = await firebase.addRegistration(registerEvent.id, userName, userEmail);
    if (status === 200) {
      console.log("Registration submitted successfully");
      // Close registration modal
      setShowRegistrationModal(false);
      setShowModal(false);
      setShowCongratulationModal(true);
      setTimeout(() => {
        setShowCongratulationModal(false);
      }, 2000);
    } else {
      console.error("Failed to submit registration");
    }
  };

  return (
    <div className="w-full h-full top-0 left-0 relative">
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
      <div className="container mx-auto relative">
        <br></br>
        <br></br>
        <br></br>
        <h1 className="text-3xl font-semibold my-4 text-white">Events</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {events.map(event => (
              <tr key={event.id} onClick={() => handleEventClick(event)} style={{ cursor: "pointer" }}>
                <td>{event.name}</td>
                <td>{new Date(event.date.seconds * 1000).toLocaleString()}</td>
                <td>{event.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Main Modal */}
      {showModal && (
        <Modal onClose={handleRegistrationNoClick} showCloseButton={false}>
          <div className="flex justify-center items-center flex-col">
            <h2 className="text-center mb-4">Do you want to register for this event?</h2>
            <div className="flex justify-center">
              <button className="mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handleRegistrationYesClick}>Yes</button>
              <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400" onClick={handleRegistrationNoClick}>No</button>
            </div>
          </div>
        </Modal>
      )}

      {/* Registration Modal */}
      {showRegistrationModal && (
        <Modal onClose={() => setShowRegistrationModal(false)} showCloseButton={false}>
          <div className="flex justify-center items-center flex-col">
            <h2 className="text-center mb-4">Please provide your name and email</h2>
            <form onSubmit={handleRegistrationSubmit}>
              <input type="text" placeholder="Name" className="border rounded-md px-3 py-2 mb-2" value={userName} onChange={(e) => setUserName(e.target.value)} />
              <input type="email" placeholder="Email" className="border rounded-md px-3 py-2 mb-2" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
              <div className="mt-4">
                <button type="submit" className="mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit</button>
                <button onClick={() => setShowRegistrationModal(false)} className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">Cancel</button>
              </div>
            </form>
          </div>
        </Modal>
      )}

      {showCongratulationModal && (
        <Modal onClose={() => setShowCongratulationModal(false)} showCloseButton={false}>
          <div className="flex justify-center items-center flex-col">
            <h2 className="text-center mb-4">Congratulations! Registration successful!</h2>
          </div>
        </Modal>
      )}
    </div>
  );
}
