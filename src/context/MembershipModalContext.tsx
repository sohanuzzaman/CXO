'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from 'react'

interface MembershipModalContextType {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const MembershipModalContext = createContext<MembershipModalContextType | undefined>(undefined)

export function MembershipModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
    // Prevent body scroll when modal is open and fix positioning issues
    if (typeof document !== 'undefined') {
      document.body.classList.add('modal-open')
      // Store current scroll position to prevent jump
      const scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.left = '0'
      document.body.style.right = '0'
      document.body.style.width = '100%'
    }
  }

  const closeModal = () => {
    setIsOpen(false)
    // Restore body scroll when modal is closed
    if (typeof document !== 'undefined') {
      document.body.classList.remove('modal-open')
      // Restore scroll position
      const scrollY = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.width = ''
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }
  }

  // Cleanup on unmount - ensure body class is removed
  useEffect(() => {
    return () => {
      if (typeof document !== 'undefined') {
        document.body.classList.remove('modal-open')
      }
    }
  }, [])

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        closeModal()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  return (
    <MembershipModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </MembershipModalContext.Provider>
  )
}

export function useMembershipModal() {
  const context = useContext(MembershipModalContext)
  if (context === undefined) {
    throw new Error('useMembershipModal must be used within a MembershipModalProvider')
  }
  return context
}
