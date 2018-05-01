import { rollup } from 'rollup';

import url from '../';

process.chdir(__dirname);

describe('rollup-plugin-image', () => {
  it('use base64', () =>
    run('./fixtures/png.js', {}).then((bundle) => {
      expect(bundle.modules[1].code).toMatchSnapshot();
    }));
});

const DEFAULT_OPTIONS = {
  publicPath: '',
  emitFiles: true,
};

function run(input, options, experimentalCodeSplitting = false) {
  return rollup({
    input,
    plugins: [url(Object.assign({}, DEFAULT_OPTIONS, options))],
    experimentalCodeSplitting,
  });
}
