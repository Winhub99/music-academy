import { Meteors } from '@/components/ui/meteors'
import { Button } from '@/components/ui/moving-border'
import React from 'react'

function page() {
  return (
    <div className='bg-gray-900 min-h-screen text-white flex flex-col justify-center items-center'>
      Contact us form
      <form className="container flex flex-col gap-3">
        Name:<input type="text"  />
        Message:<textarea rows={20} cols={30}/>
        <Button borderRadius='1.75rem' >Submit</Button>
      </form>
      
      <Meteors number={40}/>
    </div>
  )
}

export default page
