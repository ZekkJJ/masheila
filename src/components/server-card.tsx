import { useState } from "react";
import { Users, Star, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface Server {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  rating: number;
  tags: string[];
  bannerUrl?: string;
  iconUrl: string;
}

export default function ServerCard({ server }: { server: Server }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="server-card bg-card rounded-lg overflow-hidden border border-muted/20"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-40 overflow-hidden">
        <img
          src={server.bannerUrl || server.iconUrl}
          alt={`${server.name} banner`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <img
          src={server.iconUrl}
          alt={`${server.name} icon`}
          className="absolute bottom-4 left-4 w-16 h-16 rounded-full border-4 border-card"
        />
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-foreground">{server.name}</h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-secondary" />
            <span className="ml-1 text-foreground">{server.rating.toFixed(1)}</span>
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {server.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {server.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-full bg-secondary/10 text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center text-muted-foreground">
            <Users className="w-4 h-4 mr-1" />
            <span className="text-sm">{server.memberCount.toLocaleString()}</span>
          </div>

          <button
            className="btn-primary flex items-center px-4 py-2 rounded-md bg-primary text-foreground hover:bg-accent"
          >
            View Details
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}