import "./ProductDetails.css";

import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/Common/Breadcrumb/Breadcrumb";
import products from "../../data/products";
import ProductTrust from "../../features/ProductDetails/ProductTrust/ProductTrust";
import ProductGallery from "../../features/ProductDetails/ProductGallery/ProductGallery";
import ProductInfo from "../../features/ProductDetails/ProductInfo/ProductInfo";
import ProductTabs from "../../features/ProductDetails/ProductTabs/ProductTabs";
import RelatedProducts from "../../features/ProductDetails/RelatedProducts/RelatedProducts";
import PerfumeNotes from "../../features/ProductDetails/PerfumeNotes/PerfumeNotes";

export default function ProductDetails() {

    const { id } = useParams();

    const product = products.find(

        (item) => item.id === Number(id)

    );

    if (!product) {

        return (

            <div className="container">

                <h2>

                    Product not found.

                </h2>

            </div>

        );

    }

    return (

        <>

            <section className="product-details">

                <div className="container">

                    <Breadcrumb
                        product={product}
                    />

                    <div className="details-layout">

                        <ProductGallery

                            product={product}

                        />

                        <ProductInfo

                            product={product}

                        />

                    </div>

                    <PerfumeNotes
                        product={product}
                    />

                    <ProductTrust />

                    <ProductTabs
                        product={product}
                    />

                    <RelatedProducts
                        currentProduct={product}
                    />

                </div>

            </section>

        </>

    );

}