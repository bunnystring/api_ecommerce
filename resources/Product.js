export default {
    product_list: (product, variedades = []) => {
        return {
            _id: product._id,
            title: product.title,
            sku: product.sku,
            imagen: 'http://localhost:3000'+'/api/product/uploads/product/'+product.portada, //falta completar
            categorie:product.categorie,
            price_cop: product.price_cop,
            price_usd: product.price_usd,
            slug:product.slug, //1 es en prueba o desarrollo, 2 va ser publico y 3 va ser anulado
            stock:product.stock,
            descripcion:product.descripcion,
            resumen:product.resumen,
            tags: product.tags ? JSON.parse(product.tags): [],
            type_inventario:product.type_inventario,
            state: product.state,
            variedades: variedades,
            galerias: product.galerias.map((galeria) => {
                 galeria.imagen = 'http://localhost:3000'+'/api/product/uploads/product/'+galeria.imagen;
                 return galeria
            })
        }
    }
}