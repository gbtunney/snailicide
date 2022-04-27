
Product Model - Repo 
- Returns Product Instace

Component

* @binding {boolean} Ready - product & selected variant id resolve and are available.
    * @binding {Array<variant>} Variants - list of variant entities for product
    * @binding {Array<productimage>} Images - list of productimage entities for product
    * @binding {Array<productoption>} Options - list of productoption entities
    * @binding {Array<productoptionvalue>} OptionValueList - *function* list of productoptionvalue entities
    *
    * @binding {Object<product>} Product - Product Entity
    * @binding {Object<productimage>} ProductImage - Default ProductImage Entity
    * @binding {Object<variant>} SelectedVariant - Selected Variant Entity
    * @binding {Object<productimage>} SelectedVariant - SelectedVariant ProductImage Entity
      */


#Instance  

##REPOSITORY
- getVariantPositionToID
##Model
- LinePrice
- TotalPrice
- IsAvailableLinePrice
- TotalPrice
- IsAvailable

## Component 
/**
* @slot
* @binding {Object<productbase>} Instance - The product instance entity
* @binding {number} QuantityAvailable - quantity left that can be added to cart (inventory count)
* @binding {number} Quantity - requested quantity
* @binding {function} AddToCart - Add item to cart
* @binding {function} UpdateInstance
* @binding {function} UpdateVariant
* @binding {function} UpdateOption
* @binding {boolean} CartLoading - indicates cart loading status
  

# PRODUCT GROUP

##REPOSITORY
- getVariantPositionToID
##Model
- TotalPrice
- IsAvailable

## Component 
 
* @binding {Object<ProductGroupBase>} Instance - The ProductGroupBase entit
* @binding {Array<productbase>} Items - array of productbase entity
* @binding {function} AddToCart - Add item to cart
* @binding {function} UpdateInstance
