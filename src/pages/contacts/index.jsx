

import React from 'react';
export default function EventsPage() {
	return (
		<div className="contact-us-container">
		  <header>
			<h1>Contact Us</h1>
		  </header>
	
		  <main>
			<section>
			  <h2>Email Us</h2>
			  <p>If you have any questions or inquiries, feel free to email us at <a href="mailto:info@example.com">info@example.com</a>.</p>
			</section>
	
			<section>
			  <h2>Visit Our Location</h2>
			  <p>We are located at:</p>
			  <address>
				123 Main Street<br />
				Cityville, State 12345<br />
				Country
			  </address>
			</section>
	
			<section>
			  <h2>How to Contact Us</h2>
			  <p>For general inquiries, you can reach us via phone at <strong>(123) 456-7890</strong>.</p>
			</section>
	
			<div className="contact-info">
			  <div>
				<h3>Email</h3>
				<p><a href="mailto:info@example.com">info@example.com</a></p>
			  </div>
			  <div>
				<h3>Location</h3>
				<address>
				  123 Main Street<br />
				  Cityville, State 12345<br />
				  Country
				</address>
			  </div>
			  <div>
				<h3>Phone</h3>
				<p>(123) 456-7890</p>
			  </div>
			</div>
		  </main>
		</div>
	  );
}



