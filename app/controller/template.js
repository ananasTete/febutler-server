'use strict';

const { Controller } = require('egg');
const mongo = require('../utils/mongo');

class TemplateController extends Controller {
  // 获取项目或组件模板
  async index() {
    const { ctx } = this;
    ctx.body = await mongo().query('template');
  }
  async abc() {
    const { ctx } = this;
    ctx.body = '1234';
  }
}

module.exports = TemplateController;
