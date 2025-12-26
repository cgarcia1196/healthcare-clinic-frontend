import React from "react";

const Contact = () => {
  return (
    <div className="mx-auto p-6 space-y-6 max-w-md">
      <h2 className="text-3xl text-center">Contact Us</h2>

      <h3 className="text-xl font-semibold text-gray-800">Our Office</h3>
      <div className="text-gray-500">
        <p>1234 Main Street</p>
        <p>Suite 56, California, USA</p>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-800">Contact Info</h3>
        <p className="text-gray-500">Email: health-clinic@mail.com</p>
        <p className="text-gray-500">Phone: (555)123-4567</p>
      </div>
    </div>
  );
};

export default Contact;
