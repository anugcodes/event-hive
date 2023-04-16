import { Link } from "react-router-dom";
import { InputGrp } from "../input-grp";
export function Register() {
    return (
      <>
        <input type="checkbox" id="RegisterModal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative max-w-sm">
            <label
              htmlFor="RegisterModal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <div className="mx-auto">
              <h2 className="text-xl font-light">Register Yourself</h2>
              <form>
                <InputGrp
                  label={"Full Name"}                                
                  placeholder="e.g John Dow"
                />
                <InputGrp
                  label={"Email Address"}
                  error="invalid email"
                  placeholder="e.g example@mail.com"
                />
                <InputGrp
                  label={"Create Password"}                
                  error="invalid password"
                  placeholder="e.g password"
                  type="password"
                />
                <button className="btn btn-secondary w-full normal-case mt-2 ">
                  Sign Up
                </button>
              </form>
              <div className="divider">OR</div>
              <button className="btn btn-accent w-full normal-case">
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
  