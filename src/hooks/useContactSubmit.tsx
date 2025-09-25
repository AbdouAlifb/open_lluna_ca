"use client";

import * as React from "react";
import ResultModal from "@/components/ui/ResultModal";

export function useContactSubmit(brand = "#28B7D5") {
  const [submitting, setSubmitting] = React.useState(false);
  const [modal, setModal] = React.useState<{
    open: boolean;
    kind: "success" | "error";
    title: string;
    body: string;
  }>({ open: false, kind: "success", title: "", body: "" });

  const closeModal = () => setModal((m) => ({ ...m, open: false }));

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value?.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value?.trim();
    const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value?.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value?.trim();

    if (!name || !email || !message) {
      setModal({
        open: true,
        kind: "error",
        title: "Missing fields",
        body: "Please fill in your name, email and a short message.",
      });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });

      const json = await res.json().catch(() => ({}));

      if (res.ok) {
        form.reset();
        setModal({
          open: true,
          kind: "success",
          title: "Thanks — we received your message!",
          body:
            "Our team will get back to you within 24–48 hours. You’ll also receive a confirmation email shortly.",
        });
      } else {
        setModal({
          open: true,
          kind: "error",
          title: "Something went wrong",
          body: json?.error || "Please try again in a moment.",
        });
      }
    } catch {
      setModal({
        open: true,
        kind: "error",
        title: "Network error",
        body: "We couldn’t reach the server. Please check your connection and try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const modalElement = (
    <ResultModal
      open={modal.open}
      onClose={closeModal}
      kind={modal.kind}
      title={modal.title}
      body={modal.body}
      brand={brand}
    />
  );

  return { onSubmit, submitting, modalElement };
}
