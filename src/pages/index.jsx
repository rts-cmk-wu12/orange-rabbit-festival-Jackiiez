// src/components/Signup.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Form = () => {
    const [participants, setParticipants] = useState([]); // funktion til at holde deltagerne
    const [newParticipant, setNewParticipant] = useState({ firstname: '', email: '', phone: '', birthday: '' }); // funktion til at indholde information om en ny deltagere
    const [error, setError] = useState(''); // funktion til fejlmeddelelser
    const navigate = useNavigate(); // Hook til navigation mellem sider

    // Hent deltagere fra local storage, når komponenten bliver brugt
    useEffect(() => {
        const storedParticipants = JSON.parse(localStorage.getItem('participants')) || [];
        setParticipants(storedParticipants);
    }, []);

    // Gem deltagere i local storage når deltagerlisten ændres
    useEffect(() => {
        localStorage.setItem('participants', JSON.stringify(participants));
    }, [participants]);

    // Håndter ændringer i inputfelterne for de nye deltagere
    const handleChange = (event) => {
        const { name, value } = event.target; // Hent navn og værdi fra det ændrede inputfelt
        setNewParticipant({ ...newParticipant, [name]: value }); // Opdater status for den nye deltagere
        setError(''); // Nulstil fejlmeddelelser når der ændres i inputfelterne
    };

    // Tilføj en ny deltager til listen
    const handleAddParticipant = () => {
        // Tjek om alle felterne er udfyldt
        if (!newParticipant.firstname || !newParticipant.email || !newParticipant.phone || !newParticipant.birthday) {
            setError('Alle felter skal udfyldes!'); // Sæt fejlmeddelelse
            return; // Stop funktionen, hvis ikke alle felter er udfyldt
        }

        // Tilføj den nye deltager til deltagerlisten
        setParticipants([...participants, newParticipant]);
        // Nulstil inputfelterne for at forberede til en ny deltager
        setNewParticipant({ firstname: '', email: '', phone: '', birthday: '' });
    };

    // Fjern en deltager fra deltagerlisten baseret på deres indeks
    const handleRemoveParticipant = (index) => {
        const values = [...participants]; // Lav en kopi af deltagerlisten
        values.splice(index, 1); // Fjern deltageren ved det givne indeks
        // Opdater deltagerlisten
        setParticipants(values);
    };

    // Naviger til Tak-siden, når brugeren er klar til at fortsætte
    const handleNextPage = () => {
        // Tjek om deltagerlisten er tom
        if (participants.length === 0) {
            setError('Du skal tilføje mindst én deltager før du kan fortsætte!'); // Sæt fejlmeddelelse
            return; // Stop funktionen, hvis der ikke er nogen deltagere
        }
        
        console.log(participants); // Log deltagerne for debugging eller videre behandling
        navigate('/profile'); // Omdiriger brugeren til Tak-siden
    };
//f
    return (
        <><div className="div__box">
         <img className="img" src="./public/img-container.png" alt="" />
            
            <form>
              
                <div className="form__div">  <p>sign up to the event</p><h1 className="form__div__heading">Orange rabbit festival 2023</h1>
                <p>24 june 2025-1 july 2025</p>
                <p>burney avenue 22</p>
                    <input
                        name="firstname"
                        placeholder="Fornavn..." // Pladsholdertekst for fornavn
                        value={newParticipant.firstname} // Værdi fra tilstanden for den nye deltager
                        onChange={handleChange} // hold styr ændringer i inputfeltet
                        required // Gør feltet obligatorisk
                    />
                    <input
                        name="email"
                        type="email" // Angiv, at dette inputfelt er til email
                        placeholder="Email..." // Pladsholdertekst for email
                        value={newParticipant.email} // Værdi fra tilstanden for den nye deltager
                        onChange={handleChange} // hold styr ændringer i inputfeltet
                        required // Gør feltet obligatorisk
                    />
                    <input
                        name="phone"
                        type="tel" // Angiv, at dette inputfelt er til telefonnummer
                        placeholder="Telefonnummer..." // Pladsholdertekst for telefonnummer
                        value={newParticipant.phone} // Værdi fra tilstanden for den nye deltager
                        onChange={handleChange} // hold styr ændringer i inputfeltet
                        required // Gør feltet nødvendigt
                    />
                    <input
                        name="birthday"
                        type="date" // Angiv, at dette inputfelt er til fødselsdato
                        placeholder="Fødselsdag..." // Pladsholdertekst for fødselsdag
                        value={newParticipant.birthday} // Værdi fra tilstanden for den nye deltager
                        onChange={handleChange} // hold styr ændringer i inputfeltet
                        required // Gør feltet nødvendigt
                    />
                    <button className="button" type="button" onClick={handleAddParticipant}>Add participant</button> 
                </div>

                {/* Vis fejlmeddelelse, hvis der er en */}
                {error && <p style={{ color: 'red' }}>{error}</p>}


                <div>
                    <p>your participants</p>
                <h2>{participants.length}</h2>
                {participants.map((participant, index) => (
                    <p key={index}>
                        {participant.firstname} - {participant.email} - {participant.phone} - {participant.birthday}
                        <button type="button" onClick={() => handleRemoveParticipant(index)} style={{ marginLeft: '10px' }}>
                            Fjern 
                        </button>
                    </p>
                ))}
            </div></form> <div><button className="sub__button" type="button" onClick={handleNextPage}>submit</button></div></div>
        </>
    );
};

export default Form;





