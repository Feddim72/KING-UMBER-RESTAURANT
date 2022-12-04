interface ItemMenuProps {
  price: number;
  title: string;
  description: string;
}
export default function ItemMenu({ price, title, description }: ItemMenuProps) {
  return (
    <div className="w-full flex flex-row justify-between my-3">
      <div className="pr-3 flex flex-col justify-start items-start text-gray-300">
        <p className="text-[26px] font-medium leading-[1.4em] tracking-wide mb-1">
          {title}
        </p>
        <p className="text-[20px]">{description}</p>
      </div>
      <p className="text-lg">${price}</p>
    </div>
  );
}

// const removeActiveLink = (isMobile?: boolean) => {
//   const itemsLink = document.querySelectorAll(`${isMobile ? '.nav__linkMobile' : '.nav__link'}`)
//   Array.from(itemsLink).forEach((item) => {
//     item.classList.remove(`${isMobile ? '--activeMobile' : '--active'}`)
//   })
// }

// const targetNavLink = (
//   e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
//   isMobile?: boolean,
// ) => {
//   isMobile ? removeActiveLink(true) : removeActiveLink()
//   isMobile
//     ? e.currentTarget.classList.toggle('--activeMobile')
//     : e.currentTarget.classList.toggle('--active')
// }
