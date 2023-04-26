import React from "react";

const ContactForm = () => {
  return (
    <form className="flex flex-col gap-4 rounded-lg p-2 border shadow shadow-white w-100% sm:w-80% bg-slate-900">
      <div className="flex flex-col ">
        <label htmlFor="name" className="text-gray-300 text-sm">
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Write your name here"
          required
          autoComplete="off"
          className="rounded-lg p-1 text-slate-900"
        />
      </div>
      <div className="flex flex-col ">
        <label htmlFor="email" className="text-gray-300 text-sm">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Write email name here"
          required
          className="rounded-lg p-1 text-slate-900"
        />
      </div>
      <div className="flex flex-col ">
        <label htmlFor="messege" className="text-gray-300 text-sm">
          Messege
        </label>
        <textarea
          name="messege"
          placeholder="Please say something..."
          className="rounded-lg p-1 text-slate-900 resize-none min-h-150px max-h-200px"
        ></textarea>
      </div>
      <div className="flex items-center justify-center">
        <button className="rounded-lg border px-4 py-1 hover:bg-slate-800  transition-all font-bold ">
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
