'use client'

import { useRef, useEffect, useState } from 'react'
import { useMembershipModal } from '@/context/MembershipModalContext'

export default function MembershipModal() {
  const { isOpen, closeModal } = useMembershipModal()
  const modalRef = useRef<HTMLDivElement>(null)
  const [isFormLoading, setIsFormLoading] = useState(true)

  useEffect(() => {
    if (isOpen) {
      console.log('Modal opened, setting form loading to true');
      setIsFormLoading(true)
      
      // Fallback: Hide loading after 6 seconds if no message received
      const fallbackTimeout = setTimeout(() => {
        console.log('Fallback: Hiding modal loading indicator after 6 seconds');
        setIsFormLoading(false)
      }, 6000)
      
      return () => clearTimeout(fallbackTimeout)
    }
  }, [isOpen])

  useEffect(() => {
    // Listen for messages from the iframe
    const handleMessage = (event: MessageEvent) => {
      console.log('Modal received message:', event.data);
      
      if (event.data.type === 'kajabi-form-loaded') {
        console.log('Form loaded, hiding loading indicator');
        setIsFormLoading(false)
      } else if (event.data.type === 'kajabi-form-submitted') {
        console.log('Form submitted, will close modal in 2 seconds');
        // Optional: Handle form submission success
        setTimeout(() => {
          closeModal()
        }, 2000) // Close modal 2 seconds after successful submission
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [closeModal])

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeModal()
    }
  }

  if (!isOpen) return null

  return (
    <div 
      className={`membership-modal-overlay ${isOpen ? 'open' : ''}`}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div 
        className="membership-modal-content"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          <div className="flex justify-between items-start mb-8">
            <div className="pr-4">
              <h2 
                id="modal-title"
                className="text-3xl sm:text-4xl font-light italic text-black mb-2"
              >
                Request an Invitation
              </h2>
              <p 
                id="modal-description"
                className="text-gray-600 text-lg font-light"
              >
                Join the exclusive network of Customer Experience leaders
              </p>
            </div>
            <button
              onClick={closeModal}
              className="modal-close-button text-gray-400 hover:text-gray-600 text-3xl font-light w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0"
              aria-label="Close modal"
              type="button"
            >
              ×
            </button>
          </div>

          <div className="membership-form-container relative">
            {isFormLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-10 rounded-xl">
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-yellow-400"></div>
                  <span className="ml-3 text-gray-600">Loading form...</span>
                </div>
              </div>
            )}
            <iframe 
              src="/kajabi-form.html"
              className="w-full border-0 rounded-xl"
              style={{ height: '500px' }}
              title="Membership Form"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
