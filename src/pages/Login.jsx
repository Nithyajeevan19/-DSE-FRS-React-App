import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      login(email, password, role);
      navigate("/dashboard");
    } catch (er) {
      setError(er.message);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{margin:'60px auto', maxWidth:350, background:'#fff', padding:20, borderRadius:16, boxShadow:'0 4px 24px #8882'}}>
      <h2 style={{fontWeight:'bold', color:'#6875F5'}}>Login</h2>
      <input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="Email" required style={{marginTop:10, width:'100%'}} />
      <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password" required style={{marginTop:10, width:'100%'}} />
      <select value={role} onChange={e=>setRole(e.target.value)} required style={{marginTop:10, width:'100%'}}>
        <option value="">Role</option>
        <option value="admin">Admin</option>
        <option value="faculty">Faculty</option>
        <option value="student">Student</option>
      </select>
      {error && <div style={{color:'red'}}>{error}</div>}
      <button style={{marginTop:16, width:'100%', background:'#6875F5', color:'#fff', padding:8, borderRadius:6}}>Login</button>
      <p style={{marginTop:12}}>No account? <a href="/register" style={{color:"#6875F5"}}>Register</a></p>
    </form>
  );
}
