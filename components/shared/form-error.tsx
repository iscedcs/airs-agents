import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import React from 'react'

export default function FormError({message}: {message? : string}) {
    if(!message) return null;

  return (
    <div className='bg-destructive/15 flex text-center justify-center mx-auto items-center gap-x-2 my-12  rounded-md p-3 text-sm text-destructive-foreground'>
        <ExclamationTriangleIcon className="h-4 w-4"/>
        <p >{message}</p>
    </div>
  )
}
