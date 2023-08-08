import {style} from '@vanilla-extract/css';

const styles: string[] = [];

for (let i = 0; i < 10000; i++) {
    styles.push(style({
        position: 'absolute',
        bottom: Math.random(),
        left: 0,
        width: '100%',
        height: 'auto',
        background: 'red'
    }))
}

export default styles;
