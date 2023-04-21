import React from "react";
import { events } from "../data/events";
import { Link } from "react-router-dom";

export default function EventsPage() {
  return (
    <>
      <div className="overflow-x-auto min-h-[50vh]">
        <div className="max-w-2xl mx-auto my-8 flex flex-col items-center">
          <div className="my-4">
            <span className="hero-heading text-2xl ">Upcomming Events</span>
          </div>
          <table className=" divide-y-2 divide-gray-200 text-sm  ">
            <thead className="text-left">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-200 ">
                  Name
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-200">
                  Date
                </th>
                {/* <th className="whitespace-pre-wrap px-4 py-2 font-medium text-gray-200 ">
                Venue
              </th> */}
                <th className="px-4 py-2 font-medium">Know more</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {events.map((event,index) => {
                return (
                  <tr key={index}>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-300">
                      <div className=""> {event.title}</div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-300">
                      <div className="">{event.date}</div>
                    </td>
                    {/* <td className="whitespace-nowrap px-4 py-2 text-gray-300">
                    <div className="max-w-sm h-20">{event.venue}</div>
                  </td> */}
                    <td className="whitespace-nowrap px-4 py-2">
                      <Link
                        to={event.contact.website}
                        className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
