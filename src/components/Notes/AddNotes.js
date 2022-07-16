import React from "react";

function AddNotes({ handleSubmit, handleChange, display }) {
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="merriweather w-full mt-12 flex justify-center"
      >
        <input
          type="text"
          required
          maxLength={50}
          autoFocus
          onChange={handleChange}
          placeholder="You`ll no remember it? Create a note"
          className="overflow-hidden w-[300px] py-2 pl-4 text-black font-semibold outline-none rounded-xl  "
        />
        <button className="py-2 px-6 ml-6 rounded-xl bg-white" type="submit">
          Create
        </button>
      </form>
    </>
  );
}

export default AddNotes;
