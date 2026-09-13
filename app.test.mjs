import { test } from 'node:test';
import assert from 'node:assert/strict';
import { double, total } from './app.mjs';

test('total adds values', () => assert.equal(total([2, 3]), 5));

test('double returns twice a positive number', () => assert.equal(double(4), 8));
test('double returns twice a negative number', () => assert.equal(double(-3), -6));
test('double preserves zero', () => assert.equal(double(0), 0));
