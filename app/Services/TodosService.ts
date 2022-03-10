import Todo from 'App/Models/Todo'

class TodosService {
  public static findAll() {
    return Todo.query().orderBy('id', 'asc')
  }

  public static findOne(id: number) {
    return Todo.findOrFail(id)
  }

  public static async create(data: Partial<Todo>) {
    const newData = await Todo.create(data)
    return Todo.find(newData.id)
  }

  public static async update(id: number, data: Partial<Todo>) {
    const entity = await Todo.findOrFail(id)
    return Todo.updateOrCreate({ id: entity.id }, data)
  }

  public static async remove(id: number) {
    const entity = await Todo.findOrFail(id)
    return entity.delete().then(() => id)
  }
}

export default TodosService
