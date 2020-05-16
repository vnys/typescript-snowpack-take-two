import * as React from 'react'
import styled from 'styled-components'

export interface HelloProps {
  compiler: string
  framework: string
  color?: string
}

const Header = styled.h1<{ color: string }>`
  color: ${({ color }) => color};
`

export const Hello: React.FC<HelloProps> = ({
  compiler,
  framework,
  color = 'lime',
}) => {
  return (
    <Header color={color}>
      Hello from {compiler} and {framework}!
    </Header>
  )
}
