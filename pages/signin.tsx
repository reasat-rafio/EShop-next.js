import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCtx } from "../store/GlobalState";
import { postData } from "../utils/fetchData";
import Cookie from "js-cookie";
import { useRouter } from "next/router";

interface userInterface {
   email: string;
   password: string;
}
const Signin = () => {
   const initialState = { email: "", password: "" };
   const [userData, setUserData] = useState<userInterface>(initialState);
   const { email, password } = userData;

   const {
      state: { auth },
      dispatch,
   } = useCtx();

   const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setUserData({ ...userData, [name]: value });
   };

   const handleSubmit = async (e: any) => {
      e.preventDefault();

      dispatch({
         type: "NOTIFY",
         payload: { loading: true },
      });

      const res = await postData("auth/login", userData, 123);

      if (res.err)
         return dispatch({ type: "NOTIFY", payload: { error: res.err } });

      dispatch({ type: "NOTIFY", payload: { success: res.msg } });

      dispatch({
         type: "AUTH",
         payload: { token: res.access_token, user: res.user },
      });

      Cookie.set("refreshtoken", res.refresh_token, {
         path: "api/auth/accessToken",
         expires: 7,
      });

      localStorage.setItem("firstLogin", true);
   };
   const Router = useRouter();

   useEffect(() => {
      if (Object.keys(auth).length !== 0) Router.push("/");
   }, [auth]);

   return (
      <div>
         <Head>
            <title>Sign in Page</title>
         </Head>

         <form
            className="mx-auto my-4"
            style={{ maxWidth: "500px" }}
            onSubmit={handleSubmit}
         >
            <div className="mb-3">
               <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
               </label>
               <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
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
                  name="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={password}
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
               Login
            </button>
            <p className="my-2">Dont have an account?</p>{" "}
            <Link href="/register">
               <a style={{ color: "crimson" }}>Register</a>
            </Link>
         </form>
      </div>
   );
};

export default Signin;
