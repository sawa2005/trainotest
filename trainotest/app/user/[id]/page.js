export function generateStaticParams() {
    return [{ id: '175' }]
  }

  // - /user/175
  
  export default async function Page({ params }) {
    const { id } = params
    
    const user = await fetch(`https://traino.nu/php/testgetuser.php?id=${id}`).then((res) => res.json())

    console.log(user);
  }