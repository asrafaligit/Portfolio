import { useEffect, useRef, useState } from 'react';
import { leadershipList } from '../data/portfolioData';

const clamp = (value, minimum, maximum) => Math.max(minimum, Math.min(maximum, value));

const JourneyCard = ({ item, index, progress, activeIndex, reducedMotion }) => {
  // Stacking deck calculation:
  // Each card is solid white and stacks cleanly on top of previous cards as user scrolls
  let translateY = 0;
  let scale = 1;
  let opacity = 1;
  const zIndex = 10 + index; // Every subsequent card lands on top of earlier cards

  if (reducedMotion) {
    // Accessible fallback: instant clean transition without large translation
    if (index === activeIndex) {
      opacity = 1;
      scale = 1;
      translateY = 0;
    } else if (index < activeIndex) {
      opacity = 0;
      translateY = -30;
    } else {
      opacity = 0;
      translateY = 30;
    }
  } else {
    if (index === 0) {
      // First card starts in center; tucks neatly under as newer cards stack on top
      if (progress > 0) {
        scale = Math.max(0.88, 1 - progress * 0.025);
        translateY = -progress * 6;
      }
    } else {
      if (progress < index - 1) {
        // Card has not arrived yet: hidden offscreen below
        translateY = 700;
        opacity = 0;
      } else if (progress <= index) {
        // Card is currently sliding UP into center position!
        const enterProgress = progress - (index - 1); // 0.0 -> 1.0
        // Smooth sine ease-out curve
        const eased = Math.sin((enterProgress * Math.PI) / 2);
        translateY = (1 - eased) * 620; // slides from 620px to 0px
        scale = 0.94 + eased * 0.06;
        opacity = Math.min(1, enterProgress * 3); // crisp, solid opacity
      } else {
        // Card has landed in center; newer cards will land on top of it
        const pastProgress = progress - index;
        scale = Math.max(0.88, 1 - pastProgress * 0.025);
        translateY = -pastProgress * 6;
      }
    }
  }

  const isCurrentActive = index === activeIndex;

  const style = {
    transform: `translate3d(-50%, calc(-50% + ${translateY}px), 0) scale(${scale})`,
    opacity,
    zIndex: isCurrentActive ? 50 : zIndex,
    visibility: opacity <= 0.01 ? 'hidden' : 'visible',
    pointerEvents: isCurrentActive ? 'auto' : 'none',
  };

  return (
    <article
      className={`beyond-card beyond-card-${item.motif} ${isCurrentActive ? 'beyond-card-active' : ''}`}
      style={style}
      aria-hidden={!isCurrentActive}
    >
      <div className="beyond-card-topline">
        <span className="beyond-card-number">
          {String(index + 1).padStart(2, '0')}{' '}
          <i>/ {String(leadershipList.length).padStart(2, '0')}</i>
        </span>
        <span className="beyond-card-category">{item.category}</span>
      </div>
      <div className="beyond-card-body">
        <div className="beyond-card-copy">
          <span className="beyond-card-kicker">
            CHAPTER {String(index + 1).padStart(2, '0')}
          </span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <div className="beyond-card-meta">
            {(item.tools || item.areas || [item.label]).filter(Boolean).map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          {item.link && (
            <a href={item.link} className="beyond-card-link">
              Explore projects <span aria-hidden="true">&#8599;</span>
            </a>
          )}
        </div>
        <div className="beyond-card-motif" aria-hidden="true">
          <span />
        </div>
      </div>
    </article>
  );
};

const Leadership = () => {
  const stageRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => setReducedMotion(motionQuery.matches);
    updateMotion();
    motionQuery.addEventListener?.('change', updateMotion);

    let frameId = 0;
    const updateProgress = () => {
      frameId = 0;
      if (!stageRef.current) return;
      const stage = stageRef.current;
      const stageRect = stage.getBoundingClientRect();
      const scrollDistance = Math.max(stage.offsetHeight - window.innerHeight, 1);
      const scrolled = -stageRect.top;
      const nextProgress = (scrolled / scrollDistance) * (leadershipList.length - 1);
      setProgress(clamp(nextProgress, 0, leadershipList.length - 1));
    };

    const handleScroll = () => {
      if (document.hidden) {
        updateProgress();
        return;
      }
      if (!frameId) frameId = window.requestAnimationFrame(updateProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    updateProgress();

    return () => {
      motionQuery.removeEventListener?.('change', updateMotion);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  // Current active chapter updates when card is mostly centered
  const activeIndex = Math.min(
    leadershipList.length - 1,
    Math.max(0, Math.floor(progress + 0.35))
  );

  return (
    <section
      id="beyond-code"
      className={`beyond-code-section ${reducedMotion ? 'beyond-code-reduced' : ''}`}
    >
      <div className="beyond-code-inner">
        <header data-aos="fade-up" className="beyond-code-header">
          <span className="beyond-code-eyebrow">MY JOURNEY</span>
          <h2>Beyond Code</h2>
          <p>
            A look at the things I build, explore, and keep learning beyond the code itself.
          </p>
        </header>

        <div ref={stageRef} className="beyond-stack-stage">
          <div className="beyond-stack-sticky">
            <div
              className="beyond-progress"
              aria-label={`Journey progress ${activeIndex + 1} of ${leadershipList.length}`}
            >
              <span>{String(activeIndex + 1).padStart(2, '0')}</span>
              <i>/</i>
              <span>{String(leadershipList.length).padStart(2, '0')}</span>
              <span className="beyond-progress-label">JOURNEY</span>
            </div>

            <div className="beyond-card-stack">
              {leadershipList.map((item, index) => (
                <JourneyCard
                  key={item.title}
                  item={item}
                  index={index}
                  progress={progress}
                  activeIndex={activeIndex}
                  reducedMotion={reducedMotion}
                />
              ))}
            </div>

            <div className="beyond-scroll-cue" aria-hidden="true">
              <span /> SCROLL TO EXPLORE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
