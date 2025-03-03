/* eslint-disable import/no-cycle */
import { DA_ORIGIN } from './scripts.js';

let expMod;
const DA_EXP = '/nx/public/plugins/exp/exp.js';

async function toggleExp() {
  const exists = document.querySelector('#aem-sidekick-exp');

  // If it doesn't exist, let module side effects run
  if (!exists) {
    expMod = await import(`${DA_ORIGIN}${DA_EXP}`);
    return;
  }

  // Else, cache the module here and toggle it.
  if (!expMod) expMod = await import(`${DA_ORIGIN}${DA_EXP}`);
  expMod.default();
}

(async function sidekick() {
  const sk = document.querySelector('aem-sidekick');
  if (!sk) return;
  sk.addEventListener('custom:experimentation', toggleExp);
}());
