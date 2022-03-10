import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Todo extends BaseModel {
  public static table = 'todo'

  @column({ isPrimary: true })
  public id: number

  @column({
    prepare: (value: boolean) => !!value,
  })
  public completed: boolean

  @column()
  public text: string
}
