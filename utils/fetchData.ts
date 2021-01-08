const baseUrl = process.env.BASE_URL;

export const getData = async (url: string, token) => {
   const res = await fetch(`${baseUrl}/api/${url}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
         Authorization: token,
      },
   });

   const data = await res.json();
   console.log(data);

   return data;
};

export const postData = async (url: string, post, token) => {
   const res = await fetch(`${baseUrl}/api/${url}`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
         Authorization: token,
      },
      body: JSON.stringify(post),
   });

   const data = await res.json();
   return data;
};

export const putData = async (url: string, post, token) => {
   const res = await fetch(`${baseUrl}/api/${url}`, {
      method: "PUT",
      headers: {
         "Content-Type": "application/json",
         Authorization: token,
      },
      body: JSON.stringify(post),
   });

   const data = await res.json();
   return data;
};

export const patchData = async (url: string, post, token) => {
   const res = await fetch(`${baseUrl}/api/${url}`, {
      method: "PATCH",
      headers: {
         "Content-Type": "application/json",
         Authorization: token,
      },
      body: JSON.stringify(post),
   });

   const data = await res.json();
   return data;
};

export const deleteData = async (url: string, token) => {
   const res = await fetch(`${baseUrl}/api/${url}`, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
         Authorization: token,
      },
   });

   const data = await res.json();
   return data;
};
