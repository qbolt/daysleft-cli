import moment from 'moment';
import test from 'ava';
import m from '.';

test('string', t => {
	t.is(m(123), 'Expected a string, got number');
	t.is(m(moment().format('YYYY-MM-DD')), 0);
	t.is(m(moment().add(1, 'days').format('MM-DD-YYYY')), 1);
});

test('moment', t => {
	t.is(m(123), 'Expected a string, got number');
	t.is(m(moment()), 0);
	t.is(m(moment().add(1, 'days').format('MM-DD-YYYY')), 1);
});

test('empty', t => {
	t.is(m(), 'Expected a string, got nothing');
});
