import React from "react";

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
      <aside className="w-72">
        <h6 className="footer-title">CS - Ticket System</h6>
        <p className="text-gray-400">
          Customer service teams often struggle with managing large volumes of
          inquiries coming from multiple channels such as email, live chat,
          social media, and phone calls. 
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">Our Missions</a>
        <a className="link link-hover">Contact Saled</a>
      </nav>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Products & Services</a>
        <a className="link link-hover">Customer Stories</a>
        <a className="link link-hover">Download Apps</a>
      </nav>
      <nav>
        <h6 className="footer-title">Information</h6>
        <a className="link link-hover">Privacy Policy</a>
        <a className="link link-hover">Terms & Conditions</a>
        <a className="link link-hover">Join Us</a>
      </nav>
      <nav>
        <h6 className="footer-title">Social Links</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
}
