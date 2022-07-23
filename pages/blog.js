import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../styles/blog.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
const Blog = ({ allBlog, allCount }) => {
  const [blog, setBlog] = useState(allBlog);
  const [count, setCount] = useState(2)
  const fetchData = async () => {
    let data = await fetch(`http://localhost:3000/api/blogdata?count=${count + 2}`)
    let d = await data.json()
    setBlog(d)
  };
  if (!blog) return <p>No Data</p>;
  return (
    <main className={styles.main}>
      <div className={styles.blog}>
        <InfiniteScroll
          dataLength={blog.length} //This is important field to render the next data
          next={fetchData}
          hasMore={allCount !== blog.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {blog.map((data) => (
            <div key={data.slug}>
              <Link href={`/blogpost/${data.slug}`}>
                <div className={styles.blogitem}>
                  <h3>{data.title}</h3>
                  <p>{data.discription.substr(0, 150)}...</p>
                  <p>
                    <b>Author :</b> {data.author}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </main>
  );
};
export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/blogdata");
  let allBlog = await data.json();
  console.log(allBlog.length);
  const allCount = allBlog.length
  return {
    props: { allBlog, allCount }, // will be passed to the page component as props
  };
}
export default Blog;
