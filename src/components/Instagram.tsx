import { motion } from 'framer-motion';
import { Heart, MessageCircle } from 'lucide-react';

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

interface InstagramPost {
  id: number;
  image: string;
  likes: string;
  comments: string;
}

const instagramPosts: InstagramPost[] = [
  {
    id: 1,
    image: '/images/instagram_1.jpg',
    likes: '342',
    comments: '18',
  },
  {
    id: 2,
    image: '/images/instagram_2.jpg',
    likes: '298',
    comments: '12',
  },
  {
    id: 3,
    image: '/images/instagram_3.jpg',
    likes: '412',
    comments: '25',
  },
  {
    id: 4,
    image: '/images/instagram_4.jpg',
    likes: '528',
    comments: '39',
  },
  {
    id: 5,
    image: '/images/instagram_5.jpg',
    likes: '284',
    comments: '14',
  },
  {
    id: 6,
    image: '/images/instagram_6.jpg',
    likes: '376',
    comments: '22',
  },
];

export default function InstagramFeed() {
  return (
    <section className="py-24 bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Details */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-light block mb-3">
              Social Journal
            </span>
            <h2 className="text-3xl md:text-5xl font-light text-white text-serif uppercase tracking-wide">
              Instagram
            </h2>
            <div className="h-[1px] w-16 bg-gold mt-4" />
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right max-sm:text-left">
              <h3 className="text-sm font-semibold text-white tracking-wider">
                @harinee_photography
              </h3>
              <p className="text-xs text-white/50 font-light mt-0.5">
                4K+ Followers &bull; The Visual Storytellers
              </p>
            </div>
            <a
              href="https://www.instagram.com/harinee_photography"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-white/10 hover:border-gold hover:text-gold text-white transition-all duration-300 bg-black/40 backdrop-blur-sm"
              aria-label="Visit Instagram Profile"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <motion.a
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5 }}
              key={post.id}
              href="https://www.instagram.com/harinee_photography"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group aspect-square overflow-hidden bg-zinc-900 border border-white/5"
            >
              {/* Post Image */}
              <img
                src={post.image}
                alt={`Instagram Post ${post.id}`}
                loading="lazy"
                className="w-full h-full object-cover zoom-img select-none"
              />

              {/* Dark Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 z-10" />

              {/* Post Stats (Visible on Hover) */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 md:gap-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 scale-95 group-hover:scale-100">
                <div className="flex items-center gap-1.5 hover:text-gold transition-colors">
                  <Heart className="w-4 h-4 md:w-5 md:h-5 fill-white group-hover:fill-transparent" />
                  <span className="text-xs md:text-sm font-semibold tracking-wider">{post.likes}</span>
                </div>
                <div className="flex items-center gap-1.5 hover:text-gold transition-colors">
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5 fill-white group-hover:fill-transparent" />
                  <span className="text-xs md:text-sm font-semibold tracking-wider">{post.comments}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
