import React, { useEffect, useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";

export default function Dashboard({ selected, solved, onSelection, onResolved }) {
  const [cards, setCards] = useState([]);

  const handleSelection = (card) => {
    onSelection(card);
    toast.success(" Issue added to task list!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const handleResolved = (card) => {
    onResolved(card);
    toast.success(" Issue Solved!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  

  console.log(selected);

  useEffect(() => {
    fetch("/tickets.json")
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-3 max-w-7xl mx-auto py-5 pb-10">
      {/* Left Side of the Seciton */}
      <div className="col-span-1 md:col-span-3">
        <h1 className="text-2xl font-semibold py-2">Customer Tickets</h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <div
              key={card.ticket_id}
              onClick={() => handleSelection(card)}
              className="card w-full bg-base-100 card-sm shadow-sm cursor-pointer"
            >
              <div className="card-body">
                <div className="flex items-center justify-between">
                  <h2 className="card-title">{card.title}</h2>
                  <div
                    className={`flex items-center gap-1 rounded-full px-3 py-1 ${card.status === "Open" ? "bg-green-300/40 text-green-700" : card.status === "In-Progress" ? "bg-yellow-300/40 text-yellow-700" : "bg-gray-500/40 text-gray-700"}`}
                  >
                    <div
                      aria-label="success"
                      className={`status ${card.status === "Open" ? "status-success" : card.status === "In-Progress" ? "status-warning" : "status-md"}`}
                    ></div>
                    <p>{card.status}</p>
                  </div>
                </div>
                <p className="text-gray-500">{card.description}</p>
                <div className="flex items-center justify-between text-gray-500">
                  <div className="flex gap-2 items-center justify-start w-5/10">
                    <h2>{card.ticket_id}</h2>
                    <h5 className="text-red-500">{card.priority}</h5>
                  </div>
                  <div className="flex gap-2 items-center justify-end w-5/10">
                    <h2>{card.customer_name}</h2>
                    <div className="flex items-center gap-1 justify-between">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z"
                        />
                      </svg>

                      <p>{card.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right side of the section */}
      <div className="col-span-1 flex flex-col">
        <h1 className="text-2xl font-semibold py-2">Task Status</h1>
        <div className="flex flex-col gap-2">
          {selected.length === 0 ? (
            <div className="text-sm text-gray-500">
              Select a ticket to add to Task Status
            </div>
          ) : (
            selected.map((sCard) => (
              <div
                key={sCard.ticket_id}
                className="p-4 flex flex-col gap-2 rounded-lg bg-white shadow-sm"
              >
                <h2>{sCard.title}</h2>
                <button
                  onClick={() => handleResolved(sCard)}
                  className="w-full rounded-lg text-white py-2 cursor-pointer hover:bg-green-500 bg-green-600 text-lg font-medium"
                >
                  Complete
                </button>
              </div>
            ))
          )}
        </div>
        <h1 className="text-2xl font-semibold py-2">Resolved Tasks</h1>
        <div className="flex flex-col gap-2">
          {solved.length === 0 ? (
            <div className="text-sm text-gray-500">No resolved tasks yet</div>
          ) : (
            solved.map((rCard) => (
              <div
                key={rCard.ticket_id}
                className="p-4 flex flex-col gap-2 rounded-lg bg-white shadow-sm"
              >
                <h2>{rCard.title}</h2>
              </div>
            ))
          )}
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}
