import { InputGrp } from "../input-grp";
export function Login() {
  
    return (
      <>
        <input type="checkbox" id="loginModal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative max-w-xs">
            <label
              htmlFor="loginModal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <div className=" max-w-xs mx-auto">
              <h2 className="text-xl font-light">Sign In</h2>
              <form>
                <InputGrp
                  label={"Email Address"}
                  forgetpw={false}
                  error="invalid email"
                  placeholder="example@mail.com"
                />
                <InputGrp
                  label={"Password"}
                  forgetpw={true}
                  error="invalid password"
                  placeholder="password"
                  type="password"
                />
                <button className="btn btn-secondary w-full normal-case mt-2">
                  Sign In
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
  