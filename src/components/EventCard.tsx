'use client';
import TierBadge from "./TierBadge";
import { format } from "date-fns";

interface EventCardProps {
  event: {
    id: string;
    title: string;
    description: string;
    event_date: string;
    image_url?: string;
    tier: string;
  };
  unlocked: boolean;
}

export default function EventCard({ event, unlocked }: EventCardProps) {
  return (
    <div className="relative group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-100">
      <div className="aspect-video bg-gray-100 overflow-hidden">
        <img
          src={event.image_url || "/placeholder.jpg"}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">
            {event.title}
          </h3>
          <TierBadge tier={event.tier} />
        </div>
        
        <time className="block text-sm text-blue-600 font-medium mb-3">
          {format(new Date(event.event_date), "PPPP p")}
        </time>
        
        <p className="text-gray-600 line-clamp-3 mb-4">
          {event.description}
        </p>
        
        <div className="flex justify-between items-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {event.tier} Tier
          </span>
          <button className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
            View Details →
          </button>
        </div>
      </div>
    </div>
  );
}

// 'use client';
// import TierBadge from "./TierBadge";
// import { format } from "date-fns";
// import Loader from "./Loader";
// import Error from "./Error";

// export default function EventCard({ event, unlocked }: any) {
//   return (
//     <div className={`border rounded-md overflow-hidden shadow-sm ${!unlocked ? "opacity-60" : ""}`}>
//       <img
//         src={event.image_url || "/placeholder.jpg"}
//         alt={event.title}
//         className="w-full h-48 object-cover"
//       />
//       <div className="p-4">
//         <div className="flex justify-between items-center mb-2">
//           <h2 className="text-lg font-semibold">{event.title}</h2>
//           <TierBadge tier={event.tier} />
//         </div>
//         <time className="block text-sm text-gray-600 mb-2">
//           {format(new Date(event.event_date), "PPP p")}
//         </time>
//         <p className="text-gray-700 mb-4">{event.description}</p>
//         {!unlocked && (
//           <p className="text-red-600 font-medium">Upgrade to {event.tier} to access</p>
//         )}
//       </div>
//     </div>
//   );
// }
