import { Button } from '@/components/ui/button';
import { UserButton } from '@stackframe/stack';
import React from 'react'

function page() {
  return (
    <div className='text-center'>Page
     <Button>Hello</Button>
     <UserButton></UserButton>
    </div>
   
  )
}

export default page;