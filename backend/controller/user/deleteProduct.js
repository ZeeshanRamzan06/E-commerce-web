const Product = require('../../models/productModel'); 

const deleteProduct = async (req, res) => {
    try {
        const { _id } = req.body;

        console.log(_id)

        if (!_id) {
            return res.status(400).json({ success: false, message: "Product ID is required" });
        }

        const product = await Product.findByIdAndDelete(_id);

        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        return res.status(200).json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "An error occurred while deleting the product" });
    }
}

module.exports = deleteProduct;
