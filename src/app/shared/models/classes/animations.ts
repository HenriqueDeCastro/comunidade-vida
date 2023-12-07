import {
  style,
  animate,
  animation,
} from "@angular/animations";

// =========================
// Fade
// =========================
export const fadeIn = animation([
  style({ opacity: 0 }),
  animate('{{time}}', style({ opacity: 1 }))
]);

export const fadeOut = animation([
  animate('{{time}}', style({ opacity: 0 }))
]);

// =========================
// Scale
// =========================
export const scaleIn = animation([
  style({ opacity: 0, transform: "scale(0.5)" }),
  animate(
    "{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)",
    style({ opacity: 1, transform: "scale(1)" })
  )
]);

export const scaleOut = animation([
  animate(
    "{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)",
    style({ opacity: 0, transform: "scale(0.5)" })
  )
]);

// =========================
// Slide
// =========================
export const slideUp = animation([
  style({ opacity: 0, transform: 'translateY(100%)' }),
  animate('{{time}}', style({ opacity: 1, transform: 'translateY(0)' }))
]);

export const fadeLeft = animation([
  style({ opacity: 0, transform: 'translateX(100%)' }),
  animate('{{time}}', style({ opacity: 1, transform: 'translateX(0)' }))
]);
