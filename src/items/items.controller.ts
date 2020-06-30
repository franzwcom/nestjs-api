import { Get, Post, Put, Delete, Param, Controller, Body } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './item.interface';

@Controller('api/items')
export class ItemsController {

    constructor(private readonly itemsService: ItemsService) { }

    // http://localhost:4000/api/items
    @Get()
    index(): Promise<Item[]> {
        return this.itemsService.findAll();
    }

    // http://localhost:4000/api/items/1
    @Get(':id')
    findOne(@Param('id') id): Promise<any> {
        return this.itemsService.findOne(id);
    }

    // http://localhost:4000/api/items/create
    @Post('create')
    async create(@Body() item: Item): Promise<Item> {
        return this.itemsService.create(item);
    }

    // http://localhost:4000/api/items/1/update
    @Put(':id/update')
    async update(@Param('id') id, @Body() item: Item): Promise<any> {
        item.id = Number(id);
        return this.itemsService.update(item);
    }

    // http://localhost:4000/api/items/3/delete
    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
        return this.itemsService.delete(id);
    }
    
}