import React from "react";
import Link from "next/link";
const Card = ({ post }) => {
  return (
    <Link href={`/lists/mylists/${post.id}`}>
      <a>
        <div className="card card-body my-3">
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      </a>
    </Link>
  );
};

export default Card;
