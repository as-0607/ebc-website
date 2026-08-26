import {credibility} from "../../data/ebc";

export default function CredibilityStrip() {
  return (
    <section className="border-b border-[#E6E7E8] bg-white">
      <div className="mx-auto w-full max-w-[88rem] px-5 md:px-10 xl:px-14">
        <ul className="grid grid-cols-2 gap-px bg-[#E6E7E8] md:grid-cols-5">
          {credibility.map(([label, value]) => (
            <li key={label} className="bg-white py-8 pl-5">
              <p className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase leading-[1.2] tracking-[0.22em] text-[#A4A9AE]">
                {label}
              </p>

              <p className="mt-2 font-['Archivo'] text-base font-bold leading-tight tracking-[-0.025em] text-[#2F3640] lg:text-lg">
                {value}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
