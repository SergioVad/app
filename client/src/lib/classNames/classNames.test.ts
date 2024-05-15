import { classNames } from './classNames';
import '@testing-library/jest-dom';
describe('classNames', () => {
    test('main class', () => {
        expect(classNames('classValue')).toBe('classValue');
    });
    test('main class and one additional', () => {
        expect(classNames('classValue', {}, ['test_1'])).toBe(
            'classValue test_1',
        );
    });
    test('main class and  two additional', () => {
        expect(classNames('classValue', {}, ['test_1', 'test_2'])).toBe(
            'classValue test_1 test_2',
        );
    });
    test('main class and two mods true', () => {
        expect(classNames('classValue', { mods_1: true, mods_2: true })).toBe(
            'classValue mods_1 mods_2',
        );
    });
    test('main class and one mods true, one false', () => {
        expect(classNames('classValue', { mods_1: true, mods_2: false })).toBe(
            'classValue mods_1',
        );
    });
    test('main class and one mods true, one undefined', () => {
        expect(
            classNames('classValue', { mods_1: true, mods_2: undefined }),
        ).toBe('classValue mods_1');
    });
    test('main class and additional and mods', () => {
        expect(classNames('classValue', { mods_1: true }, ['additional'])).toBe(
            'classValue additional mods_1',
        );
    });
});
