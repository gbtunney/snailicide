import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type ApiVersionKeySpecifier = ('displayName' | 'handle' | 'supported' | ApiVersionKeySpecifier)[];
export type ApiVersionFieldPolicy = {
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	handle?: FieldPolicy<any> | FieldReadFunction<any>,
	supported?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppliedGiftCardKeySpecifier = ('amountUsed' | 'amountUsedV2' | 'balance' | 'balanceV2' | 'id' | 'lastCharacters' | 'presentmentAmountUsed' | AppliedGiftCardKeySpecifier)[];
export type AppliedGiftCardFieldPolicy = {
	amountUsed?: FieldPolicy<any> | FieldReadFunction<any>,
	amountUsedV2?: FieldPolicy<any> | FieldReadFunction<any>,
	balance?: FieldPolicy<any> | FieldReadFunction<any>,
	balanceV2?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastCharacters?: FieldPolicy<any> | FieldReadFunction<any>,
	presentmentAmountUsed?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ArticleKeySpecifier = ('author' | 'authorV2' | 'blog' | 'comments' | 'content' | 'contentHtml' | 'excerpt' | 'excerptHtml' | 'handle' | 'id' | 'image' | 'metafield' | 'metafields' | 'onlineStoreUrl' | 'publishedAt' | 'seo' | 'tags' | 'title' | ArticleKeySpecifier)[];
export type ArticleFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	authorV2?: FieldPolicy<any> | FieldReadFunction<any>,
	blog?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	contentHtml?: FieldPolicy<any> | FieldReadFunction<any>,
	excerpt?: FieldPolicy<any> | FieldReadFunction<any>,
	excerptHtml?: FieldPolicy<any> | FieldReadFunction<any>,
	handle?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	metafield?: FieldPolicy<any> | FieldReadFunction<any>,
	metafields?: FieldPolicy<any> | FieldReadFunction<any>,
	onlineStoreUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ArticleAuthorKeySpecifier = ('bio' | 'email' | 'firstName' | 'lastName' | 'name' | ArticleAuthorKeySpecifier)[];
export type ArticleAuthorFieldPolicy = {
	bio?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ArticleConnectionKeySpecifier = ('edges' | 'pageInfo' | ArticleConnectionKeySpecifier)[];
export type ArticleConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ArticleEdgeKeySpecifier = ('cursor' | 'node' | ArticleEdgeKeySpecifier)[];
export type ArticleEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeKeySpecifier = ('key' | 'value' | AttributeKeySpecifier)[];
export type AttributeFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AutomaticDiscountApplicationKeySpecifier = ('allocationMethod' | 'targetSelection' | 'targetType' | 'title' | 'value' | AutomaticDiscountApplicationKeySpecifier)[];
export type AutomaticDiscountApplicationFieldPolicy = {
	allocationMethod?: FieldPolicy<any> | FieldReadFunction<any>,
	targetSelection?: FieldPolicy<any> | FieldReadFunction<any>,
	targetType?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AvailableShippingRatesKeySpecifier = ('ready' | 'shippingRates' | AvailableShippingRatesKeySpecifier)[];
export type AvailableShippingRatesFieldPolicy = {
	ready?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingRates?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BlogKeySpecifier = ('articleByHandle' | 'articles' | 'authors' | 'handle' | 'id' | 'metafield' | 'metafields' | 'onlineStoreUrl' | 'seo' | 'title' | BlogKeySpecifier)[];
export type BlogFieldPolicy = {
	articleByHandle?: FieldPolicy<any> | FieldReadFunction<any>,
	articles?: FieldPolicy<any> | FieldReadFunction<any>,
	authors?: FieldPolicy<any> | FieldReadFunction<any>,
	handle?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	metafield?: FieldPolicy<any> | FieldReadFunction<any>,
	metafields?: FieldPolicy<any> | FieldReadFunction<any>,
	onlineStoreUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BlogConnectionKeySpecifier = ('edges' | 'pageInfo' | BlogConnectionKeySpecifier)[];
export type BlogConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BlogEdgeKeySpecifier = ('cursor' | 'node' | BlogEdgeKeySpecifier)[];
export type BlogEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartKeySpecifier = ('attributes' | 'buyerIdentity' | 'checkoutUrl' | 'createdAt' | 'discountCodes' | 'estimatedCost' | 'id' | 'lines' | 'note' | 'updatedAt' | CartKeySpecifier)[];
export type CartFieldPolicy = {
	attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	buyerIdentity?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	discountCodes?: FieldPolicy<any> | FieldReadFunction<any>,
	estimatedCost?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lines?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartAttributesUpdatePayloadKeySpecifier = ('cart' | 'userErrors' | CartAttributesUpdatePayloadKeySpecifier)[];
export type CartAttributesUpdatePayloadFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartAutomaticDiscountAllocationKeySpecifier = ('discountedAmount' | 'title' | CartAutomaticDiscountAllocationKeySpecifier)[];
export type CartAutomaticDiscountAllocationFieldPolicy = {
	discountedAmount?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartBuyerIdentityKeySpecifier = ('countryCode' | 'customer' | 'email' | 'phone' | CartBuyerIdentityKeySpecifier)[];
export type CartBuyerIdentityFieldPolicy = {
	countryCode?: FieldPolicy<any> | FieldReadFunction<any>,
	customer?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartBuyerIdentityUpdatePayloadKeySpecifier = ('cart' | 'userErrors' | CartBuyerIdentityUpdatePayloadKeySpecifier)[];
export type CartBuyerIdentityUpdatePayloadFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartCodeDiscountAllocationKeySpecifier = ('code' | 'discountedAmount' | CartCodeDiscountAllocationKeySpecifier)[];
export type CartCodeDiscountAllocationFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	discountedAmount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartCreatePayloadKeySpecifier = ('cart' | 'userErrors' | CartCreatePayloadKeySpecifier)[];
export type CartCreatePayloadFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartDiscountAllocationKeySpecifier = ('discountedAmount' | CartDiscountAllocationKeySpecifier)[];
export type CartDiscountAllocationFieldPolicy = {
	discountedAmount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartDiscountCodeKeySpecifier = ('applicable' | 'code' | CartDiscountCodeKeySpecifier)[];
export type CartDiscountCodeFieldPolicy = {
	applicable?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartDiscountCodesUpdatePayloadKeySpecifier = ('cart' | 'userErrors' | CartDiscountCodesUpdatePayloadKeySpecifier)[];
export type CartDiscountCodesUpdatePayloadFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartEstimatedCostKeySpecifier = ('subtotalAmount' | 'totalAmount' | 'totalDutyAmount' | 'totalTaxAmount' | CartEstimatedCostKeySpecifier)[];
export type CartEstimatedCostFieldPolicy = {
	subtotalAmount?: FieldPolicy<any> | FieldReadFunction<any>,
	totalAmount?: FieldPolicy<any> | FieldReadFunction<any>,
	totalDutyAmount?: FieldPolicy<any> | FieldReadFunction<any>,
	totalTaxAmount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartLineKeySpecifier = ('attributes' | 'discountAllocations' | 'estimatedCost' | 'id' | 'merchandise' | 'quantity' | 'sellingPlanAllocation' | CartLineKeySpecifier)[];
export type CartLineFieldPolicy = {
	attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	discountAllocations?: FieldPolicy<any> | FieldReadFunction<any>,
	estimatedCost?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	merchandise?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	sellingPlanAllocation?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartLineConnectionKeySpecifier = ('edges' | 'pageInfo' | CartLineConnectionKeySpecifier)[];
export type CartLineConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartLineEdgeKeySpecifier = ('cursor' | 'node' | CartLineEdgeKeySpecifier)[];
export type CartLineEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartLineEstimatedCostKeySpecifier = ('subtotalAmount' | 'totalAmount' | CartLineEstimatedCostKeySpecifier)[];
export type CartLineEstimatedCostFieldPolicy = {
	subtotalAmount?: FieldPolicy<any> | FieldReadFunction<any>,
	totalAmount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartLinesAddPayloadKeySpecifier = ('cart' | 'userErrors' | CartLinesAddPayloadKeySpecifier)[];
export type CartLinesAddPayloadFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartLinesRemovePayloadKeySpecifier = ('cart' | 'userErrors' | CartLinesRemovePayloadKeySpecifier)[];
export type CartLinesRemovePayloadFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartLinesUpdatePayloadKeySpecifier = ('cart' | 'userErrors' | CartLinesUpdatePayloadKeySpecifier)[];
export type CartLinesUpdatePayloadFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartNoteUpdatePayloadKeySpecifier = ('cart' | 'userErrors' | CartNoteUpdatePayloadKeySpecifier)[];
export type CartNoteUpdatePayloadFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartUserErrorKeySpecifier = ('code' | 'field' | 'message' | CartUserErrorKeySpecifier)[];
export type CartUserErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutKeySpecifier = ('appliedGiftCards' | 'availableShippingRates' | 'buyerIdentity' | 'completedAt' | 'createdAt' | 'currencyCode' | 'customAttributes' | 'discountApplications' | 'email' | 'id' | 'lineItems' | 'lineItemsSubtotalPrice' | 'note' | 'order' | 'orderStatusUrl' | 'paymentDue' | 'paymentDueV2' | 'ready' | 'requiresShipping' | 'shippingAddress' | 'shippingDiscountAllocations' | 'shippingLine' | 'subtotalPrice' | 'subtotalPriceV2' | 'taxExempt' | 'taxesIncluded' | 'totalDuties' | 'totalPrice' | 'totalPriceV2' | 'totalTax' | 'totalTaxV2' | 'updatedAt' | 'webUrl' | CheckoutKeySpecifier)[];
export type CheckoutFieldPolicy = {
	appliedGiftCards?: FieldPolicy<any> | FieldReadFunction<any>,
	availableShippingRates?: FieldPolicy<any> | FieldReadFunction<any>,
	buyerIdentity?: FieldPolicy<any> | FieldReadFunction<any>,
	completedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	currencyCode?: FieldPolicy<any> | FieldReadFunction<any>,
	customAttributes?: FieldPolicy<any> | FieldReadFunction<any>,
	discountApplications?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lineItems?: FieldPolicy<any> | FieldReadFunction<any>,
	lineItemsSubtotalPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderStatusUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentDue?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentDueV2?: FieldPolicy<any> | FieldReadFunction<any>,
	ready?: FieldPolicy<any> | FieldReadFunction<any>,
	requiresShipping?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingDiscountAllocations?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingLine?: FieldPolicy<any> | FieldReadFunction<any>,
	subtotalPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	subtotalPriceV2?: FieldPolicy<any> | FieldReadFunction<any>,
	taxExempt?: FieldPolicy<any> | FieldReadFunction<any>,
	taxesIncluded?: FieldPolicy<any> | FieldReadFunction<any>,
	totalDuties?: FieldPolicy<any> | FieldReadFunction<any>,
	totalPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	totalPriceV2?: FieldPolicy<any> | FieldReadFunction<any>,
	totalTax?: FieldPolicy<any> | FieldReadFunction<any>,
	totalTaxV2?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	webUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutAttributesUpdatePayloadKeySpecifier = ('checkout' | 'checkoutUserErrors' | 'userErrors' | CheckoutAttributesUpdatePayloadKeySpecifier)[];
export type CheckoutAttributesUpdatePayloadFieldPolicy = {
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutUserErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutAttributesUpdateV2PayloadKeySpecifier = ('checkout' | 'checkoutUserErrors' | 'userErrors' | CheckoutAttributesUpdateV2PayloadKeySpecifier)[];
export type CheckoutAttributesUpdateV2PayloadFieldPolicy = {
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutUserErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutBuyerIdentityKeySpecifier = ('countryCode' | CheckoutBuyerIdentityKeySpecifier)[];
export type CheckoutBuyerIdentityFieldPolicy = {
	countryCode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutCompleteFreePayloadKeySpecifier = ('checkout' | 'checkoutUserErrors' | 'userErrors' | CheckoutCompleteFreePayloadKeySpecifier)[];
export type CheckoutCompleteFreePayloadFieldPolicy = {
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutUserErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutCompleteWithCreditCardPayloadKeySpecifier = ('checkout' | 'checkoutUserErrors' | 'payment' | 'userErrors' | CheckoutCompleteWithCreditCardPayloadKeySpecifier)[];
export type CheckoutCompleteWithCreditCardPayloadFieldPolicy = {
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutUserErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	payment?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutCompleteWithCreditCardV2PayloadKeySpecifier = ('checkout' | 'checkoutUserErrors' | 'payment' | 'userErrors' | CheckoutCompleteWithCreditCardV2PayloadKeySpecifier)[];
export type CheckoutCompleteWithCreditCardV2PayloadFieldPolicy = {
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutUserErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	payment?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutCompleteWithTokenizedPaymentPayloadKeySpecifier = ('checkout' | 'checkoutUserErrors' | 'payment' | 'userErrors' | CheckoutCompleteWithTokenizedPaymentPayloadKeySpecifier)[];
export type CheckoutCompleteWithTokenizedPaymentPayloadFieldPolicy = {
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutUserErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	payment?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutCompleteWithTokenizedPaymentV2PayloadKeySpecifier = ('checkout' | 'checkoutUserErrors' | 'payment' | 'userErrors' | CheckoutCompleteWithTokenizedPaymentV2PayloadKeySpecifier)[];
export type CheckoutCompleteWithTokenizedPaymentV2PayloadFieldPolicy = {
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutUserErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	payment?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutCompleteWithTokenizedPaymentV3PayloadKeySpecifier = ('checkout' | 'checkoutUserErrors' | 'payment' | 'userErrors' | CheckoutCompleteWithTokenizedPaymentV3PayloadKeySpecifier)[];
export type CheckoutCompleteWithTokenizedPaymentV3PayloadFieldPolicy = {
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutUserErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	payment?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutCreatePayloadKeySpecifier = ('checkout' | 'checkoutUserErrors' | 'queueToken' | 'userErrors' | CheckoutCreatePayloadKeySpecifier)[];
export type CheckoutCreatePayloadFieldPolicy = {
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutUserErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	queueToken?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutCustomerAssociatePayloadKeySpecifier = ('checkout' | 'customer' | 'userErrors' | CheckoutCustomerAssociatePayloadKeySpecifier)[];
export type CheckoutCustomerAssociatePayloadFieldPolicy = {
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	customer?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutCustomerAssociateV2PayloadKeySpecifier = ('checkout' | 'checkoutUserErrors' | 'customer' | 'userErrors' | CheckoutCustomerAssociateV2PayloadKeySpecifier)[];
export type CheckoutCustomerAssociateV2PayloadFieldPolicy = {
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutUserErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	customer?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutCustomerDisassociatePayloadKeySpecifier = ('checkout' | 'checkoutUserErrors' | 'userErrors' | CheckoutCustomerDisassociatePayloadKeySpecifier)[];
export type CheckoutCustomerDisassociatePayloadFieldPolicy = {
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutUserErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutCustomerDisassociateV2PayloadKeySpecifier = ('checkout' | 'checkoutUserErrors' | 'userErrors' | CheckoutCustomerDisassociateV2PayloadKeySpecifier)[];
export type CheckoutCustomerDisassociateV2PayloadFieldPolicy = {
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutUserErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutDiscountCodeApplyPayloadKeySpecifier = ('checkout' | 'checkoutUserErrors' | 'userErrors' | CheckoutDiscountCodeApplyPayloadKeySpecifier)[];
export type CheckoutDiscountCodeApplyPayloadFieldPolicy = {
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutUserErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutDiscountCodeApplyV2PayloadKeySpecifier = ('checkout' | 'checkoutUserErrors' | 'userErrors' | CheckoutDiscountCodeApplyV2PayloadKeySpecifier)[];
export type CheckoutDiscountCodeApplyV2PayloadFieldPolicy = {
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutUserErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutDiscountCodeRemovePayloadKeySpecifier = ('checkout' | 'checkoutUserErrors' | 'userErrors' | CheckoutDiscountCodeRemovePayloadKeySpecifier)[];
export type CheckoutDiscountCodeRemovePayloadFieldPolicy = {
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutUserErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutEmailUpdatePayloadKeySpecifier = ('checkout' | 'checkoutUserErrors' | 'userErrors' | CheckoutEmailUpdatePayloadKeySpecifier)[];
export type CheckoutEmailUpdatePayloadFieldPolicy = {
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutUserErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutEmailUpdateV2PayloadKeySpecifier = ('checkout' | 'checkoutUserErrors' | 'userErrors' | CheckoutEmailUpdateV2PayloadKeySpecifier)[];
export type CheckoutEmailUpdateV2PayloadFieldPolicy = {
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutUserErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutGiftCardApplyPayloadKeySpecifier = ('checkout' | 'checkoutUserErrors' | 'userErrors' | CheckoutGiftCardApplyPayloadKeySpecifier)[];
export type CheckoutGiftCardApplyPayloadFieldPolicy = {
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutUserErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutGiftCardRemovePayloadKeySpecifier = ('checkout' | 'checkoutUserErrors' | 'userErrors' | CheckoutGiftCardRemovePayloadKeySpecifier)[];
export type CheckoutGiftCardRemovePayloadFieldPolicy = {
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutUserErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutGiftCardRemoveV2PayloadKeySpecifier = ('checkout' | 'checkoutUserErrors' | 'userErrors' | CheckoutGiftCardRemoveV2PayloadKeySpecifier)[];
export type CheckoutGiftCardRemoveV2PayloadFieldPolicy = {
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutUserErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutGiftCardsAppendPayloadKeySpecifier = ('checkout' | 'checkoutUserErrors' | 'userErrors' | CheckoutGiftCardsAppendPayloadKeySpecifier)[];
export type CheckoutGiftCardsAppendPayloadFieldPolicy = {
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutUserErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutLineItemKeySpecifier = ('customAttributes' | 'discountAllocations' | 'id' | 'quantity' | 'title' | 'unitPrice' | 'variant' | CheckoutLineItemKeySpecifier)[];
export type CheckoutLineItemFieldPolicy = {
	customAttributes?: FieldPolicy<any> | FieldReadFunction<any>,
	discountAllocations?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	unitPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	variant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutLineItemConnectionKeySpecifier = ('edges' | 'pageInfo' | CheckoutLineItemConnectionKeySpecifier)[];
export type CheckoutLineItemConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutLineItemEdgeKeySpecifier = ('cursor' | 'node' | CheckoutLineItemEdgeKeySpecifier)[];
export type CheckoutLineItemEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutLineItemsAddPayloadKeySpecifier = ('checkout' | 'checkoutUserErrors' | 'userErrors' | CheckoutLineItemsAddPayloadKeySpecifier)[];
export type CheckoutLineItemsAddPayloadFieldPolicy = {
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutUserErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutLineItemsRemovePayloadKeySpecifier = ('checkout' | 'checkoutUserErrors' | 'userErrors' | CheckoutLineItemsRemovePayloadKeySpecifier)[];
export type CheckoutLineItemsRemovePayloadFieldPolicy = {
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutUserErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutLineItemsReplacePayloadKeySpecifier = ('checkout' | 'userErrors' | CheckoutLineItemsReplacePayloadKeySpecifier)[];
export type CheckoutLineItemsReplacePayloadFieldPolicy = {
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutLineItemsUpdatePayloadKeySpecifier = ('checkout' | 'checkoutUserErrors' | 'userErrors' | CheckoutLineItemsUpdatePayloadKeySpecifier)[];
export type CheckoutLineItemsUpdatePayloadFieldPolicy = {
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutUserErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutShippingAddressUpdatePayloadKeySpecifier = ('checkout' | 'checkoutUserErrors' | 'userErrors' | CheckoutShippingAddressUpdatePayloadKeySpecifier)[];
export type CheckoutShippingAddressUpdatePayloadFieldPolicy = {
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutUserErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutShippingAddressUpdateV2PayloadKeySpecifier = ('checkout' | 'checkoutUserErrors' | 'userErrors' | CheckoutShippingAddressUpdateV2PayloadKeySpecifier)[];
export type CheckoutShippingAddressUpdateV2PayloadFieldPolicy = {
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutUserErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutShippingLineUpdatePayloadKeySpecifier = ('checkout' | 'checkoutUserErrors' | 'userErrors' | CheckoutShippingLineUpdatePayloadKeySpecifier)[];
export type CheckoutShippingLineUpdatePayloadFieldPolicy = {
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutUserErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutUserErrorKeySpecifier = ('code' | 'field' | 'message' | CheckoutUserErrorKeySpecifier)[];
export type CheckoutUserErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionKeySpecifier = ('description' | 'descriptionHtml' | 'handle' | 'id' | 'image' | 'metafield' | 'metafields' | 'onlineStoreUrl' | 'products' | 'title' | 'updatedAt' | CollectionKeySpecifier)[];
export type CollectionFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	descriptionHtml?: FieldPolicy<any> | FieldReadFunction<any>,
	handle?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	metafield?: FieldPolicy<any> | FieldReadFunction<any>,
	metafields?: FieldPolicy<any> | FieldReadFunction<any>,
	onlineStoreUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionConnectionKeySpecifier = ('edges' | 'pageInfo' | CollectionConnectionKeySpecifier)[];
export type CollectionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionEdgeKeySpecifier = ('cursor' | 'node' | CollectionEdgeKeySpecifier)[];
export type CollectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentKeySpecifier = ('author' | 'content' | 'contentHtml' | 'id' | CommentKeySpecifier)[];
export type CommentFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	contentHtml?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentAuthorKeySpecifier = ('email' | 'name' | CommentAuthorKeySpecifier)[];
export type CommentAuthorFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentConnectionKeySpecifier = ('edges' | 'pageInfo' | CommentConnectionKeySpecifier)[];
export type CommentConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentEdgeKeySpecifier = ('cursor' | 'node' | CommentEdgeKeySpecifier)[];
export type CommentEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CountryKeySpecifier = ('currency' | 'isoCode' | 'name' | 'unitSystem' | CountryKeySpecifier)[];
export type CountryFieldPolicy = {
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	isoCode?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	unitSystem?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreditCardKeySpecifier = ('brand' | 'expiryMonth' | 'expiryYear' | 'firstDigits' | 'firstName' | 'lastDigits' | 'lastName' | 'maskedNumber' | CreditCardKeySpecifier)[];
export type CreditCardFieldPolicy = {
	brand?: FieldPolicy<any> | FieldReadFunction<any>,
	expiryMonth?: FieldPolicy<any> | FieldReadFunction<any>,
	expiryYear?: FieldPolicy<any> | FieldReadFunction<any>,
	firstDigits?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	lastDigits?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	maskedNumber?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CurrencyKeySpecifier = ('isoCode' | 'name' | 'symbol' | CurrencyKeySpecifier)[];
export type CurrencyFieldPolicy = {
	isoCode?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	symbol?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerKeySpecifier = ('acceptsMarketing' | 'addresses' | 'createdAt' | 'defaultAddress' | 'displayName' | 'email' | 'firstName' | 'id' | 'lastIncompleteCheckout' | 'lastName' | 'metafield' | 'metafields' | 'orders' | 'phone' | 'tags' | 'updatedAt' | CustomerKeySpecifier)[];
export type CustomerFieldPolicy = {
	acceptsMarketing?: FieldPolicy<any> | FieldReadFunction<any>,
	addresses?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	defaultAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastIncompleteCheckout?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	metafield?: FieldPolicy<any> | FieldReadFunction<any>,
	metafields?: FieldPolicy<any> | FieldReadFunction<any>,
	orders?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerAccessTokenKeySpecifier = ('accessToken' | 'expiresAt' | CustomerAccessTokenKeySpecifier)[];
export type CustomerAccessTokenFieldPolicy = {
	accessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	expiresAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerAccessTokenCreatePayloadKeySpecifier = ('customerAccessToken' | 'customerUserErrors' | 'userErrors' | CustomerAccessTokenCreatePayloadKeySpecifier)[];
export type CustomerAccessTokenCreatePayloadFieldPolicy = {
	customerAccessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	customerUserErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerAccessTokenCreateWithMultipassPayloadKeySpecifier = ('customerAccessToken' | 'customerUserErrors' | CustomerAccessTokenCreateWithMultipassPayloadKeySpecifier)[];
export type CustomerAccessTokenCreateWithMultipassPayloadFieldPolicy = {
	customerAccessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	customerUserErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerAccessTokenDeletePayloadKeySpecifier = ('deletedAccessToken' | 'deletedCustomerAccessTokenId' | 'userErrors' | CustomerAccessTokenDeletePayloadKeySpecifier)[];
export type CustomerAccessTokenDeletePayloadFieldPolicy = {
	deletedAccessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	deletedCustomerAccessTokenId?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerAccessTokenRenewPayloadKeySpecifier = ('customerAccessToken' | 'userErrors' | CustomerAccessTokenRenewPayloadKeySpecifier)[];
export type CustomerAccessTokenRenewPayloadFieldPolicy = {
	customerAccessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerActivateByUrlPayloadKeySpecifier = ('customer' | 'customerAccessToken' | 'customerUserErrors' | CustomerActivateByUrlPayloadKeySpecifier)[];
export type CustomerActivateByUrlPayloadFieldPolicy = {
	customer?: FieldPolicy<any> | FieldReadFunction<any>,
	customerAccessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	customerUserErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerActivatePayloadKeySpecifier = ('customer' | 'customerAccessToken' | 'customerUserErrors' | 'userErrors' | CustomerActivatePayloadKeySpecifier)[];
export type CustomerActivatePayloadFieldPolicy = {
	customer?: FieldPolicy<any> | FieldReadFunction<any>,
	customerAccessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	customerUserErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerAddressCreatePayloadKeySpecifier = ('customerAddress' | 'customerUserErrors' | 'userErrors' | CustomerAddressCreatePayloadKeySpecifier)[];
export type CustomerAddressCreatePayloadFieldPolicy = {
	customerAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	customerUserErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerAddressDeletePayloadKeySpecifier = ('customerUserErrors' | 'deletedCustomerAddressId' | 'userErrors' | CustomerAddressDeletePayloadKeySpecifier)[];
export type CustomerAddressDeletePayloadFieldPolicy = {
	customerUserErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	deletedCustomerAddressId?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerAddressUpdatePayloadKeySpecifier = ('customerAddress' | 'customerUserErrors' | 'userErrors' | CustomerAddressUpdatePayloadKeySpecifier)[];
export type CustomerAddressUpdatePayloadFieldPolicy = {
	customerAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	customerUserErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerCreatePayloadKeySpecifier = ('customer' | 'customerUserErrors' | 'userErrors' | CustomerCreatePayloadKeySpecifier)[];
export type CustomerCreatePayloadFieldPolicy = {
	customer?: FieldPolicy<any> | FieldReadFunction<any>,
	customerUserErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerDefaultAddressUpdatePayloadKeySpecifier = ('customer' | 'customerUserErrors' | 'userErrors' | CustomerDefaultAddressUpdatePayloadKeySpecifier)[];
export type CustomerDefaultAddressUpdatePayloadFieldPolicy = {
	customer?: FieldPolicy<any> | FieldReadFunction<any>,
	customerUserErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerRecoverPayloadKeySpecifier = ('customerUserErrors' | 'userErrors' | CustomerRecoverPayloadKeySpecifier)[];
export type CustomerRecoverPayloadFieldPolicy = {
	customerUserErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerResetByUrlPayloadKeySpecifier = ('customer' | 'customerAccessToken' | 'customerUserErrors' | 'userErrors' | CustomerResetByUrlPayloadKeySpecifier)[];
export type CustomerResetByUrlPayloadFieldPolicy = {
	customer?: FieldPolicy<any> | FieldReadFunction<any>,
	customerAccessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	customerUserErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerResetPayloadKeySpecifier = ('customer' | 'customerAccessToken' | 'customerUserErrors' | 'userErrors' | CustomerResetPayloadKeySpecifier)[];
export type CustomerResetPayloadFieldPolicy = {
	customer?: FieldPolicy<any> | FieldReadFunction<any>,
	customerAccessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	customerUserErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerUpdatePayloadKeySpecifier = ('customer' | 'customerAccessToken' | 'customerUserErrors' | 'userErrors' | CustomerUpdatePayloadKeySpecifier)[];
export type CustomerUpdatePayloadFieldPolicy = {
	customer?: FieldPolicy<any> | FieldReadFunction<any>,
	customerAccessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	customerUserErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerUserErrorKeySpecifier = ('code' | 'field' | 'message' | CustomerUserErrorKeySpecifier)[];
export type CustomerUserErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DiscountAllocationKeySpecifier = ('allocatedAmount' | 'discountApplication' | DiscountAllocationKeySpecifier)[];
export type DiscountAllocationFieldPolicy = {
	allocatedAmount?: FieldPolicy<any> | FieldReadFunction<any>,
	discountApplication?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DiscountApplicationKeySpecifier = ('allocationMethod' | 'targetSelection' | 'targetType' | 'value' | DiscountApplicationKeySpecifier)[];
export type DiscountApplicationFieldPolicy = {
	allocationMethod?: FieldPolicy<any> | FieldReadFunction<any>,
	targetSelection?: FieldPolicy<any> | FieldReadFunction<any>,
	targetType?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DiscountApplicationConnectionKeySpecifier = ('edges' | 'pageInfo' | DiscountApplicationConnectionKeySpecifier)[];
export type DiscountApplicationConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DiscountApplicationEdgeKeySpecifier = ('cursor' | 'node' | DiscountApplicationEdgeKeySpecifier)[];
export type DiscountApplicationEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DiscountCodeApplicationKeySpecifier = ('allocationMethod' | 'applicable' | 'code' | 'targetSelection' | 'targetType' | 'value' | DiscountCodeApplicationKeySpecifier)[];
export type DiscountCodeApplicationFieldPolicy = {
	allocationMethod?: FieldPolicy<any> | FieldReadFunction<any>,
	applicable?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	targetSelection?: FieldPolicy<any> | FieldReadFunction<any>,
	targetType?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DisplayableErrorKeySpecifier = ('field' | 'message' | DisplayableErrorKeySpecifier)[];
export type DisplayableErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DomainKeySpecifier = ('host' | 'sslEnabled' | 'url' | DomainKeySpecifier)[];
export type DomainFieldPolicy = {
	host?: FieldPolicy<any> | FieldReadFunction<any>,
	sslEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Extended_IDKeySpecifier = ('cacheID' | 'gid' | 'sid' | Extended_IDKeySpecifier)[];
export type Extended_IDFieldPolicy = {
	cacheID?: FieldPolicy<any> | FieldReadFunction<any>,
	gid?: FieldPolicy<any> | FieldReadFunction<any>,
	sid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExternalVideoKeySpecifier = ('alt' | 'embeddedUrl' | 'host' | 'id' | 'mediaContentType' | 'previewImage' | ExternalVideoKeySpecifier)[];
export type ExternalVideoFieldPolicy = {
	alt?: FieldPolicy<any> | FieldReadFunction<any>,
	embeddedUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	host?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaContentType?: FieldPolicy<any> | FieldReadFunction<any>,
	previewImage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FilterKeySpecifier = ('id' | 'label' | 'type' | 'values' | FilterKeySpecifier)[];
export type FilterFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	values?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FilterValueKeySpecifier = ('count' | 'id' | 'input' | 'label' | FilterValueKeySpecifier)[];
export type FilterValueFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	input?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FulfillmentKeySpecifier = ('fulfillmentLineItems' | 'trackingCompany' | 'trackingInfo' | FulfillmentKeySpecifier)[];
export type FulfillmentFieldPolicy = {
	fulfillmentLineItems?: FieldPolicy<any> | FieldReadFunction<any>,
	trackingCompany?: FieldPolicy<any> | FieldReadFunction<any>,
	trackingInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FulfillmentLineItemKeySpecifier = ('lineItem' | 'quantity' | FulfillmentLineItemKeySpecifier)[];
export type FulfillmentLineItemFieldPolicy = {
	lineItem?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FulfillmentLineItemConnectionKeySpecifier = ('edges' | 'pageInfo' | FulfillmentLineItemConnectionKeySpecifier)[];
export type FulfillmentLineItemConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FulfillmentLineItemEdgeKeySpecifier = ('cursor' | 'node' | FulfillmentLineItemEdgeKeySpecifier)[];
export type FulfillmentLineItemEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FulfillmentTrackingInfoKeySpecifier = ('number' | 'url' | FulfillmentTrackingInfoKeySpecifier)[];
export type FulfillmentTrackingInfoFieldPolicy = {
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HasMetafieldsKeySpecifier = ('metafield' | 'metafields' | HasMetafieldsKeySpecifier)[];
export type HasMetafieldsFieldPolicy = {
	metafield?: FieldPolicy<any> | FieldReadFunction<any>,
	metafields?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ImageKeySpecifier = ('altText' | 'height' | 'id' | 'originalSrc' | 'position' | 'product' | 'product_id' | 'src' | 'transformedSrc' | 'url' | 'variants' | 'width' | ImageKeySpecifier)[];
export type ImageFieldPolicy = {
	altText?: FieldPolicy<any> | FieldReadFunction<any>,
	height?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	originalSrc?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	product_id?: FieldPolicy<any> | FieldReadFunction<any>,
	src?: FieldPolicy<any> | FieldReadFunction<any>,
	transformedSrc?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	variants?: FieldPolicy<any> | FieldReadFunction<any>,
	width?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ImageConnectionKeySpecifier = ('edges' | 'pageInfo' | ImageConnectionKeySpecifier)[];
export type ImageConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ImageEdgeKeySpecifier = ('cursor' | 'node' | ImageEdgeKeySpecifier)[];
export type ImageEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LocalizationKeySpecifier = ('availableCountries' | 'country' | LocalizationKeySpecifier)[];
export type LocalizationFieldPolicy = {
	availableCountries?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LocationKeySpecifier = ('address' | 'id' | 'name' | LocationKeySpecifier)[];
export type LocationFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LocationAddressKeySpecifier = ('address1' | 'address2' | 'city' | 'country' | 'countryCode' | 'formatted' | 'latitude' | 'longitude' | 'phone' | 'province' | 'provinceCode' | 'zip' | LocationAddressKeySpecifier)[];
export type LocationAddressFieldPolicy = {
	address1?: FieldPolicy<any> | FieldReadFunction<any>,
	address2?: FieldPolicy<any> | FieldReadFunction<any>,
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	countryCode?: FieldPolicy<any> | FieldReadFunction<any>,
	formatted?: FieldPolicy<any> | FieldReadFunction<any>,
	latitude?: FieldPolicy<any> | FieldReadFunction<any>,
	longitude?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	province?: FieldPolicy<any> | FieldReadFunction<any>,
	provinceCode?: FieldPolicy<any> | FieldReadFunction<any>,
	zip?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LocationConnectionKeySpecifier = ('edges' | 'pageInfo' | LocationConnectionKeySpecifier)[];
export type LocationConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LocationEdgeKeySpecifier = ('cursor' | 'node' | LocationEdgeKeySpecifier)[];
export type LocationEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MailingAddressKeySpecifier = ('address1' | 'address2' | 'city' | 'company' | 'country' | 'countryCode' | 'countryCodeV2' | 'firstName' | 'formatted' | 'formattedArea' | 'id' | 'lastName' | 'latitude' | 'longitude' | 'name' | 'phone' | 'province' | 'provinceCode' | 'zip' | MailingAddressKeySpecifier)[];
export type MailingAddressFieldPolicy = {
	address1?: FieldPolicy<any> | FieldReadFunction<any>,
	address2?: FieldPolicy<any> | FieldReadFunction<any>,
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	countryCode?: FieldPolicy<any> | FieldReadFunction<any>,
	countryCodeV2?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	formatted?: FieldPolicy<any> | FieldReadFunction<any>,
	formattedArea?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	latitude?: FieldPolicy<any> | FieldReadFunction<any>,
	longitude?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	province?: FieldPolicy<any> | FieldReadFunction<any>,
	provinceCode?: FieldPolicy<any> | FieldReadFunction<any>,
	zip?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MailingAddressConnectionKeySpecifier = ('edges' | 'pageInfo' | MailingAddressConnectionKeySpecifier)[];
export type MailingAddressConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MailingAddressEdgeKeySpecifier = ('cursor' | 'node' | MailingAddressEdgeKeySpecifier)[];
export type MailingAddressEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ManualDiscountApplicationKeySpecifier = ('allocationMethod' | 'description' | 'targetSelection' | 'targetType' | 'title' | 'value' | ManualDiscountApplicationKeySpecifier)[];
export type ManualDiscountApplicationFieldPolicy = {
	allocationMethod?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	targetSelection?: FieldPolicy<any> | FieldReadFunction<any>,
	targetType?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaKeySpecifier = ('alt' | 'mediaContentType' | 'previewImage' | MediaKeySpecifier)[];
export type MediaFieldPolicy = {
	alt?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaContentType?: FieldPolicy<any> | FieldReadFunction<any>,
	previewImage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaConnectionKeySpecifier = ('edges' | 'pageInfo' | MediaConnectionKeySpecifier)[];
export type MediaConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaEdgeKeySpecifier = ('cursor' | 'node' | MediaEdgeKeySpecifier)[];
export type MediaEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaImageKeySpecifier = ('alt' | 'id' | 'image' | 'mediaContentType' | 'previewImage' | MediaImageKeySpecifier)[];
export type MediaImageFieldPolicy = {
	alt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaContentType?: FieldPolicy<any> | FieldReadFunction<any>,
	previewImage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MetafieldKeySpecifier = ('createdAt' | 'description' | 'id' | 'key' | 'namespace' | 'parentResource' | 'reference' | 'type' | 'updatedAt' | 'value' | MetafieldKeySpecifier)[];
export type MetafieldFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	namespace?: FieldPolicy<any> | FieldReadFunction<any>,
	parentResource?: FieldPolicy<any> | FieldReadFunction<any>,
	reference?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MetafieldConnectionKeySpecifier = ('edges' | 'pageInfo' | MetafieldConnectionKeySpecifier)[];
export type MetafieldConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MetafieldEdgeKeySpecifier = ('cursor' | 'node' | MetafieldEdgeKeySpecifier)[];
export type MetafieldEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Model3dKeySpecifier = ('alt' | 'id' | 'mediaContentType' | 'previewImage' | 'sources' | Model3dKeySpecifier)[];
export type Model3dFieldPolicy = {
	alt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaContentType?: FieldPolicy<any> | FieldReadFunction<any>,
	previewImage?: FieldPolicy<any> | FieldReadFunction<any>,
	sources?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Model3dSourceKeySpecifier = ('filesize' | 'format' | 'mimeType' | 'url' | Model3dSourceKeySpecifier)[];
export type Model3dSourceFieldPolicy = {
	filesize?: FieldPolicy<any> | FieldReadFunction<any>,
	format?: FieldPolicy<any> | FieldReadFunction<any>,
	mimeType?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MoneyV2KeySpecifier = ('amount' | 'currencyCode' | MoneyV2KeySpecifier)[];
export type MoneyV2FieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	currencyCode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('cartAttributesUpdate' | 'cartBuyerIdentityUpdate' | 'cartCreate' | 'cartDiscountCodesUpdate' | 'cartLinesAdd' | 'cartLinesRemove' | 'cartLinesUpdate' | 'cartNoteUpdate' | 'checkoutAttributesUpdate' | 'checkoutAttributesUpdateV2' | 'checkoutCompleteFree' | 'checkoutCompleteWithCreditCard' | 'checkoutCompleteWithCreditCardV2' | 'checkoutCompleteWithTokenizedPayment' | 'checkoutCompleteWithTokenizedPaymentV2' | 'checkoutCompleteWithTokenizedPaymentV3' | 'checkoutCreate' | 'checkoutCustomerAssociate' | 'checkoutCustomerAssociateV2' | 'checkoutCustomerDisassociate' | 'checkoutCustomerDisassociateV2' | 'checkoutDiscountCodeApply' | 'checkoutDiscountCodeApplyV2' | 'checkoutDiscountCodeRemove' | 'checkoutEmailUpdate' | 'checkoutEmailUpdateV2' | 'checkoutGiftCardApply' | 'checkoutGiftCardRemove' | 'checkoutGiftCardRemoveV2' | 'checkoutGiftCardsAppend' | 'checkoutLineItemsAdd' | 'checkoutLineItemsRemove' | 'checkoutLineItemsReplace' | 'checkoutLineItemsUpdate' | 'checkoutShippingAddressUpdate' | 'checkoutShippingAddressUpdateV2' | 'checkoutShippingLineUpdate' | 'customerAccessTokenCreate' | 'customerAccessTokenCreateWithMultipass' | 'customerAccessTokenDelete' | 'customerAccessTokenRenew' | 'customerActivate' | 'customerActivateByUrl' | 'customerAddressCreate' | 'customerAddressDelete' | 'customerAddressUpdate' | 'customerCreate' | 'customerDefaultAddressUpdate' | 'customerRecover' | 'customerReset' | 'customerResetByUrl' | 'customerUpdate' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	cartAttributesUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	cartBuyerIdentityUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	cartCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	cartDiscountCodesUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	cartLinesAdd?: FieldPolicy<any> | FieldReadFunction<any>,
	cartLinesRemove?: FieldPolicy<any> | FieldReadFunction<any>,
	cartLinesUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	cartNoteUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutAttributesUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutAttributesUpdateV2?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutCompleteFree?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutCompleteWithCreditCard?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutCompleteWithCreditCardV2?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutCompleteWithTokenizedPayment?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutCompleteWithTokenizedPaymentV2?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutCompleteWithTokenizedPaymentV3?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutCustomerAssociate?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutCustomerAssociateV2?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutCustomerDisassociate?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutCustomerDisassociateV2?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutDiscountCodeApply?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutDiscountCodeApplyV2?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutDiscountCodeRemove?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutEmailUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutEmailUpdateV2?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutGiftCardApply?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutGiftCardRemove?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutGiftCardRemoveV2?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutGiftCardsAppend?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutLineItemsAdd?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutLineItemsRemove?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutLineItemsReplace?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutLineItemsUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutShippingAddressUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutShippingAddressUpdateV2?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutShippingLineUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	customerAccessTokenCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	customerAccessTokenCreateWithMultipass?: FieldPolicy<any> | FieldReadFunction<any>,
	customerAccessTokenDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	customerAccessTokenRenew?: FieldPolicy<any> | FieldReadFunction<any>,
	customerActivate?: FieldPolicy<any> | FieldReadFunction<any>,
	customerActivateByUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	customerAddressCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	customerAddressDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	customerAddressUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	customerCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	customerDefaultAddressUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	customerRecover?: FieldPolicy<any> | FieldReadFunction<any>,
	customerReset?: FieldPolicy<any> | FieldReadFunction<any>,
	customerResetByUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	customerUpdate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeKeySpecifier = ('id' | NodeKeySpecifier)[];
export type NodeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OnlineStorePublishableKeySpecifier = ('onlineStoreUrl' | OnlineStorePublishableKeySpecifier)[];
export type OnlineStorePublishableFieldPolicy = {
	onlineStoreUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderKeySpecifier = ('cancelReason' | 'canceledAt' | 'currencyCode' | 'currentSubtotalPrice' | 'currentTotalDuties' | 'currentTotalPrice' | 'currentTotalTax' | 'customerLocale' | 'customerUrl' | 'discountApplications' | 'edited' | 'email' | 'financialStatus' | 'fulfillmentStatus' | 'id' | 'lineItems' | 'metafield' | 'metafields' | 'name' | 'orderNumber' | 'originalTotalDuties' | 'originalTotalPrice' | 'phone' | 'processedAt' | 'shippingAddress' | 'shippingDiscountAllocations' | 'statusUrl' | 'subtotalPrice' | 'subtotalPriceV2' | 'successfulFulfillments' | 'totalPrice' | 'totalPriceV2' | 'totalRefunded' | 'totalRefundedV2' | 'totalShippingPrice' | 'totalShippingPriceV2' | 'totalTax' | 'totalTaxV2' | OrderKeySpecifier)[];
export type OrderFieldPolicy = {
	cancelReason?: FieldPolicy<any> | FieldReadFunction<any>,
	canceledAt?: FieldPolicy<any> | FieldReadFunction<any>,
	currencyCode?: FieldPolicy<any> | FieldReadFunction<any>,
	currentSubtotalPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	currentTotalDuties?: FieldPolicy<any> | FieldReadFunction<any>,
	currentTotalPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	currentTotalTax?: FieldPolicy<any> | FieldReadFunction<any>,
	customerLocale?: FieldPolicy<any> | FieldReadFunction<any>,
	customerUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	discountApplications?: FieldPolicy<any> | FieldReadFunction<any>,
	edited?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	financialStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	fulfillmentStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lineItems?: FieldPolicy<any> | FieldReadFunction<any>,
	metafield?: FieldPolicy<any> | FieldReadFunction<any>,
	metafields?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	orderNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	originalTotalDuties?: FieldPolicy<any> | FieldReadFunction<any>,
	originalTotalPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	processedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingDiscountAllocations?: FieldPolicy<any> | FieldReadFunction<any>,
	statusUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	subtotalPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	subtotalPriceV2?: FieldPolicy<any> | FieldReadFunction<any>,
	successfulFulfillments?: FieldPolicy<any> | FieldReadFunction<any>,
	totalPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	totalPriceV2?: FieldPolicy<any> | FieldReadFunction<any>,
	totalRefunded?: FieldPolicy<any> | FieldReadFunction<any>,
	totalRefundedV2?: FieldPolicy<any> | FieldReadFunction<any>,
	totalShippingPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	totalShippingPriceV2?: FieldPolicy<any> | FieldReadFunction<any>,
	totalTax?: FieldPolicy<any> | FieldReadFunction<any>,
	totalTaxV2?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderConnectionKeySpecifier = ('edges' | 'pageInfo' | OrderConnectionKeySpecifier)[];
export type OrderConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderEdgeKeySpecifier = ('cursor' | 'node' | OrderEdgeKeySpecifier)[];
export type OrderEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderLineItemKeySpecifier = ('currentQuantity' | 'customAttributes' | 'discountAllocations' | 'discountedTotalPrice' | 'originalTotalPrice' | 'quantity' | 'title' | 'variant' | OrderLineItemKeySpecifier)[];
export type OrderLineItemFieldPolicy = {
	currentQuantity?: FieldPolicy<any> | FieldReadFunction<any>,
	customAttributes?: FieldPolicy<any> | FieldReadFunction<any>,
	discountAllocations?: FieldPolicy<any> | FieldReadFunction<any>,
	discountedTotalPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	originalTotalPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	variant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderLineItemConnectionKeySpecifier = ('edges' | 'pageInfo' | OrderLineItemConnectionKeySpecifier)[];
export type OrderLineItemConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderLineItemEdgeKeySpecifier = ('cursor' | 'node' | OrderLineItemEdgeKeySpecifier)[];
export type OrderLineItemEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageKeySpecifier = ('body' | 'bodySummary' | 'createdAt' | 'handle' | 'id' | 'metafield' | 'metafields' | 'onlineStoreUrl' | 'seo' | 'title' | 'updatedAt' | PageKeySpecifier)[];
export type PageFieldPolicy = {
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	bodySummary?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	handle?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	metafield?: FieldPolicy<any> | FieldReadFunction<any>,
	metafields?: FieldPolicy<any> | FieldReadFunction<any>,
	onlineStoreUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageConnectionKeySpecifier = ('edges' | 'pageInfo' | PageConnectionKeySpecifier)[];
export type PageConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageEdgeKeySpecifier = ('cursor' | 'node' | PageEdgeKeySpecifier)[];
export type PageEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageInfoKeySpecifier = ('hasNextPage' | 'hasPreviousPage' | PageInfoKeySpecifier)[];
export type PageInfoFieldPolicy = {
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentKeySpecifier = ('amount' | 'amountV2' | 'billingAddress' | 'checkout' | 'creditCard' | 'errorMessage' | 'id' | 'idempotencyKey' | 'nextActionUrl' | 'ready' | 'test' | 'transaction' | PaymentKeySpecifier)[];
export type PaymentFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	amountV2?: FieldPolicy<any> | FieldReadFunction<any>,
	billingAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	creditCard?: FieldPolicy<any> | FieldReadFunction<any>,
	errorMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	idempotencyKey?: FieldPolicy<any> | FieldReadFunction<any>,
	nextActionUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	ready?: FieldPolicy<any> | FieldReadFunction<any>,
	test?: FieldPolicy<any> | FieldReadFunction<any>,
	transaction?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentSettingsKeySpecifier = ('acceptedCardBrands' | 'cardVaultUrl' | 'countryCode' | 'currencyCode' | 'enabledPresentmentCurrencies' | 'shopifyPaymentsAccountId' | 'supportedDigitalWallets' | PaymentSettingsKeySpecifier)[];
export type PaymentSettingsFieldPolicy = {
	acceptedCardBrands?: FieldPolicy<any> | FieldReadFunction<any>,
	cardVaultUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	countryCode?: FieldPolicy<any> | FieldReadFunction<any>,
	currencyCode?: FieldPolicy<any> | FieldReadFunction<any>,
	enabledPresentmentCurrencies?: FieldPolicy<any> | FieldReadFunction<any>,
	shopifyPaymentsAccountId?: FieldPolicy<any> | FieldReadFunction<any>,
	supportedDigitalWallets?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PricingPercentageValueKeySpecifier = ('percentage' | PricingPercentageValueKeySpecifier)[];
export type PricingPercentageValueFieldPolicy = {
	percentage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductKeySpecifier = ('Images' | 'Variants' | 'available' | 'availableForSale' | 'cacheID' | 'collections' | 'compareAtPriceRange' | 'createdAt' | 'description' | 'descriptionHtml' | 'featuredImage' | 'gid' | 'handle' | 'id' | 'images' | 'media' | 'metafield' | 'metafields' | 'onlineStoreUrl' | 'options' | 'priceRange' | 'productType' | 'publishedAt' | 'requiresSellingPlan' | 'sellingPlanGroups' | 'seo' | 'sid' | 'tags' | 'title' | 'totalInventory' | 'updatedAt' | 'variant' | 'variantByFilter' | 'variantBySelectedOptions' | 'variants' | 'vendor' | ProductKeySpecifier)[];
export type ProductFieldPolicy = {
	Images?: FieldPolicy<any> | FieldReadFunction<any>,
	Variants?: FieldPolicy<any> | FieldReadFunction<any>,
	available?: FieldPolicy<any> | FieldReadFunction<any>,
	availableForSale?: FieldPolicy<any> | FieldReadFunction<any>,
	cacheID?: FieldPolicy<any> | FieldReadFunction<any>,
	collections?: FieldPolicy<any> | FieldReadFunction<any>,
	compareAtPriceRange?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	descriptionHtml?: FieldPolicy<any> | FieldReadFunction<any>,
	featuredImage?: FieldPolicy<any> | FieldReadFunction<any>,
	gid?: FieldPolicy<any> | FieldReadFunction<any>,
	handle?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	images?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	metafield?: FieldPolicy<any> | FieldReadFunction<any>,
	metafields?: FieldPolicy<any> | FieldReadFunction<any>,
	onlineStoreUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	options?: FieldPolicy<any> | FieldReadFunction<any>,
	priceRange?: FieldPolicy<any> | FieldReadFunction<any>,
	productType?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	requiresSellingPlan?: FieldPolicy<any> | FieldReadFunction<any>,
	sellingPlanGroups?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	sid?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	totalInventory?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	variant?: FieldPolicy<any> | FieldReadFunction<any>,
	variantByFilter?: FieldPolicy<any> | FieldReadFunction<any>,
	variantBySelectedOptions?: FieldPolicy<any> | FieldReadFunction<any>,
	variants?: FieldPolicy<any> | FieldReadFunction<any>,
	vendor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductConnectionKeySpecifier = ('edges' | 'filters' | 'pageInfo' | ProductConnectionKeySpecifier)[];
export type ProductConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	filters?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductEdgeKeySpecifier = ('cursor' | 'node' | ProductEdgeKeySpecifier)[];
export type ProductEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductGroupKeySpecifier = ('add_to_cart_enabled' | 'available' | 'id' | 'items' | 'max_children' | ProductGroupKeySpecifier)[];
export type ProductGroupFieldPolicy = {
	add_to_cart_enabled?: FieldPolicy<any> | FieldReadFunction<any>,
	available?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	max_children?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductInstanceKeySpecifier = ('customAttributes' | 'group' | 'group_id' | 'id' | 'product' | 'product_handle' | 'quantity' | 'variant' | 'variant_id' | ProductInstanceKeySpecifier)[];
export type ProductInstanceFieldPolicy = {
	customAttributes?: FieldPolicy<any> | FieldReadFunction<any>,
	group?: FieldPolicy<any> | FieldReadFunction<any>,
	group_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	product_handle?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	variant?: FieldPolicy<any> | FieldReadFunction<any>,
	variant_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductOptionKeySpecifier = ('handle' | 'id' | 'name' | 'option_values' | 'position' | 'product' | 'product_id' | 'title' | 'values' | ProductOptionKeySpecifier)[];
export type ProductOptionFieldPolicy = {
	handle?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	option_values?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	product_id?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	values?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductOptionValueKeySpecifier = ('handle' | 'option' | 'option_id' | 'parent_handle' | 'position' | 'product' | 'product_id' | 'title' | 'variants' | ProductOptionValueKeySpecifier)[];
export type ProductOptionValueFieldPolicy = {
	handle?: FieldPolicy<any> | FieldReadFunction<any>,
	option?: FieldPolicy<any> | FieldReadFunction<any>,
	option_id?: FieldPolicy<any> | FieldReadFunction<any>,
	parent_handle?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	product_id?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	variants?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductPriceRangeKeySpecifier = ('maxVariantPrice' | 'minVariantPrice' | ProductPriceRangeKeySpecifier)[];
export type ProductPriceRangeFieldPolicy = {
	maxVariantPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	minVariantPrice?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantKeySpecifier = ('SelectedOptions' | 'availableForSale' | 'barcode' | 'cacheID' | 'compareAtPrice' | 'compareAtPriceV2' | 'currentlyNotInStock' | 'gid' | 'handle' | 'id' | 'image' | 'image_id' | 'isInCart' | 'metafield' | 'metafields' | 'position' | 'price' | 'priceV2' | 'product' | 'product_id' | 'quantityAvailable' | 'requiresShipping' | 'selectedOptions' | 'sellingPlanAllocations' | 'sid' | 'sku' | 'storeAvailability' | 'title' | 'unitPrice' | 'unitPriceMeasurement' | 'weight' | 'weightUnit' | ProductVariantKeySpecifier)[];
export type ProductVariantFieldPolicy = {
	SelectedOptions?: FieldPolicy<any> | FieldReadFunction<any>,
	availableForSale?: FieldPolicy<any> | FieldReadFunction<any>,
	barcode?: FieldPolicy<any> | FieldReadFunction<any>,
	cacheID?: FieldPolicy<any> | FieldReadFunction<any>,
	compareAtPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	compareAtPriceV2?: FieldPolicy<any> | FieldReadFunction<any>,
	currentlyNotInStock?: FieldPolicy<any> | FieldReadFunction<any>,
	gid?: FieldPolicy<any> | FieldReadFunction<any>,
	handle?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	image_id?: FieldPolicy<any> | FieldReadFunction<any>,
	isInCart?: FieldPolicy<any> | FieldReadFunction<any>,
	metafield?: FieldPolicy<any> | FieldReadFunction<any>,
	metafields?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	priceV2?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	product_id?: FieldPolicy<any> | FieldReadFunction<any>,
	quantityAvailable?: FieldPolicy<any> | FieldReadFunction<any>,
	requiresShipping?: FieldPolicy<any> | FieldReadFunction<any>,
	selectedOptions?: FieldPolicy<any> | FieldReadFunction<any>,
	sellingPlanAllocations?: FieldPolicy<any> | FieldReadFunction<any>,
	sid?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>,
	storeAvailability?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	unitPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	unitPriceMeasurement?: FieldPolicy<any> | FieldReadFunction<any>,
	weight?: FieldPolicy<any> | FieldReadFunction<any>,
	weightUnit?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantConnectionKeySpecifier = ('edges' | 'pageInfo' | ProductVariantConnectionKeySpecifier)[];
export type ProductVariantConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantEdgeKeySpecifier = ('cursor' | 'node' | ProductVariantEdgeKeySpecifier)[];
export type ProductVariantEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryRootKeySpecifier = ('allVariants' | 'articles' | 'blog' | 'blogByHandle' | 'blogs' | 'cart' | 'collection' | 'collectionByHandle' | 'collections' | 'customer' | 'localization' | 'locations' | 'node' | 'nodes' | 'page' | 'pageByHandle' | 'pages' | 'product' | 'productByHandle' | 'productRecommendations' | 'productTags' | 'productTypes' | 'products' | 'publicApiVersions' | 'shop' | 'testOption' | 'testProduct' | QueryRootKeySpecifier)[];
export type QueryRootFieldPolicy = {
	allVariants?: FieldPolicy<any> | FieldReadFunction<any>,
	articles?: FieldPolicy<any> | FieldReadFunction<any>,
	blog?: FieldPolicy<any> | FieldReadFunction<any>,
	blogByHandle?: FieldPolicy<any> | FieldReadFunction<any>,
	blogs?: FieldPolicy<any> | FieldReadFunction<any>,
	cart?: FieldPolicy<any> | FieldReadFunction<any>,
	collection?: FieldPolicy<any> | FieldReadFunction<any>,
	collectionByHandle?: FieldPolicy<any> | FieldReadFunction<any>,
	collections?: FieldPolicy<any> | FieldReadFunction<any>,
	customer?: FieldPolicy<any> | FieldReadFunction<any>,
	localization?: FieldPolicy<any> | FieldReadFunction<any>,
	locations?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>,
	pageByHandle?: FieldPolicy<any> | FieldReadFunction<any>,
	pages?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	productByHandle?: FieldPolicy<any> | FieldReadFunction<any>,
	productRecommendations?: FieldPolicy<any> | FieldReadFunction<any>,
	productTags?: FieldPolicy<any> | FieldReadFunction<any>,
	productTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>,
	publicApiVersions?: FieldPolicy<any> | FieldReadFunction<any>,
	shop?: FieldPolicy<any> | FieldReadFunction<any>,
	testOption?: FieldPolicy<any> | FieldReadFunction<any>,
	testProduct?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SEOKeySpecifier = ('description' | 'title' | SEOKeySpecifier)[];
export type SEOFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ScriptDiscountApplicationKeySpecifier = ('allocationMethod' | 'targetSelection' | 'targetType' | 'title' | 'value' | ScriptDiscountApplicationKeySpecifier)[];
export type ScriptDiscountApplicationFieldPolicy = {
	allocationMethod?: FieldPolicy<any> | FieldReadFunction<any>,
	targetSelection?: FieldPolicy<any> | FieldReadFunction<any>,
	targetType?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SelectedOptionKeySpecifier = ('name' | 'value' | SelectedOptionKeySpecifier)[];
export type SelectedOptionFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SellingPlanKeySpecifier = ('description' | 'id' | 'name' | 'options' | 'priceAdjustments' | 'recurringDeliveries' | SellingPlanKeySpecifier)[];
export type SellingPlanFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	options?: FieldPolicy<any> | FieldReadFunction<any>,
	priceAdjustments?: FieldPolicy<any> | FieldReadFunction<any>,
	recurringDeliveries?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SellingPlanAllocationKeySpecifier = ('priceAdjustments' | 'sellingPlan' | SellingPlanAllocationKeySpecifier)[];
export type SellingPlanAllocationFieldPolicy = {
	priceAdjustments?: FieldPolicy<any> | FieldReadFunction<any>,
	sellingPlan?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SellingPlanAllocationConnectionKeySpecifier = ('edges' | 'pageInfo' | SellingPlanAllocationConnectionKeySpecifier)[];
export type SellingPlanAllocationConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SellingPlanAllocationEdgeKeySpecifier = ('cursor' | 'node' | SellingPlanAllocationEdgeKeySpecifier)[];
export type SellingPlanAllocationEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SellingPlanAllocationPriceAdjustmentKeySpecifier = ('compareAtPrice' | 'perDeliveryPrice' | 'price' | 'unitPrice' | SellingPlanAllocationPriceAdjustmentKeySpecifier)[];
export type SellingPlanAllocationPriceAdjustmentFieldPolicy = {
	compareAtPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	perDeliveryPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	unitPrice?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SellingPlanConnectionKeySpecifier = ('edges' | 'pageInfo' | SellingPlanConnectionKeySpecifier)[];
export type SellingPlanConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SellingPlanEdgeKeySpecifier = ('cursor' | 'node' | SellingPlanEdgeKeySpecifier)[];
export type SellingPlanEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SellingPlanFixedAmountPriceAdjustmentKeySpecifier = ('adjustmentAmount' | SellingPlanFixedAmountPriceAdjustmentKeySpecifier)[];
export type SellingPlanFixedAmountPriceAdjustmentFieldPolicy = {
	adjustmentAmount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SellingPlanFixedPriceAdjustmentKeySpecifier = ('price' | SellingPlanFixedPriceAdjustmentKeySpecifier)[];
export type SellingPlanFixedPriceAdjustmentFieldPolicy = {
	price?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SellingPlanGroupKeySpecifier = ('appName' | 'name' | 'options' | 'sellingPlans' | SellingPlanGroupKeySpecifier)[];
export type SellingPlanGroupFieldPolicy = {
	appName?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	options?: FieldPolicy<any> | FieldReadFunction<any>,
	sellingPlans?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SellingPlanGroupConnectionKeySpecifier = ('edges' | 'pageInfo' | SellingPlanGroupConnectionKeySpecifier)[];
export type SellingPlanGroupConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SellingPlanGroupEdgeKeySpecifier = ('cursor' | 'node' | SellingPlanGroupEdgeKeySpecifier)[];
export type SellingPlanGroupEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SellingPlanGroupOptionKeySpecifier = ('name' | 'values' | SellingPlanGroupOptionKeySpecifier)[];
export type SellingPlanGroupOptionFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	values?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SellingPlanOptionKeySpecifier = ('name' | 'value' | SellingPlanOptionKeySpecifier)[];
export type SellingPlanOptionFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SellingPlanPercentagePriceAdjustmentKeySpecifier = ('adjustmentPercentage' | SellingPlanPercentagePriceAdjustmentKeySpecifier)[];
export type SellingPlanPercentagePriceAdjustmentFieldPolicy = {
	adjustmentPercentage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SellingPlanPriceAdjustmentKeySpecifier = ('adjustmentValue' | 'orderCount' | SellingPlanPriceAdjustmentKeySpecifier)[];
export type SellingPlanPriceAdjustmentFieldPolicy = {
	adjustmentValue?: FieldPolicy<any> | FieldReadFunction<any>,
	orderCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingRateKeySpecifier = ('handle' | 'price' | 'priceV2' | 'title' | ShippingRateKeySpecifier)[];
export type ShippingRateFieldPolicy = {
	handle?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	priceV2?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShopKeySpecifier = ('description' | 'metafield' | 'metafields' | 'moneyFormat' | 'name' | 'paymentSettings' | 'primaryDomain' | 'privacyPolicy' | 'refundPolicy' | 'shippingPolicy' | 'shipsToCountries' | 'subscriptionPolicy' | 'termsOfService' | ShopKeySpecifier)[];
export type ShopFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	metafield?: FieldPolicy<any> | FieldReadFunction<any>,
	metafields?: FieldPolicy<any> | FieldReadFunction<any>,
	moneyFormat?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	primaryDomain?: FieldPolicy<any> | FieldReadFunction<any>,
	privacyPolicy?: FieldPolicy<any> | FieldReadFunction<any>,
	refundPolicy?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingPolicy?: FieldPolicy<any> | FieldReadFunction<any>,
	shipsToCountries?: FieldPolicy<any> | FieldReadFunction<any>,
	subscriptionPolicy?: FieldPolicy<any> | FieldReadFunction<any>,
	termsOfService?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShopPolicyKeySpecifier = ('body' | 'handle' | 'id' | 'title' | 'url' | ShopPolicyKeySpecifier)[];
export type ShopPolicyFieldPolicy = {
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	handle?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShopPolicyWithDefaultKeySpecifier = ('body' | 'handle' | 'id' | 'title' | 'url' | ShopPolicyWithDefaultKeySpecifier)[];
export type ShopPolicyWithDefaultFieldPolicy = {
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	handle?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShopifyNodeKeySpecifier = ('handle' | 'position' | ShopifyNodeKeySpecifier)[];
export type ShopifyNodeFieldPolicy = {
	handle?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShopifyProductNodeKeySpecifier = ('product' | 'product_id' | ShopifyProductNodeKeySpecifier)[];
export type ShopifyProductNodeFieldPolicy = {
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	product_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StoreAvailabilityKeySpecifier = ('available' | 'location' | 'pickUpTime' | StoreAvailabilityKeySpecifier)[];
export type StoreAvailabilityFieldPolicy = {
	available?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	pickUpTime?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StoreAvailabilityConnectionKeySpecifier = ('edges' | 'pageInfo' | StoreAvailabilityConnectionKeySpecifier)[];
export type StoreAvailabilityConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StoreAvailabilityEdgeKeySpecifier = ('cursor' | 'node' | StoreAvailabilityEdgeKeySpecifier)[];
export type StoreAvailabilityEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StringConnectionKeySpecifier = ('edges' | 'pageInfo' | StringConnectionKeySpecifier)[];
export type StringConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StringEdgeKeySpecifier = ('cursor' | 'node' | StringEdgeKeySpecifier)[];
export type StringEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TransactionKeySpecifier = ('amount' | 'amountV2' | 'kind' | 'status' | 'statusV2' | 'test' | TransactionKeySpecifier)[];
export type TransactionFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	amountV2?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	statusV2?: FieldPolicy<any> | FieldReadFunction<any>,
	test?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UnitPriceMeasurementKeySpecifier = ('measuredType' | 'quantityUnit' | 'quantityValue' | 'referenceUnit' | 'referenceValue' | UnitPriceMeasurementKeySpecifier)[];
export type UnitPriceMeasurementFieldPolicy = {
	measuredType?: FieldPolicy<any> | FieldReadFunction<any>,
	quantityUnit?: FieldPolicy<any> | FieldReadFunction<any>,
	quantityValue?: FieldPolicy<any> | FieldReadFunction<any>,
	referenceUnit?: FieldPolicy<any> | FieldReadFunction<any>,
	referenceValue?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserErrorKeySpecifier = ('field' | 'message' | UserErrorKeySpecifier)[];
export type UserErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VariantOptionKeySpecifier = ('option_value' | 'option_value_handle' | 'parent_handle' | 'product' | 'product_id' | 'variant' | 'variant_id' | VariantOptionKeySpecifier)[];
export type VariantOptionFieldPolicy = {
	option_value?: FieldPolicy<any> | FieldReadFunction<any>,
	option_value_handle?: FieldPolicy<any> | FieldReadFunction<any>,
	parent_handle?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	product_id?: FieldPolicy<any> | FieldReadFunction<any>,
	variant?: FieldPolicy<any> | FieldReadFunction<any>,
	variant_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VideoKeySpecifier = ('alt' | 'id' | 'mediaContentType' | 'previewImage' | 'sources' | VideoKeySpecifier)[];
export type VideoFieldPolicy = {
	alt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaContentType?: FieldPolicy<any> | FieldReadFunction<any>,
	previewImage?: FieldPolicy<any> | FieldReadFunction<any>,
	sources?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VideoSourceKeySpecifier = ('format' | 'height' | 'mimeType' | 'url' | 'width' | VideoSourceKeySpecifier)[];
export type VideoSourceFieldPolicy = {
	format?: FieldPolicy<any> | FieldReadFunction<any>,
	height?: FieldPolicy<any> | FieldReadFunction<any>,
	mimeType?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	width?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	ApiVersion?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApiVersionKeySpecifier | (() => undefined | ApiVersionKeySpecifier),
		fields?: ApiVersionFieldPolicy,
	},
	AppliedGiftCard?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppliedGiftCardKeySpecifier | (() => undefined | AppliedGiftCardKeySpecifier),
		fields?: AppliedGiftCardFieldPolicy,
	},
	Article?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ArticleKeySpecifier | (() => undefined | ArticleKeySpecifier),
		fields?: ArticleFieldPolicy,
	},
	ArticleAuthor?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ArticleAuthorKeySpecifier | (() => undefined | ArticleAuthorKeySpecifier),
		fields?: ArticleAuthorFieldPolicy,
	},
	ArticleConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ArticleConnectionKeySpecifier | (() => undefined | ArticleConnectionKeySpecifier),
		fields?: ArticleConnectionFieldPolicy,
	},
	ArticleEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ArticleEdgeKeySpecifier | (() => undefined | ArticleEdgeKeySpecifier),
		fields?: ArticleEdgeFieldPolicy,
	},
	Attribute?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeKeySpecifier | (() => undefined | AttributeKeySpecifier),
		fields?: AttributeFieldPolicy,
	},
	AutomaticDiscountApplication?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AutomaticDiscountApplicationKeySpecifier | (() => undefined | AutomaticDiscountApplicationKeySpecifier),
		fields?: AutomaticDiscountApplicationFieldPolicy,
	},
	AvailableShippingRates?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AvailableShippingRatesKeySpecifier | (() => undefined | AvailableShippingRatesKeySpecifier),
		fields?: AvailableShippingRatesFieldPolicy,
	},
	Blog?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BlogKeySpecifier | (() => undefined | BlogKeySpecifier),
		fields?: BlogFieldPolicy,
	},
	BlogConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BlogConnectionKeySpecifier | (() => undefined | BlogConnectionKeySpecifier),
		fields?: BlogConnectionFieldPolicy,
	},
	BlogEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BlogEdgeKeySpecifier | (() => undefined | BlogEdgeKeySpecifier),
		fields?: BlogEdgeFieldPolicy,
	},
	Cart?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartKeySpecifier | (() => undefined | CartKeySpecifier),
		fields?: CartFieldPolicy,
	},
	CartAttributesUpdatePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartAttributesUpdatePayloadKeySpecifier | (() => undefined | CartAttributesUpdatePayloadKeySpecifier),
		fields?: CartAttributesUpdatePayloadFieldPolicy,
	},
	CartAutomaticDiscountAllocation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartAutomaticDiscountAllocationKeySpecifier | (() => undefined | CartAutomaticDiscountAllocationKeySpecifier),
		fields?: CartAutomaticDiscountAllocationFieldPolicy,
	},
	CartBuyerIdentity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartBuyerIdentityKeySpecifier | (() => undefined | CartBuyerIdentityKeySpecifier),
		fields?: CartBuyerIdentityFieldPolicy,
	},
	CartBuyerIdentityUpdatePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartBuyerIdentityUpdatePayloadKeySpecifier | (() => undefined | CartBuyerIdentityUpdatePayloadKeySpecifier),
		fields?: CartBuyerIdentityUpdatePayloadFieldPolicy,
	},
	CartCodeDiscountAllocation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartCodeDiscountAllocationKeySpecifier | (() => undefined | CartCodeDiscountAllocationKeySpecifier),
		fields?: CartCodeDiscountAllocationFieldPolicy,
	},
	CartCreatePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartCreatePayloadKeySpecifier | (() => undefined | CartCreatePayloadKeySpecifier),
		fields?: CartCreatePayloadFieldPolicy,
	},
	CartDiscountAllocation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartDiscountAllocationKeySpecifier | (() => undefined | CartDiscountAllocationKeySpecifier),
		fields?: CartDiscountAllocationFieldPolicy,
	},
	CartDiscountCode?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartDiscountCodeKeySpecifier | (() => undefined | CartDiscountCodeKeySpecifier),
		fields?: CartDiscountCodeFieldPolicy,
	},
	CartDiscountCodesUpdatePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartDiscountCodesUpdatePayloadKeySpecifier | (() => undefined | CartDiscountCodesUpdatePayloadKeySpecifier),
		fields?: CartDiscountCodesUpdatePayloadFieldPolicy,
	},
	CartEstimatedCost?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartEstimatedCostKeySpecifier | (() => undefined | CartEstimatedCostKeySpecifier),
		fields?: CartEstimatedCostFieldPolicy,
	},
	CartLine?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartLineKeySpecifier | (() => undefined | CartLineKeySpecifier),
		fields?: CartLineFieldPolicy,
	},
	CartLineConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartLineConnectionKeySpecifier | (() => undefined | CartLineConnectionKeySpecifier),
		fields?: CartLineConnectionFieldPolicy,
	},
	CartLineEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartLineEdgeKeySpecifier | (() => undefined | CartLineEdgeKeySpecifier),
		fields?: CartLineEdgeFieldPolicy,
	},
	CartLineEstimatedCost?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartLineEstimatedCostKeySpecifier | (() => undefined | CartLineEstimatedCostKeySpecifier),
		fields?: CartLineEstimatedCostFieldPolicy,
	},
	CartLinesAddPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartLinesAddPayloadKeySpecifier | (() => undefined | CartLinesAddPayloadKeySpecifier),
		fields?: CartLinesAddPayloadFieldPolicy,
	},
	CartLinesRemovePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartLinesRemovePayloadKeySpecifier | (() => undefined | CartLinesRemovePayloadKeySpecifier),
		fields?: CartLinesRemovePayloadFieldPolicy,
	},
	CartLinesUpdatePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartLinesUpdatePayloadKeySpecifier | (() => undefined | CartLinesUpdatePayloadKeySpecifier),
		fields?: CartLinesUpdatePayloadFieldPolicy,
	},
	CartNoteUpdatePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartNoteUpdatePayloadKeySpecifier | (() => undefined | CartNoteUpdatePayloadKeySpecifier),
		fields?: CartNoteUpdatePayloadFieldPolicy,
	},
	CartUserError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartUserErrorKeySpecifier | (() => undefined | CartUserErrorKeySpecifier),
		fields?: CartUserErrorFieldPolicy,
	},
	Checkout?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutKeySpecifier | (() => undefined | CheckoutKeySpecifier),
		fields?: CheckoutFieldPolicy,
	},
	CheckoutAttributesUpdatePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutAttributesUpdatePayloadKeySpecifier | (() => undefined | CheckoutAttributesUpdatePayloadKeySpecifier),
		fields?: CheckoutAttributesUpdatePayloadFieldPolicy,
	},
	CheckoutAttributesUpdateV2Payload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutAttributesUpdateV2PayloadKeySpecifier | (() => undefined | CheckoutAttributesUpdateV2PayloadKeySpecifier),
		fields?: CheckoutAttributesUpdateV2PayloadFieldPolicy,
	},
	CheckoutBuyerIdentity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutBuyerIdentityKeySpecifier | (() => undefined | CheckoutBuyerIdentityKeySpecifier),
		fields?: CheckoutBuyerIdentityFieldPolicy,
	},
	CheckoutCompleteFreePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutCompleteFreePayloadKeySpecifier | (() => undefined | CheckoutCompleteFreePayloadKeySpecifier),
		fields?: CheckoutCompleteFreePayloadFieldPolicy,
	},
	CheckoutCompleteWithCreditCardPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutCompleteWithCreditCardPayloadKeySpecifier | (() => undefined | CheckoutCompleteWithCreditCardPayloadKeySpecifier),
		fields?: CheckoutCompleteWithCreditCardPayloadFieldPolicy,
	},
	CheckoutCompleteWithCreditCardV2Payload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutCompleteWithCreditCardV2PayloadKeySpecifier | (() => undefined | CheckoutCompleteWithCreditCardV2PayloadKeySpecifier),
		fields?: CheckoutCompleteWithCreditCardV2PayloadFieldPolicy,
	},
	CheckoutCompleteWithTokenizedPaymentPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutCompleteWithTokenizedPaymentPayloadKeySpecifier | (() => undefined | CheckoutCompleteWithTokenizedPaymentPayloadKeySpecifier),
		fields?: CheckoutCompleteWithTokenizedPaymentPayloadFieldPolicy,
	},
	CheckoutCompleteWithTokenizedPaymentV2Payload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutCompleteWithTokenizedPaymentV2PayloadKeySpecifier | (() => undefined | CheckoutCompleteWithTokenizedPaymentV2PayloadKeySpecifier),
		fields?: CheckoutCompleteWithTokenizedPaymentV2PayloadFieldPolicy,
	},
	CheckoutCompleteWithTokenizedPaymentV3Payload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutCompleteWithTokenizedPaymentV3PayloadKeySpecifier | (() => undefined | CheckoutCompleteWithTokenizedPaymentV3PayloadKeySpecifier),
		fields?: CheckoutCompleteWithTokenizedPaymentV3PayloadFieldPolicy,
	},
	CheckoutCreatePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutCreatePayloadKeySpecifier | (() => undefined | CheckoutCreatePayloadKeySpecifier),
		fields?: CheckoutCreatePayloadFieldPolicy,
	},
	CheckoutCustomerAssociatePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutCustomerAssociatePayloadKeySpecifier | (() => undefined | CheckoutCustomerAssociatePayloadKeySpecifier),
		fields?: CheckoutCustomerAssociatePayloadFieldPolicy,
	},
	CheckoutCustomerAssociateV2Payload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutCustomerAssociateV2PayloadKeySpecifier | (() => undefined | CheckoutCustomerAssociateV2PayloadKeySpecifier),
		fields?: CheckoutCustomerAssociateV2PayloadFieldPolicy,
	},
	CheckoutCustomerDisassociatePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutCustomerDisassociatePayloadKeySpecifier | (() => undefined | CheckoutCustomerDisassociatePayloadKeySpecifier),
		fields?: CheckoutCustomerDisassociatePayloadFieldPolicy,
	},
	CheckoutCustomerDisassociateV2Payload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutCustomerDisassociateV2PayloadKeySpecifier | (() => undefined | CheckoutCustomerDisassociateV2PayloadKeySpecifier),
		fields?: CheckoutCustomerDisassociateV2PayloadFieldPolicy,
	},
	CheckoutDiscountCodeApplyPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutDiscountCodeApplyPayloadKeySpecifier | (() => undefined | CheckoutDiscountCodeApplyPayloadKeySpecifier),
		fields?: CheckoutDiscountCodeApplyPayloadFieldPolicy,
	},
	CheckoutDiscountCodeApplyV2Payload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutDiscountCodeApplyV2PayloadKeySpecifier | (() => undefined | CheckoutDiscountCodeApplyV2PayloadKeySpecifier),
		fields?: CheckoutDiscountCodeApplyV2PayloadFieldPolicy,
	},
	CheckoutDiscountCodeRemovePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutDiscountCodeRemovePayloadKeySpecifier | (() => undefined | CheckoutDiscountCodeRemovePayloadKeySpecifier),
		fields?: CheckoutDiscountCodeRemovePayloadFieldPolicy,
	},
	CheckoutEmailUpdatePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutEmailUpdatePayloadKeySpecifier | (() => undefined | CheckoutEmailUpdatePayloadKeySpecifier),
		fields?: CheckoutEmailUpdatePayloadFieldPolicy,
	},
	CheckoutEmailUpdateV2Payload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutEmailUpdateV2PayloadKeySpecifier | (() => undefined | CheckoutEmailUpdateV2PayloadKeySpecifier),
		fields?: CheckoutEmailUpdateV2PayloadFieldPolicy,
	},
	CheckoutGiftCardApplyPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutGiftCardApplyPayloadKeySpecifier | (() => undefined | CheckoutGiftCardApplyPayloadKeySpecifier),
		fields?: CheckoutGiftCardApplyPayloadFieldPolicy,
	},
	CheckoutGiftCardRemovePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutGiftCardRemovePayloadKeySpecifier | (() => undefined | CheckoutGiftCardRemovePayloadKeySpecifier),
		fields?: CheckoutGiftCardRemovePayloadFieldPolicy,
	},
	CheckoutGiftCardRemoveV2Payload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutGiftCardRemoveV2PayloadKeySpecifier | (() => undefined | CheckoutGiftCardRemoveV2PayloadKeySpecifier),
		fields?: CheckoutGiftCardRemoveV2PayloadFieldPolicy,
	},
	CheckoutGiftCardsAppendPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutGiftCardsAppendPayloadKeySpecifier | (() => undefined | CheckoutGiftCardsAppendPayloadKeySpecifier),
		fields?: CheckoutGiftCardsAppendPayloadFieldPolicy,
	},
	CheckoutLineItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutLineItemKeySpecifier | (() => undefined | CheckoutLineItemKeySpecifier),
		fields?: CheckoutLineItemFieldPolicy,
	},
	CheckoutLineItemConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutLineItemConnectionKeySpecifier | (() => undefined | CheckoutLineItemConnectionKeySpecifier),
		fields?: CheckoutLineItemConnectionFieldPolicy,
	},
	CheckoutLineItemEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutLineItemEdgeKeySpecifier | (() => undefined | CheckoutLineItemEdgeKeySpecifier),
		fields?: CheckoutLineItemEdgeFieldPolicy,
	},
	CheckoutLineItemsAddPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutLineItemsAddPayloadKeySpecifier | (() => undefined | CheckoutLineItemsAddPayloadKeySpecifier),
		fields?: CheckoutLineItemsAddPayloadFieldPolicy,
	},
	CheckoutLineItemsRemovePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutLineItemsRemovePayloadKeySpecifier | (() => undefined | CheckoutLineItemsRemovePayloadKeySpecifier),
		fields?: CheckoutLineItemsRemovePayloadFieldPolicy,
	},
	CheckoutLineItemsReplacePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutLineItemsReplacePayloadKeySpecifier | (() => undefined | CheckoutLineItemsReplacePayloadKeySpecifier),
		fields?: CheckoutLineItemsReplacePayloadFieldPolicy,
	},
	CheckoutLineItemsUpdatePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutLineItemsUpdatePayloadKeySpecifier | (() => undefined | CheckoutLineItemsUpdatePayloadKeySpecifier),
		fields?: CheckoutLineItemsUpdatePayloadFieldPolicy,
	},
	CheckoutShippingAddressUpdatePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutShippingAddressUpdatePayloadKeySpecifier | (() => undefined | CheckoutShippingAddressUpdatePayloadKeySpecifier),
		fields?: CheckoutShippingAddressUpdatePayloadFieldPolicy,
	},
	CheckoutShippingAddressUpdateV2Payload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutShippingAddressUpdateV2PayloadKeySpecifier | (() => undefined | CheckoutShippingAddressUpdateV2PayloadKeySpecifier),
		fields?: CheckoutShippingAddressUpdateV2PayloadFieldPolicy,
	},
	CheckoutShippingLineUpdatePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutShippingLineUpdatePayloadKeySpecifier | (() => undefined | CheckoutShippingLineUpdatePayloadKeySpecifier),
		fields?: CheckoutShippingLineUpdatePayloadFieldPolicy,
	},
	CheckoutUserError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutUserErrorKeySpecifier | (() => undefined | CheckoutUserErrorKeySpecifier),
		fields?: CheckoutUserErrorFieldPolicy,
	},
	Collection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionKeySpecifier | (() => undefined | CollectionKeySpecifier),
		fields?: CollectionFieldPolicy,
	},
	CollectionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionConnectionKeySpecifier | (() => undefined | CollectionConnectionKeySpecifier),
		fields?: CollectionConnectionFieldPolicy,
	},
	CollectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionEdgeKeySpecifier | (() => undefined | CollectionEdgeKeySpecifier),
		fields?: CollectionEdgeFieldPolicy,
	},
	Comment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentKeySpecifier | (() => undefined | CommentKeySpecifier),
		fields?: CommentFieldPolicy,
	},
	CommentAuthor?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentAuthorKeySpecifier | (() => undefined | CommentAuthorKeySpecifier),
		fields?: CommentAuthorFieldPolicy,
	},
	CommentConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentConnectionKeySpecifier | (() => undefined | CommentConnectionKeySpecifier),
		fields?: CommentConnectionFieldPolicy,
	},
	CommentEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentEdgeKeySpecifier | (() => undefined | CommentEdgeKeySpecifier),
		fields?: CommentEdgeFieldPolicy,
	},
	Country?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CountryKeySpecifier | (() => undefined | CountryKeySpecifier),
		fields?: CountryFieldPolicy,
	},
	CreditCard?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreditCardKeySpecifier | (() => undefined | CreditCardKeySpecifier),
		fields?: CreditCardFieldPolicy,
	},
	Currency?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CurrencyKeySpecifier | (() => undefined | CurrencyKeySpecifier),
		fields?: CurrencyFieldPolicy,
	},
	Customer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerKeySpecifier | (() => undefined | CustomerKeySpecifier),
		fields?: CustomerFieldPolicy,
	},
	CustomerAccessToken?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerAccessTokenKeySpecifier | (() => undefined | CustomerAccessTokenKeySpecifier),
		fields?: CustomerAccessTokenFieldPolicy,
	},
	CustomerAccessTokenCreatePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerAccessTokenCreatePayloadKeySpecifier | (() => undefined | CustomerAccessTokenCreatePayloadKeySpecifier),
		fields?: CustomerAccessTokenCreatePayloadFieldPolicy,
	},
	CustomerAccessTokenCreateWithMultipassPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerAccessTokenCreateWithMultipassPayloadKeySpecifier | (() => undefined | CustomerAccessTokenCreateWithMultipassPayloadKeySpecifier),
		fields?: CustomerAccessTokenCreateWithMultipassPayloadFieldPolicy,
	},
	CustomerAccessTokenDeletePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerAccessTokenDeletePayloadKeySpecifier | (() => undefined | CustomerAccessTokenDeletePayloadKeySpecifier),
		fields?: CustomerAccessTokenDeletePayloadFieldPolicy,
	},
	CustomerAccessTokenRenewPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerAccessTokenRenewPayloadKeySpecifier | (() => undefined | CustomerAccessTokenRenewPayloadKeySpecifier),
		fields?: CustomerAccessTokenRenewPayloadFieldPolicy,
	},
	CustomerActivateByUrlPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerActivateByUrlPayloadKeySpecifier | (() => undefined | CustomerActivateByUrlPayloadKeySpecifier),
		fields?: CustomerActivateByUrlPayloadFieldPolicy,
	},
	CustomerActivatePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerActivatePayloadKeySpecifier | (() => undefined | CustomerActivatePayloadKeySpecifier),
		fields?: CustomerActivatePayloadFieldPolicy,
	},
	CustomerAddressCreatePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerAddressCreatePayloadKeySpecifier | (() => undefined | CustomerAddressCreatePayloadKeySpecifier),
		fields?: CustomerAddressCreatePayloadFieldPolicy,
	},
	CustomerAddressDeletePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerAddressDeletePayloadKeySpecifier | (() => undefined | CustomerAddressDeletePayloadKeySpecifier),
		fields?: CustomerAddressDeletePayloadFieldPolicy,
	},
	CustomerAddressUpdatePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerAddressUpdatePayloadKeySpecifier | (() => undefined | CustomerAddressUpdatePayloadKeySpecifier),
		fields?: CustomerAddressUpdatePayloadFieldPolicy,
	},
	CustomerCreatePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerCreatePayloadKeySpecifier | (() => undefined | CustomerCreatePayloadKeySpecifier),
		fields?: CustomerCreatePayloadFieldPolicy,
	},
	CustomerDefaultAddressUpdatePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerDefaultAddressUpdatePayloadKeySpecifier | (() => undefined | CustomerDefaultAddressUpdatePayloadKeySpecifier),
		fields?: CustomerDefaultAddressUpdatePayloadFieldPolicy,
	},
	CustomerRecoverPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerRecoverPayloadKeySpecifier | (() => undefined | CustomerRecoverPayloadKeySpecifier),
		fields?: CustomerRecoverPayloadFieldPolicy,
	},
	CustomerResetByUrlPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerResetByUrlPayloadKeySpecifier | (() => undefined | CustomerResetByUrlPayloadKeySpecifier),
		fields?: CustomerResetByUrlPayloadFieldPolicy,
	},
	CustomerResetPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerResetPayloadKeySpecifier | (() => undefined | CustomerResetPayloadKeySpecifier),
		fields?: CustomerResetPayloadFieldPolicy,
	},
	CustomerUpdatePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerUpdatePayloadKeySpecifier | (() => undefined | CustomerUpdatePayloadKeySpecifier),
		fields?: CustomerUpdatePayloadFieldPolicy,
	},
	CustomerUserError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerUserErrorKeySpecifier | (() => undefined | CustomerUserErrorKeySpecifier),
		fields?: CustomerUserErrorFieldPolicy,
	},
	DiscountAllocation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DiscountAllocationKeySpecifier | (() => undefined | DiscountAllocationKeySpecifier),
		fields?: DiscountAllocationFieldPolicy,
	},
	DiscountApplication?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DiscountApplicationKeySpecifier | (() => undefined | DiscountApplicationKeySpecifier),
		fields?: DiscountApplicationFieldPolicy,
	},
	DiscountApplicationConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DiscountApplicationConnectionKeySpecifier | (() => undefined | DiscountApplicationConnectionKeySpecifier),
		fields?: DiscountApplicationConnectionFieldPolicy,
	},
	DiscountApplicationEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DiscountApplicationEdgeKeySpecifier | (() => undefined | DiscountApplicationEdgeKeySpecifier),
		fields?: DiscountApplicationEdgeFieldPolicy,
	},
	DiscountCodeApplication?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DiscountCodeApplicationKeySpecifier | (() => undefined | DiscountCodeApplicationKeySpecifier),
		fields?: DiscountCodeApplicationFieldPolicy,
	},
	DisplayableError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DisplayableErrorKeySpecifier | (() => undefined | DisplayableErrorKeySpecifier),
		fields?: DisplayableErrorFieldPolicy,
	},
	Domain?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DomainKeySpecifier | (() => undefined | DomainKeySpecifier),
		fields?: DomainFieldPolicy,
	},
	Extended_ID?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Extended_IDKeySpecifier | (() => undefined | Extended_IDKeySpecifier),
		fields?: Extended_IDFieldPolicy,
	},
	ExternalVideo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExternalVideoKeySpecifier | (() => undefined | ExternalVideoKeySpecifier),
		fields?: ExternalVideoFieldPolicy,
	},
	Filter?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FilterKeySpecifier | (() => undefined | FilterKeySpecifier),
		fields?: FilterFieldPolicy,
	},
	FilterValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FilterValueKeySpecifier | (() => undefined | FilterValueKeySpecifier),
		fields?: FilterValueFieldPolicy,
	},
	Fulfillment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FulfillmentKeySpecifier | (() => undefined | FulfillmentKeySpecifier),
		fields?: FulfillmentFieldPolicy,
	},
	FulfillmentLineItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FulfillmentLineItemKeySpecifier | (() => undefined | FulfillmentLineItemKeySpecifier),
		fields?: FulfillmentLineItemFieldPolicy,
	},
	FulfillmentLineItemConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FulfillmentLineItemConnectionKeySpecifier | (() => undefined | FulfillmentLineItemConnectionKeySpecifier),
		fields?: FulfillmentLineItemConnectionFieldPolicy,
	},
	FulfillmentLineItemEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FulfillmentLineItemEdgeKeySpecifier | (() => undefined | FulfillmentLineItemEdgeKeySpecifier),
		fields?: FulfillmentLineItemEdgeFieldPolicy,
	},
	FulfillmentTrackingInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FulfillmentTrackingInfoKeySpecifier | (() => undefined | FulfillmentTrackingInfoKeySpecifier),
		fields?: FulfillmentTrackingInfoFieldPolicy,
	},
	HasMetafields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HasMetafieldsKeySpecifier | (() => undefined | HasMetafieldsKeySpecifier),
		fields?: HasMetafieldsFieldPolicy,
	},
	Image?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ImageKeySpecifier | (() => undefined | ImageKeySpecifier),
		fields?: ImageFieldPolicy,
	},
	ImageConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ImageConnectionKeySpecifier | (() => undefined | ImageConnectionKeySpecifier),
		fields?: ImageConnectionFieldPolicy,
	},
	ImageEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ImageEdgeKeySpecifier | (() => undefined | ImageEdgeKeySpecifier),
		fields?: ImageEdgeFieldPolicy,
	},
	Localization?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LocalizationKeySpecifier | (() => undefined | LocalizationKeySpecifier),
		fields?: LocalizationFieldPolicy,
	},
	Location?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LocationKeySpecifier | (() => undefined | LocationKeySpecifier),
		fields?: LocationFieldPolicy,
	},
	LocationAddress?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LocationAddressKeySpecifier | (() => undefined | LocationAddressKeySpecifier),
		fields?: LocationAddressFieldPolicy,
	},
	LocationConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LocationConnectionKeySpecifier | (() => undefined | LocationConnectionKeySpecifier),
		fields?: LocationConnectionFieldPolicy,
	},
	LocationEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LocationEdgeKeySpecifier | (() => undefined | LocationEdgeKeySpecifier),
		fields?: LocationEdgeFieldPolicy,
	},
	MailingAddress?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MailingAddressKeySpecifier | (() => undefined | MailingAddressKeySpecifier),
		fields?: MailingAddressFieldPolicy,
	},
	MailingAddressConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MailingAddressConnectionKeySpecifier | (() => undefined | MailingAddressConnectionKeySpecifier),
		fields?: MailingAddressConnectionFieldPolicy,
	},
	MailingAddressEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MailingAddressEdgeKeySpecifier | (() => undefined | MailingAddressEdgeKeySpecifier),
		fields?: MailingAddressEdgeFieldPolicy,
	},
	ManualDiscountApplication?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ManualDiscountApplicationKeySpecifier | (() => undefined | ManualDiscountApplicationKeySpecifier),
		fields?: ManualDiscountApplicationFieldPolicy,
	},
	Media?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaKeySpecifier | (() => undefined | MediaKeySpecifier),
		fields?: MediaFieldPolicy,
	},
	MediaConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaConnectionKeySpecifier | (() => undefined | MediaConnectionKeySpecifier),
		fields?: MediaConnectionFieldPolicy,
	},
	MediaEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaEdgeKeySpecifier | (() => undefined | MediaEdgeKeySpecifier),
		fields?: MediaEdgeFieldPolicy,
	},
	MediaImage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaImageKeySpecifier | (() => undefined | MediaImageKeySpecifier),
		fields?: MediaImageFieldPolicy,
	},
	Metafield?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MetafieldKeySpecifier | (() => undefined | MetafieldKeySpecifier),
		fields?: MetafieldFieldPolicy,
	},
	MetafieldConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MetafieldConnectionKeySpecifier | (() => undefined | MetafieldConnectionKeySpecifier),
		fields?: MetafieldConnectionFieldPolicy,
	},
	MetafieldEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MetafieldEdgeKeySpecifier | (() => undefined | MetafieldEdgeKeySpecifier),
		fields?: MetafieldEdgeFieldPolicy,
	},
	Model3d?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Model3dKeySpecifier | (() => undefined | Model3dKeySpecifier),
		fields?: Model3dFieldPolicy,
	},
	Model3dSource?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Model3dSourceKeySpecifier | (() => undefined | Model3dSourceKeySpecifier),
		fields?: Model3dSourceFieldPolicy,
	},
	MoneyV2?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MoneyV2KeySpecifier | (() => undefined | MoneyV2KeySpecifier),
		fields?: MoneyV2FieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Node?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeKeySpecifier | (() => undefined | NodeKeySpecifier),
		fields?: NodeFieldPolicy,
	},
	OnlineStorePublishable?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OnlineStorePublishableKeySpecifier | (() => undefined | OnlineStorePublishableKeySpecifier),
		fields?: OnlineStorePublishableFieldPolicy,
	},
	Order?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderKeySpecifier | (() => undefined | OrderKeySpecifier),
		fields?: OrderFieldPolicy,
	},
	OrderConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderConnectionKeySpecifier | (() => undefined | OrderConnectionKeySpecifier),
		fields?: OrderConnectionFieldPolicy,
	},
	OrderEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderEdgeKeySpecifier | (() => undefined | OrderEdgeKeySpecifier),
		fields?: OrderEdgeFieldPolicy,
	},
	OrderLineItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderLineItemKeySpecifier | (() => undefined | OrderLineItemKeySpecifier),
		fields?: OrderLineItemFieldPolicy,
	},
	OrderLineItemConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderLineItemConnectionKeySpecifier | (() => undefined | OrderLineItemConnectionKeySpecifier),
		fields?: OrderLineItemConnectionFieldPolicy,
	},
	OrderLineItemEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderLineItemEdgeKeySpecifier | (() => undefined | OrderLineItemEdgeKeySpecifier),
		fields?: OrderLineItemEdgeFieldPolicy,
	},
	Page?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageKeySpecifier | (() => undefined | PageKeySpecifier),
		fields?: PageFieldPolicy,
	},
	PageConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageConnectionKeySpecifier | (() => undefined | PageConnectionKeySpecifier),
		fields?: PageConnectionFieldPolicy,
	},
	PageEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageEdgeKeySpecifier | (() => undefined | PageEdgeKeySpecifier),
		fields?: PageEdgeFieldPolicy,
	},
	PageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageInfoKeySpecifier | (() => undefined | PageInfoKeySpecifier),
		fields?: PageInfoFieldPolicy,
	},
	Payment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentKeySpecifier | (() => undefined | PaymentKeySpecifier),
		fields?: PaymentFieldPolicy,
	},
	PaymentSettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentSettingsKeySpecifier | (() => undefined | PaymentSettingsKeySpecifier),
		fields?: PaymentSettingsFieldPolicy,
	},
	PricingPercentageValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PricingPercentageValueKeySpecifier | (() => undefined | PricingPercentageValueKeySpecifier),
		fields?: PricingPercentageValueFieldPolicy,
	},
	Product?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductKeySpecifier | (() => undefined | ProductKeySpecifier),
		fields?: ProductFieldPolicy,
	},
	ProductConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductConnectionKeySpecifier | (() => undefined | ProductConnectionKeySpecifier),
		fields?: ProductConnectionFieldPolicy,
	},
	ProductEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductEdgeKeySpecifier | (() => undefined | ProductEdgeKeySpecifier),
		fields?: ProductEdgeFieldPolicy,
	},
	ProductGroup?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductGroupKeySpecifier | (() => undefined | ProductGroupKeySpecifier),
		fields?: ProductGroupFieldPolicy,
	},
	ProductInstance?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductInstanceKeySpecifier | (() => undefined | ProductInstanceKeySpecifier),
		fields?: ProductInstanceFieldPolicy,
	},
	ProductOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductOptionKeySpecifier | (() => undefined | ProductOptionKeySpecifier),
		fields?: ProductOptionFieldPolicy,
	},
	ProductOptionValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductOptionValueKeySpecifier | (() => undefined | ProductOptionValueKeySpecifier),
		fields?: ProductOptionValueFieldPolicy,
	},
	ProductPriceRange?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductPriceRangeKeySpecifier | (() => undefined | ProductPriceRangeKeySpecifier),
		fields?: ProductPriceRangeFieldPolicy,
	},
	ProductVariant?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantKeySpecifier | (() => undefined | ProductVariantKeySpecifier),
		fields?: ProductVariantFieldPolicy,
	},
	ProductVariantConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantConnectionKeySpecifier | (() => undefined | ProductVariantConnectionKeySpecifier),
		fields?: ProductVariantConnectionFieldPolicy,
	},
	ProductVariantEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantEdgeKeySpecifier | (() => undefined | ProductVariantEdgeKeySpecifier),
		fields?: ProductVariantEdgeFieldPolicy,
	},
	QueryRoot?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryRootKeySpecifier | (() => undefined | QueryRootKeySpecifier),
		fields?: QueryRootFieldPolicy,
	},
	SEO?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SEOKeySpecifier | (() => undefined | SEOKeySpecifier),
		fields?: SEOFieldPolicy,
	},
	ScriptDiscountApplication?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ScriptDiscountApplicationKeySpecifier | (() => undefined | ScriptDiscountApplicationKeySpecifier),
		fields?: ScriptDiscountApplicationFieldPolicy,
	},
	SelectedOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SelectedOptionKeySpecifier | (() => undefined | SelectedOptionKeySpecifier),
		fields?: SelectedOptionFieldPolicy,
	},
	SellingPlan?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SellingPlanKeySpecifier | (() => undefined | SellingPlanKeySpecifier),
		fields?: SellingPlanFieldPolicy,
	},
	SellingPlanAllocation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SellingPlanAllocationKeySpecifier | (() => undefined | SellingPlanAllocationKeySpecifier),
		fields?: SellingPlanAllocationFieldPolicy,
	},
	SellingPlanAllocationConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SellingPlanAllocationConnectionKeySpecifier | (() => undefined | SellingPlanAllocationConnectionKeySpecifier),
		fields?: SellingPlanAllocationConnectionFieldPolicy,
	},
	SellingPlanAllocationEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SellingPlanAllocationEdgeKeySpecifier | (() => undefined | SellingPlanAllocationEdgeKeySpecifier),
		fields?: SellingPlanAllocationEdgeFieldPolicy,
	},
	SellingPlanAllocationPriceAdjustment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SellingPlanAllocationPriceAdjustmentKeySpecifier | (() => undefined | SellingPlanAllocationPriceAdjustmentKeySpecifier),
		fields?: SellingPlanAllocationPriceAdjustmentFieldPolicy,
	},
	SellingPlanConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SellingPlanConnectionKeySpecifier | (() => undefined | SellingPlanConnectionKeySpecifier),
		fields?: SellingPlanConnectionFieldPolicy,
	},
	SellingPlanEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SellingPlanEdgeKeySpecifier | (() => undefined | SellingPlanEdgeKeySpecifier),
		fields?: SellingPlanEdgeFieldPolicy,
	},
	SellingPlanFixedAmountPriceAdjustment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SellingPlanFixedAmountPriceAdjustmentKeySpecifier | (() => undefined | SellingPlanFixedAmountPriceAdjustmentKeySpecifier),
		fields?: SellingPlanFixedAmountPriceAdjustmentFieldPolicy,
	},
	SellingPlanFixedPriceAdjustment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SellingPlanFixedPriceAdjustmentKeySpecifier | (() => undefined | SellingPlanFixedPriceAdjustmentKeySpecifier),
		fields?: SellingPlanFixedPriceAdjustmentFieldPolicy,
	},
	SellingPlanGroup?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SellingPlanGroupKeySpecifier | (() => undefined | SellingPlanGroupKeySpecifier),
		fields?: SellingPlanGroupFieldPolicy,
	},
	SellingPlanGroupConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SellingPlanGroupConnectionKeySpecifier | (() => undefined | SellingPlanGroupConnectionKeySpecifier),
		fields?: SellingPlanGroupConnectionFieldPolicy,
	},
	SellingPlanGroupEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SellingPlanGroupEdgeKeySpecifier | (() => undefined | SellingPlanGroupEdgeKeySpecifier),
		fields?: SellingPlanGroupEdgeFieldPolicy,
	},
	SellingPlanGroupOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SellingPlanGroupOptionKeySpecifier | (() => undefined | SellingPlanGroupOptionKeySpecifier),
		fields?: SellingPlanGroupOptionFieldPolicy,
	},
	SellingPlanOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SellingPlanOptionKeySpecifier | (() => undefined | SellingPlanOptionKeySpecifier),
		fields?: SellingPlanOptionFieldPolicy,
	},
	SellingPlanPercentagePriceAdjustment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SellingPlanPercentagePriceAdjustmentKeySpecifier | (() => undefined | SellingPlanPercentagePriceAdjustmentKeySpecifier),
		fields?: SellingPlanPercentagePriceAdjustmentFieldPolicy,
	},
	SellingPlanPriceAdjustment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SellingPlanPriceAdjustmentKeySpecifier | (() => undefined | SellingPlanPriceAdjustmentKeySpecifier),
		fields?: SellingPlanPriceAdjustmentFieldPolicy,
	},
	ShippingRate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingRateKeySpecifier | (() => undefined | ShippingRateKeySpecifier),
		fields?: ShippingRateFieldPolicy,
	},
	Shop?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShopKeySpecifier | (() => undefined | ShopKeySpecifier),
		fields?: ShopFieldPolicy,
	},
	ShopPolicy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShopPolicyKeySpecifier | (() => undefined | ShopPolicyKeySpecifier),
		fields?: ShopPolicyFieldPolicy,
	},
	ShopPolicyWithDefault?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShopPolicyWithDefaultKeySpecifier | (() => undefined | ShopPolicyWithDefaultKeySpecifier),
		fields?: ShopPolicyWithDefaultFieldPolicy,
	},
	ShopifyNode?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShopifyNodeKeySpecifier | (() => undefined | ShopifyNodeKeySpecifier),
		fields?: ShopifyNodeFieldPolicy,
	},
	ShopifyProductNode?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShopifyProductNodeKeySpecifier | (() => undefined | ShopifyProductNodeKeySpecifier),
		fields?: ShopifyProductNodeFieldPolicy,
	},
	StoreAvailability?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StoreAvailabilityKeySpecifier | (() => undefined | StoreAvailabilityKeySpecifier),
		fields?: StoreAvailabilityFieldPolicy,
	},
	StoreAvailabilityConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StoreAvailabilityConnectionKeySpecifier | (() => undefined | StoreAvailabilityConnectionKeySpecifier),
		fields?: StoreAvailabilityConnectionFieldPolicy,
	},
	StoreAvailabilityEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StoreAvailabilityEdgeKeySpecifier | (() => undefined | StoreAvailabilityEdgeKeySpecifier),
		fields?: StoreAvailabilityEdgeFieldPolicy,
	},
	StringConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StringConnectionKeySpecifier | (() => undefined | StringConnectionKeySpecifier),
		fields?: StringConnectionFieldPolicy,
	},
	StringEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StringEdgeKeySpecifier | (() => undefined | StringEdgeKeySpecifier),
		fields?: StringEdgeFieldPolicy,
	},
	Transaction?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TransactionKeySpecifier | (() => undefined | TransactionKeySpecifier),
		fields?: TransactionFieldPolicy,
	},
	UnitPriceMeasurement?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UnitPriceMeasurementKeySpecifier | (() => undefined | UnitPriceMeasurementKeySpecifier),
		fields?: UnitPriceMeasurementFieldPolicy,
	},
	UserError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserErrorKeySpecifier | (() => undefined | UserErrorKeySpecifier),
		fields?: UserErrorFieldPolicy,
	},
	VariantOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VariantOptionKeySpecifier | (() => undefined | VariantOptionKeySpecifier),
		fields?: VariantOptionFieldPolicy,
	},
	Video?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VideoKeySpecifier | (() => undefined | VideoKeySpecifier),
		fields?: VideoFieldPolicy,
	},
	VideoSource?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VideoSourceKeySpecifier | (() => undefined | VideoSourceKeySpecifier),
		fields?: VideoSourceFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;