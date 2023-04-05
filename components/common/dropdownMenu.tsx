import React, { useEffect, useRef, useState } from 'react'

interface DropdownMenuProps {
  title: string
  children: React.ReactNode
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !(menuRef.current as Node).contains(e.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  })

  return (
    <>
      <style jsx global>
        {`
          :root {
            --secondary-bg: black;
            --primary-text-color: #555;
            --secondary-text-color: #cecece;
            --border-radius: 8px;
            --speed: 500ms;
          }

          .dropdown-menu {
            position: absolute;
            top: 30px;
            left: -20px;
            background-color: black;
            border-radius: var(--border-radius);
            padding: 10px 20px;
          }

          .dropdown-menu::before {
            content: '';
            position: absolute;
            top: -5px;
            left: 18px;
            height: 20px;
            width: 20px;
            background: var(--secondary-bg);
            transform: rotate(45deg);
          }

          .dropdown-menu.active {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
            transition: var(--speed) ease;
          }

          .dropdown-menu.inactive {
            opacity: 0;
            visibility: hidden;
            transform: translateY(-20px);
            transition: var(--speed) ease;
          }

          .dropdownItem {
            display: flex;
            margin: 10px auto;
          }

          .dropdownItem a {
            max-width: 100px;
            margin-left: 10px;
            transition: var(--speed);
          }
        `}
      </style>
      <div className="menu-container relative z-[100]" ref={menuRef}>
        <div
          className="cursor-pointer uppercase"
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        >
          {title}
        </div>

        <div className={`dropdown-menu ${isOpen ? 'active' : 'inactive'} bg-black`}>{children}</div>
      </div>
    </>
  )
}

export default DropdownMenu
