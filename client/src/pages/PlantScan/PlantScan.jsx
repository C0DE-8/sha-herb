import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../../components/Header.jsx'

export default function PlantScan({ onIdentify }) {
  const videoRef = useRef(null)
  const streamRef = useRef(null)
  const fileRef = useRef(null)
  const [error, setError] = useState('')
  const [photo, setPhoto] = useState('')
  const [starting, setStarting] = useState(true)

  const stopCamera = useCallback(() => {
    streamRef.current?.getTracks().forEach((track) => track.stop())
    streamRef.current = null
  }, [])

  const startCamera = useCallback(async () => {
    setStarting(true)
    setError('')
    setPhoto('')
    stopCamera()
    if (!navigator.mediaDevices?.getUserMedia) {
      setError('Camera access needs a secure connection. Upload a plant photo instead.')
      setStarting(false)
      return
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: 'environment' } }, audio: false })
      streamRef.current = stream
      if (videoRef.current) videoRef.current.srcObject = stream
    } catch (cameraError) {
      setError(cameraError.name === 'NotAllowedError' ? 'Camera permission was blocked. Allow access in your browser settings or upload a photo.' : 'We couldn’t open your camera. Upload a plant photo to continue.')
    } finally {
      setStarting(false)
    }
  }, [stopCamera])

  useEffect(() => {
    startCamera()
    return stopCamera
  }, [startCamera, stopCamera])

  function capturePhoto() {
    const video = videoRef.current
    if (!video || !video.videoWidth) return
    const canvas = document.createElement('canvas')
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    canvas.getContext('2d').drawImage(video, 0, 0)
    setPhoto(canvas.toDataURL('image/jpeg', 0.9))
    stopCamera()
  }

  function chooseFile(file) {
    if (!file) return
    setPhoto(URL.createObjectURL(file))
    setError('')
    stopCamera()
  }

  function identify() {
    if (photo) onIdentify(photo)
  }

  return (
    <main className="app-shell scan-page">
      <Header active="Scan" onScan={() => {}} />
      <div className="scan-page-top"><Link to="/">← Back to overview</Link><span>PLANT SCANNER</span></div>
      <section className="camera-layout">
        <div className="camera-copy"><span className="section-kicker"><i className="live-dot"/> HERBLY CAMERA</span><h1>Let’s meet this plant.</h1><p>Center a leaf or flower in the frame. We’ll help you discover what it might be.</p><div className="camera-tip"><span>✳</span><p><strong>A little tip</strong><br/>Natural light and a clear view of the leaves help with identification.</p></div></div>
        <div className="camera-card">
          <div className={`camera-view${photo ? ' has-photo' : ''}`}>
            {photo ? <img src={photo} alt="Plant ready for identification" /> : <><video ref={videoRef} autoPlay muted playsInline aria-label="Live plant camera preview"/><div className="camera-frame"><i/><i/><i/><i/></div>{starting && <div className="camera-message">Opening your camera…</div>}{error && <div className="camera-message camera-error">{error}</div>}</>}
            {!photo && !starting && !error && <span className="camera-live"><i/> LIVE</span>}
          </div>
          <div className="camera-controls">
            {photo ? <><button className="retake-button" onClick={startCamera}>Retake photo</button><button className="scan-button identify-button" onClick={identify}>Identify this plant <span>→</span></button></> : <><button className="shutter-button" onClick={capturePhoto} disabled={starting || Boolean(error)} aria-label="Take plant photo"><span/></button><button className="upload-inline" onClick={() => fileRef.current?.click()}>Upload photo</button><input ref={fileRef} type="file" accept="image/*" onChange={(event) => chooseFile(event.target.files?.[0])}/></>}
          </div>
        </div>
      </section>
      <footer className="dashboard-footer"><span>HERBLY · YOUR POCKET FIELD GUIDE</span><span>Explore with care <i className="status-dot"/></span></footer>
    </main>
  )
}
