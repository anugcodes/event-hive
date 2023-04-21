import { Link } from "react-router-dom";
export function InputGrp({ label, error, ...props }) {
  return (
    <>
      <div>
        <label htmlFor="email" className="sr-only">
          {label}
        </label>

        <div className="relative">
          <input
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            {...props}
          />
          {error && (
            <div className="text-red-400 text-sm font-light">{error}</div>
          )}
        </div>
      </div>
    </>
  );
}
