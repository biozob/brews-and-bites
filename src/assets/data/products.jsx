import productImg01 from '../images/beer1.jpg';
import productImg02 from '../images/beer2.jpg';
import productImg03 from '../images/beer3.jpg';
import productImg04 from '../images/beer4.jpg';

import productImg05 from '../images/choko1.jpg';
import productImg06 from '../images/choko2.jpg';
import productImg07 from '../images/choko3.jpg';
import productImg08 from '../images/choko4.jpg';
import productImg09 from '../images/choko5.jpg';
import productImg10 from '../images/choko6.jpg';
import productImg11 from '../images/choko7.jpg';

import productImg12 from '../images/coca1.jpg';
import productImg13 from '../images/coca2.jpg';
import productImg14 from '../images/coca3.jpg';
import productImg15 from '../images/coca4.jpg';
import productImg16 from '../images/coca5.jpg';

import productImg17 from '../images/jelly1.jpg';
import productImg18 from '../images/jelly2.jpg';
import productImg19 from '../images/jelly3.jpg';
import productImg20 from '../images/jelly4.jpg';

import productImg21 from '../images/snacks1.jpg';
import productImg22 from '../images/snacks2.jpg';
import productImg23 from '../images/snacks3.jpg';

const products = [
  {
    id: '01',
    productName: 'Tuborg Gron',
    imgUrl: productImg01,
    category: 'beer',
    price: 5,
    shortDesc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!',
    reviews: [
      {
        rating: 4.7,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
    ],
    avgRating: 4.5,
  },

  {
    id: '02',
    productName: 'Carlsberg Original',
    imgUrl: productImg02,
    category: 'beer',
    price: 5,
    shortDesc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!',
    reviews: [
      {
        rating: 4.8,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        rating: 4.8,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
    ],
    avgRating: 4.7,
  },

  {
    id: '03',
    productName: 'Haineken Pure Malt Lager',
    imgUrl: productImg03,
    category: 'beer',
    price: 9,
    shortDesc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!',
    reviews: [
      {
        rating: 4.6,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        rating: 4.9,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
    ],
    avgRating: 4.7,
  },
  {
    id: '26',
    productName: 'Tuborg Pilsner Ol',
    imgUrl: productImg04,
    category: 'beer',
    price: 9,
    shortDesc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!',
    reviews: [
      {
        rating: 4.8,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        rating: 4.8,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
    ],
    avgRating: 4.7,
  },
  {
    id: '04',
    productName: 'Nesquik Milk',
    imgUrl: productImg05,
    category: 'chocolate',
    price: 25,
    shortDesc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!',
    reviews: [
      {
        rating: 4.6,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        rating: 4.9,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
    ],
    avgRating: 4.7,
  },

  {
    id: '05',
    productName: 'Raffaello White',
    imgUrl: productImg06,
    category: 'chocolate',
    price: 55,
    shortDesc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!',
    reviews: [
      {
        rating: 4.6,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        rating: 4.9,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
    ],
    avgRating: 4.7,
  },

  {
    id: '06',
    productName: 'Kinder Shoko Bons',
    imgUrl: productImg07,
    category: 'chocolate',
    price: 42,
    shortDesc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!',
    reviews: [
      {
        rating: 4.6,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        rating: 4.9,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
    ],
    avgRating: 4.7,
  },
  {
    id: '07',
    productName: 'Snickers XL',
    imgUrl: productImg08,
    category: 'chocolate',
    price: 7,
    shortDesc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!',
    reviews: [
      {
        rating: 4.6,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        rating: 4.9,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
    ],
    avgRating: 4.7,
  },

  {
    id: '27',
    productName: 'M&Ms Peanut',
    imgUrl: productImg09,
    category: 'chocolate',
    price: 28,
    shortDesc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!',
    reviews: [
      {
        rating: 4.6,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        rating: 4.9,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
    ],
    avgRating: 4.7,
  },

  {
    id: '08',
    productName: 'Hanuta Waffle',
    imgUrl: productImg10,
    category: 'chocolate',
    price: 9,
    shortDesc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!',
    reviews: [
      {
        rating: 4.6,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        rating: 4.9,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
    ],
    avgRating: 4.7,
  },

  {
    id: '09',
    productName: 'Mars MAX',
    imgUrl: productImg11,
    category: 'chocolate',
    price: 5,
    shortDesc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!',
    reviews: [
      {
        rating: 4.6,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        rating: 4.9,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
    ],
    avgRating: 4.7,
  },

  {
    id: '10',
    productName: 'CocaCola Original',
    imgUrl: productImg12,
    category: 'soda',
    price: 3,
    shortDesc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!',
    reviews: [
      {
        rating: 4.8,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        rating: 4.9,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
    ],
    avgRating: 4.8,
  },
  {
    id: '25',
    productName: 'Fanta Orange',
    imgUrl: productImg13,
    category: 'soda',
    price: 2,
    shortDesc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!',
    reviews: [
      {
        rating: 4.6,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        rating: 4.9,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
    ],
    avgRating: 4.7,
  },
  {
    id: '11',
    productName: 'Pepsi',
    imgUrl: productImg14,
    category: 'soda',
    price: 2,
    shortDesc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!',
    reviews: [
      {
        rating: 4.8,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        rating: 4.9,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
    ],
    avgRating: 4.8,
  },

  {
    id: '12',
    productName: 'Mirinda Orange',
    imgUrl: productImg15,
    category: 'soda',
    price: 2,
    shortDesc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!',
    reviews: [
      {
        rating: 4.8,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        rating: 4.9,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
    ],
    avgRating: 4.8,
  },

  {
    id: '13',
    productName: 'Mountain Dew',
    imgUrl: productImg16,
    category: 'soda',
    price: 3,
    shortDesc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!',
    reviews: [
      {
        rating: 4.8,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        rating: 4.9,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
    ],
    avgRating: 4.8,
  },

  {
    id: '14',
    productName: 'Haribo Click Mix',
    imgUrl: productImg17,
    category: 'jelly',
    price: 8,
    shortDesc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!',
    reviews: [
      {
        rating: 4.8,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        rating: 4.9,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
    ],
    avgRating: 4.8,
  },

  {
    id: '15',
    productName: 'Haribo Matador Mix',
    imgUrl: productImg18,
    category: 'jelly',
    price: 8,
    shortDesc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!',
    reviews: [
      {
        rating: 4.8,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        rating: 4.9,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
    ],
    avgRating: 4.8,
  },

  {
    id: '16',
    productName: 'Haribo Peaches',
    imgUrl: productImg19,
    category: 'jelly',
    price: 7,
    shortDesc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!',
    reviews: [
      {
        rating: 4.8,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        rating: 4.9,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
    ],
    avgRating: 4.8,
  },

  {
    id: '17',
    productName: 'Haribo Multi Mix',
    imgUrl: productImg20,
    category: 'jelly',
    price: 7,
    shortDesc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!',
    reviews: [
      {
        rating: 4.8,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        rating: 4.9,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
    ],
    avgRating: 4.8,
  },

  {
    id: '18',
    productName: 'Lays Paprika',
    imgUrl: productImg21,
    category: 'chips',
    price: 15,
    shortDesc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!',
    reviews: [
      {
        rating: 4.8,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        rating: 4.9,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
    ],
    avgRating: 4.8,
  },

  {
    id: '19',
    productName: 'Lays Sour Cream & Onions',
    imgUrl: productImg22,
    category: 'chips',
    price: 13,
    shortDesc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!',
    reviews: [
      {
        rating: 4.8,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        rating: 4.9,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
    ],
    avgRating: 4.8,
  },

  {
    id: '20',
    productName: 'Lays Cheese',
    imgUrl: productImg23,
    category: 'chips',
    price: 11,
    shortDesc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!',
    reviews: [
      {
        rating: 4.8,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        rating: 4.9,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
    ],
    avgRating: 4.8,
  },
];

export default products;
