import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < 5) {
          return prevCount + 1;
        }
        return prevCount;
      });
    }, 100);

    const timeOut = setTimeout(() => {
      setLoading(false);
      clearInterval(interval);
    }, 1250);

    return () => {
      clearInterval(interval);
      clearTimeout(timeOut);
    };
  }, []);

  useEffect(() => {
    if (!loading) {
      navigate('/home');
    }
  }, [loading, navigate]);  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < 5) {
          return prevCount + 1;
        }
        return prevCount;
      });
    }, 100);
  
    const timeOut = setTimeout(() => {
      setLoading(false);
      clearInterval(interval);
    }, 1250);
  
    return () => {
      clearInterval(interval);
      clearTimeout(timeOut);
    };
  }, []);  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < 5) {
          return prevCount + 1;
        }
        return prevCount;
      });
    }, 100);
  
    const timeOut = setTimeout(() => {
      setLoading(false);
      clearInterval(interval); // Ensure interval is cleared when loading ends
    }, 1250);
  
    return () => {
      clearInterval(interval);
      clearTimeout(timeOut);
    };
  }, []);

  return (
    <div className="app-container">
      {loading ? (
        <div className="loader">
          <div className="terminal">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="terminal-button red"></span>
                <span className="terminal-button yellow"></span>
                <span className="terminal-button green"></span>
              </div>
              <div className="terminal-title">terminal</div>
            </div>
            <div className="terminal-content">
              <p>$ initializing portfolio<span className="cursor">_</span></p>
              <p>$ loading assets... {count * 20}%</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
