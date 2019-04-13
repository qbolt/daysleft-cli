import moment from 'moment'
import test from 'ava'
import getDaysLeft from '.'

test('string', t => {
  t.is(getDaysLeft(123), 'Expected a string, got number')
  t.is(getDaysLeft(moment().format('YYYY-MM-DD')), 0)
  t.is(
    getDaysLeft(
      moment()
        .add(1, 'days')
        .format('MM-DD-YYYY')
    ),
    1
  )
})

test('moment', t => {
  t.is(getDaysLeft(123), 'Expected a string, got number')
  t.is(getDaysLeft(moment()), 0)
  t.is(
    getDaysLeft(
      moment()
        .add(1, 'days')
        .format('MM-DD-YYYY')
    ),
    1
  )
})

test('empty', t => {
  t.is(getDaysLeft(), 'Expected a string, got nothing')
})
