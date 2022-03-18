/* * use a single product ( by id & variantid * */
export const useProduct = () => {
    return {
        /*Product: function () {
            if (!this.Handle) return;
            return Product.getProductByHandle(this.Handle)
        },
        ProductImage: function () {
            //todo: fix
            if (!this.Product || !this.Ready) return;
            return ProductImage.query().where("product_id", this.Product.id).where("position", 1).orderBy('position').withAll().first()
        },
        Variants: function () {
            if (!this.Product) return;
            return this.Product.Variants;
        },
        Options: function () {
            if (!this.Ready ) return;
            //if (!this.$props.enableoptions || !this.Ready) return false
            return this.Product.Options;
        },
        Images: function () {
            if (!this.Product || !this.Variants) return; //todo: use  ready?
            return this.Product.Images;
        },  */
    }
}
export default useProduct
