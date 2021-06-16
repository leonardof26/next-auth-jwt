import { ReactNode } from 'react'

import { useCan } from '../hooks/useCan'

interface CanPros {
  children: ReactNode
  permissions?: string[]
  roles?: string[]
}

export function Can({ children, roles, permissions }: CanPros) {
  const userCanSeeComponent = useCan({ permissions, roles })

  if (!userCanSeeComponent) {
    return null
  }

  return <>{children}</>
}
