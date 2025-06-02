import React from 'react';

const SignUp = () => {
    return (
        <div>
           <form onSubmit={handleSignup}>
  <input type="text" name="name" required placeholder="Your Name" />
  <input type="email" name="email" required placeholder="Email Address" />
  <input type="text" name="shopName" required placeholder="Unique Shop Name" />
  <input type="password" name="password" required placeholder="Password" />
  <button type="submit">Sign Up</button>
</form>
 
        </div>
    );
};

export default SignUp;