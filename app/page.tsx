import Button from '@/components/Button'
import User from '@user/page';
import Admin from '@admin/page';
import B7 from '@/app/B7/page';
import React from 'react'

export default function page() {
  return (
    <div>
      <Button></Button>
      <Admin></Admin>
      <User></User>
      <B7/>
    </div>
  )
}
