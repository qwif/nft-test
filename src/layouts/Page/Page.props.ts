import React from 'react'

export interface PageProps extends React.ComponentProps<'div'> {
  title: string
  description: string
  children: React.ReactNode
}
