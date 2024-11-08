import { Injectable } from '@nestjs/common';
import {
  apiSalesOrderSrv,
  SalesOrder,
} from '../../services/API_SALES_ORDER_SRV';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SalesOrdersService {
  constructor(private configService: ConfigService) {}

  async getAllSalesOrders(): Promise<SalesOrder[]> {
    const { salesOrderApi } = apiSalesOrderSrv();
    return await salesOrderApi
      .requestBuilder()
      .getAll()
      .top(5)
      .addCustomHeaders({ APIKey: this.configService.get<string>('API_KEY') })
      .execute({
        destinationName: this.configService.get<string>('DESTINATION_NAME'),
      });
  }

  async getSalesOrdersItem(id: string): Promise<SalesOrder> {
    const { salesOrderApi } = apiSalesOrderSrv();
    return await salesOrderApi
      .requestBuilder()
      .getByKey(id)
      .addCustomHeaders({ APIKey: this.configService.get<string>('API_KEY') })
      .execute({
        destinationName: this.configService.get<string>('DESTINATION_NAME'),
      });
  }
}
