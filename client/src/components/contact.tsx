import { useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await emailjs.send(
  "service_3hucoqj", 
  "template_1bbanyp", 
  {
    name: data.name,
    email: data.email,
    time: new Date().toLocaleString(),
    message: data.message
  },
  "fXOaNrHl5ntrzbCBB"
);


    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon."
      });
      setFormData({ name: "", email: "", message: "" });
    },
    onError: () => {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive"
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent mx-auto mb-8"></div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            I'm currently open to new opportunities and collaborations. Whether
            you have a project in mind, a question, or just want to say hi, my
            inbox is always open. I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                <Mail className="text-accent" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Email</h3>
                <p className="text-slate-400">
                  shantanukumarsuman25@outlook.com
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                <Linkedin className="text-accent" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">LinkedIn</h3>
                <p className="text-slate-400">
                  linkedin.com/in/shantanukumarsuman
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                <Github className="text-accent" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">GitHub</h3>
                <p className="text-slate-400">github.com/shantanusuman</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <a
                href="mailto:shantanukumarsuman25@outlook.com"
                className="bg-accent hover:bg-accent/80 text-primary px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
              >
                <Mail size={20} />
                Say Hello
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-secondary/50 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-slate-300 mb-2">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white text-black border-slate-300 placeholder-slate-500 focus:border-accent focus:ring-accent/20"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-slate-300 mb-2">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white text-black border-slate-300 placeholder-slate-500 focus:border-accent focus:ring-accent/20"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-slate-300 mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-white text-black border-slate-300 placeholder-slate-500 focus:border-accent focus:ring-accent/20"
                />
              </div>

              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-accent hover:bg-accent/80 text-primary font-semibold transition-all duration-300 hover:scale-105"
              >
                {contactMutation.isPending ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={20} className="mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
