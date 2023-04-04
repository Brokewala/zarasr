import React, { useState, useRef } from 'react'
import Layout from '../../Layout/Layout';
import CallIcon from '@mui/icons-material/Call';
import SendIcon from '@mui/icons-material/Send';
import { Facebook, Twitter, Instagram, LinkedIn, LocationOn } from "@mui/icons-material";
import EmailIcon from '@mui/icons-material/Email';
import emailjs from '@emailjs/browser';
import "./style/Contact.css";


export default function Contact() {
  const [email, setEmail] = useState('')
  const [phone, setphone] = useState('')
  const [username, setUsername] = useState('')
  const [message, setMessage] = useState('')
  const [projet, setProjet] = useState('')
  
  const [Error, setError] = useState(null)
  const [Color, setColor] = useState("transparent")
  const form = useRef()

  const validateEmail = (elementValue) => {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // verification si les champ est vide
    if (username.length < 1) {
      setColor('red')
      return setError("Entrez une valeur pour ce champ.")
    }
    if (validateEmail(email) === false) {
      setError("votre email n'est pas valide")
      return setColor('red')
    }
    if (phone.length < 10) {
      setColor('red')
      return setError("Entrez une valeur pour ce champ.")
    }
    if (projet.length <= 0) {
      setColor('red')
      return setError("Entrez une valeur pour ce champ.")
    }
    if (message.length <= 0) {
      setColor('red')
      return setError("Entrez une valeur pour ce champ.")
    }else{
      setError("")
      setColor('transparent')
    }
    // Envoyer email au societe zara sr
    emailjs.sendForm('service_awdcc9b', 'template_hy18f77', form.current, 'IpX7KEE1TiMZjpzDy')
    .then((result) => {
        if (result.status === 200) {
          // vide les champ de formulaire
          setphone("")
          setUsername("")
          setMessage("")
          setProjet("")
          setEmail("")
          // message de success
          setError("Votre email est bien etez envoyer")
          setColor('green')
        }
    }, (error) => {
         setError("Veullez contact la societe directement par email ou Telephone")
          setColor('red')
    });

  }


  return (
    <Layout>
      <div id='Contact'>
        <div className='Contact-container'>
          <div className='Contact-left'>
            <div className='Contact-form-content'>
              <h1>Contact-nous</h1>
              <div style={{ background: Color }} className="error">
                {Error && Error}
              </div>
              <form ref={form} onSubmit={handleSubmit}>
                <div className='filed'>
                  <label>identite  <em>*</em></label>
                  <input
                    type="text"
                    placeholder='Prenom et Nom'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    name="username"

                  />
                </div>
                <div className='filed'>
                  <label>Addresse e-mail <em>*</em></label>
                  <input
                    type="email"
                    placeholder='Addresse e-mail'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"

                  />
                </div>
                <div className='filed'>
                  <label>Numero telephone <em>*</em></label>
                  <input
                    type="number"
                    placeholder='Numero telephone'
                    value={phone}
                    onChange={(e) => setphone(e.target.value)}
                    name="phone"

                  />
                </div>
                <div className='filed'>
                  <label>Votre projet <em>*</em></label>
                  <input
                    type="text"
                    placeholder='Votre projet'
                    value={projet}
                    onChange={(e) => setProjet(e.target.value)}
                    name="projet"

                  />
                </div>
                <div className='filed'>
                  <label>Message <em>*</em></label>
                  <textarea
                    placeholder='Message ...'
                    rows={5}
                    cols={20}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    name="message"

                  ></textarea>
                </div>
                <div className='contact-bnt-card'>
                  <button type='submit' className='contact-btn'>
                    <span>Envoyer</span>
                    <SendIcon /></button>
                </div>
              </form>
            </div>
          </div>
          <div className='Contact-right'>
            <div className='Contact-right-title'>
            <h1>Nos informations</h1>
            </div>
            <div className='Contact-abouts-content'>
            <div className='contact-phone'>
                <div className='contact-phone-content'>
                  <h3 className='contact-h1'>Telephone</h3>
                  <div className='contact-phone-body  contact_body'>
                    <div className='phone-logo'><CallIcon className='icon down' sx={{ fontSize: "45px" }} /></div>
                    <ul className="phone_ul">
                      <li>(+261) 32 04 806 28</li>
                      <li>(+261) 34 40 558 33</li>
                      <li>(+261) 33 11 417 07</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='contact-email'>
              <div className='contact-email-content'>
                <h3 className='contact-h1'>Address Email</h3>
                <div className='contact-email-body contact_body'>
                  <div className='email-logo'><EmailIcon className='icon down' sx={{ fontSize: "40px" }} /></div>
                  <ul className="Contact_ul_email">
                    <li>info.zarasr@gmail.com</li>
                  </ul>
                </div>
              </div>
              </div>
              <div className='contact-address'>
                <div className='contact-address-content'>
                  <h3 className='contact-h1'>Address</h3>
                  <div className='contact-address-body'>
                    <div className='address-logo'><LocationOn className='icon down' sx={{ fontSize: "40px" }} /></div>
                    <h4>IIE2YWA Ambatokaranana,101 Antananarivo Madagascar</h4>
                  </div>
                </div>
              </div>
              <div className='contact-card-reseaux'>
                <h3 className='contact-h1'>Reseaux sociaux</h3>
                <div className='contact-reseaux-body contact_body'>
                  <ul>
                    <li>
                      <a href='http://localhost:3000/contact'>
                        <Facebook className='icon up' sx={{ fontSize: "40px" }} />
                      </a>
                    </li>
                    <li>
                      <a href='http://localhost:3000/contact'>
                        <Twitter className='icon down' sx={{ fontSize: "40px" }} />
                      </a>
                    </li>
                    <li>
                      <a href='http://localhost:3000/contact'>
                        <Instagram className='icon up' sx={{ fontSize: "40px" }} />
                      </a>

                    </li>
                    <li>
                      <a href='http://localhost:3000/contact'>
                        <LinkedIn className='icon down' sx={{ fontSize: "40px" }} />
                      </a>

                    </li>
                   
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
