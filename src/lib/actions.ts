'use server';

import { auth } from "@clerk/nextjs/server";
import { upgradeTier as clerkUpgradeTier, getUserTier as clerkGetUserTier } from "./clerk";

export async function getUserTier() {
  const { userId } = await auth();
  if (!userId) throw new Error('User not authenticated');
  return await clerkGetUserTier();
}

export async function upgradeTier(newTier: string) {
  const { userId } = await auth();
  if (!userId) throw new Error('User not authenticated');
  return await clerkUpgradeTier(newTier);
}