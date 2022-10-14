import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

// const Footer = () => {
//   let url = "";
//   return (
//     <footer className="py-5">
//       <div className="row">
//         <div className="col-6 col-md-2 mb-3">
//           <h5>Section</h5>
//           <ul className="nav flex-column">
//             <li className="nav-item mb-2">
//               <a href={url} className="nav-link p-0 text-muted">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item mb-2">
//               <a href={url} className="nav-link p-0 text-muted">
//                 Features
//               </a>
//             </li>
//             <li className="nav-item mb-2">
//               <a href={url} className="nav-link p-0 text-muted">
//                 Pricing
//               </a>
//             </li>
//             <li className="nav-item mb-2">
//               <a href={url} className="nav-link p-0 text-muted">
//                 FAQs
//               </a>
//             </li>
//             <li className="nav-item mb-2">
//               <a href={url} className="nav-link p-0 text-muted">
//                 About
//               </a>
//             </li>
//           </ul>
//         </div>

//         <div className="col-6 col-md-2 mb-3">
//           <h5>Section</h5>
//           <ul className="nav flex-column">
//             <li className="nav-item mb-2">
//               <a href={url} className="nav-link p-0 text-muted">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item mb-2">
//               <a href={url} className="nav-link p-0 text-muted">
//                 Features
//               </a>
//             </li>
//             <li className="nav-item mb-2">
//               <a href={url} className="nav-link p-0 text-muted">
//                 Pricing
//               </a>
//             </li>
//             <li className="nav-item mb-2">
//               <a href={url} className="nav-link p-0 text-muted">
//                 FAQs
//               </a>
//             </li>
//             <li className="nav-item mb-2">
//               <a href={url} className="nav-link p-0 text-muted">
//                 About
//               </a>
//             </li>
//           </ul>
//         </div>

//         <div className="col-6 col-md-2 mb-3">
//           <h5>Section</h5>
//           <ul className="nav flex-column">
//             <li className="nav-item mb-2">
//               <a href={url} className="nav-link p-0 text-muted">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item mb-2">
//               <a href={url} className="nav-link p-0 text-muted">
//                 Features
//               </a>
//             </li>
//             <li className="nav-item mb-2">
//               <a href={url} className="nav-link p-0 text-muted">
//                 Pricing
//               </a>
//             </li>
//             <li className="nav-item mb-2">
//               <a href={url} className="nav-link p-0 text-muted">
//                 FAQs
//               </a>
//             </li>
//             <li className="nav-item mb-2">
//               <a href={url} className="nav-link p-0 text-muted">
//                 About
//               </a>
//             </li>
//           </ul>
//         </div>

//         <div className="col-md-5 offset-md-1 mb-3">
//           <form>
//             <h5>Subscribe to our newsletter</h5>
//             <p>Monthly digest of what's new and exciting from us.</p>
//             <div className="d-flex flex-column flex-sm-row w-100 gap-2">
//               <label for="newsletter1" className="visually-hidden">
//                 Email address
//               </label>
//               <input
//                 id="newsletter1"
//                 type="text"
//                 className="form-control"
//                 placeholder="Email address"
//                 spellcheck="false"
//                 data-ms-editor="true"
//               />
//               <button className="btn btn-primary" type="button">
//                 Subscribe
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>

//       <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
//         <p>© 2022 Company, Inc. All rights reserved.</p>
//         <ul className="list-unstyled d-flex">
//           <li className="ms-3">
//             <a className="link-dark" href={url}>
//               {/* <svg className="bi" width="24" height="24">
//                 <use xlink:href="#twitter"></use>
//               </svg> */}
//             </a>
//           </li>
//           <li className="ms-3">
//             <a className="link-dark" href={url}>
//               {/* <svg className="bi" width="24" height="24">
//                 <use xlink:href="#instagram"></use>
//               </svg> */}
//             </a>
//           </li>
//           <li className="ms-3">
//             <a className="link-dark" href={url}>
//               {/* <svg className="bi" width="24" height="24">
//                 <use xlink:href="#facebook"></use>
//               </svg> */}
//             </a>
//           </li>
//         </ul>
//       </div>
//     </footer>
//   );
// };

const Footer = () => {
  let url = "#";
  console.log("lk" * 3);
  return (
    <footer class="py-3 my-4">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item">
          <a href={url} class="nav-link px-2 text-muted">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a href={url} class="nav-link px-2 text-muted">
            Features
          </a>
        </li>
        <li class="nav-item">
          <a href={url} class="nav-link px-2 text-muted">
            Pricing
          </a>
        </li>
        <li class="nav-item">
          <a href={url} class="nav-link px-2 text-muted">
            FAQs
          </a>
        </li>
        <li class="nav-item">
          <a href={url} class="nav-link px-2 text-muted">
            About
          </a>
        </li>
      </ul>
      <p class="text-center text-muted">© 2022 Company, Inc</p>
    </footer>
  );
};

export default Footer;
