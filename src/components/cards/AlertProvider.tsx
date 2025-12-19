'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { CheckCircle, AlertTriangle } from 'lucide-react'

function AlertContent({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams()
  const [alert, setAlert] = useState<{
    status: 'success' | 'error'
    message: string
  } | null>(null)

  useEffect(() => {
    const status = searchParams.get('status')
    const message = searchParams.get('message')

    if (
      (status === 'success' || status === 'error') &&
      typeof message === 'string'
    ) {
      setAlert({ status, message })

      const timer = setTimeout(() => {
        setAlert(null)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [searchParams])

  return (
    <>
      {children}

      {alert && (
        <div className="fixed left-1/2 top-[100px] z-[2000] -translate-x-1/2 animate-in slide-in-from-top-4">
          <div
            className={`flex min-w-[300px] items-center gap-3 rounded-xl border px-6 py-4 backdrop-blur shadow-xl
              ${
                alert.status === 'success'
                  ? 'border-green-500/50 bg-green-500/20 text-green-500'
                  : 'border-destructive/50 bg-destructive/20 text-destructive'
              }
            `}
          >
            {alert.status === 'success' ? (
              <CheckCircle size={20} />
            ) : (
              <AlertTriangle size={20} />
            )}

            <span className="text-sm font-medium">{alert.message}</span>
          </div>
        </div>
      )}
    </>
  )
}

export default function AlertProvider({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={children}>
      <AlertContent>{children}</AlertContent>
    </Suspense>
  )
}
