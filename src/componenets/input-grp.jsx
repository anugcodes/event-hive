import { Link } from "react-router-dom";
export function InputGrp({ label, forgetpw, error, ...props }) {
    return (
      <>
        <div className="form-control w-full ">
          <label className="label">
            {label && <span className="label-text">{label}</span>}
            {forgetpw && (
              <span className="label-text-alt">
                <Link to={"#"}>forget password</Link>
              </span>
            )}
          </label>
          <input {...props} className="input input-sm input-bordered w-full " />
          <label className="label">
            {error && <span className="label-text-alt text-error">{error}</span>}
          </label>
        </div>
      </>
    );
  }