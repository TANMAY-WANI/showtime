import { handleUser } from '@/lib/actions/user.actions';
import { redirect } from 'next/navigation';

export default function SaveUserPage() {
    handleUser()
    redirect("/")
}
