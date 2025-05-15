import React from 'react'
import Marquee from 'react-fast-marquee';

const Marque:React.FC = () => {
  return (
    <div className="bg-banarasi-primary relative z-40 px-[4px] py-[3px] font-medium text-black  md:px-[8px] md:py-[20px] md:text-[18px] rotate-3">
      <Marquee autoFill={true}>
        <div className="ml-[32px] flex items-center justify-center gap-[32px] text-2xl text-white">
          <div className="aspect-square w-[8px] rounded-full bg-white" />
          <p>Modern Lehenga Available at Best Prices </p>
          <div className="aspect-square w-[8px] rounded-full bg-white" />
          <p>Pure Katan Silk Banarasi Lehenga </p>
          <div className="aspect-square w-[8px] rounded-full bg-white" />
          <p>Organza Banarasi Lehenga</p>
          <div className="aspect-square w-[8px] rounded-full bg-white" />
          <p>Georgette Banarasi Lehenga</p>
          <div className="aspect-square w-[8px] rounded-full bg-white" />
          <p>Tissue Banarasi Lehenga</p>
          <div className="aspect-square w-[8px] rounded-full bg-white" />
          <p>Jangla Banarasi Lehenga</p>
          <div className="aspect-square w-[8px] rounded-full bg-white" />
          <p>Tanchoi Banarasi Lehenga</p>
          <div className="aspect-square w-[8px] rounded-full bg-white" />
          <p>Shattir Banarasi Lehenga</p>
        </div>
      </Marquee>
    </div>
  )
}

export default Marque