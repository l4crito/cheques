import { trigger, transition, style, animate, query, stagger, state } from '@angular/animations';
export const leftToRight = trigger('leftToRight', [
    transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('300ms', style({ transform: 'translateX(0)' })),
    ]),
    transition(':leave', [
        animate('200ms', style({ transform: 'translateX(-100%)' }))
    ])
]);
export const rightToLeft = trigger('rightToLeft', [
    transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('300ms', style({ transform: 'translateX(0)' })),
    ]),
    transition(':leave', [
        animate('200ms', style({ transform: 'translateX(100%)' }))
    ])
]);
export const nameAnimation = trigger('nameAnimation', [
    transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('300ms  ease-in-out', style({ transform: 'translateX(0)' })),
    ]),
    transition(':leave', [
        animate('300ms  ease-in-out', style({ transform: 'translateX(100%)' }))
    ])
]);
export const inOutAnimation = trigger('inOutAnimation', [
    state('left',
        style({ transform: 'translateX(-100%)' }),
    ),
    state('middle',
        style({ transform: 'translateX(0%)' }),
    ),
    state('right',
        style({ transform: 'translateX(100%)' }),
    ),
    transition('middle => right', animate('250ms  ease-in-out')),
    transition('left => middle', animate('250ms  ease-in-out')),
    transition('right => middle', animate('250ms  ease-in-out')),
    transition('middle => left', animate('250ms  ease-in-out')),
]);
export const playerAnimation = trigger('playerAnimation', [
    transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('200ms', style({ transform: 'translateY(0)' })),
    ]),

]);
export const zoomIn = trigger('zoomIn', [
    transition(':enter', [
        style({ transform: 'scale(0)' }),
        animate('300ms  ease-out', style({ transform: 'scale(1)' })),
    ]),
    transition(':leave', [
        animate('300ms  ease-out', style({ transform: 'scale(0)' }))
    ])
]);
export const zoomSlow = trigger('zoomSlow', [
    transition(':enter', [
        style({ transform: 'scale(0)' }),
        animate('400ms  ease-out', style({ transform: 'scale(1)' })),
    ]),
    transition(':leave', [
        animate('400ms  ease-out', style({ transform: 'scale(0)' }))
    ])
]);
export const rotateLeft = trigger('rotateLeft', [
    transition(':enter', [
        style({ transform: 'rotate(90deg)' }),
        animate('300ms', style({ transform: 'rotate(0deg)' })),
    ]),
    transition(':leave', [
        animate('200ms', style({ transform: 'rotate(90deg)' }))
    ])
]);
export const topToBottomAnimation = trigger('topToBottomAnimation', [
    transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('300ms', style({ transform: 'translateY(0)' })),
    ]),
    transition(':leave', [
        animate('300ms', style({ transform: 'translateY(100%)' }))
    ])
]);
export const bottomToTopAnimation = trigger('bottomToTopAnimation', [
    transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('300ms', style({ transform: 'translateY(0)' })),
    ]),
    transition(':leave', [
        animate('300ms', style({ transform: 'translateY(100%)' }))
    ])
]);
export const rightAnimation = trigger('rightAnimation', [
    transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('300ms', style({ transform: 'translateX(0)' })),
    ]),
]);

export const apearAnimation = trigger('apearAnimation', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
    ]),
    transition(':leave', [
        animate('200ms', style({ opacity: 0 }))
    ])
]);
export const leaveAnimation = trigger('leaveAnimation', [
    transition(':leave', [
        animate('300ms', style({ opacity: 0 }))
    ])
]);
export const stateUpdated = trigger('stateUpdated', [
    transition(':enter', [
        style({ opacity: 0, transform: 'scaleY(0) translateX(-100%)' }),
        animate('300ms', style({ opacity: 1 })),
    ]),
    transition(':leave', [
        animate('300ms', style({ opacity: 0, transform: 'scaleY(0) translateX(-100%)' }))
    ])
]);

export const leftRightNumeric = trigger('leftRightNumeric', [
    transition(':increment', [
        animate('100ms', style({
            transform: 'translateX(20%)',
        })),
        animate('100ms', style({
            transform: 'translateX(0)',
        })),
        animate('200ms'),
    ]),

    transition(':decrement', [
        animate('100ms', style({
            transform: 'translateX(-20%)',
        })),
        animate('100ms', style({
            transform: 'translateX(0)',
        })),
        animate('200ms'),
    ]),
]);
export const colorNumeric = trigger('colorNumeric', [
    transition(':increment', [
        animate('100ms', style({
            color: 'green',
        })),
        animate('100ms', style({
            color: 'black',
        })),
        animate('200ms'),
    ]),

    transition(':decrement', [
        animate('100ms', style({
            color: 'green',
        })),
        animate('100ms', style({
            color: 'black',
        })),
        animate('200ms'),
    ]),
]);

export const upDownNumeric = trigger('upDownNumeric', [
    transition(':increment', [
        animate('200ms', style({
            transform: 'translateY(-40%)',
            opacity: '0'

        })),
    ]),

    transition(':decrement', [
        animate('200ms', style({
            transform: 'translateY(40%)',
            opacity: '0'
        })),
    ]),
]);
