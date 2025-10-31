/**
 * Toast system: Provider + hook + UI container
 * Lightweight, no deps, elegant transitions.
 */

import React, { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';

type ToastType = 'success' | 'info' | 'error';

export interface ToastOptions {
  message: string;
  description?: string;
  type?: ToastType;
  durationMs?: number;
}

interface Toast extends Required<Omit<ToastOptions, 'durationMs'>> {
  id: number;
  durationMs: number;
}

interface ToastContextValue {
  showToast: (opts: ToastOptions) => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export const useToast = (): ToastContextValue => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within <ToastProvider />');
  return ctx;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const idRef = useRef(1);

  const remove = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback((opts: ToastOptions) => {
    const id = idRef.current++;
    const toast: Toast = {
      id,
      message: opts.message,
      description: opts.description ?? '',
      type: opts.type ?? 'success',
      durationMs: opts.durationMs ?? 2600,
    };
    setToasts((prev) => [...prev, toast]);
    window.setTimeout(() => remove(id), toast.durationMs);
  }, [remove]);

  const value = useMemo(() => ({ showToast }), [showToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      {/* Toast Container */}
      <div className="fixed bottom-4 right-4 z-[9999] flex flex-col-reverse gap-3 items-end pointer-events-none">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`pointer-events-auto w-[320px] max-w-[90vw] rounded-md shadow-xl border
              px-4 py-3 animate-fade-in bg-white backdrop-blur
              ${t.type === 'success' ? 'border-emerald-200' : t.type === 'error' ? 'border-rose-200' : 'border-gray-200'}`}
            style={{
              boxShadow: '0 10px 25px rgba(0,0,0,0.08)'
            }}
          >
            <div className="flex items-start gap-3">
              <span className={`mt-0.5 inline-block h-2 w-2 rounded-full ${t.type === 'success' ? 'bg-emerald-500' : t.type === 'error' ? 'bg-rose-500' : 'bg-gray-400'}`} />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{t.message}</p>
                {t.description && (
                  <p className="text-xs text-gray-600 mt-0.5">{t.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};


