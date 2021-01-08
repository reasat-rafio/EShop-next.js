import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useCtx } from "../store/GlobalState";
import { postData } from "../utils/fetchData";
import valid from "../utils/valid";

interface userInterface {
   name: string;
   email: string;
   password: string;
   cf_password: string;
}

const Register = () => {
   const initialState = { name: "", email: "", password: "", cf_password: "" };
   const [userData, setUserData] = useState<userInterface>(initialState);
   const { name, email, password, cf_password } = userData;

   const { state, dispatch } = useCtx();

   const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setUserData({ ...userData, [name]: value });
   };

   const handleSubmit = async (e: any) => {
      e.preventDefault();

      const errMsg = valid(name, email, password, cf_password);
      if (errMsg)
         return dispatch({
            type: "NOTIFY",
            payload: { error: errMsg },
         });

      dispatch({
         type: "NOTIFY",
         payload: { loading: true },
      });

      const res = await postData("auth/register", userData, 123);

      if (res.err)
         return dispatch({ type: "NOTIFY", payload: { error: res.err } });

      return dispatch({ type: "NOTIFY", payload: { success: res.msg } });
   };

   return (
      <div>
         <Head>
            <title>Register Page</title>
         </Head>

         <form
            className="mx-auto my-4"
            style={{ maxWidth: "500px" }}
            onSubmit={handleSubmit}
         >
            <div className="mb-3">
               <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                     User Name
                  </label>
                  <input
                     type="type"
                     className="form-control"
                     id="exampleInputPassword1"
                     name="name"
                     value={name}
                     onChange={handleChangeInput}
                  />
               </div>
               <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
               </label>
               <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={email}
                  onChange={handleChangeInput}
               />
               <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
               </div>
            </div>
            <div className="mb-3">
               <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
               </label>
               <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={password}
                  onChange={handleChangeInput}
               />
            </div>
            <div className="mb-3">
               <label htmlFor="exampleInputPassword1" className="form-label">
                  Confirm Password
               </label>
               <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword2"
                  name="cf_password"
                  value={cf_password}
                  onChange={handleChangeInput}
               />
            </div>
            <div className="mb-3 form-check">
               <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
               />
               <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
               </label>
            </div>
            <button type="submit" className="btn btn-dark">
               Register
            </button>
            <p className="my-2">Already have an account?</p>{" "}
            <Link href="/signin">
               <a style={{ color: "crimson" }}>Login Now</a>
            </Link>
         </form>
      </div>
   );
};

export default Register;
