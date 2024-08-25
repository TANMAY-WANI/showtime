// Import Clerk client and current user functions
import { clerkClient, currentUser } from '@clerk/nextjs/server';

// Function to set user metadata
export async function userMetaData(userId: string): Promise<boolean> {
  // Fetch the current user
  const user = await currentUser();
  const role = user?.publicMetadata?.role;

  // If the role is not set, update it
  if (!role) {
    try {
      await clerkClient.users.updateUserMetadata(userId, {
        publicMetadata: {
          role: 'customer',
        },
      });
      return true; // Return true if the update was successful
    } catch (error) {
      console.error('Error updating user metadata:', error);
      return false; // Return false if there was an error
    }
  } else {
    return true; // Return true if the role is already set
  }
}
