import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageSquare, Star, Check } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    location: '',
    service: 'Wedding Photography',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construct email subject and body for the mailto action
    const emailSubject = encodeURIComponent(`Inquiry from ${formData.name} for ${formData.service}`);
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Event Date: ${formData.date || 'N/A'}\n` +
      `Event Location: ${formData.location || 'N/A'}\n` +
      `Selected Service: ${formData.service}\n\n` +
      `Message:\n${formData.message}`
    );

    // Open user's email client pre-populated with form details
    window.location.href = `mailto:harineestudio@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    // Simulate successful form state transitions
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        location: '',
        service: 'Wedding Photography',
        message: '',
      });
    }, 1000);
  };

  const handleWhatsAppClick = () => {
    // Generate text message for WhatsApp
    const text = `*Inquiry from Harinee Photography Website*%0A%0A*Name:* ${formData.name || 'Guest'}%0A*Email:* ${formData.email || 'N/A'}%0A*Phone:* ${formData.phone || 'N/A'}%0A*Date:* ${formData.date || 'N/A'}%0A*Location:* ${formData.location || 'N/A'}%0A*Service:* ${formData.service}%0A*Message:* ${formData.message || 'Hi, I would love to connect!'}`;
    window.open(`https://wa.me/919962816447?text=${text}`, '_blank');

    // Also trigger success status and reset form
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        location: '',
        service: 'Wedding Photography',
        message: '',
      });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-zinc-950 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-light block mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-white text-serif uppercase tracking-wide">
            Connect With Us
          </h2>
          <div className="h-[1px] w-16 bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Contact Details & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col space-y-8"
          >
            {/* Info Cards */}
            <div className="glassmorphism p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-gold p-2 border border-gold/10 bg-gold/5 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.25em] text-white/50 mb-1">Studio Address</h4>
                  <p className="text-sm font-light text-white/80 leading-relaxed">
                    2/182, Periyar Road, Near Apollo Pharmacy,<br />
                    Palavakkam, Chennai, Tamil Nadu &ndash; 600041
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-gold p-2 border border-gold/10 bg-gold/5 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.25em] text-white/50 mb-1">Call & WhatsApp</h4>
                  <p className="text-sm font-light text-white/80 flex flex-col gap-1">
                    <a href="tel:+919962816447" className="hover:text-gold transition-colors">+91 99628 16447</a>
                    <a href="tel:+919566107849" className="hover:text-gold transition-colors">+91 95661 07849</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-gold p-2 border border-gold/10 bg-gold/5 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.25em] text-white/50 mb-1">Email Inquiry</h4>
                  <p className="text-sm font-light text-white/80">
                    <a href="mailto:harineestudio@gmail.com" className="hover:text-gold transition-colors">harineestudio@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-gold p-2 border border-gold/10 bg-gold/5 flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.25em] text-white/50 mb-1">Business Hours</h4>
                  <p className="text-sm font-light text-white/80">
                    Open Daily 9:00 AM &ndash; 9:00 PM
                  </p>
                </div>
              </div>

              {/* Google Ratings Widget Mockup */}
              <div className="border-t border-white/5 pt-6 flex items-center justify-between">
                <div>
                  <h4 className="text-xs uppercase tracking-[0.25em] text-white/50 mb-1">Google Rating</h4>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="text-sm font-semibold text-white">4.9</span>
                    <div className="flex text-gold">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-gold text-gold" />
                      ))}
                    </div>
                    <span className="text-[10px] text-white/40 font-light">(23 Reviews)</span>
                  </div>
                </div>
                <div className="text-[9px] uppercase tracking-[0.25em] border border-gold/20 text-gold px-3 py-1 bg-gold/5 font-semibold">
                  Verified Client Trust
                </div>
              </div>
            </div>

            {/* Custom Styled Map Frame */}
            <div className="w-full h-64 relative overflow-hidden border border-white/10">
              <iframe
                title="Harinee Photography Location Map"
                src="https://maps.google.com/maps?q=Harinee%20photography,%202/182,%20Periyar%20Rd,%20near%20by%20apollo%20pharmacy,%20Palavakkam,%20Chennai,%20Tamil%20Nadu%20600041&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                style={{ filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(110%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Form Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="glassmorphism p-8 md:p-10 space-y-6 relative overflow-hidden">
              <h3 className="text-xl md:text-2xl font-light text-serif text-white uppercase tracking-wider mb-2">
                Send Inquiry
              </h3>
              <p className="text-xs text-white/50 font-light leading-relaxed mb-6">
                Tell us about your event timeline and creative vision. We will review details and get back to you with custom catalog designs.
              </p>

              {/* Form Success Overlay */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/95 flex flex-col items-center justify-center text-center p-8 z-30"
                  >
                    <div className="w-16 h-16 rounded-full border border-gold flex items-center justify-center text-gold mb-6 bg-gold/5 animate-pulse">
                      <Check className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl md:text-2xl text-serif text-gold uppercase tracking-[0.2em] mb-4">
                      Inquiry Received
                    </h4>
                    <p className="text-xs md:text-sm text-white/70 font-light tracking-[0.12em] max-w-md mx-auto leading-relaxed text-serif italic mb-8">
                      &ldquo;Thank you for reaching out. We have received your details and will get in touch with you within 24 hours to plan your custom story.&rdquo;
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2.5 border border-white/20 hover:border-gold hover:text-gold text-[10px] uppercase tracking-[0.25em] font-medium transition-all duration-300"
                    >
                      Back to Form
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="name" className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-light">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/5 border border-white/10 hover:border-white/20 focus:border-gold px-4 py-3 text-sm text-white focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <label htmlFor="email" className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-light">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/5 border border-white/10 hover:border-white/20 focus:border-gold px-4 py-3 text-sm text-white focus:outline-none transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="phone" className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-light">Phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-white/5 border border-white/10 hover:border-white/20 focus:border-gold px-4 py-3 text-sm text-white focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <label htmlFor="date" className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-light">Event Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="bg-white/5 border border-white/10 hover:border-white/20 focus:border-gold px-4 py-3 text-sm text-white focus:outline-none transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="location" className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-light">Event Location</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="bg-white/5 border border-white/10 hover:border-white/20 focus:border-gold px-4 py-3 text-sm text-white focus:outline-none transition-colors duration-300"
                    placeholder="e.g. Chennai"
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <label htmlFor="service" className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-light">Select Service</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="bg-zinc-900 border border-white/10 hover:border-white/20 focus:border-gold px-4 py-3 text-sm text-white focus:outline-none transition-colors duration-300"
                  >
                    <option value="Wedding Photography">Wedding Photography</option>
                    <option value="Pre Wedding Photography">Pre Wedding Photography</option>
                    <option value="Engagement Photography">Engagement & Ring Ceremony</option>
                    <option value="Couple Portraits">Couple Portrait Shoots</option>
                    <option value="Baby Photography">Baby & Infant Shoots</option>
                    <option value="Maternity Photography">Maternity Shoot</option>
                    <option value="Event Photography">General Event Coverage</option>
                    <option value="Candid Photography">Candid Coverage</option>
                    <option value="Traditional Photography">Traditional Shoots</option>
                    <option value="Cinematic Videography">Cinematic Film</option>
                    <option value="Drone Photography">Drone Coverage</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="message" className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-light">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-white/5 border border-white/10 hover:border-white/20 focus:border-gold px-4 py-3 text-sm text-white focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us about your timeline, schedule, location size..."
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 bg-gold text-black hover:bg-white text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 disabled:opacity-50 flex items-center justify-center"
                >
                  {isSubmitting ? 'Submitting...' : 'Send Inquiry'}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="w-full sm:w-auto px-8 py-3.5 border border-gold/30 hover:border-gold text-gold hover:bg-gold/10 text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-transparent" />
                  Submit via WhatsApp
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
