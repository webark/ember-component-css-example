import Controller from '@ember/controller';
import { compileTemplate } from '@ember/template-compilation';
import { styleNamespace } from 'ember-component-css-example/components/some-component.css';

function registerTemplateOnlyGlimmerComponent(moduleName, getTemplate) {
  define(moduleName, ['exports'], function (_exports) {
    Object.defineProperty(_exports, '__esModule', { value: true });
    _exports.default = getTemplate();
    return _exports;
  });
}

let templatesCount = 0;

function getZone(template) {
  const name = `test-zone-${templatesCount++}`;
  const moduleName = `ember-component-css-example/templates/components/${name}`;
  registerTemplateOnlyGlimmerComponent(moduleName, () => compileTemplate(template));
  return name;
}

export default class ApplicationController extends Controller {
  zone = getZone('<div class={{style-namespace runClass="' + styleNamespace + '"}}><a href="#">aaaaa</a></div>')
}
