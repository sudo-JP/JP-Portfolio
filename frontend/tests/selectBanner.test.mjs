import assert from 'node:assert/strict';
import test from 'node:test';
import { selectBanner } from '../src/components/Hero/selectBanner.ts';

const daytime = ['cloud', 'beach'];
const nighttime = ['window', 'buildings'];

test('selects both daytime banners from 05:00 through 16:59', () => {
  assert.equal(selectBanner(5, 0.1, daytime, nighttime), 'cloud');
  assert.equal(selectBanner(16, 0.9, daytime, nighttime), 'beach');
});

test('selects both nighttime banners outside daytime hours', () => {
  assert.equal(selectBanner(4, 0.1, daytime, nighttime), 'window');
  assert.equal(selectBanner(17, 0.9, daytime, nighttime), 'buildings');
  assert.equal(selectBanner(23, 0.1, daytime, nighttime), 'window');
  assert.equal(selectBanner(0, 0.9, daytime, nighttime), 'buildings');
});
