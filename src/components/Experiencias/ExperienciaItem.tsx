import { ItemContainer } from './styles';

interface ExperienciaProps {
  year: string;
  title: string;
  description: string;
}

export default function ExperienciaItem({
  year,
  title,
  description
}: ExperienciaProps) {
  return (
    <ItemContainer data-aos="fade-up">
      <h1>{year}</h1>
      <h2>{title}</h2>
      <p>{description}</p>
    </ItemContainer>
  );
}
