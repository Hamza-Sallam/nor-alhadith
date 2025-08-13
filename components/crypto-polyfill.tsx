'use client'

import { useEffect } from 'react'

export function CryptoPolyfill() {
  useEffect(() => {
    // Ensure crypto.randomUUID is available
    if (typeof window !== 'undefined' && !window.crypto?.randomUUID) {
      if (!window.crypto) {
        (window as any).crypto = {}
      }
      
      (window as any).crypto.randomUUID = function(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          const r = Math.random() * 16 | 0
          const v = c === 'x' ? r : (r & 0x3 | 0x8)
          return v.toString(16)
        })
      }
      
      console.log('Crypto polyfill loaded successfully')
    }
  }, [])

  return null // This component doesn't render anything
}
