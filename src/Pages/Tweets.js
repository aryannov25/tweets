import React from "react";

function Tweets({ tweets, name }) {
  return (
    <div>
      <div class="flex dark:bg-zinc-800 rounded mt-3">
        <div>
          <a href="/">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_avatar_tailwind.jpg"
              alt="avatar"
              class="rounded-full h-12 w-12 p-1  mt-2 mr-10"
            />
          </a>
        </div>
        <div class="  pl-3 pt-3">
          <div class="text-xs text-grey-dark"></div>
          <div class="flex justify-between">
            <div>
              <span class="font-bold">
                <a href="/" class="text-white">
                  {name}
                </a>
              </span>
            </div>
          </div>
          <div>
            <div class="mb-4">
              <p class="mb-6">5 mins ago ・ Edited</p>
              <div class="flex dark:bg-zinc-600 rounded p-3 mr-4">
                <div class="mb-3 w-96 py-2">
                  <img
                    class="inline-block h-8 w-8 rounded-full"
                    src="https://emoji-uc.akamaized.net/orig/32/e70ddf12ec8dc727eb8c1e6f4a31dc.png"
                    alt=""
                  />
                </div>
                <div class="flex px-2 pt-2 ">
                  <p
                    class=" bg-transparent text-gray-400 font-medium text-sm "
                    rows="2"
                    cols="50"
                  >
                    "{tweets}"
                  </p>
                </div>
              </div>
              <a href="/">
                <h4 class="text-gray-400 ml-2 mt-1"> 💬 24 Comments</h4>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex  form-post rounded mt-3">
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
          </div> */}
    </div>
  );
}

export default Tweets;
