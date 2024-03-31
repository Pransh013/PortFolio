import React, { ChangeEvent, useRef, useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { Textarea } from "./ui/textarea";
import emailjs from "@emailjs/browser";
import { User } from "@/lib/config";
import Loader from "./Loader";
import { toast } from "./ui/use-toast";

const ContactMe = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [form, setForm] = useState<User>({
    fullName: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setForm({
      ...form,
      [id]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.fullName,
          to_name: "Pranshu Verma",
          from_email: form.email,
          to_email: "pranshuverma1601@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        setForm({
          fullName: "",
          email: "",
          message: "",
        });
        toast({
          title: "Thank you!!!",
          description: "I will get back to you as soon as possible.",
        });
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);

        alert("Ahh, something went wrong. Please try again.");
        toast({
          title: "Oops!!!",
          description: "Something went wrong. Please try again.",
          variant: 'destructive'
        })
      });
    setLoading(false);
  };

  return (
    <div className="w-full rounded-none md:rounded-2xl p-4 md:p-6 inset-0">
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="fullname">Your Name</Label>
            <Input
              onChange={handleChange}
              value={form.fullName}
              id="fullName"
              type="text"
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Your Email</Label>
            <Input
              onChange={handleChange}
              value={form.email}
              id="email"
              type="email"
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="message">Your Message</Label>
          <Textarea id="message" onChange={handleChange} value={form.message} />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-800 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-1/2 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          {loading ? (
            <div className="w-full flex justify-center items-center">
              <Loader />
            </div>
          ) : (
            <span>Send Message &rarr;</span>
          )}
          <BottomGradient />
        </button>
      </form>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default ContactMe;
