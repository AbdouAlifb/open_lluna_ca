"use client";

import * as React from "react";
import { CheckCircle2, XCircle, X } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  body: string;
  kind?: "success" | "error";
  brand?: string;
};

export default function ResultModal({
  open,
  onClose,
  title,
  body,
  kind = "success",
  brand = "#28B7D5",
}: Props) {
  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-[60] ${open ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Dialog */}
      <div
        className={`absolute inset-x-4 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:w-[520px] top-[10vh]
        rounded-2xl bg-white shadow-2xl ring-1 ring-black/10
        transition-all duration-300
        ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <div
              className="shrink-0 rounded-full p-2"
              style={{
                background: kind === "success" ? `${brand}14` : "#fee2e2",
                color: kind === "success" ? brand : "#b91c1c",
              }}
            >
              {kind === "success" ? (
                <CheckCircle2 className="h-6 w-6" />
              ) : (
                <XCircle className="h-6 w-6" />
              )}
            </div>
            <div className="grow">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-1 text-slate-600">{body}</p>
            </div>
            <button
              aria-label="Close"
              onClick={onClose}
              className="rounded-md p-1.5 hover:bg-slate-100"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-5 flex justify-end">
            <button
              onClick={onClose}
              className="rounded-full px-4 py-2.5 text-white font-medium"
              style={{ backgroundColor: brand, boxShadow: "0 8px 22px rgba(40,183,213,.22)" }}
            >
              Got it
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
