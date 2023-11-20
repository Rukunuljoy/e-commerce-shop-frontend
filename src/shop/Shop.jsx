import { useState } from "react";
import PageHeader from "../components/PageHeader";

const showResults = "Showing 01- 12 of Results";

const Shop = () => {
    const [GridList,setGridList] = useState(true);
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
                                <a href="grid" onClick={()=>setGridList(!GridList)}>
                                    <i className="icofont-ghost"></i>
                                </a>
                                <a href="list" onClick={()=>setGridList(!GridList)}>
                                    <i className="icofont-listine-dots"></i>
                                </a>
                            </div>
                        </div>
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
