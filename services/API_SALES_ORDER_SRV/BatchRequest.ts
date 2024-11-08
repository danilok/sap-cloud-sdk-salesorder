/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeleteRequestBuilder,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  ODataBatchRequestBuilder,
  UpdateRequestBuilder,
  OperationRequestBuilder,
  BatchChangeSet
} from '@sap-cloud-sdk/odata-v2';
import { transformVariadicArgumentToArray } from '@sap-cloud-sdk/util';
import {
  SalesOrder,
  SalesOrderBillingPlan,
  SalesOrderBillingPlanItem,
  SalesOrderHeaderPartner,
  SalesOrderHeaderPrElement,
  SalesOrderItem,
  SalesOrderItemBillingPlan,
  SalesOrderItemPartner,
  SalesOrderItemPartnerAddress,
  SalesOrderItemPrElement,
  SalesOrderItemRelatedObject,
  SalesOrderItemText,
  SalesOrderItmPrecdgProcFlow,
  SalesOrderItmSubsqntProcFlow,
  SalesOrderPartnerAddress,
  SalesOrderPrecdgProcFlow,
  SalesOrderRelatedObject,
  SalesOrderScheduleLine,
  SalesOrderSubsqntProcFlow,
  SalesOrderText,
  SlsOrderItemBillingPlanItem,
  SlsOrdPaymentPlanItemDetails,
  RejectApprovalRequestParameters,
  ReleaseApprovalRequestParameters,
  FunctionResult
} from './index';

/**
 * Batch builder for operations supported on the Api Sales Order Srv.
 * @param requests The requests of the batch.
 * @returns A request builder for batch.
 */
export function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadApiSalesOrderSrvRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadApiSalesOrderSrvRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | ReadApiSalesOrderSrvRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
    | Array<
        | ReadApiSalesOrderSrvRequestBuilder<DeSerializersT>
        | BatchChangeSet<DeSerializersT>
      >,
  ...rest: Array<
    | ReadApiSalesOrderSrvRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT> {
  return new ODataBatchRequestBuilder(
    defaultApiSalesOrderSrvPath,
    transformVariadicArgumentToArray(first, rest)
  );
}

/**
 * Change set constructor consists of write operations supported on the Api Sales Order Srv.
 * @param requests The requests of the change set.
 * @returns A change set for batch.
 */
export function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<WriteApiSalesOrderSrvRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<WriteApiSalesOrderSrvRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | WriteApiSalesOrderSrvRequestBuilder<DeSerializersT>
    | Array<WriteApiSalesOrderSrvRequestBuilder<DeSerializersT>>,
  ...rest: Array<WriteApiSalesOrderSrvRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT> {
  return new BatchChangeSet(transformVariadicArgumentToArray(first, rest));
}

export const defaultApiSalesOrderSrvPath =
  '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
export type ReadApiSalesOrderSrvRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | GetAllRequestBuilder<SalesOrder<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<SalesOrderBillingPlan<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      SalesOrderBillingPlanItem<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      SalesOrderHeaderPartner<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      SalesOrderHeaderPrElement<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<SalesOrderItem<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      SalesOrderItemBillingPlan<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<SalesOrderItemPartner<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      SalesOrderItemPartnerAddress<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      SalesOrderItemPrElement<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      SalesOrderItemRelatedObject<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<SalesOrderItemText<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      SalesOrderItmPrecdgProcFlow<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      SalesOrderItmSubsqntProcFlow<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      SalesOrderPartnerAddress<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      SalesOrderPrecdgProcFlow<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      SalesOrderRelatedObject<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<SalesOrderScheduleLine<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      SalesOrderSubsqntProcFlow<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<SalesOrderText<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      SlsOrderItemBillingPlanItem<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      SlsOrdPaymentPlanItemDetails<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<SalesOrder<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      SalesOrderBillingPlan<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      SalesOrderBillingPlanItem<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      SalesOrderHeaderPartner<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      SalesOrderHeaderPrElement<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<SalesOrderItem<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      SalesOrderItemBillingPlan<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      SalesOrderItemPartner<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      SalesOrderItemPartnerAddress<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      SalesOrderItemPrElement<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      SalesOrderItemRelatedObject<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<SalesOrderItemText<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      SalesOrderItmPrecdgProcFlow<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      SalesOrderItmSubsqntProcFlow<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      SalesOrderPartnerAddress<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      SalesOrderPrecdgProcFlow<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      SalesOrderRelatedObject<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      SalesOrderScheduleLine<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      SalesOrderSubsqntProcFlow<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<SalesOrderText<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      SlsOrderItemBillingPlanItem<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      SlsOrdPaymentPlanItemDetails<DeSerializersT>,
      DeSerializersT
    >;
export type WriteApiSalesOrderSrvRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | CreateRequestBuilder<SalesOrder<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<SalesOrder<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<SalesOrder<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<SalesOrderBillingPlan<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<SalesOrderBillingPlan<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<SalesOrderBillingPlan<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      SalesOrderBillingPlanItem<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      SalesOrderBillingPlanItem<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      SalesOrderBillingPlanItem<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      SalesOrderHeaderPartner<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      SalesOrderHeaderPartner<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      SalesOrderHeaderPartner<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      SalesOrderHeaderPrElement<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      SalesOrderHeaderPrElement<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      SalesOrderHeaderPrElement<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<SalesOrderItem<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<SalesOrderItem<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<SalesOrderItem<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      SalesOrderItemBillingPlan<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      SalesOrderItemBillingPlan<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      SalesOrderItemBillingPlan<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<SalesOrderItemPartner<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<SalesOrderItemPartner<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<SalesOrderItemPartner<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      SalesOrderItemPartnerAddress<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      SalesOrderItemPartnerAddress<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      SalesOrderItemPartnerAddress<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      SalesOrderItemPrElement<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      SalesOrderItemPrElement<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      SalesOrderItemPrElement<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      SalesOrderItemRelatedObject<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      SalesOrderItemRelatedObject<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      SalesOrderItemRelatedObject<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<SalesOrderItemText<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<SalesOrderItemText<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<SalesOrderItemText<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      SalesOrderItmPrecdgProcFlow<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      SalesOrderItmPrecdgProcFlow<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      SalesOrderItmPrecdgProcFlow<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      SalesOrderItmSubsqntProcFlow<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      SalesOrderItmSubsqntProcFlow<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      SalesOrderItmSubsqntProcFlow<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      SalesOrderPartnerAddress<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      SalesOrderPartnerAddress<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      SalesOrderPartnerAddress<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      SalesOrderPrecdgProcFlow<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      SalesOrderPrecdgProcFlow<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      SalesOrderPrecdgProcFlow<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      SalesOrderRelatedObject<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      SalesOrderRelatedObject<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      SalesOrderRelatedObject<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<SalesOrderScheduleLine<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<SalesOrderScheduleLine<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<SalesOrderScheduleLine<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      SalesOrderSubsqntProcFlow<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      SalesOrderSubsqntProcFlow<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      SalesOrderSubsqntProcFlow<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<SalesOrderText<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<SalesOrderText<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<SalesOrderText<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      SlsOrderItemBillingPlanItem<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      SlsOrderItemBillingPlanItem<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      SlsOrderItemBillingPlanItem<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      SlsOrdPaymentPlanItemDetails<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      SlsOrdPaymentPlanItemDetails<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      SlsOrdPaymentPlanItemDetails<DeSerializersT>,
      DeSerializersT
    >
  | OperationRequestBuilder<
      DeSerializersT,
      RejectApprovalRequestParameters<DeSerializersT>,
      FunctionResult
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ReleaseApprovalRequestParameters<DeSerializersT>,
      FunctionResult
    >;
