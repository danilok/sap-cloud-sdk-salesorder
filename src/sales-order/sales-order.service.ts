import { Injectable } from '@nestjs/common';
import {
  apiSalesOrderSrv,
  SalesOrder,
} from '../../services/API_SALES_ORDER_SRV';

@Injectable()
export class SalesOrdersService {
  async getAllSalesOrders(): Promise<SalesOrder[]> {
    const { salesOrderApi } = apiSalesOrderSrv();
    return await salesOrderApi.requestBuilder().getAll().top(5).execute({
      destinationName: 'MockServer',
    });
  }

  async getSalesOrdersItem(id: string): Promise<SalesOrder> {
    const { salesOrderApi } = apiSalesOrderSrv();
    return await salesOrderApi.requestBuilder().getByKey(id).execute({
      destinationName: 'MockServer',
    });
  }
}
