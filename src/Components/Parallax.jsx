import './Parallax.css';

export default function Parallax() {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      <div className="snap-y absolute inset-0 w-full h-full overflow-y-scroll scroll-smooth sepia-20 contrast-[1.15] font-[Halisa_VF] tracking-tighter [--parallax:parallax_linear] no-scrollbar">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-full h-screen relative overflow-hidden snap-end grid place-content-center [view-timeline-name:--section${i + 1}] [view-timeline-axis:block]`}
          >
            <img
              src={`https://unsplash.it/1920/1920/?v=${i + 1}`}
              className="w-full h-full object-cover -z-10 absolute animate-[var(--parallax)] [animation-timeline:--section${i + 1}] [animation-range:entry_exit]"
              alt=""
            />
            <h2 className="text-[10vw] text-white mix-blend-exclusion">
              PayBuddy {i + 1}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
