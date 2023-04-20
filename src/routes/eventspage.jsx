import React from "react";
import { events } from "../data/events";

export default function EventsPage() {
  return (
    <>
      <div className="overflow-x-auto max-w-4xl mx-auto">
        <table className=" divide-y-2 divide-gray-200 text-sm ">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-200 ">
                Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-200">
                Date
              </th>
              <th className="whitespace-pre-wrap px-4 py-2 font-medium text-gray-200 ">
                Venue
              </th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {events.map((event) => {
              return (
                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-300">
                    {event.title}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-300">
                    {event.date}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-300">
                   {event.venue}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <a
                      href="#"
                      className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                    >
                      View
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
