import * as BootstrapPlugins from '../../../js/src/index'
import $ from 'jquery'
import Boilerplate from './boilerplate'

/**
 * --------------------------------------------------------------------------
 * Conio Bootstrap Theme (v0.2.0): index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(() => {
  if (typeof jQuery === 'undefined') {
    throw new Error('Conio Bootstrap Theme\'s JavaScript requires jQuery. jQuery must be included before Conio Bootstrap Theme\'s JavaScript.')
  }

  const version = $.fn.jquery.split(' ')[0].split('.')
  const min = 3
  const max = 4
  if (version[0] < min || version[0] >= max) {
    throw new Error('Conio Bootstrap Theme\'s JavaScript requires at least jQuery v3.0.0 but less than v4.0.0')
  }
})(jQuery)

export default Object.assign(
  BootstrapPlugins,
  Boilerplate
)

