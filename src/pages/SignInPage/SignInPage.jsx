import React, { useState } from 'react'


const SignInPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Xử lý đăng nhập ở đây
    console.log(`Username: ${username}, Password: ${password}`);
  };
  return (
    <div>
       <h2>Đăng nhập</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Tên đăng nhập:
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </label>
        <label>
          Mật khẩu:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <input type="submit" value="Đăng nhập" />
      </form>
    </div>
  )
}

export default SignInPage