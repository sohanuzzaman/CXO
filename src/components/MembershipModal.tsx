'use client'

import { useState, useEffect, useRef } from 'react'
import { useMembershipModal } from '@/context/MembershipModalContext'

export default function MembershipModal() {
  const { isOpen, closeModal } = useMembershipModal()
  const [utmSource, setUtmSource] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)
  const firstInputRef = useRef<HTMLInputElement>(null)

  const getUrlParameter = (name: string): string => {
    if (typeof window === 'undefined') return ''
    const searchParams = new URLSearchParams(window.location.search)
    return searchParams.get(name) || ''
  }

  useEffect(() => {
    if (isOpen) {
      const utmSourceParam = getUrlParameter('utm_source')
      setUtmSource(utmSourceParam)
      
      // Focus the first input when modal opens for accessibility
      setTimeout(() => {
        firstInputRef.current?.focus()
      }, 100)
    }
  }, [isOpen])

  const handleSubmit = () => {
    setIsSubmitting(true)
    // Let the form submit naturally, but show loading state
    setTimeout(() => {
      setIsSubmitting(false)
    }, 2000)
  }

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

          <div className="membership-form-container">
            <form 
              action="https://www.customerexperienceschool.com/forms/2149155673/form_submissions" 
              method="post"
              acceptCharset="UTF-8"
              onSubmit={handleSubmit}
              noValidate
            >
              <input name="utf8" type="hidden" value="✓" />
              
              <div className="form-field">
                <label htmlFor="name" className="sr-only">Full Name</label>
                <input 
                  id="name"
                  ref={firstInputRef}
                  type="text" 
                  name="form_submission[name]" 
                  placeholder="Enter Name" 
                  required 
                  disabled={isSubmitting}
                  autoComplete="name"
                />
              </div>
              
              <div className="form-field">
                <label htmlFor="email" className="sr-only">Email Address</label>
                <input 
                  id="email"
                  type="email" 
                  name="form_submission[email]" 
                  placeholder="Enter Email" 
                  required 
                  disabled={isSubmitting}
                  autoComplete="email"
                />
              </div>
              
              <div className="form-field">
                <label htmlFor="phone" className="sr-only">Phone Number</label>
                <input 
                  id="phone"
                  type="tel" 
                  name="form_submission[phone_number]" 
                  placeholder="Phone Number" 
                  disabled={isSubmitting}
                  autoComplete="tel"
                />
              </div>
              
              <div className="form-field">
                <label htmlFor="organization" className="sr-only">Organization</label>
                <input 
                  id="organization"
                  type="text" 
                  name="form_submission[custom_10]" 
                  placeholder="Organization" 
                  required 
                  disabled={isSubmitting}
                  autoComplete="organization"
                />
              </div>
              
              <div className="form-field">
                <label htmlFor="title" className="sr-only">Job Title</label>
                <input 
                  id="title"
                  type="text" 
                  name="form_submission[custom_11]" 
                  placeholder="Your title" 
                  disabled={isSubmitting}
                  autoComplete="organization-title"
                />
              </div>
              
              <div className="form-field">
                <label htmlFor="motivation" className="sr-only">Why do you want to join?</label>
                <textarea 
                  id="motivation"
                  name="form_submission[custom_12]" 
                  placeholder="Why do you want to join?" 
                  rows={4}
                  disabled={isSubmitting}
                />
              </div>
              
              <input 
                type="hidden"
                name="form_submission[utm_source]" 
                value={utmSource}
              />
              
              <div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}
                >
                  {isSubmitting ? 'Submitting...' : 'Request an Invitation'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
