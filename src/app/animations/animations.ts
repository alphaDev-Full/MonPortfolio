import {
  trigger,
  state,
  animate,
  style,
  transition,
} from '@angular/animations';

export const slideAnimation = [
  trigger('slideInHorizontal', [
    state('open', style({ transform: 'translateX(0)', opacity: 1 })),
    state('closed', style({ transform: 'translateX(-70%)', opacity: 0 })),

    transition('closed => open', [
      style({ transform: 'translateX(-20%)', opacity: 0 }),
      animate(
        '1000ms ease-out',
        style({ transform: 'translateX(0)', opacity: 1 })
      ),
    ]),

    transition('open => closed', [
      animate(
        '1000ms ease-in',
        style({ transform: 'translateX(-70%)', opacity: 0 })
      ),
    ]),
  ]),
];

export const slideAnimationLeftToRight = [
  trigger('slideInHorizontalLeft', [
    transition(':enter', [
      style({ transform: 'translateX(-30%)', opacity: 0 }),
      animate(
        '1500ms ease-out',
        style({ transform: 'translateX(0)', opacity: 1 })
      ),
    ]),

    transition(':leave', [
      animate(
        '1500ms ease-in',
        style({ transform: 'translateX(30%)', opacity: 0 })
      ),
    ]),
  ]),
];

export const slideAnimationBotomToTop = [
  trigger('slideInHorizontalTop', [
    transition(':enter', [
      style({ transform: 'translateY(50px)', opacity: 0 }),
      animate(
        '1500ms ease-out',
        style({ transform: 'translateY(0)', opacity: 1 })
      ),
    ]),

    transition(':leave', [
      animate(
        '1500ms ease-in',
        style({ transform: 'translateY(-50px)', opacity: 0 })
      ),
    ]),
  ]),
];

export const AnimationEducationCard = [
  trigger('slideAnimation', [
    // Quand on va vers la droite
    transition('void => left', [
      style({ transform: 'translateX(100%)', opacity: 0 }),
      animate('500ms ease', style({ transform: 'translateX(0)', opacity: 1 })),
    ]),
    // Quand on va vers la gauche
    transition('void => right', [
      style({ transform: 'translateX(-100%)', opacity: 0 }),
      animate('500ms ease', style({ transform: 'translateX(0)', opacity: 1 })),
    ]),
  ]),
];
