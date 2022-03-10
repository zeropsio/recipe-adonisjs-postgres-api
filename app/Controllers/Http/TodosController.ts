import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TodosService from 'App/Services/TodosService'

export default class TodosController {
  public async findAll() {
    return TodosService.findAll()
  }

  public async findOne(ctx: HttpContextContract) {
    return TodosService.findOne(parseInt(ctx.request.param('id')))
  }

  public async create(ctx: HttpContextContract) {
    return TodosService.create(ctx.request.body())
  }

  public async update(ctx: HttpContextContract) {
    return TodosService.update(parseInt(ctx.request.param('id')), ctx.request.body())
  }

  public async remove(ctx: HttpContextContract) {
    return TodosService.remove(parseInt(ctx.request.param('id')))
  }
}
