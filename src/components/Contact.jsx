import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [userName , setUserName] = useState("");
  const [email , setEmail] = useState("");
  const [message , setMessage] = useState("");

  const form = useRef();


 
     const sendEmail = (e) => {


       e.preventDefault();

       if(userName == "" && email == "" && message == ""){
        toast.error("Please fill all the fields");
       }
       else{
          
    // console.log(form.current)
  
          
    emailjs
    .sendForm(
      "service_7opz5qx",
      "template_v8a6h7d",
       form.current,
      "1lvSMLK25khKCWi9K"
    )
    
    .then(
      (result) => {
        toast.success("Email Send Successfull!", {
          position: "top-left",
          autoClose: 5000,

         
        
        });
        // form.current.reset();
        setUserName("")
        setEmail("")
        setMessage("")
        
      },
      (error) => {
        console.log(error.text);
      }
    );
        
       }
   
   
    // console.log(form.current)

  };

  //  setUserName("")
  //  setEmail("")
  //  setMessage("")
  
 
 

  const contact_info = [
    { logo: "mail", text: "omarjibrilabdulkhadir" },
    { logo: "logo-whatsapp", text: "+252617014906" },
    {
      logo: "location",
      text: "Mogadishu-Somali",
    },
  ];
  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col flex-1 gap-5"
          >
            <input onChange={(e)=> setUserName(e.target.value)} value={userName} type="text" placeholder="Your Name" name="user_name" />
            <input
              onChange={(e)=> setEmail(e.target.value)}
              value={email}
              type="Email"
              placeholder="Your Email Address"
              name="user_email"
            />
            <textarea
             
              value={message}
              onChange={(e)=> setMessage(e.target.value)}
              placeholder="Your Message"
              name="message"
              rows={10}
            ></textarea>
            {/* <button type="submit" className="btn-primary w-fit">Send Message</button> */}
            <input
              type="submit"
              value="Send"
              className="btn-primary w-fit cursor-pointer"
            />
            <ToastContainer />
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
