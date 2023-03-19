interface ItemMenuProps {
  price: number
  title: string
  description: string
}
export default function ItemMenu({ price, title, description }: ItemMenuProps) {
  return (
    <div className="my-3 flex w-full flex-row justify-between text-gray-300">
      <div className="flex flex-col items-start justify-start pr-3 ">
        <p className="mb-1 text-[26px] font-medium leading-[1.4em] tracking-wide">{title}</p>
        <p className="text-[20px]">{description}</p>
      </div>
      <p className="text-lg">${price}</p>
    </div>
  )
}
