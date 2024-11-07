import { Controller, Get, HttpException, Param } from '@nestjs/common';
import { SalesOrdersService } from './sales-order.service';
import { SalesOrder } from 'services/API_SALES_ORDER_SRV';

@Controller('sales-order')
export class SalesOrderController {
  constructor(private salesOrderService: SalesOrdersService) {}

  @Get()
  async getSalesOrders(): Promise<SalesOrder[]> {
    return await this.salesOrderService.getAllSalesOrders().catch((error) => {
      throw new HttpException(
        `Failed to get sales orders - ${error.message}`,
        500,
      );
    });
  }

  @Get(':id')
  async getSalesOrderItem(@Param() params: any): Promise<SalesOrder> {
    console.log(params.id);
    return await this.salesOrderService
      .getSalesOrdersItem(params.id)
      .catch((error) => {
        throw new HttpException(
          `Failed to get sales order ${params.id} - ${error.message}`,
          500,
        );
      });
  }
}
