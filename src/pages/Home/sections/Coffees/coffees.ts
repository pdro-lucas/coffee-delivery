import Expresso from '@/assets/coffees/expresso.png';
import Americano from '@/assets/coffees/americano.png';
import Cremoso from '@/assets/coffees/cremoso.png';
import Gelado from '@/assets/coffees/cafegelado.png';
import ComLeite from '@/assets/coffees/cafecomleite.png';
import Latte from '@/assets/coffees/latte.png';
import Macchiato from '@/assets/coffees/macchiato.png';
import Mocaccino from '@/assets/coffees/mochaccino.png';
import ChocolateQuente from '@/assets/coffees/chocolatequente.png';
import Cubano from '@/assets/coffees/cubano.png';
import Havaiano from '@/assets/coffees/havaiano.png';
import Arabe from '@/assets/coffees/arabe.png';
import Irlandes from '@/assets/coffees/irlandes.png';
import Capuccino from '@/assets/coffees/capuccino.png';

interface Coffee {
  title: string;
  description: string;
  image: string;
  tags: { title: string }[];
  price: number;
}

export const coffee: Coffee[] = [
  {
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    image: Expresso,
    tags: [{ title: 'Tradicional' }],
    price: 9.9,
  },
  {
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    image: Americano,
    tags: [{ title: 'Tradicional' }],
    price: 9.9,
  },
  {
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    image: Cremoso,
    tags: [{ title: 'Tradicional' }],
    price: 9.9,
  },
  {
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    image: Gelado,
    tags: [{ title: 'Tradicional' }, { title: 'Gelado' }],
    price: 9.9,
  },
  {
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    image: ComLeite,
    tags: [{ title: 'Tradicional' }, { title: 'Com leite' }],
    price: 9.9,
  },
  {
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    image: Latte,
    tags: [{ title: 'Tradicional' }, { title: 'Com leite' }],
    price: 9.9,
  },
  {
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    image: Capuccino,
    tags: [{ title: 'Tradicional' }, { title: 'Com leite' }],
    price: 9.9,
  },
  {
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    image: Macchiato,
    tags: [{ title: 'Tradicional' }, { title: 'Com leite' }],
    price: 9.9,
  },
  {
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    image: Mocaccino,
    tags: [{ title: 'Tradicional' }, { title: 'Com leite' }],
    price: 9.9,
  },
  {
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    image: ChocolateQuente,
    tags: [{ title: 'Tradicional' }, { title: 'Com leite' }],
    price: 9.9,
  },
  {
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    image: Cubano,
    tags: [{ title: 'Especial' }, { title: 'Alcólico' }, { title: 'Gelado' }],
    price: 9.9,
  },
  {
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    image: Havaiano,
    tags: [{ title: 'Especial' }],
    price: 9.9,
  },
  {
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    image: Arabe,
    tags: [{ title: 'Especial' }],
    price: 9.9,
  },
  {
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    image: Irlandes,
    tags: [{ title: 'Especial' }, { title: 'Alcólico' }],
    price: 9.9,
  },
];
