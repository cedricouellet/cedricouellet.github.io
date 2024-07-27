export interface IEntity {
    id: string;
}

export interface IRepository<TEntity extends IEntity> {
    getById(id: string) : TEntity | undefined;
    getAll() : TEntity[];
    add(entity: TEntity) : void;
    update(entity: TEntity) : void;
    remove(id: string): void;
}