module.exports = {
    'unaryOp': {
        '+1': 1,
        '-1': -1,
        '--1': 1,
        '---1': -1,
        '+"A"': 'A',
        '+++"A"': 'A',
        '+++{"A"}': 'A',
        '++-+"A"': '#VALUE!',
        '-"A"': '#VALUE!',
        '+++{1,2,3}': 1,
    },
};
