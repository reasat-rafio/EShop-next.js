import Document, { Html, Head, Main, NextScript } from "next/document";

class Mydocuments extends Document {
   render() {
      return (
         <Html lang="en">
            <Head>
               <meta
                  name="description"
                  content="E-commerce website with next js"
               />

               <link
                  href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
                  rel="stylesheet"
               />
               <link
                  rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
               />
               <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
            </Head>
            <Main />
            <NextScript />
         </Html>
      );
   }
}

export default Mydocuments;
