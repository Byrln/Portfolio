import React, { createContext, useContext, useState, useEffect, useRef } from "react";

type Ctx = {
  open: boolean;
  setOpen: (v: boolean) => void;
  value?: string;
  onValueChange?: (v: string) => void;
};
const SelectCtx = createContext<Ctx | null>(null);

type SelectProps = {
  value?: string;
  onValueChange?: (v: string) => void;
  children: React.ReactNode;
};

export function Select({ value, onValueChange, children }: SelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <SelectCtx.Provider value={{ open, setOpen, value, onValueChange }}>
      <div ref={ref} className="relative" data-select-value={value}>
        {children}
      </div>
    </SelectCtx.Provider>
  );
}

type SelectTriggerProps = {
  children?: React.ReactNode;
  className?: string;
};

export function SelectTrigger({ children, className }: SelectTriggerProps) {
  const ctx = useContext(SelectCtx);
  return (
    <button
      type="button"
      className={className}
      onClick={() => ctx?.setOpen(!ctx.open)}
      aria-haspopup="listbox"
      aria-expanded={ctx?.open || false}
    >
      {children}
    </button>
  );
}

type SelectValueProps = { placeholder?: string; value?: string };
export function SelectValue({ placeholder, value }: SelectValueProps) {
  return <span>{value || placeholder}</span>;
}

type SelectContentProps = {
  children: React.ReactNode;
  className?: string;
};
export function SelectContent({ children, className }: SelectContentProps) {
  const ctx = useContext(SelectCtx);
  if (!ctx?.open) return null;
  return (
    <div className={"absolute left-0 right-0 z-50 " + (className || "")}>{children}</div>
  );
}

type SelectItemProps = {
  value: string;
  children: React.ReactNode;
  onSelect?: (v: string) => void;
};
export function SelectItem({ value, children, onSelect }: SelectItemProps) {
  const ctx = useContext(SelectCtx);
  function handleClick() {
    ctx?.onValueChange?.(value);
    onSelect?.(value);
    ctx?.setOpen(false);
  }
  return (
    <button
      type="button"
      role="option"
      className="w-full text-left px-3 py-2 hover:bg-white/10 rounded"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}