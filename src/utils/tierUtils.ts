export const tierRank: Record<string, number> = {
  free: 1,
  silver: 2,
  gold: 3,
  platinum: 4,
};

export function canAccess(eventTier: string, userTier: string) {
  return tierRank[eventTier] <= tierRank[userTier];
}
