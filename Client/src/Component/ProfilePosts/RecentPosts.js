import React from "react";
import "../../stylesheets/RecentPosts.css";

function RecentPosts(props) {
  function view_all(){
    let recents = document.querySelector('.recentPostsDiv');
    let ProfilePosts = document.querySelector(".PostsDiv");
    
    recents.style.display="none";
    ProfilePosts.style.display="block";
}

  return (
    <div className="recentPosts_container">
      <div className="most_recentPost">
        <div className="img_box">
          <img
            src="https://economics.illinois.edu/sites/default/files/images/spotlight/New%20York.jpg"
            alt=""
            srcset=""
          />
        </div>
        <div className="content">
          <span
            style={{
              fontWeight: "700",
              color: "gray",
              marginBottom: "2em",
              fontSize: "0.8em",
            }}
          >
            2 July,2021 - 2:00pm
          </span>{" "}
          <br />
          <span style={{ color: "black", fontWeight: "700" }}>
            Last week I visited queens.Oh my! it waas a Wonder... Do share your
            thoughts about it in the comment section,will you?
          </span>{" "}
          <br /> <br />
          <span style={{ fontSize: "0.8em" }}>
            New York City comprises 5 boroughs sitting where the Hudson River
            meets the Atlantic Ocean.
          </span>
        </div>
      </div>
      <div className="sub_recentPosts">
        <div className="post_1">
          <div className="img_box">
            <img
              src="https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              alt=""
              srcset=""
            />
          </div>
          <div className="content">
            <span
              style={{
                fontWeight: "700",
                color: "gray",
                marginBottom: "2em",
                fontSize: "0.8em",
              }}
            >
              2 July,2021 - 2:00pm
            </span>{" "}
            <br />
            <span style={{ color: "black", fontWeight: "700" }}>
              Last week I visited queens.Oh my! it waas a Wonder... Do share
              your thoughts about it in the comment section,will you?
            </span>{" "}
            <br /> <br />
            <span style={{ fontSize: "0.8em" }}>
              New York City comprises 5 boroughs sitting where the Hudson River
              meets the Atlantic Ocean.
            </span>
          </div>
        </div>

        <div className="post_2">
          <div className="img_box">
            <img
              src="https://economics.illinois.edu/sites/default/files/images/spotlight/New%20York.jpg"
              alt=""
              srcset=""
            />
          </div>
          <div className="content">
            <span
              style={{
                fontWeight: "700",
                color: "gray",
                marginBottom: "2em",
                fontSize: "0.8em",
              }}
            >
              2 July,2021 - 2:00pm
            </span>{" "}
            <br />
            <span style={{ color: "black", fontWeight: "700" }}>
              Last week I visited queens.Oh my! it waas a Wonder... Do share
              your thoughts about it in the comment section,will you?
            </span>{" "}
            <br /> <br />
            <span style={{ fontSize: "0.8em" }}>
              New York City comprises 5 boroughs sitting where the Hudson River
              meets the Atlantic Ocean.
            </span>
          </div>
        </div>
      </div>
      <div style={{textAlign:"center",fontWeight:"600",cursor:"pointer",marginTop:"1em"}} className="view_all" onClick={()=>view_all()}>View all</div>
    </div>
  );
}

export default RecentPosts;
