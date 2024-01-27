const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl p-4 m-4">Contact Us</h1>
      <form>
        <input
          type="text"
          placeholder="UserName"
          className="border border-black rounded-lg p-2 m-2"
        />
        <input
          type="text"
          placeholder="Message"
          className="border border-black rounded-lg p-2 m-2"
        />
        <button className="rounded-lg bg-slate-400 ">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
