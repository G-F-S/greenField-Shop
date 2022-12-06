import React from "react";

const home = () => {
  return (
    <>
      <div className="container mt-100">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="card mb-30">
              <a className="card-img-tiles" href="/vehicle" data-abc="true">
                <div className="inner">
                  <div className="main-img">
                    <img src="https://i.imgur.com/O0GMYuw.jpg" alt="Category" />
                  </div>
                  <div className="thumblist">
                    <img src="https://i.imgur.com/ILEU18M.jpg" alt="Category" />
                    <img src="https://i.imgur.com/2kePJmX.jpg" alt="Category" />
                  </div>
                </div>
              </a>
              <div className="card-body text-center">
                <h4 className="card-title">Vehicle</h4>
  
                <a
                  className="btn btn-outline-primary btn-sm"
                  href="/vehicle"
                  data-abc="true"
                >
                  View Products
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="card mb-30">
              <a className="card-img-tiles" href="/phones" data-abc="true">
                <div className="inner">
                  <div className="main-img">
                    <img src="https://i.imgur.com/uRgdVY1.jpg" alt="Category" />
                  </div>
                  <div className="thumblist">
                    <img src="https://i.imgur.com/VwSKS7A.jpg" alt="Category" />
                    <img src="https://i.imgur.com/gTvZ2H5.jpg" alt="Category" />
                  </div>
                </div>
              </a>
              <div className="card-body text-center">
                <h4 className="card-title">Mobiles</h4>
                
                <a
                  className="btn btn-outline-primary btn-sm"
                  href="/phones"
                  data-abc="true"
                >
                  View Products
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="card mb-30">
              <a className="card-img-tiles" href="/realEstate" data-abc="true">
                <div className="inner">
                  <div className="main-img">
                    <img src="https://image.cnbcfm.com/api/v1/image/106998054-1641517061268944AiroleWay-print-64.jpg?v=1641524919&w=740&h=416&ffmt=webp&vtcrop=y" alt="Category" />
                  </div>
                  <div className="thumblist">
                    <img src="https://media.gettyimages.com/id/157193895/photo/beautiful-swimming-pool-at-an-estate-home.jpg?s=612x612&w=gi&k=20&c=8xG8nGES0VW7sj9wnKYKzpn3-ehp88lLRzVtpyfDSNI=" alt="Category" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxvdrZ1GULY-t0H2MiCsvhkyNH0KfY5NtRdmiJl4o454lG9bu15jr3jIAmQdly05NMTok&usqp=CAU" alt="Category" />
                  </div>
                </div>
              </a>
              <div className="card-body text-center">
                <h4 className="card-title">Real Estate</h4>
                
                <a
                  className="btn btn-outline-primary btn-sm"
                  href="/realEstate"
                  data-abc="true"
                >
                  View Products
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default home;
