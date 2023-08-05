export const menu = [
  {
    id: 1,
    title: "Principal",
    listItems: [
      {
        id: 1,
        title: "Accueil",
        url: "/",
        icon: "home.svg",
      },
      {
        id: 2,
        title: "Profil",
        url: "/users/1",
        icon: "user.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Listes",
    listItems: [
      {
        id: 1,
        title: "Utilisateurs",
        url: "/users",
        icon: "user.svg",
      },
      {
        id: 2,
        title: "Produits",
        url: "/products",
        icon: "product.svg",
      },
      {
        id: 3,
        title: "Commandes",
        url: "/orders",
        icon: "order.svg",
      },
      {
        id: 4,
        title: "Posts",
        url: "/posts",
        icon: "post2.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Général",
    listItems: [
      {
        id: 1,
        title: "Élements",
        url: "/",
        icon: "element.svg",
      },
      {
        id: 2,
        title: "Notes",
        url: "/",
        icon: "note.svg",
      },
      {
        id: 3,
        title: "Formulaires",
        url: "/",
        icon: "form.svg",
      },
      {
        id: 4,
        title: "Calendrier",
        url: "/",
        icon: "calendar.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Maintenance",
    listItems: [
      {
        id: 1,
        title: "Paramètres",
        url: "/",
        icon: "setting.svg",
      },
      {
        id: 2,
        title: "Sauvegardes",
        url: "/",
        icon: "backup.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Stats",
    listItems: [
      {
        id: 1,
        title: "Graphique",
        url: "/",
        icon: "chart.svg",
      },
      {
        id: 2,
        title: "Bulletin",
        url: "/",
        icon: "log.svg",
      },
    ],
  },
];

export const topDealUsers = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    username: "Elva McDonald",
    email: "elva@gmail.com",
    amount: "36",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Linnie Nelson",
    email: "linnie@gmail.com",
    amount: "32",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Brent Reeves",
    email: "brent@gmail.com",
    amount: "29",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Adeline Watson",
    email: "adeline@gmail.com",
    amount: "25",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Juan Harrington",
    email: "juan@gmail.com",
    amount: "21",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Augusta McGee",
    email: "augusta@gmail.com",
    amount: "19",
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Angel Thomas",
    email: "angel@gmail.com",
    amount: "15",
  },
];

export const chartBoxUser = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Total Clients",
  number: "11.238",
  dataKey: "clients",
  percentage: 45,
  chartData: [
    { name: "Sun", clients: 400 },
    { name: "Mon", clients: 600 },
    { name: "Tue", clients: 500 },
    { name: "Wed", clients: 700 },
    { name: "Thu", clients: 400 },
    { name: "Fri", clients: 500 },
    { name: "Sat", clients: 450 },
  ],
};

export const chartBoxProduct = {
  color: "skyblue",
  icon: "/productIcon.svg",
  title: "Total Produits",
  number: "238",
  dataKey: "produits",
  percentage: 21,
  chartData: [
    { name: "Sun", produits: 400 },
    { name: "Mon", produits: 600 },
    { name: "Tue", produits: 500 },
    { name: "Wed", produits: 700 },
    { name: "Thu", produits: 400 },
    { name: "Fri", produits: 500 },
    { name: "Sat", produits: 450 },
  ],
};
export const chartBoxRevenue = {
  color: "teal",
  icon: "/revenueIcon.svg",
  title: "Total Revenu",
  number: "56.432€",
  dataKey: "revenu",
  percentage: -12,
  chartData: [
    { name: "Sun", revenu: 400 },
    { name: "Mon", revenu: 600 },
    { name: "Tue", revenu: 500 },
    { name: "Wed", revenu: 700 },
    { name: "Thu", revenu: 400 },
    { name: "Fri", revenu: 500 },
    { name: "Sat", revenu: 450 },
  ],
};
export const chartBoxConversion = {
  color: "gold",
  icon: "/conversionIcon.svg",
  title: "Total Ratio",
  number: "2.6",
  dataKey: "ratio",
  percentage: 12,
  chartData: [
    { name: "Sun", ratio: 400 },
    { name: "Mon", ratio: 600 },
    { name: "Tue", ratio: 500 },
    { name: "Wed", ratio: 700 },
    { name: "Thu", ratio: 400 },
    { name: "Fri", ratio: 500 },
    { name: "Sat", ratio: 450 },
  ],
};

export const barChartBoxRevenue = {
  title: "Profits",
  color: "#8884d8",
  dataKey: "Profits",
  chartData: [
    {
      name: "Sun",
      Profits: 4000,
    },
    {
      name: "Mon",
      Profits: 3000,
    },
    {
      name: "Tue",
      Profits: 2000,
    },
    {
      name: "Wed",
      Profits: 2780,
    },
    {
      name: "Thu",
      Profits: 1890,
    },
    {
      name: "Fri",
      Profits: 2390,
    },
    {
      name: "Sat",
      Profits: 3490,
    },
  ],
};

export const barChartBoxVisit = {
  title: "Visites",
  color: "#FF8042",
  dataKey: "Visites",
  chartData: [
    {
      name: "Sun",
      Visites: 4000,
    },
    {
      name: "Mon",
      Visites: 3000,
    },
    {
      name: "Tue",
      Visites: 2000,
    },
    {
      name: "Wed",
      Visites: 2780,
    },
    {
      name: "Thu",
      Visites: 1890,
    },
    {
      name: "Fri",
      Visites: 2390,
    },
    {
      name: "Sat",
      Visites: 3490,
    },
  ],
};

export const userRows = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Hubbard",
    firstName: "Eula",
    email: "kewez@@gmail.com",
    phone: "0102030405",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Manning",
    firstName: "Stella",
    email: "comhuhmit@gmail.com",
    phone: "0102030405",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Greer",
    firstName: "Mary",
    email: "ujudokon@hottmail.com",
    phone: "0102030405",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Williamson",
    firstName: "Mildred",
    email: "tinhavabe@gmail.com",
    phone: "0102030405",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Gross",
    firstName: "Jose",
    email: "gobtagbes@yahoo.com",
    phone: "0102030405",
    createdAt: "01.02.2023",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Sharp",
    firstName: "Jeremy",
    email: "vulca.eder@mail.com",
    phone: "0102030405",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Lowe",
    firstName: "Christina",
    email: "reso.bilic@gmail.com",
    phone: "0102030405",
    createdAt: "01.02.2023",
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Dean",
    firstName: "Garrett",
    email: "codaic@mail.com",
    phone: "0102030405",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 9,
    img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Parsons",
    firstName: "Leah",
    email: "uzozor@gmail.com",
    phone: "0102030405",
    createdAt: "01.02.2023",
  },
  {
    id: 10,
    img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Reid",
    firstName: "Elnora",
    email: "tuhkabapu@gmail.com",
    phone: "0102030405",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 11,
    img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Dunn",
    firstName: "Gertrude",
    email: "gibo@gmail.com",
    phone: "0102030405",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 12,
    img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Williams",
    firstName: "Mark",
    email: "tic.harvey@hotmail.com",
    phone: "0102030405",
    createdAt: "01.02.2023",
  },
  {
    id: 13,
    img: "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Cruz",
    firstName: "Charlotte",
    email: "ceuc@gmail.com",
    phone: "0102030405",
    createdAt: "01.02.2023",
  },
  {
    id: 14,
    img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Harper",
    firstName: "Sara",
    email: "bafuv@hotmail.com",
    phone: "0102030405",
    createdAt: "01.02.2023",
  },
  {
    id: 15,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Griffin",
    firstName: "Eric",
    email: "ubi@gmail.com",
    phone: "0102030405",
    createdAt: "01.02.2023",
  },
];

export const products = [
  {
    id: 1,
    img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    title: "Playstation 5 Digital Edition",
    color: "Blanc",
    producer: "Sony",
    price: "250.99€",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 2,
    img: "https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png",
    title: "Dell Laptop KR211822",
    color: "Noir",
    producer: "Dell",
    price: "499.99€",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 3,
    img: "http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front",
    title: "Samsung TV 4K SmartTV",
    color: "Gris",
    producer: "Samsung",
    price: "999.49€",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 4,
    img: "https://raylo.imgix.net/iphone-14-blue.png",
    title: "Apple Iphone 14 Pro Max",
    color: "Blanc",
    producer: "Apple",
    price: "799.49€",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 5,
    img: "https://www.signify.com/b-dam/signify/en-aa/about/news/2020/20200903-movie-night-essentials-popcorn-ice-cream-and-the-new-philips-hue-play-gradient-lightstrip/packaging-lighstrip.png",
    title: "Philips Hue Play Gradient",
    color: "blanc",
    producer: "Philips",
    price: "39.99€",
    createdAt: "01.02.2023",
  },
  {
    id: 6,
    img: "https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png",
    title: "Logitech MX Master 3",
    color: "Noir",
    producer: "Logitech",
    price: "59.49€",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 7,
    img: "https://www.pngarts.com/files/7/Podcast-Mic-PNG-Picture.png",
    title: "Rode Podcast Microphone",
    color: "Gris",
    producer: "Rode",
    price: "119.49€",
    createdAt: "01.02.2023",
  },
  {
    id: 8,
    img: "https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks-500x500.png",
    title: "Toshiba Split AC 2",
    color: "Blanc",
    producer: "Toshiba",
    price: "899.99€",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 9,
    img: "https://img.productz.com/review_image/102489/preview_sony-kdl-50w800b-50-inch-hdtv-review-superb-picture-102489.png",
    title: "Sony Bravia KDL-47W805A",
    color: "Noir",
    producer: "Sony",
    price: "970.49€",
    createdAt: "01.02.2023",
  },
  {
    id: 10,
    img: "https://venturebeat.com/wp-content/uploads/2015/07/As_AO1-131_gray_nonglare_win10_03.png?fit=1338%2C1055&strip=all",
    title: "Acer Laptop 16 KL-4804",
    color: "Noir",
    producer: "Acer",
    price: "599.99€",
    createdAt: "01.02.2023",
    inStock: true,
  },
];

export const singleUser = {
  id: 1,
  title: "John Doe",
  img: "https://images.pexels.com/photos/17397364/pexels-photo-17397364.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  info: {
    Pseudo: "Johndoe99",
    Nom: "John Doe",
    Email: "johndoe@gmail.com",
    Téléphone: "0606060606",
    Status: "Verifié",
  },
  chart: {
    dataKeys: [
      { name: "visites", color: "#82ca9d" },
      { name: "clicks", color: "#8884d8" },
    ],
    data: [
      {
        name: "D",
        visites: 4000,
        clicks: 2400,
      },
      {
        name: "L",
        visites: 3000,
        clicks: 1398,
      },
      {
        name: "M",
        visites: 2000,
        clicks: 3800,
      },
      {
        name: "M",
        visites: 2780,
        clicks: 3908,
      },
      {
        name: "J",
        visites: 1890,
        clicks: 4800,
      },
      {
        name: "V",
        visites: 2390,
        clicks: 3800,
      },
      {
        name: "S",
        visites: 3490,
        clicks: 4300,
      },
    ],
  },
  activities: [
    {
      text: "John Doe a acheté Playstation 5 Digital Edition",
      time: "3 jours",
    },
    {
      text: "John Doe a ajouté 3 articles à sa liste de souhaits",
      time: "1 mois",
    },
    {
      text: "John Doe a acheté Sony Bravia KD-32w800",
      time: "2 semaines",
    },
    {
      text: "John Doe a évalué un produit",
      time: "1 mois",
    },
    {
      text: "John Doe a ajouté 1 articles à sa liste de souhaits",
      time: "1 mois",
    },
    {
      text: "John Doe a évalué un produit",
      time: "2 mois",
    },
  ],
};
export const singleProduct = {
  id: 1,
  title: "Playstation 5 Digital Edition",
  img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
  info: {
    ProductId: "Ps5SDF1156d",
    Couleur: "Blanc",
    Prix: "250.99 €",
    Fournisseur: "Sony",
    Provenance: "Japon",
  },
  chart: {
    dataKeys: [
      { name: "visites", color: "#82ca9d" },
      { name: "commandes", color: "#8884d8" },
    ],
    data: [
      {
        name: "D",
        visites: 4000,
        commandes: 2400,
      },
      {
        name: "L",
        visites: 3000,
        commandes: 1398,
      },
      {
        name: "M",
        visites: 2000,
        commandes: 3800,
      },
      {
        name: "M",
        visites: 2780,
        commandes: 3908,
      },
      {
        name: "J",
        visites: 1890,
        commandes: 4800,
      },
      {
        name: "V",
        visites: 2390,
        commandes: 3800,
      },
      {
        name: "S",
        visites: 3490,
        commandes: 4300,
      },
    ],
  },
  activities: [
    {
      text: "John Doe a acheté Playstation 5 Digital Edition",
      time: "3 jours",
    },
    {
      text: "Jane Doe a ajouté Playstation 5 Digital Edition à sa liste de souhaits",
      time: "1 semaine",
    },
    {
      text: "Mike Doe a acheté Playstation 5 Digital Edition",
      time: "2 semaines",
    },
    {
      text: "Anna Doe a évalué le produit",
      time: "1 mois",
    },
    {
      text: "Michael Doe a ajouté Playstation 5 Digital Edition à sa liste de souhaits",
      time: "1 mois",
    },
    {
      text: "Helen Doe a noté le produit",
      time: "2 mois",
    },
  ],
};
