import Image from 'next/image'
import Form from '../../form'

// URL för testkörning - /user/175
  
  export default async function Page({ params }) {
    const { id } = params
    
    // Fetchar användardata
    const user = await fetch(`https://traino.nu/php/testgetuser.php?id=${id}`).then((res) => res.json())

    return (
        <>
            <div className="flex flex-col-reverse md:flex-row justify-between size-3/4 bg-white/50 items-center rounded-lg p-6 gap-4 max-w-2xl">
                <div>
                    <h1 className='text-2xl font-semibold'>{user.firstname} {user.lastname}</h1>
                    <p>{user.age} år</p><br />
                    <p>{user.user_about}</p>
                </div>
                <Image
                    src={user.thumbnail}
                    width={250}
                    height={250}
                    alt="Picture of the user"
                    className='rounded-lg w-full'
                />
            </div>
            <Form />
        </>
    )
}