// src/components/three/ModelSwitcher.jsx

import { useRef } from "react";
import { PresentationControls } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import MacbookModel14 from "../models/Macbook-14";
import MacbookModel16 from "../models/Macbook-16";

const ANIMATION_DURATION = 0.8;
const OFFSET_DISTANCE = 15; // Increased to ensure it moves totally out of view

const fadeMeshes = (group, opacity, delay = 0) => {
  if (!group) return;

  group.traverse((child) => {
    if (child.isMesh && child.material) {
      child.material.transparent = true;

      gsap.to(child.material, {
        opacity,
        duration: ANIMATION_DURATION * 0.5,
        delay: delay,
      });
    }
  });
};

const moveGroup = (group, x) => {
  if (!group) return;

  gsap.to(group.position, {
    x,
    duration: ANIMATION_DURATION,
    ease: "power2.out",
  });
};

const ModelSwitcher = ({ scale, isMobile }) => {
  const smallMacbookRef = useRef();
  const largeMacbookRef = useRef();

  // 16-inch active based on initial scale prop
  const showLargeMacbook = scale >= 0.08;

  // Track if this is the initial render to prevent animating on mount
  const isInitialRender = useRef(true);

  useGSAP(() => {
    const small = smallMacbookRef.current;
    const large = largeMacbookRef.current;

    if (!small || !large) return;

    // Setup initial visibility/position without animation on first mount
    if (isInitialRender.current) {
      large.visible = showLargeMacbook;
      small.visible = !showLargeMacbook;
      isInitialRender.current = false;
      return;
    }

    if (showLargeMacbook) {
      // show large
      large.visible = true;
      
      // MacBook 16 selected: comes in from the RIGHT (+X)
      gsap.set(large.position, { x: OFFSET_DISTANCE });

      moveGroup(large, 0);
      // MacBook 14 leaves to the LEFT (-X)
      moveGroup(small, -OFFSET_DISTANCE);

      fadeMeshes(large, 1, 0); 
      // Fade out ONLY after it has moved out of view
      fadeMeshes(small, 0, ANIMATION_DURATION * 0.8);

      gsap.delayedCall(ANIMATION_DURATION, () => {
        small.visible = false;
      });
    } else {
      // show small
      small.visible = true;
      
      // MacBook 14 selected: comes in from the LEFT (-X)
      gsap.set(small.position, { x: -OFFSET_DISTANCE });

      moveGroup(small, 0);
      // MacBook 16 leaves to the RIGHT (+X)
      moveGroup(large, OFFSET_DISTANCE);

      fadeMeshes(small, 1, 0);
      // Fade out ONLY after it has moved out of view
      fadeMeshes(large, 0, ANIMATION_DURATION * 0.8);

      gsap.delayedCall(ANIMATION_DURATION, () => {
        large.visible = false;
      });
    }
  }, [showLargeMacbook]);

  const controlConfig = {
    snap: true,
    speed: 1,
    zoom: 0.65,
    azimuth: [-Infinity, Infinity],
    config: {
      mass: 1,
      tension: 170,
      friction: 26,
    },
  };

  return (
    <PresentationControls {...controlConfig}>
      
      {/* 16-inch model */}
      <group 
        ref={largeMacbookRef}
        position={[0, 0, 0]}
      >
        <MacbookModel16
          scale={isMobile ? 0.05 : 0.08}
        />
      </group>

      {/* 14-inch model */}
      <group 
        ref={smallMacbookRef}
        position={[0, 0, 0]}
      >
        <MacbookModel14
          scale={isMobile ? 0.03 : 0.06}
        />
      </group>

    </PresentationControls>
  );
};

export default ModelSwitcher;