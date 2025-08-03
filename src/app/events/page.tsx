import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { getUserTier } from "@/lib/clerk";
import { canAccess } from "@/utils/tierUtils";
import EventCard from "@/components/EventCard";

export default async function EventsPage() {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/sign-in");
  }

  const userTier = await getUserTier();

  const { data: events, error } = await supabase
    .from("events")
    .select("*")
    .order("event_date", { ascending: true });

  if (error) {
    return (
      <div className="p-4 text-red-500 text-center">
        Error loading events: {error.message}
      </div>
    );
  }

  if (!events || events.length === 0) {
    return (
      <div className="p-4 text-gray-500 text-center">
        No events available at the moment.
      </div>
    );
  }

  const unlocked = events.filter((e) => canAccess(e.tier, userTier));
  const lockedTiers = [...new Set(events.filter(e => !canAccess(e.tier, userTier)).map(e => e.tier))];

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Your <span className="text-blue-600 capitalize">{userTier}</span> Tier Events
          </h1>
          <p className="text-lg text-gray-600">
            Exclusive experiences tailored for you
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {unlocked.map((event) => (
            <EventCard key={event.id} event={event} unlocked />
          ))}
        </div>

        {/* Upgrade CTA Section */}
        {lockedTiers.length > 0 && (
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-8 text-center shadow-lg">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">
                Unlock {lockedTiers.length}+ Premium Events
              </h2>
              <p className="text-blue-100 mb-6">
                Upgrade to access exclusive {lockedTiers.join(' and ')} tier events
              </p>
              <a
                href="/upgrade"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Upgrade Now
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}