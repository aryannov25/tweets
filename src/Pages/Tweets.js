import React from 'react'


function Tweets({tweets})  {

    return (
      <div>
        
        <div className="flex  form-post rounded mt-3">
            <div>
              <a href="/">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_avatar_tailwind.jpg"
                  alt="avatar"
                  className="rounded-full h-12 w-12 p-1  mt-2 mr-10"
                />
              </a>
            </div>
            <div className="w-1/8  pl-3 pt-3">
              <div className="text-xs text-grey-dark"></div>

              <div className="flex justify-between">
                <div>
                  <span className="font-bold">
                    <a href="/" className="text-white">
                      {}
                    </a>
                  </span>
                </div>
              </div>

              <div>
                <div className="">
                  <p className="my-6"> {} </p>
                  <div className="flex  rounded p-3 ">
                    
                    <div className="flex-1 form-post px-2 pt-2 ">
                      <p
                        className="  text-white font-medium text-md w-70"
                        rows="2"
                        cols="50"
                      >
                        {tweets}
                      </p>
                    </div>
                  </div>

                 
                </div>
              </div>
            </div>
          </div>
      </div>
    )
};


export default Tweets;