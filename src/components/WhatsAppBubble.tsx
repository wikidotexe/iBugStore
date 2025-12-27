"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function WhatsAppBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  if (!isVisible) return null;

  const contacts = [
    { title: "Boby", number: "+6289514554899" },
    { title: "Utha", number: "+62895367042693" },
    { title: "Wuls", number: "+62895367042693" },
  ];

  return (
    <>
      {isOpen && (
        <div className="whatsapp-menu">
          {contacts.map((contact, index) => (
            <Link
              key={index}
              href={`https://wa.me/${contact.number}?text=${encodeURIComponent("Apakah masih ada?")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-menu-item"
            >
              <MessageCircle size={20} />
              {contact.title}
            </Link>
          ))}
        </div>
      )}
      <button
        onClick={toggleMenu}
        className="whatsapp-bubble"
        aria-label="Toggle WhatsApp Menu"
        style={{ border: "none", cursor: "pointer" }}
      >
        <MessageCircle size={28} />
        <span className="whatsapp-tooltip">Hubungi Kami</span>
      </button>
    </>
  );
}
