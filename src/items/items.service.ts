import { Injectable, Get } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from './items.entity';

@Injectable()
export class ItemsService {

    constructor(
        @InjectRepository(Item)
        private itemRepository: Repository<Item>
    ) { }

    async findAll(): Promise<Item[]> {
        return await this.itemRepository.find();
    }

    async findOne(id: Number): Promise<Item> {
        return await this.itemRepository.findOne({ where: { id: id } })
    }

    async create(item: Item): Promise<Item> {
        return await this.itemRepository.save(item);
    }

    async update(item: Item): Promise<UpdateResult> {
        return await this.itemRepository.update(item.id, item);
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.itemRepository.delete(id);
    }

}