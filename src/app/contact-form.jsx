'use client';

/**
 * Contact Form Client Component
 */

import { useActionState } from 'react';
import { submitContactForm } from './actions';

const initialState = {
  success: false,
  error: null,
  ids: null,
};

export function ContactForm() {
    const [state, formAction, isPending] = useActionState(
        submitContactForm,
        initialState,
    );
  
    const handleFocus = (e) => {
        e.target.style.borderColor = "#ff69b4";
    };
    const handleBlur = (e) => {
        e.target.style.borderColor = "#6b1a3a";
    };

  return (
    <>
        <form action={formAction} >            
            <div style={{ display: "grid", gap: 20, maxWidth: 560, margin: "0 auto" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div>
                        <label className="block tracking-widest text-sm font-medium mb-3 text-[#ffe0ef]">NAME</label>
                        <input                              
                            className="w-full px-3 py-2 border-2 border-pink-900 focus:border-pink-500 outline-none transition-colors"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            name="name" id="name" 
                            placeholder="Commander..." required
                        />
                    </div>
                    <div>
                        <label className="block tracking-widest text-sm font-medium mb-3 text-[#ffe0ef]">EMAIL</label>
                        <input 
                            
                            className="w-full px-3 py-2 border border-2 border-pink-900 focus:border-pink-500 outline-none transition-colors"                            
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            name="email" id="email" type="email" placeholder="youremail@starfleet.nasa" required/>
                    </div>
                </div>
                <div>
                    <label className="block tracking-widest text-sm font-medium mb-3 text-pink-200">MESSAGE</label>
                    <textarea 
                        className="w-full px-3 py-2 border-2 border-pink-900 focus:border-pink-500 outline-none transition-colors"                            
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        rows={4}
                        name="message" id="message" placeholder="Transmit your message across the cosmos..." required/>
                </div>
                <button className="transition-shadow bg-linear-to-r/srgb from-pink-500 to-pink-700 tracking-widest outline-none text-[#ffe0ef] px-3 py-2 shadow-xl/30"
                onMouseEnter={(e) => {
                (e.currentTarget).style.filter = "brightness(1.2)";
                (e.currentTarget).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                (e.currentTarget).style.filter = "none";
                (e.currentTarget).style.transform = "none";
                }}
                type="submit"
                    >TRANSMIT</button>                
            </div>
        </form>
        {state.success && (
        <div
            style={{
            textAlign: "center",
            display: "grid",
            placeItems: "center",
            padding: 60,
            fontFamily: "'Press Start 2P', monospace",
            color: "#ff69b4",
            fontSize: 13,
            lineHeight: 2.5,
            animation: "fadeIn 0.5s ease",
            }}
        >
            <img src="/main-planet.svg" alt="Main Planet" />

            <div>TRANSMISSION RECEIVED</div>
            <div style={{ color: "#6b1a3a", fontSize: 9, marginTop: 8 }}>WE WILL RESPOND SHORTLY</div>
        </div>
      )}

      {state.error && (
        <div className="mt-6 p-4 rounded-lg border border-red-200 bg-red-50">
          <h3 className="font-medium text-red-800 mb-2">Error</h3>
          <p className="text-sm text-red-700">{state.error}</p>
        </div>
      )}
      </>
  );
}