import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { Mail, MapPin, Phone, Loader2, CheckCircle2, AlertTriangle } from 'lucide-react';
import { toast } from 'sonner';
import { Alert, AlertDescription, AlertTitle } from '../components/ui/alert';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  service: z.string({
    required_error: "Please select a service.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setStatus('idle');
    setStatusMessage('');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log(values);
      toast.success("Message sent successfully!", {
        description: (
          <span className="text-muted-foreground">We'll get back to you within 24 hours.</span>
        ),
      });
      setStatus('success');
      setStatusMessage("We received your message. You can expect a reply within one business day.");
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error("We couldn't send your message.", {
        description: (
          <span className="text-muted-foreground">Please try again in a moment or email us directly at hello@brightpath.com.</span>
        ),
      });
      setStatus('error');
      setStatusMessage("We couldn't send your message. Please try again.");
    }
  }

  function onInvalid() {
    setStatus('error');
    setStatusMessage('Please fix the highlighted fields and try again.');
    toast.error('Some inputs are incorrect.', {
      description: (
        <span className="text-muted-foreground">Check the fields marked in red.</span>
      ),
    });
  }

  return (
    <div className="bg-warm-cream min-h-screen py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-deep-sage">Get in Touch</h1>
              <p className="font-body text-lg text-dark-gray leading-relaxed max-w-md">
                Ready to start your project? We'd love to hear from you. 
                Fill out the form or reach us directly.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full text-deep-sage shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-deep-sage">Email Us</h3>
                  <p className="font-body text-dark-gray">hello@brightpath.com</p>
                  <p className="text-sm text-muted-foreground">Response time: 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full text-deep-sage shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-deep-sage">Call Us</h3>
                  <p className="font-body text-dark-gray">+1 (555) 123-4567</p>
                  <p className="text-sm text-muted-foreground">Mon-Fri, 9am - 5pm EST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full text-deep-sage shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-deep-sage">Visit Us</h3>
                  <p className="font-body text-dark-gray">
                    123 Business Avenue<br />
                    Suite 400<br />
                    Jakarta, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-border">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit, onInvalid)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-deep-sage font-bold">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} className="bg-warm-cream/50 border-input focus:border-deep-sage" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-deep-sage font-bold">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your.email@example.com" {...field} className="bg-warm-cream/50 border-input focus:border-deep-sage" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-deep-sage font-bold">Interested In</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-warm-cream/50 border-input focus:border-deep-sage">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="web-design">Web Design</SelectItem>
                          <SelectItem value="branding">Branding</SelectItem>
                          <SelectItem value="content">Creative Content</SelectItem>
                          <SelectItem value="consultation">Digital Consultation</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-deep-sage font-bold">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your project..." 
                          className="min-h-30 bg-warm-cream/50 border-input focus:border-deep-sage resize-y" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={form.formState.isSubmitting}
                  className="w-full bg-deep-sage hover:bg-deep-sage/90 text-white font-bold py-6 text-lg"
                >
                  {form.formState.isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>

                {status === 'success' && (
                  <Alert className="border-green-200 bg-green-50 text-green-800">
                    <CheckCircle2 className="h-5 w-5" />
                    <AlertTitle>Message sent</AlertTitle>
                    <AlertDescription>{statusMessage}</AlertDescription>
                  </Alert>
                )}

                {status === 'error' && statusMessage && (
                  <Alert variant="destructive" className="border-red-200 bg-red-50 text-red-800">
                    <AlertTriangle className="h-5 w-5" />
                    <AlertTitle>There was an issue</AlertTitle>
                    <AlertDescription>{statusMessage}</AlertDescription>
                  </Alert>
                )}
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}