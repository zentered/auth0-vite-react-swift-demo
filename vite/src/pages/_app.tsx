import { Container } from '@/components/container'

type Props = {
  children: JSX.Element
}

export default function App({ children }: Props): JSX.Element {
  return (
    <>
      <Container>{children}</Container>
    </>
  )
}
