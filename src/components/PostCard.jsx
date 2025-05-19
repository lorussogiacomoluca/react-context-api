import React from "react";
import { NavLink } from "react-router-dom";

const PostCard = ({ id, title, category, body }) => {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <div className="card-title">{title}</div>
        <div className="card-subtitle text-muted">{category}</div>
        <div className="card-body">{body}</div>
        <NavLink to={`/post/${id}`} className="btn-btn-primary">
          Leggi l'articolo
        </NavLink>
      </div>
    </div>
  );
};

export default PostCard;
