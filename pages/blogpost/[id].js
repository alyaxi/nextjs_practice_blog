import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../../styles/blogpost.module.css";
const Route = ({myBlog}) => {
  const [blog, setBlog] = useState(myBlog);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog && blog.title}</h1>
        <hr />
        <div>
          <p>{blog && blog.discription}</p>
          <p><b>Topic: </b>{blog && blog.topic}</p>
          <p>
            <b>Author:</b> {blog && blog.author}
          </p>
        </div>
      </main>
    </div>
  );
};
export async function getServerSideProps({query: {id}}) {
  
  let data = await fetch(`http://localhost:3000/api/blog?slug=${id}`)
  let myBlog = await data.json()
  console.log(myBlog);
  return {
    props: {myBlog}, // will be passed to the page component as props
  }
}
export default Route;
