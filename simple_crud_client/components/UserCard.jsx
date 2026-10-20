'use client'

import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
// import { revalidatePath } from "next/cache";
import Link from "next/link";
import { useRouter } from "next/navigation";
const UserCard = ({ user }) => {


    const { _id } = user;
    const router = useRouter()

    const handleDeleteUser = async (id) => {
        console.log('deleting user:', _id)
        const res = await fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE',
        })

        const afterDelete = await res.json()
        console.log(afterDelete)
        if (afterDelete.deletedCount > 0) {
            console.log('user deleted succesfully')
            router.refresh()
        }

    }


    return (
        <div>
            <Card className="relative mx-auto w-full max-w-sm pt-0">


                <CardHeader>
                    <CardAction>
                        <h2>No Action</h2>
                    </CardAction>
                    <CardTitle>{user.name}</CardTitle>
                    <CardDescription>
                        {user.email}
                    </CardDescription>
                </CardHeader>
                <CardFooter>
                    <Link href={`/users/${user._id}`}>
                        <Button className="w-full">View details </Button></Link>
                    <Button className='mx-4'>Edit  </Button>
                    <Button
                        onClick={() => handleDeleteUser(_id)}
                        variant='destructive'>Delete  </Button>

                </CardFooter>
            </Card>
        </div>
    );
};

export default UserCard;