import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SalesOrderController } from './sales-order/sales-order.controller';
import { SalesOrdersService } from './sales-order/sales-order.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, SalesOrderController],
  providers: [AppService, SalesOrdersService],
})
export class AppModule {}
