import Helper from '@ember/component/helper';
import podNames from 'ember-component-css/pod-names';

export default class StyleNamespace extends Helper {
  compute([componentName]) {
    return podNames[componentName];
  }
}
