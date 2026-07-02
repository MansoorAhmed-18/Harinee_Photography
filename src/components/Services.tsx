import { motion } from 'framer-motion';

interface ServiceItem {
  title: string;
  image: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    title: 'Wedding Photography',
    image: '/images/insta_wedding_1.png',
    description: 'Cinematic storytelling covering your entire wedding day, from morning preparations to the reception celebrations.',
  },
  {
    title: 'Pre Wedding Photography',
    image: '/images/insta_prewedding_1.png',
    description: 'Romantic, luxury couple portraiture in stunning outdoor or heritage architectural locations before your big day.',
  },
  {
    title: 'Engagement Photography',
    image: '/images/insta_engagement_1.png',
    description: 'Capturing the raw joy, rings, and emotional highlights of your commitment ceremony.',
  },
  {
    title: 'Couple Portraits',
    image: '/images/insta_couple_1.png',
    description: 'Intimate, fine-art portraits capturing the unique connection, chemistry, and love between you and your partner.',
  },
  {
    title: 'Baby Photography',
    image: '/images/insta_baby_1.png',
    description: 'Adorable, soft-focused infant and toddler shoots using delicate props and comfortable studio environments.',
  },
  {
    title: 'Maternity Photography',
    image: '/images/insta_maternity_1.png',
    description: 'Celebrating the beautiful journey of motherhood with elegant, artistic silhouette and studio portraits.',
  },
  {
    title: 'Event Photography',
    image: '/images/insta_event_1.png',
    description: 'Professional coverage of corporate gatherings, birthday galas, anniversaries, and family celebrations.',
  },
  {
    title: 'Candid Photography',
    image: '/images/insta_couple_2.png',
    description: 'Unobtrusive, documentary-style photography capturing real, unprompted laughter, tears, and movements.',
  },
  {
    title: 'Traditional Photography',
    image: '/images/insta_wedding_4.png',
    description: 'Classic posed portraits and ritualistic documentations preserving family lineages and traditional wedding rites.',
  },
  {
    title: 'Cinematic Videography',
    image: '/images/insta_wedding_3.png',
    description: 'High-definition wedding films, highlights, trailers, and documentaries capturing your day with cinema gear.',
  },
  {
    title: 'Drone Photography',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80',
    description: 'Breathtaking high-altitude aerial views of your outdoor venue, ceremonies, and couple portraits.',
  },
];

export default function Services() {
  const handleSelectService = (serviceName: string) => {
    // Scroll to contact form and prefill message
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      
      // Let's try to find the textarea and set value
      setTimeout(() => {
        const textarea = document.getElementById('message') as HTMLTextAreaElement;
        if (textarea) {
          textarea.value = `Hi Harinee, I would love to book your team for the "${serviceName}" service. Please share details and availability!`;
          textarea.focus();
        }
      }, 800);
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-zinc-950 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-light block mb-3">
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-white text-serif uppercase tracking-wide">
            Our Services
          </h2>
          <div className="h-[1px] w-16 bg-gold mx-auto mt-4" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              key={service.title}
              className="group glassmorphism rounded-none overflow-hidden flex flex-col h-full hover:border-gold/30 transition-colors duration-500"
            >
              {/* Image Frame */}
              <div className="h-64 w-full overflow-hidden bg-zinc-900 relative">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover zoom-img transition-transform duration-700 select-none"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
              </div>

              {/* Card Details */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-lg md:text-xl font-light tracking-wide text-white text-serif mb-3 uppercase">
                  {service.title}
                </h3>
                <p className="text-xs text-white/60 font-light leading-relaxed tracking-wide mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Call To Actions */}
                <button
                  onClick={() => handleSelectService(service.title)}
                  className="w-fit text-left text-[10px] md:text-xs uppercase tracking-[0.25em] text-gold hover:text-white font-medium transition-colors duration-300 flex items-center gap-2 group-hover:translate-x-1 transition-transform"
                >
                  Book Service &rarr;
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
