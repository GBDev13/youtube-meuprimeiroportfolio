import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavLinkContainer } from './styles';

interface Props {
  title: string;
  path: string;
}

export default function NavLink({ title, path }: Props) {
  const router = useRouter();

  return (
    <NavLinkContainer isActive={path === router.pathname}>
      <Link href={path}>
        <a>{title}</a>
      </Link>
    </NavLinkContainer>
  );
}
