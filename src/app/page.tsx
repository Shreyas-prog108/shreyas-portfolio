'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < 5) {
          return prevCount + 1
        }
        return prevCount
      })
    }, 100)

    const timeOut = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => {
        setLoading(false)
        clearInterval(interval)
      }, 500)
    }, 1250)

    return () => {
      clearInterval(interval)
      clearTimeout(timeOut)
    }
  }, [])

  useEffect(() => {
    if (!loading) {
      router.push('/home')
    }
  }, [loading, router])

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < 5) {
          return prevCount + 1
        }
        return prevCount
      })
    }, 100)
  
    const timeOut = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => {
        setLoading(false)
        clearInterval(interval)
      }, 500)
    }, 1250)
  
    return () => {
      clearInterval(interval)
      clearTimeout(timeOut)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < 5) {
          return prevCount + 1
        }
        return prevCount
      })
    }, 100)
  
    const timeOut = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => {
        setLoading(false)
        clearInterval(interval)
      }, 500)
    }, 1250)
  
    return () => {
      clearInterval(interval)
      clearTimeout(timeOut)
    }
  }, [])

  return (
    <div className="app-container">
      {loading ? (
        <div className={`loader ${fadeOut ? 'fade-out' : ''}`}>
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
              <p>$ initializing whoami<span className="cursor">_</span></p>
              <p>$ loading assets... {count * 20}%</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
