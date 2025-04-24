
import React from 'react';
import { Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const SocialLinks = () => {
  // This would typically fetch from Instagram API
  // Using placeholder images for now
  const instagramPosts = [
    { id: 1, imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80", link: "https://www.instagram.com/p/example1/" },
    { id: 2, imageUrl: "https://images.unsplash.com/photo-1596813362035-3edcff0c2487?auto=format&fit=crop&q=80", link: "https://www.instagram.com/p/example2/" },
    { id: 3, imageUrl: "https://images.unsplash.com/photo-1630587148265-761cbd139043?auto=format&fit=crop&q=80", link: "https://www.instagram.com/p/example3/" },
    { id: 4, imageUrl: "https://images.unsplash.com/photo-1538944495092-48fff71fbb0c?auto=format&fit=crop&q=80", link: "https://www.instagram.com/p/example4/" },
    { id: 5, imageUrl: "https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?auto=format&fit=crop&q=80", link: "https://www.instagram.com/p/example5/" },
    { id: 6, imageUrl: "https://images.unsplash.com/photo-1584813470613-5b1c1cad3a69?auto=format&fit=crop&q=80", link: "https://www.instagram.com/p/example6/" },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-montserrat font-bold text-3xl mb-4">Follow Us on Instagram</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            See our latest projects and behind-the-scenes moments on Instagram.
          </p>
          <Button
            className="mt-4 bg-primary hover:bg-primary/90 flex items-center gap-2"
            onClick={() => window.open("https://www.instagram.com/titanklincleaning/", "_blank")}
          >
            <Instagram className="h-5 w-5" />
            <span>@titanklincleaning</span>
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <a 
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-md transition-transform hover:scale-105"
            >
              <img 
                src={post.imageUrl} 
                alt="TitanKlin Instagram post" 
                className="w-full h-40 object-cover"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
