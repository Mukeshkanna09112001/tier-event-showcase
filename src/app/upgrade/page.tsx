'use client';

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { getUserTier, upgradeTier } from "@/lib/clerk";
import toast from "react-hot-toast";

export default function UpgradePage() {
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();
  const [currentTier, setCurrentTier] = useState<string>("");
  const [newTier, setNewTier] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  useEffect(() => {
    const fetchTier = async () => {
      if (!isLoaded || !isSignedIn) return;

      setIsLoading(true);
      try {
        const tier = await getUserTier();
        setCurrentTier(tier);
        setNewTier(tier);
      } catch (error) {
        setStatus({ type: 'error', message: "Failed to load current tier" });
        toast.error("Failed to load current tier");
      } finally {
        setIsLoading(false);
      }
    };

    fetchTier();
  }, [isLoaded, isSignedIn]);

  const handleUpgrade = async () => {
    if (!newTier || newTier === currentTier) return;

    setIsLoading(true);
    setStatus(null);

    try {
      const result = await upgradeTier(newTier);
      if (result.success) {
        toast.success(`Successfully upgraded to ${newTier} tier!`);
        setStatus({ type: 'success', message: `Successfully upgraded to ${newTier} tier!` });
        setCurrentTier(newTier);
        router.replace("/events");
      } else {
        toast.error(result.message || "Upgrade failed");
        setStatus({ type: 'error', message: result.message || "Upgrade failed" });
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
      setStatus({ type: 'error', message: "An unexpected error occurred" });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isLoaded) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (!isSignedIn) {
    return <div className="text-center py-8">Please sign in to upgrade your tier</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Toast container - add this */}
      <div className="toast-container">
        {/* Toasts will appear here */}
      </div>

      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Upgrade Your Tier</h1>

        <div className="space-y-6">
          <div>
            <p className="text-sm font-medium text-gray-700 mb-1">Current Tier</p>
            <div className="px-4 py-2 bg-blue-50 rounded-lg text-blue-700 font-medium capitalize">
              {currentTier || "Loading..."}
            </div>
          </div>

          <div className="mb-10">
            <label htmlFor="tier-select" className="block text-sm font-medium text-gray-700 mb-1">
              Select New Tier
            </label>
            <select
              id="tier-select"
              value={newTier}
              onChange={(e) => setNewTier(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
              disabled={isLoading || !currentTier}
            >
              <option value="">Select a tier</option>
              <option value="free">Free</option>
              <option value="silver">Silver</option>
              <option value="gold">Gold</option>
              <option value="platinum">Platinum</option>
            </select>
          </div>
          <div className="flex justify-center mt-10">
            <button
              onClick={handleUpgrade}
              disabled={isLoading || !newTier || currentTier === newTier}
              className={`mt-10 w-[250px] py-3 px-6 rounded-lg shadow-md text-md font-semibold text-white ${isLoading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
                } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center`}
            >
              {isLoading ? 'Processing...' : 'Upgrade Now'}
            </button>
          </div>
        </div>

        {status && (
          <p className={`text-sm mt-2 ${status.type === 'success' ? 'text-green-600' : 'text-red-600'
            }`}>
            {status.message}
          </p>
        )}
      </div>
    </div>
  );
}