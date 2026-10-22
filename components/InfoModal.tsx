'use client';

import { createContext, useContext, useRef, useState, type ReactNode } from 'react';
import { MODAL_CONTENT, type ModalKind } from '@/lib/site';

const ModalContext = createContext<(kind: ModalKind) => void>(() => {});

export function ModalProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [kind, setKind] = useState<ModalKind>('privacy');

  const open = (next: ModalKind) => {
    setKind(next);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();

  return (
    <ModalContext.Provider value={open}>
      {children}
      <dialog id="info-dialog" ref={dialogRef}>
        <button className="close" aria-label="Close dialog" onClick={close}>
          ×
        </button>
        <h2>{MODAL_CONTENT[kind].title}</h2>
        <p>{MODAL_CONTENT[kind].body}</p>
        <button className="btn close-btn" onClick={close}>
          Got it
        </button>
      </dialog>
    </ModalContext.Provider>
  );
}

export function ModalButton({ kind, children }: { kind: ModalKind; children: ReactNode }) {
  const open = useContext(ModalContext);
  return (
    <button type="button" className="text-btn" onClick={() => open(kind)}>
      {children}
    </button>
  );
}
