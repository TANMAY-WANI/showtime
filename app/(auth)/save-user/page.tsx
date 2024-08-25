import { userMetaData } from '@/lib/actions/user.actions';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function SaveUserPage() {
    const {userId} = auth()
    await userMetaData(userId||"")
    redirect('/')

}
