import axios from "axios";
import { useState } from "react";

const Signin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async () => {
    const res = await axios.post('/api/signin', { username, password, rememberMe });
    if (res.data.token) {
      localStorage.setItem('token', res.data.token);
      // redirect to dashboard
    } else {
      alert(res.data.message);
    }
  };

  return (
    <div>
      <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <label>
        <input type="checkbox" onChange={e => setRememberMe(e.target.checked)} /> Remember Me
      </label>
      <button onClick={handleLogin}>Sign In</button>
    </div>
  );
};
export default Signin;
