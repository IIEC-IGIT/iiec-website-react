// import React, { useState } from 'react';
// import Footer from './components/Footer';
// import Nav from './components/Nav';

// const FormPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form Data:', formData);
//     // Handle form submission logic here
//   };

//   return (
//     <div>
//       <Nav />  {/* Navigation bar at the top */}
      
//       <div className="form-container" style={{ padding: '20px' }}>
//         <h1>Contact Us</h1>
//         <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
//           <label>
//             Name:
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//             />
//           </label>
//           <br />
//           <label>
//             Email:
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </label>
//           <br />
//           <label>
//             Message:
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//             />
//           </label>
//           <br />
//           <button type="submit">Submit</button>
//         </form>
//       </div>

//       <Footer />  {/* Footer at the bottom */}
//     </div>
//   );
// };

// export default FormPage;
