import React from "react";
import "./BottomHeader.css"
import image from "../../assets/1.png"
function BottomHeader() {
    return (
        <>
            <div class="maindiv">
                <div class="container text-right">

                    <div class="row">
                        <div class="col-md-4 col-md-push-8">
                            <div class="input-group">
                                <input id="searchField" type="text" class="form-control" placeholder="Product #, Keyword" />
                                <span class="input-group-btn">
                                    <button id="searchBtn" class="btn btn-default" type="button">Search <span id="loadingIcon"><i class="fa fa-search"></i></span></button>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="image"><a href=" /"><img src={image} alt="" /></a></div>


                </div>
            </div >
        </>
    )
};
export default BottomHeader;