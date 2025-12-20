import { useRef, useState } from "react"

type ToastProps = {
  title?: string
  description?: string
  action?: React.ReactNode
}

// Toast singleton for displaying messages
let toastListeners: Set<(props: ToastProps) => void> = new Set()

export const toast = (props: ToastProps) => {
  toastListeners.forEach(listener => listener(props))
  // Fallback to browser alert if no listeners
  if (toastListeners.size === 0) {
    alert(props.title || props.description || "Notification")
  }
}

export const useToast = () => {
  const [toasts, setToasts] = useState<(ToastProps & { id: string })[]>([])
  
  const addToast = (props: ToastProps) => {
    const id = Math.random().toString(36).substr(2, 9)
    setToasts(prev => [...prev, { ...props, id }])
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id))
    }, 3000)
  }

  useRef(() => {
    toastListeners.add(addToast)
    return () => {
      toastListeners.delete(addToast)
    }
  }).current?.()

  return { toast, toasts }
}
