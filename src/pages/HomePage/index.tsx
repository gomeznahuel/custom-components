import { TsHeading } from '../../components/ReusableText'
import { HomePageContainer } from './style'

export const HomePage = () => {
  return (
    <HomePageContainer>
      <TsHeading headingLevel="h1">Componentes reutilizables</TsHeading>
      <TsHeading headingLevel="p">By Nahuel Gómez</TsHeading>
    </HomePageContainer>
  )
}
