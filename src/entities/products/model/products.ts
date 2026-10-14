import { productImages } from '~/entities/products/lib/product-images'
import type { MenuCategory, MenuSubcategory, Product } from '~/entities/products/types/products'

type ProductInput = Omit<Product, 'category' | 'subcategory'>

const createProducts = (
  category: MenuCategory,
  products: (ProductInput & { subcategory?: MenuSubcategory })[],
): Product[] => products.map(product => ({ ...product, category }))

export const products: Product[] = [
  ...createProducts('MENÚ MARINO', [
    // ENTRADAS
    {
      id: '1',
      name: 'LECHE DE TIGRE',
      price: 10,
      image: productImages.lecheTigre,
      subcategory: 'ENTRADAS',
    },
    {
      id: '2',
      name: 'CEVICHE (ENTRADA)',
      price: 10,
      image: productImages.ceviche,
      subcategory: 'ENTRADAS',
    },
    {
      id: '3',
      name: 'CHAUFA (ENTRADA)',
      price: 10,
      image: productImages.arrozChaufa,
      subcategory: 'ENTRADAS',
    },

    // FONDOS
    {
      id: '4',
      name: 'ARROZ CON MARISCO',
      description: 'Arroz salteado con mariscos frescos, acompañado de un delicioso toque criollo.',
      price: 10,
      image: productImages.chufaMarisco,
      subcategory: 'FONDO',
    },
    {
      id: '5',
      name: 'CHICHARRON DE PESCADO',
      description: 'Crujientes trozos de pescado dorado, acompañados de sarsa criolla y limón.',
      price: 10,
      image: '/assets/foods/chicharron-pescado.webp',
      subcategory: 'FONDO',
    },
    {
      id: '6',
      name: 'PESCADO FRITO',
      description:
        'Filete de pescado dorado y crujiente, servido con una porción de arroz blanco, papas fritas crocantes y fresca ensalada de la casa.',
      price: 10,
      image: '/assets/foods/pescado-frito.webp',
      subcategory: 'FONDO',
    },
    {
      id: '7',
      name: 'CEVICHE',
      description:
        'Pescado fresco marinado en limón, con ají, cebolla y cilantro, acompañado de sus guarniciones.',
      price: 10,
      image: productImages.ceviche,
      subcategory: 'FONDO',
    },
    {
      id: '8',
      name: 'CHAUFA DE MARISCO',
      description:
        'Arroz chaufa salteado al wok con mariscos, huevo, cebolla china y salsa de soya.',
      price: 10,
      image: productImages.chufaMarisco,
      subcategory: 'FONDO',
    },
    {
      id: '9',
      name: 'ARROZ CHAUFA',
      description: 'Arroz salteado al wok con pollo, huevo, cebolla china y salsa de soya.',
      price: 10,
      image: productImages.arrozChaufa,
      subcategory: 'FONDO',
    },
    {
      id: '10',
      name: 'CAUSA ACEVICHADA',
      description: 'Causa de papa amarilla rellena y coronada con ceviche de pescado fresco.',
      price: 10,
      image: productImages.causaAcevichada,
      subcategory: 'FONDO',
    },
    {
      id: '11',
      name: 'LOMO SALTADO',
      description:
        'Tiernos trozos de lomo salteados con cebolla y tomate, acompañados de papas fritas y arroz.',
      price: 10,
      image: productImages.lomoSaltado,
      subcategory: 'FONDO',
    },
  ]),

  ...createProducts('CENA Y PLATOS A LA CARTA', [
    {
      id: '12',
      name: 'CALDO DE GALLINA',
      description: 'Tradicional caldo de gallina con papa, huevo y un delicioso toque casero.',
      price: 8,
      image: productImages.caldoGallina,
    },
    {
      id: '13',
      name: 'MONSTRITO CON BROSTER',
      description: 'Arroz chaufa acompañado de crujiente pollo broaster, papas fritas y ensalada.',
      price: 12,
      image: productImages.monstritoBroster,
    },
    {
      id: '14',
      name: 'ARROZ CHAUFA',
      description: 'Arroz salteado al wok con pollo, huevo, cebolla china y salsa de soya.',
      price: 10,
      image: productImages.arrozChaufa,
    },
    {
      id: '15',
      name: 'AEROPUERTO',
      description:
        'Arroz y tallarines salteados al wok con pollo, huevo, cebolla china y frejol chino, sazonados con sillao.',
      price: 10,
      image: '/assets/foods/aeropuerto.webp',
    },
    {
      id: '16',
      name: 'ALITAS BBQ',
      description:
        'Crujientes alitas de pollo bañadas en salsa BBQ, acompañadas de papas fritas y ensalada.',
      price: 15,
      image: productImages.alitasBbq,
    },
    {
      id: '17',
      name: 'ALITAS EN SALSA DE MANGO',
      description: 'Alitas crocantes bañadas en una dulce y deliciosa salsa de mango.',
      price: 15,
      image: productImages.alitasMango,
    },
    {
      id: '18',
      name: 'ALITAS A LA MARACUYA',
      description: 'Crujientes alitas de pollo bañadas en una irresistible salsa de maracuyá.',
      price: 15,
      image: productImages.alitasMaracuya,
    },
    {
      id: '19',
      name: 'HAMBURGUESA ROYAL',
      description: 'Jugosa hamburguesa acompañada de frescos vegetales y deliciosos complementos.',
      price: 15,
      image: productImages.hamburgesaRoyal,
    },
    {
      id: '20',
      name: 'HAMBURGUESA CHORIPAPA',
      description:
        'Hamburguesa acompañada de chorizo, papas fritas y una deliciosa combinación de salsas.',
      price: 10,
      image: '/assets/foods/hamburguesa-choripapa.webp',
    },
    {
      id: '21',
      name: 'SANDWISH',
      description:
        'Pan relleno con una sabrosa combinación de ingredientes frescos y salsas de la casa.',
      price: 5,
      image: productImages.sandwish,
    },
    {
      id: '22',
      name: 'BROCHETA DE POLLO',
      description:
        'Jugoso pollo sazonado y cocinado a la parrilla, acompañado de sus guarniciones.',
      price: 10,
      image: productImages.brochetaPollo,
    },
    {
      id: '23',
      name: 'POLLO A LA PARRILLA',
      description:
        'Jugoso pollo sazonado y cocinado a la parrilla, acompañado de sus guarniciones.',
      price: 12,
      image: productImages.polloParrilla,
    },
    {
      id: '24',
      name: 'POLLO A LA PLANCHA',
      description:
        'Filete de pollo tierno y dorado a la plancha, acompañado de papas fritas y ensalada.',
      price: 12,
      image: productImages.polloPlancha,
    },
  ]),

  ...createProducts('BEBIDAS', [
    {
      id: '25',
      name: 'COCA PERSONAL',
      price: 3.5,
    },
    {
      id: '26',
      name: 'COCA DE 1/LITRO',
      price: 6,
    },
    {
      id: '27',
      name: 'INCA PERSONAL',
      price: 3.5,
    },
    {
      id: '28',
      name: 'INCA DE 1/ LITRO',
      price: 6,
    },
    {
      id: '29',
      name: 'AGUA MINERAL',
      price: 3.5,
    },
    {
      id: '30',
      name: 'CAFÉ',
      price: 6,
    },

    // MATES
    {
      id: '31',
      name: 'MANZANILLA',
      price: 2,
      subcategory: 'MATES',
    },
    {
      id: '32',
      name: 'ANÍS',
      price: 2,
      subcategory: 'MATES',
    },
    {
      id: '33',
      name: 'TÉ',
      price: 2,
      subcategory: 'MATES',
    },
    {
      id: '34',
      name: 'MUÑA',
      price: 2,
      subcategory: 'MATES',
    },
  ]),
]
