import { test } from 'node:test';
import assert from 'node:assert/strict';
import { total } from './app.mjs';
test('total adds values', () => assert.equal(total([2, 3]), 5));
