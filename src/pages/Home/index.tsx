import { Container } from '@/components/Utilities';
import { CooffeesSection } from './sections/Coffees';
import { HeroSection } from './sections/Hero';
import * as S from './styles';

export function HomePage() {
  return (
    <S.Main>
      <section>
        <Container>
          <HeroSection />
        </Container>
      </section>
      <Container as="section">
        <CooffeesSection />
      </Container>
    </S.Main>
  );
}
