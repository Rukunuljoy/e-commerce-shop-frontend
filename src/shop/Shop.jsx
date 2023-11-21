import { useState } from "react";
import PageHeader from "../components/PageHeader";
import Data from '../products.json'
import ProductCards from "./ProductCards";
import Pagination from "./Pagination";

const showResults = "Showing 01- 12 of Results";

const Shop = () => {
    const [GridList,setGridList] = useState(false);
    const [products, setProducts] = useState(Data)

    // pagination 
    const [currentPage, setCurrentPage] = useState(1)
    const productsPerPage = 12 

    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct * productsPerPage
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // function to change the currentPage
    const paginate = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }
  return (
    <div>
      <PageHeader title="our Shop page" curPage="page" />
      {/* shop page  */}
      <div className="shop-page padding-tb">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-12">
                    <article>
                        {/* layout and title here */}
                        <div className="shop-title d-flex flex-wrap justify-content-between">
                            <p>{showResults}</p>
                            <div className={`product-view-mode ${GridList ? 'gridActive' : 'listActive'}`}>
                                <a className="grid" onClick={()=>setGridList(!GridList)}>
                                    <i className="icofont-ghost"></i>
                                </a>
                                <a className="list" onClick={()=>setGridList(!products)}>
                                    <i className="icofont-listine-dots"></i>
                                </a>
                            </div>
                        </div>
                        {/* products card */}
                        <div>
                            <ProductCards GridList={GridList} products={products}/>
                        </div>
                        <Pagination
                        
                        />
                    </article>
                </div>
                <div className="col-lg-4 col-12">
                    Right side
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;