"use client";

import Lottie from "lottie-react";

// Uçan kalpler animasyonu
const floatingHeartsData = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 90,
  w: 200,
  h: 200,
  nm: "Floating Hearts",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Heart 1",
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: 0, s: [100] }, { t: 45, s: [100] }, { t: 90, s: [0] }] },
        r: { a: 1, k: [{ t: 0, s: [-15] }, { t: 90, s: [15] }] },
        p: { a: 1, k: [{ t: 0, s: [100, 180, 0] }, { t: 90, s: [80, 20, 0] }] },
        s: { a: 1, k: [{ t: 0, s: [0, 0, 100] }, { t: 15, s: [100, 100, 100] }, { t: 75, s: [100, 100, 100] }, { t: 90, s: [50, 50, 100] }] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "sh",
              d: 1,
              ks: {
                k: {
                  c: true,
                  v: [[0, -8], [-12, -20], [-24, -8], [-24, 8], [0, 24], [24, 8], [24, -8], [12, -20]],
                  i: [[0, 0], [-6, 0], [0, -8], [0, 8], [-12, 0], [0, 8], [0, -8], [6, 0]],
                  o: [[6, 0], [0, -8], [0, 8], [12, 0], [0, 8], [0, -8], [-6, 0], [0, 0]]
                }
              }
            },
            { ty: "fl", c: { k: [0.020, 0.588, 0.412, 1] }, o: { k: 100 } },
            { ty: "tr", p: { k: [0, 0] }, s: { k: [100, 100] } }
          ]
        }
      ]
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Heart 2",
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: 15, s: [0] }, { t: 30, s: [100] }, { t: 75, s: [100] }, { t: 90, s: [0] }] },
        r: { a: 1, k: [{ t: 15, s: [10] }, { t: 90, s: [-10] }] },
        p: { a: 1, k: [{ t: 15, s: [140, 180, 0] }, { t: 90, s: [160, 30, 0] }] },
        s: { a: 1, k: [{ t: 15, s: [0, 0, 100] }, { t: 30, s: [80, 80, 100] }, { t: 75, s: [80, 80, 100] }, { t: 90, s: [40, 40, 100] }] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "sh",
              d: 1,
              ks: {
                k: {
                  c: true,
                  v: [[0, -8], [-12, -20], [-24, -8], [-24, 8], [0, 24], [24, 8], [24, -8], [12, -20]],
                  i: [[0, 0], [-6, 0], [0, -8], [0, 8], [-12, 0], [0, 8], [0, -8], [6, 0]],
                  o: [[6, 0], [0, -8], [0, 8], [12, 0], [0, 8], [0, -8], [-6, 0], [0, 0]]
                }
              }
            },
            { ty: "fl", c: { k: [0.063, 0.725, 0.506, 1] }, o: { k: 100 } },
            { ty: "tr", p: { k: [0, 0] }, s: { k: [100, 100] } }
          ]
        }
      ]
    },
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: "Heart 3",
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: 30, s: [0] }, { t: 45, s: [100] }, { t: 80, s: [100] }, { t: 90, s: [0] }] },
        r: { a: 1, k: [{ t: 30, s: [-5] }, { t: 90, s: [20] }] },
        p: { a: 1, k: [{ t: 30, s: [60, 180, 0] }, { t: 90, s: [40, 40, 0] }] },
        s: { a: 1, k: [{ t: 30, s: [0, 0, 100] }, { t: 45, s: [60, 60, 100] }, { t: 80, s: [60, 60, 100] }, { t: 90, s: [30, 30, 100] }] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "sh",
              d: 1,
              ks: {
                k: {
                  c: true,
                  v: [[0, -8], [-12, -20], [-24, -8], [-24, 8], [0, 24], [24, 8], [24, -8], [12, -20]],
                  i: [[0, 0], [-6, 0], [0, -8], [0, 8], [-12, 0], [0, 8], [0, -8], [6, 0]],
                  o: [[6, 0], [0, -8], [0, 8], [12, 0], [0, 8], [0, -8], [-6, 0], [0, 0]]
                }
              }
            },
            { ty: "fl", c: { k: [0.204, 0.827, 0.600, 1] }, o: { k: 100 } },
            { ty: "tr", p: { k: [0, 0] }, s: { k: [100, 100] } }
          ]
        }
      ]
    }
  ]
};

// Titreyen yıldız animasyonu
const twinklingStarData = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 60,
  w: 100,
  h: 100,
  nm: "Twinkling Star",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Star",
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: 0, s: [100] }, { t: 15, s: [40] }, { t: 30, s: [100] }, { t: 45, s: [60] }, { t: 60, s: [100] }] },
        r: { a: 1, k: [{ t: 0, s: [0] }, { t: 60, s: [360] }] },
        p: { k: [50, 50, 0] },
        s: { a: 1, k: [{ t: 0, s: [100, 100, 100] }, { t: 15, s: [80, 80, 100] }, { t: 30, s: [110, 110, 100] }, { t: 45, s: [90, 90, 100] }, { t: 60, s: [100, 100, 100] }] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "sr",
              sy: 1,
              d: 1,
              pt: { k: 4 },
              p: { k: [0, 0] },
              r: { k: 0 },
              ir: { k: 8 },
              is: { k: 0 },
              or: { k: 20 },
              os: { k: 0 }
            },
            { ty: "fl", c: { k: [0.204, 0.827, 0.600, 1] }, o: { k: 100 } },
            { ty: "tr", p: { k: [0, 0] }, s: { k: [100, 100] } }
          ]
        }
      ]
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Glow",
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: 0, s: [30] }, { t: 30, s: [60] }, { t: 60, s: [30] }] },
        p: { k: [50, 50, 0] },
        s: { a: 1, k: [{ t: 0, s: [150, 150, 100] }, { t: 30, s: [200, 200, 100] }, { t: 60, s: [150, 150, 100] }] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            { ty: "el", p: { k: [0, 0] }, s: { k: [30, 30] } },
            { ty: "fl", c: { k: [0.653, 0.906, 0.718, 1] }, o: { k: 100 } },
            { ty: "tr", p: { k: [0, 0] }, s: { k: [100, 100] } }
          ]
        }
      ]
    }
  ]
};

// Mini çiçek açma animasyonu
const miniFlowerData = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 90,
  w: 100,
  h: 100,
  nm: "Mini Flower",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Center",
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: 60, s: [0] }, { t: 75, s: [100] }] },
        p: { k: [50, 50, 0] },
        s: { a: 1, k: [{ t: 60, s: [0, 0, 100] }, { t: 90, s: [100, 100, 100] }] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            { ty: "el", p: { k: [0, 0] }, s: { k: [16, 16] } },
            { ty: "fl", c: { k: [0.020, 0.588, 0.412, 1] }, o: { k: 100 } },
            { ty: "tr", p: { k: [0, 0] }, s: { k: [100, 100] } }
          ]
        }
      ]
    },
    ...Array.from({ length: 8 }, (_, i) => ({
      ddd: 0,
      ind: i + 2,
      ty: 4,
      nm: `Petal ${i + 1}`,
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: i * 5, s: [0] }, { t: i * 5 + 15, s: [100] }] },
        r: { k: i * 45 },
        p: { k: [50, 50, 0] },
        s: { a: 1, k: [{ t: i * 5, s: [0, 0, 100] }, { t: i * 5 + 20, s: [100, 100, 100] }] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            { ty: "el", p: { k: [0, -20] }, s: { k: [14, 24] } },
            { ty: "fl", c: { k: [0.653, 0.906, 0.718, 1] }, o: { k: 100 } },
            { ty: "tr", p: { k: [0, 0] }, s: { k: [100, 100] } }
          ]
        }
      ]
    }))
  ]
};

interface LottieAnimationProps {
  type: "hearts" | "star" | "flower";
  className?: string;
  loop?: boolean;
}

export function LottieAnimation({ type, className = "", loop = true }: LottieAnimationProps) {
  const animationData = {
    hearts: floatingHeartsData,
    star: twinklingStarData,
    flower: miniFlowerData,
  }[type];

  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      className={className}
    />
  );
}

// Floating Hearts Background Component
export function FloatingHeartsBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${10 + i * 15}%`,
            top: `${60 + (i % 3) * 15}%`,
            opacity: 0.4,
            animationDelay: `${i * 2}s`,
          }}
        >
          <LottieAnimation type="hearts" className="w-24 h-24" />
        </div>
      ))}
    </div>
  );
}

// Twinkling Stars Component
export function TwinklingStars() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${5 + i * 12}%`,
            top: `${10 + (i % 4) * 20}%`,
            opacity: 0.6,
          }}
        >
          <LottieAnimation type="star" className="w-8 h-8" />
        </div>
      ))}
    </div>
  );
}

export default LottieAnimation;
