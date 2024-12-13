import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Toast,
  ToastAction,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  //STATE
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showToast, setShowToast] = useState(false);

  //LOGIQUE
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailContent = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        emailContent
      );

      console.log("Email envoyé!", response.status);
      setShowToast(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Erreur:", error);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  //RENDER
  return (
    <section id="contact" className="py-12 min-h-screen scroll-mt-16">
      <div className="container max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">
                Contact
              </CardTitle>
              <CardDescription className="text-center">
                Envoyez-moi un message et je vous répondrai dans les plus brefs
                délais.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nom
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Votre nom"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="votre@email.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Sujet
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Sujet de votre message"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Votre message..."
                    required
                    className="min-h-[150px]"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <Button type="submit" className="w-full">
                  Envoyer
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <ToastProvider>
        {showToast && (
          <Toast>
            <ToastTitle>Succès!</ToastTitle>
            <ToastDescription>
              Votre message a été envoyé avec succès.
            </ToastDescription>
            <ToastAction
              altText="Close"
              className="rounded-md px-3 py-2 text-sm hover:bg-secondary"
              onClick={() => setShowToast(false)}
            >
              Fermer
            </ToastAction>
          </Toast>
        )}
        <ToastViewport />
      </ToastProvider>
    </section>
  );
};

export default Contact;
