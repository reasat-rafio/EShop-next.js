import Link from "next/link";
import { useRouter } from "next/router";
import { useCtx } from "../store/GlobalState";
import Cookies from "js-cookie";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
   const router = useRouter();

   const {
      state: { auth },
      dispatch,
   } = useCtx();

   const isActive = (r: string) => {
      if (r === router.pathname) {
         return " active";
      } else {
         return "";
      }
   };

   const handleLogout = () => {
      Cookies.remove("refreshtoken", { path: "api/auth/accessToken" });
      localStorage.removeItem("firstLogin");
      dispatch({
         type: "AUTH",
         payload: {},
      });
      dispatch({
         type: "NOTIFY",
         payload: { success: "Logged Out" },
      });
   };

   const loggedRouter = () => {
      return (
         <li className="nav-item dropdown">
            <a
               className="nav-link dropdown-toggle"
               id="navbarDropdownMenuLink"
               role="button"
               data-bs-toggle="dropdown"
               aria-expanded="false"
            >
               <img
                  src={auth.user.avatar}
                  alt="pic"
                  style={{
                     borderRadius: "50%",
                     width: "30px",
                     transform: "translateY(-3px)",
                     margin: "3px",
                  }}
               />
               {auth.user.name}
            </a>
            <ul
               className="dropdown-menu"
               aria-labelledby="navbarDropdownMenuLink"
            >
               <li>
                  <a className="dropdown-item" href="#">
                     Profile
                  </a>
               </li>
               <li>
                  <a onClick={handleLogout} className="dropdown-item" href="#">
                     Logout
                  </a>
               </li>
            </ul>
         </li>
      );
   };

   return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <div className="container-fluid">
            <Link href="/">
               <a className="navbar-brand">EShop</a>
            </Link>
            <button
               className="navbar-toggler"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#navbarNavDropdown"
               aria-controls="navbarNavDropdown"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <span className="navbar-toggler-icon"></span>
            </button>
            <div
               className="collapse navbar-collapse justify-content-end"
               id="navbarNavDropdown"
            >
               <ul className="navbar-nav">
                  <li className="nav-item">
                     <Link href="/cart">
                        <a
                           className={"nav-link" + isActive("/cart")}
                           aria-current="page"
                        >
                           <i className="fas fa-cart-plus"></i>
                           Cart
                        </a>
                     </Link>
                  </li>

                  {Object.keys(auth).length === 0 ? (
                     <li className="nav-item">
                        <Link href="/signin">
                           <a
                              className={"nav-link" + isActive("/signin")}
                              aria-current="page"
                           >
                              <i className="fas fa-user"></i>
                              Sign In
                           </a>
                        </Link>
                     </li>
                  ) : (
                     loggedRouter()
                  )}
               </ul>
            </div>
         </div>
      </nav>
   );
};
