const valid = (
   name: string,
   email: string,
   password: string,
   cf_password: string
) => {
   if (!name || !email || !password) {
      return "Please add all fields";
   }

   if (!validateEmail(email)) {
      return "Invalid email";
   }

   if (password.length < 6) return "password must be at least 6 charecters";

   if (password !== cf_password) return "Confirm password did not match";
};

function validateEmail(email: string) {
   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(email).toLowerCase());
}

export default valid;
