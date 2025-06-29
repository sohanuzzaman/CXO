'use client'

import { useState, useEffect } from 'react'
import { useMembershipModal } from '@/context/MembershipModalContext'

export default function MembershipModal() {
  const { isOpen, closeModal } = useMembershipModal()
  const [isVisible, setIsVisible] = useState(false)
  const [utmSource, setUtmSource] = useState('')

  // Function to get URL parameter
  const getUrlParameter = (name: string): string => {
    if (typeof window === 'undefined') return ''
    
    const searchParams = new URLSearchParams(window.location.search)
    return searchParams.get(name) || ''
  }

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
      // Prevent background scrolling
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
      document.body.style.top = '0'
      
      // Get UTM source parameter when modal opens
      const utmSourceParam = getUrlParameter('utm_source')
      setUtmSource(utmSourceParam)
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, 400)
      // Restore background scrolling
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
      document.body.style.top = ''
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  const handleClose = () => {
    closeModal()
  }

  if (!isVisible) return null

  return (
    <div 
      className="modal-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 999999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        opacity: isOpen ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out'
      }}
      onClick={handleClose}
    >
      {/* Backdrop */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(4px)'
        }}
      />
      
      {/* Modal Content */}
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200"
        style={{
          position: 'relative',
          zIndex: 1,
          transform: isOpen ? 'scale(1) translateY(0)' : 'scale(0.9) translateY(20px)',
          transition: 'all 0.3s ease-in-out'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-light italic text-black mb-2">
                Request an Invitation
              </h2>
              <p className="text-gray-600 text-lg font-light">
                Join the elite network of Customer Experience leaders
              </p>
            </div>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-600 text-3xl font-light transition-all duration-300 hover:rotate-90 transform w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full cursor-pointer"
              aria-label="Close modal"
            >
              ×
            </button>
          </div>

          {/* Form Container */}
          <div className="membership-form-container">
            <style dangerouslySetInnerHTML={{
            __html: `
              .membership-form-container .form-field {
                margin-bottom: 1.5rem;
              }
              .membership-form-container input, 
              .membership-form-container textarea {
                width: 100%;
                padding: 16px 20px;
                border: 2px solid #e5e7eb;
                border-radius: 12px;
                font-size: 16px;
                transition: all 0.3s ease;
                font-family: inherit;
                color: #000000;
                background-color: #ffffff;
                transform: translateY(0);
                font-weight: 300;
              }
              .membership-form-container input:hover, 
              .membership-form-container textarea:hover {
                border-color: #ffaf02;
                transform: translateY(-1px);
                box-shadow: 0 4px 12px rgba(255, 175, 2, 0.1);
              }
              .membership-form-container input::placeholder, 
              .membership-form-container textarea::placeholder {
                color: #6b7280;
                opacity: 1;
                font-weight: 300;
              }
              .membership-form-container input:focus, 
              .membership-form-container textarea:focus {
                outline: none;
                border-color: #ffaf02;
                box-shadow: 0 0 0 3px rgba(255, 175, 2, 0.15);
                color: #000000;
                transform: translateY(-1px);
              }
              .membership-form-container textarea {
                min-height: 120px;
                resize: vertical;
              }
              .membership-form-container button {
                width: 100%;
                background-color: #ffaf02;
                color: #000000;
                border: none;
                border-radius: 50px;
                padding: 16px 32px;
                font-weight: 700;
                font-size: 18px;
                cursor: pointer;
                transition: all 0.3s ease;
                font-family: inherit;
                margin-top: 1rem;
                text-transform: none;
                letter-spacing: 0.5px;
              }
              .membership-form-container button:hover {
                background-color: #e9a104;
                transform: translateY(-2px);
                box-shadow: 0 8px 20px rgba(255, 175, 2, 0.3);
              }
              .membership-form-container button:active {
                transform: translateY(0);
                box-shadow: 0 4px 12px rgba(255, 175, 2, 0.2);
              }
            `
          }} />
          
          <form 
            action="https://www.customerexperienceschool.com/forms/2149155673/form_submissions" 
            method="post"
            acceptCharset="UTF-8"
          >
            <input name="utf8" type="hidden" value="✓" />
            
            <div className="form-field">
              <input 
                type="text" 
                name="form_submission[name]" 
                placeholder="Enter Name" 
                required 
              />
            </div>
            
            <div className="form-field">
              <input 
                type="email" 
                name="form_submission[email]" 
                placeholder="Enter Email" 
                required 
              />
            </div>
            
            <div className="form-field">
              <input 
                type="tel" 
                name="form_submission[phone_number]" 
                placeholder="Phone Number" 
              />
            </div>
            
            <div className="form-field">
              <input 
                type="text" 
                name="form_submission[custom_10]" 
                placeholder="Organization" 
                required 
              />
            </div>
            
            <div className="form-field">
              <input 
                type="text" 
                name="form_submission[custom_11]" 
                placeholder="Your title" 
              />
            </div>
            
            <div className="form-field">
              <textarea 
                name="form_submission[custom_12]" 
                placeholder="Why do you want to join?" 
                rows={4}
              />
            </div>
            
            {/* Hidden UTM Source field */}
            <div className="form-field">
              <input 
                type="hidden"
                name="form_submission[utm_source]" 
                value={utmSource}
              />
            </div>
            
            <div>
              <button 
                type="submit"
                className="w-full bg-[#ffaf02] hover:bg-[#e9a104] text-black font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 active:scale-95"
              >
                Request an Invitation
              </button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  )
}
