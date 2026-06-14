import { useState } from "react";

function App() {
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchMessage = async () => {
    setLoading(true);
    const res = await fetch("http://web-api-kappa-silk.vercel.app/");
    const data = await res.json();
    setMessage(data);
    setLoading(false);
  };

  return (
    <div>
      <nav>...</nav>
      <h1>Welcome to My App</h1>
      <button onClick={fetchMessage}>
        {loading ? "Fetching…" : "Fetch message"}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;