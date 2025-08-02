'use server';
import { currentUser, auth, clerkClient as serverClerkClient } from "@clerk/nextjs/server";

export async function getUserTier(): Promise<string> {
  const { userId } = await auth();
  if (!userId) return "free";

  const client = await serverClerkClient();
  const user = await client.users.getUser(userId);

  return (user.publicMetadata?.tier as string) || "free";
}

export async function upgradeTier(newTier: string): Promise<{ success: boolean; message?: string }> {
   const { userId } = await auth();
  if (!userId) return { success: false, message: "User not authenticated" };

  try{
      const client = await serverClerkClient();
    await client.users.updateUserMetadata(userId, {
      publicMetadata: { tier: newTier },
    });
    return { success: true };

  }
  catch(error){
    console.error("Error upgrading tier:", error);
    return { success: false, message: "Failed to upgrade tier" };
  }

  // const client = await serverClerkClient();
  // await client.users.updateUserMetadata(userId, {
  //   publicMetadata: { tier: newTier },
  // });
}



// import { currentUser, auth, clerkClient as serverClerkClient } from "@clerk/nextjs/server";

// export async function getUserTier(): Promise<string> {
//   const { userId } = await auth();
//   if (!userId) return "free";

//   const client = await serverClerkClient();
//   const user = await client.users.getUser(userId);

//   return (user.publicMetadata?.tier as string) || "free";
// }

// export async function upgradeTier(userId: string, newTier: string) {
//   const client = await serverClerkClient();
//   await client.users.updateUserMetadata(userId, {
//     publicMetadata: { tier: newTier },
//   });
// }
