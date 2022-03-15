export declare interface ProductInstanceProviderProps extends ProductProviderProps{
  id: number,
  type: string,
  quantity: number
}
export declare interface ProductProviderProps{
  handle:string|boolean
  variant_id: number
}

export declare interface CartProviderProps extends ProductProviderProps{
  checkout_id: string
}
export declare interface ProductGroupProviderProps{
  id: number,
  type: string,
  items: Array<any>,
  item_count: number
}
