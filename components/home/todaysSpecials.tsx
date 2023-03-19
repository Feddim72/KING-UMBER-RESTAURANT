import ItemMenu from './itemMenu'

const todayMenu = [
  {
    name: 'Appetizers',
    items: [
      {
        description: 'Chicken Barley Soup',
        price: 25,
        title: 'Linguine alla King',
      },
      {
        description:
          'Sweet caramelized mission figs served with creamy burrata and drizzled with a balsamic reduction',
        price: 19.66,
        title: 'Burrata with Fig Brûlée',
      },
      {
        description: 'Coconut crusted shrimp, pina colada dipping sauce and pineapple salsa',
        price: 20.95,
        title: 'Coconut Shrimp',
      },
      {
        description:
          'Maryland crabmeat and sweet corn specially seasoned, panko crusted, pan-seared and served with an orange dill sauce',
        price: 22,
        title: 'Crab Cakes',
      },
      {
        description: 'Long Island flower oysters served with lemon and cocktail sauce',
        price: 16,
        title: 'Oyster on the Half Shell',
      },
      {
        description:
          'Baked artichoke with pignoli nuts, capers, olives, garlic, olive oil and seasoned breadcrumbs',
        price: 19,
        title: 'Stuffed Artichoke',
      },
    ],
  },
  {
    name: 'Pasta',
    items: [
      {
        description:
          'Boneless beef short ribs braised and slow cooked in a fresh pomodoro sauce until flaky tender, served over homemade cavatelli with sweet peas and ricotta',
        price: 26.15,
        title: 'Cavatelli with Braised Short Rib',
      },
      {
        description:
          'Shrimp, broccoli rabe and New Zealand clams with garlic & oil, served over linguine',
        price: 27.5,
        title: 'Linguine alla King',
      },
    ],
  },
  {
    name: 'Main Course',
    items: [
      {
        description:
          'Breast of chicken filled with prosciutto, mozzarella, and provolone, served in a mushroom Marsala sauce, topped with mozzarella, served with risotto',
        price: 22.5,
        title: 'Chicken Valdostana',
      },
      {
        description:
          'Twin pork chops pan seared and prepared in a port wine demi glace with mushrooms, gorgonzola ravioli and crumbled gorgonzola',
        price: 20.2,
        title: 'Pork Lombardy',
      },
      {
        description:
          'Porterhouse steak grilled to perfection and served with a port wine demi-glace, glazed baby carrots, sautéed mushrooms and roasted potatoes',
        price: 18.25,
        title: 'Porterhouse Steak',
      },
      {
        description:
          'Half live lobster, filet of sole, scallops, shrimp, clams, mussels and rigatoni prepared scampi style with a touch of marinara',
        price: 26.47,
        title: 'Seafood Rigatoni',
      },
      {
        description:
          'Veal cutlet topped with mango, avocado, dried cranberries, tangerines, and arugula all tossed in an orange vinaigrette, served with risotto',
        price: 30,
        title: 'Veal Del Ray',
      },
    ],
  },
]

export default function TodaysSpecials() {
  return (
    <div className="text--shadow relative min-h-screen w-full">
      <div className="bg-todays-specials flex min-h-screen w-full flex-col items-center pt-12 pb-11 ">
        <div className="height-webkit-fill-available width-webkit-fill-available absolute left-0 -top-[1px] bg-blackA-transparent" />
        <h2 className="z-10 mb-6 text-5xl text-white">{`TODAY'S SPECIALS`}</h2>
        <div className="z-10 flex w-full max-w-7xl flex-row flex-wrap items-start justify-between tablet:justify-center">
          {todayMenu.map(({ name, items }, index) => (
            <div key={index} className="flex w-[380px] flex-col items-center justify-center p-4">
              <p className="text-[28px] font-medium leading-[1.4em] tracking-wide text-[#ff5269]">
                {name}
              </p>

              {items.map(({ description, price, title }, index) => (
                <ItemMenu key={index} description={description} price={price} title={title} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
