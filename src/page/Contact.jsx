import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = (e) => {
    e.preventDefault();

    const serviceId = "service_9g31ybc";
    const tempId = "template_dcj5tqd";
    const publicKey = "fuVH1JsGkk7JK916K";

    const tempParms = {
      from_name: name,
      from_email: email,
      to_name: "web master",
      message: message,
    };
    emailjs
      .send(serviceId, tempId, tempParms, publicKey)
      .then((response) => {
        console.log("message", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-1/4 border border-gray-300 rounded-lg p-10 pb-16 ">
        <h1 className="text-red-700 font-bold mb-4 text-center text-4xl">
          Contact Us
        </h1>
        <form onSubmit={sendMail} className="space-y-4">
          <input
            type="text"
            value={name}
            placeholder="Username"
            required
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border text-black bg-white border-gray-300 rounded-md focus:outline-none focus:border-red-700"
          />
          <input
            type="email"
            value={email}
            placeholder="E-mail"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border text-black border-gray-300 rounded-md bg-white focus:outline-none focus:border-red-700"
          />
            <textarea
              cols="30"
              rows="10"
              type="text"
              value={message}
              placeholder="Message"
              required
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 border text-black border-gray-300 rounded-md bg-white focus:outline-none focus:border-red-700"
            />
          <div className="relative w-full">
          <button
            className=" w-20 py-2 bg-red-700 text-white rounded-md hover:bg-red-600 absolute left-1/2 -translate-x-1/2 "
            type="submit"
          >
            Send
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
