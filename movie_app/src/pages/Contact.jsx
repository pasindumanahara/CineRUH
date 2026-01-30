import NavBar from '../components/NavBar';
import { useState } from "react";
export default function Contact (){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");  
  const [statusMessage, setStatusMessage] = useState("");
  const [message, setMessage] = useState("");
  let temp; 
  
  const sendMessage = ()=> {

    fetch("http://localhost/sendMessage.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        name: name,
        message: message
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === "success") {
          setMessage(data.message);
          temp = true;
        } else {
          setMessage(data.message);
          temp = false;
        }
      })
      .catch(err => {
        console.error(err);
        sendMessage("Server error!");
        temp = false;
      });
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0B090A', fontFamily: 'Arial, sans-serif' }}>
      <NavBar />
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: '40px 20px',
        minHeight: 'calc(100vh - 80px)'
      }}>
        <div style={{ 
          backgroundColor: '#27272a', 
          borderRadius: '24px', 
          boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
          overflow: 'hidden',
          maxWidth: '900px',
          width: '100%'
        }}>
          <div style={{ display: 'flex' }}>
            
            {/* Left Section - Information */}
            <div style={{ 
              width: '50%',
              padding: '50px 30px',
              background: 'linear-gradient(135deg, #1f1f23 0%, #27272a 100%)'
            }}>
              <p style={{ 
                fontSize: '11px', 
                color: '#71717a', 
                letterSpacing: '1.5px',
                marginBottom: '12px',
                fontWeight: '600'
              }}>
                WE'RE HERE TO HELP YOU
              </p>
              
              <h2 style={{ 
                fontSize: '36px', 
                fontWeight: 'bold', 
                color: '#fafafa',
                lineHeight: '1.2',
                marginBottom: '20px'
              }}>
                Discuss Your<br/>
                Movie & Show<br/>
                Experience Needs
              </h2>
              
              <p style={{ 
                fontSize: '14px', 
                color: '#a1a1aa', 
                lineHeight: '1.6',
                marginBottom: '30px'
              }}>
                Are you looking for top quality movie recommendations tailored<br/>
                to your needs? Reach out to us.
              </p>

              {/* Contact Details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ 
                    width: '48px', 
                    height: '48px', 
                    backgroundColor: '#E74C3C',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <svg style={{ width: '24px', height: '24px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontSize: '11px', color: '#71717a', marginBottom: '2px' }}>E-mail</p>
                    <p style={{ fontSize: '14px', fontWeight: '500', color: '#fafafa' }}>csc113a@gmail.com</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ 
                    width: '48px', 
                    height: '48px', 
                    backgroundColor: '#E74C3C',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <svg style={{ width: '24px', height: '24px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontSize: '11px', color: '#71717a', marginBottom: '2px' }}>Phone number</p>
                    <p style={{ fontSize: '14px', fontWeight: '500', color: '#fafafa' }}>+94 722 614 580</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Form */}
            <div style={{ 
              width: '50%',
              padding: '50px 30px',
              backgroundColor: '#27272a'
            }}>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                
                {/* Name Input */}
                <div>
                  <label style={{ 
                    display: 'block',
                    fontSize: '11px',
                    fontWeight: '500',
                    color: '#a1a1aa',
                    marginBottom: '8px'
                  }}>
                    Name
                  </label>
                  <input 
                    type="text"
                    placeholder="Jane Smitherton"
                    style={{ 
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      border: '1px solid #3f3f46',
                      backgroundColor: '#18181b',
                      fontSize: '14px',
                      color: '#fafafa',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label style={{ 
                    display: 'block',
                    fontSize: '11px',
                    fontWeight: '500',
                    color: '#a1a1aa',
                    marginBottom: '8px'
                  }}>
                    Email
                  </label>
                  <input 
                    type="email"
                    placeholder="jane@smitherton.com"
                    style={{ 
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      border: '1px solid #3f3f46',
                      backgroundColor: '#18181b',
                      fontSize: '14px',
                      color: '#fafafa',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}                    
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label style={{ 
                    display: 'block',
                    fontSize: '11px',
                    fontWeight: '500',
                    color: '#a1a1aa',
                    marginBottom: '8px'
                  }}>
                    Message
                  </label>
                  <textarea 
                    placeholder="Type your message..."
                    rows="4"
                    style={{ 
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      border: '1px solid #3f3f46',
                      backgroundColor: '#18181b',
                      fontSize: '14px',
                      color: '#fafafa',
                      outline: 'none',
                      resize: 'none',
                      fontFamily: 'Arial, sans-serif',
                      boxSizing: 'border-box'
                    }}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}                   
                  />
                </div>

                
                <p style={{ 
                  textAlign: 'center',
                  fontSize: '14px',
                  color: temp ? '#22c55e' : '#ef4444', // Change to '#ef4444' for error
                  margin: 0
                }}>
                  {statusMessage}
                </p>

                {/* Submit Button */}
                <button 
                  type="submit"
                  style={{ 
                    width: '100%',
                    padding: '12px',
                    backgroundColor: '#E74C3C',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#C0392B';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#E74C3C';
                  }}
                >
                  Get a Solution
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
