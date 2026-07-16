"use client";

import { useState } from "react";
import { z } from "zod";
import { Send } from "lucide-react";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().min(1, "Имя обязательно"),
  contact: z.string().min(1, "Укажите email или телефон"),
  message: z.string().min(1, "Сообщение обязательно"),
});

export function ContactForm() {
  const [form, setForm] = useState({ name: "", contact: "", message: "" });
  const [errors, setErrors] = useState({} as Record<string, string>);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const err of result.error.errors) {
        fieldErrors[err.path[0] as string] = err.message;
      }
      setErrors(fieldErrors);
      return;
    }

    const loading = toast.loading("Отправка...");

    try {
      const response = await fetch("https://formspree.io/f/xgogoelr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.contact,
          message: form.message,
        }),
      });

      if (response.ok) {
        toast.success("Сообщение отправлено! Я свяжусь с вами в ближайшее время.", { id: loading });
        setForm({ name: "", contact: "", message: "" });
      } else {
        toast.error("Ошибка при отправке. Попробуйте позже.", { id: loading });
      }
    } catch {
      toast.error("Ошибка при отправке. Попробуйте позже.", { id: loading });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium">Имя</label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full rounded-xl border border-border/40 bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-blue-500"
          placeholder="Ваше имя"
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-400">{errors.name}</p>
        )}
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium">Email или телефон</label>
        <input
          type="text"
          value={form.contact}
          onChange={(e) => setForm({ ...form, contact: e.target.value })}
          className="w-full rounded-xl border border-border/40 bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-blue-500"
          placeholder="your@email.com или +7 999 123 45 67"
        />
        {errors.contact && (
          <p className="mt-1 text-xs text-red-400">{errors.contact}</p>
        )}
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium">Сообщение</label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={4}
          className="w-full resize-none rounded-xl border border-border/40 bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-blue-500"
          placeholder="Ваше сообщение..."
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-400">{errors.message}</p>
        )}
      </div>
      <p className="text-xs text-muted-foreground text-center">
        Нажимая «Отправить», вы соглашаетесь с{' '}
        <a href="/privacy-policy.html" target="_blank" className="text-blue-400 underline hover:text-blue-300">
          Политикой конфиденциальности
        </a>
      </p>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 px-6 py-3 text-sm font-medium text-white transition-all hover:scale-[1.02]"
      >
        <Send className="h-4 w-4" />
        Отправить
      </button>
    </form>
  );
}
