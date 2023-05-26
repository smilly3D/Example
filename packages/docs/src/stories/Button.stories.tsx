import React from 'react'
// import { Text } from '@chakra-ui/react'
import { Button } from '@enline-chakra-ui/react'

export default {
  title: 'Issues',
  args: {
    bg: {},
  },
}

/** props don't work, default animation doesn't appear */
export const SkeletonIssue = () => <Button variant={'outline'}>Button</Button>
